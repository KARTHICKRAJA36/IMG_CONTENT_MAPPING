const Details = require("../../models/details");
const customerrorhandle = require("../../utils/customerror");

const deleteDetail = async (id, contentId) => {
    try {
        const detail = await Details.findOne({ where: { UserId: id, ContentId: contentId } });

        if (!detail) {
            throw new customerrorhandle(404, "Details not found.");
        }

        await detail.destroy();
    } catch (error) {
        console.error("Error deleting details:", error);
        throw new customerrorhandle(500, error.message);
    }
};

const deleteUserId = async (id) => {
    try {
        const entiredetail = await Details.findAll({ where: { UserId: id } });

        if (!entiredetail || entiredetail.length === 0) {
            throw new customerrorhandle(403, "UserId not found.");
        }

        await Details.destroy({ where: { UserId: id } });
    } catch (error) {
        console.error("Error deleting UserId:", error);
        throw new customerrorhandle(500, error.message);
    }
};

module.exports = {
    deleteDetail,
    deleteUserId,
};
