const adminLoginService = require("../../services/usertableservices/adminloginservice");
const customerrorhandle = require("../../utils/customerror");

const adminlogin = async (req, res, next) => {
    try {
        const { username, password } = req.body;

        const adminToken = await adminLoginService.adminLogin(username, password);

        res.status(200).json({
            status: "success",
            message: "Admin logged in successfully...",
            adminToken,
        });
    } catch (error) {
        console.error(error.message);
        const err = new customerrorhandle(500, error.message);
        next(err);
    }
};

module.exports = adminlogin;
