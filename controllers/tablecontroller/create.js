const Details = require("../../models/details")
const customerrorhandle = require("../../utils/customerror")

const createdetails = async (req, res, next) => {
    try {
        const { UserId, ContentId } = req.body
        const createddetail = Details.create({
            UserId,
            ContentId
        })
        res.json({
            statuscode: 200,
            status: "success",
            message: 'created successfully..',
        })
    }
    catch (error) {
        console.log(error.message);
        const err = new customerrorhandle(500, error.message)
        next(err);
    }
}
module.exports = createdetails
