const Users = require("../../models/user")
const customerrorhandle = require("../../utils/customerror")

const update = async (req, res, next) => {
    try {
        const id = req.params.id
        const { username } = req.body
        const user = await Users.findOne({ where: { id } })
        if (!user) {
            const err = new customerrorhandle(400, 'user not found')
            return next(err);
        }
        await user.update({
            username
        })
        res.json({
            statuscode: 200,
            status: "success",
            message: `${user.username} details updated successfully`,
            data: user
        })

    }
    catch (error) {
        console.log(error.message);
        const err = new customerrorhandle(500, error.message)
        next(err);
    }

}
module.exports = update