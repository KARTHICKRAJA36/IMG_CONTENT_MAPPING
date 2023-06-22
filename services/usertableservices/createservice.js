const Users = require("../../models/user");
const bcrypt = require('bcrypt');
const customerrorhandle = require("../../utils/customerror");

const createUser = async (username, password) => {
    try {
        if (!username || !password) {
            throw new customerrorhandle(402, "Username and password required");
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await Users.create({
            username,
            password: hashedPassword,
        });

        return user;
    } catch (error) {
        console.error(error);
        throw new customerrorhandle(500, error.message);
    }
};

module.exports = {
    createUser,
};
