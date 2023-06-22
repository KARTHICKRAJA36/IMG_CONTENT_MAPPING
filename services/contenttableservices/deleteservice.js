const Images = require('../../models/image');
const Contents = require('../../models/content');
const customerrorhandle = require("../../utils/customerror");

const deleteContent = async (contentId) => {
    try {
        const content = await Contents.findByPk(contentId);
        if (!content) {
            throw new customerrorhandle(400, 'Content not found');
        }

        const images = await Images.findAll({ where: { ContentId: contentId } });

        await Images.destroy({ where: { ContentId: contentId } });
        await content.destroy();

        return {
            message: `Content with ID ${contentId} and related images have been deleted`,
        };
    } catch (error) {
        console.error(error);
        throw new customerrorhandle(500, error.message);
    }
};

module.exports = {
    deleteContent,
};
