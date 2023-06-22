const deleteService = require("../../services/usertableservices/deleteservice");
const customerrorhandle = require("../../utils/customerror");

const deleteuser = async (req, res, next) => {
    try {
        const { id } = req.params;

        const deletedUsername = await deleteService.deleteUser(id);

        res.json({
            statuscode: 200,
            status: "success",
            message: `${deletedUsername} details deleted successfully.`,
        });
    } catch (error) {
        console.error(error.message);
        const err = new customerrorhandle(500, error.message);
        next(err);
    }
};

module.exports = deleteuser;
