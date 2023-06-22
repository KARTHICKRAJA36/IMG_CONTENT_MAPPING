const Users = require("../../models/user");
const customerrorhandle = require("../../utils/customerror");

const deleteUser = async (id) => {
    try {
        const user = await Users.findByPk(id);

        if (!user) {
            throw new customerrorhandle(404, "User not found.");
        }

        await user.destroy();

        return user.username;
    } catch (error) {
        console.error(error.message);
        throw new customerrorhandle(500, error.message);
    }
};

module.exports = {
    deleteUser,
};
