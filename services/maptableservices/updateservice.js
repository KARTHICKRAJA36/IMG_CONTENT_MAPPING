const Users = require("../../models/user");
const Details = require("../../models/details");
const customerrorhandle = require("../../utils/customerror");

const updateDetail = async (id, oldContentId, newContentId) => {
    try {
        const isContent = await Details.findAll({ where: { UserId: id } });

        if (!isContent) {
            throw new customerrorhandle(400, "UserId not found.");
        }

        const isExist = await Details.findOne({ where: { UserId: id, ContentId: oldContentId } });

        if (!isExist) {
            throw new customerrorhandle(402, "Content ID you try to update was not associated with that user.");
        }

        const isDuplicate = await Details.findAll({ where: { UserId: id, ContentId: newContentId } })
        if (isDuplicate) {
            throw new customerrorhandle(402, "Content ID you try to update was already associated with that user.");
        }

        const updatedData = await isExist.update({
            ContentId: newContentId,
        });

        return updatedData;
    } catch (error) {
        console.error("Error updating detail:", error);
        throw new customerrorhandle(500, error.message);
    }
};

module.exports = {
    updateDetail,
};
