const Users = require("../../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const customerrorhandle = require("../../utils/customerror");

const adminLogin = async (username, password) => {
    try {
        const admin = await Users.findOne({ where: { username } });

        if (!admin) {
            throw new customerrorhandle(404, "Invalid user.");
        }

        const isPasswordValid = await bcrypt.compare(password, admin.password);

        if (!isPasswordValid) {
            throw new customerrorhandle(400, "Wrong password.");
        }

        const token = jwt.sign({ adminId: admin.id }, 'admin_sceret_key');

        return token;
    } catch (error) {
        console.error("Error during admin login:", error);
        throw new customerrorhandle(500, error.message);
    }
};

module.exports = {
    adminLogin,
};
