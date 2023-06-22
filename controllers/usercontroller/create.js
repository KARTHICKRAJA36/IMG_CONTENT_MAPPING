const createService = require("../../services/usertableservices/createservice");
const customerrorhandle = require("../../utils/customerror");

const create = async (req, res, next) => {
    try {
        const { username, password } = req.body;

        const user = await createService.createUser(username, password);

        res.status(200).json({
            statuscode: 200,
            status: "success",
            message: "user data added",
            data: user,
        });
    } catch (error) {
        console.error(error);
        const err = new customerrorhandle(500, error.message);
        next(err);
    }
};

module.exports = create;
