const Contents = require('../../models/content');
const customerrorhandle = require("../../utils/customerror");

const updateContent = async (contentId, newContent) => {
    try {
        const record = await Contents.findByPk(contentId);
        if (!record) {
            throw new customerrorhandle(400, 'Content not found');
        }

        await record.update({ content: newContent });

        return record;
    } catch (error) {
        console.error(error);
        throw new customerrorhandle(500, error.message);
    }
};

module.exports = {
    updateContent,
};
