const multer = require("multer")

const storage = multer.diskStorage({
    destination: "K:/TRAINING/node/IMG_CONT_MAP/uploads",
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

const upload = multer({ storage })

module.exports = upload;