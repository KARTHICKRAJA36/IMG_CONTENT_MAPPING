const detailsService = require("../../services/maptableservices/deleteservice");

const deletedetails = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { ContentId } = req.body;

        await detailsService.deleteDetail(id, ContentId);

        res.json({
            statuscode: 200,
            status: "success",
            message: "contentid and userid deleted successfully.",
        });
    } catch (error) {
        next(error);
    }
};

const deleteUserid = async (req, res, next) => {
    try {
        const { id } = req.params;

        await detailsService.deleteUserId(id);

        res.json({
            statuscode: 200,
            status: "success",
            message: "UserId deleted successfully.",
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    deletedetails,
    deleteUserid,
};
