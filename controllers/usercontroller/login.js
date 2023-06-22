const Users = require('../../models/user')
const bcrypt = require('bcrypt')
const customerrorhandle = require("../../utils/customerror")
const login = async (req, res, next) => {
    try {
        const { username, password } = req.body
        if (!username || !password) {
            const err = new customerrorhandle(400, 'username and password require')
            return next(err);
        }

        const user = await Users.findOne({ where: { username } })
        if (!user) {
            const err = new customerrorhandle(404, 'user not found')
            return next(err);
        }

        const isvalidpassword = await bcrypt.compare(password, user.password);
        if (!isvalidpassword) {
            const err = new customerrorhandle('406', 'invalid password')
            return next(err);
        }

        res.json({
            statuscode: 200,
            status: "success",
            message: `${user.username} logged in now`,
            data: user
        })

    }
    catch (error) {
        console.log(error);
        const err = new customerrorhandle(500, error.message)
        next(err);
    }
}

module.exports = login