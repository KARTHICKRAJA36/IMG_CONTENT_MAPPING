const customerrorhandle = require("../../utils/customerror")
const preview = (req, res, next) => {
    try {
        const filename = req.params.filename;
        const imagePath = `K:/TRAINING/node/IMG_CONT_MAP/images/${filename}`;

        res.sendFile(imagePath);
    }
    catch (error) {
        console.log(error);
        const err = new customerrorhandle(500, error.message)
        next(err);
    }
}
module.exports = preview
