const Images = require("../../models/image")
const fs = require("fs")
const customerrorhandle = require("../../utils/customerror")

const updateImage = async (req, res, next) => {
    const ContentId = req.params.id
    const newFile = req.body.filename
    const oldfile = req.params.filename
    console.log(ContentId);

    try {
        const imagesfolderpath = "K:/TRAINING/node/IMG_CONT_MAP/images"
        const newImagePath = `${imagesfolderpath}/${newFile}`;
        const isImageExists = await fs.promises.access(newImagePath, fs.constants.F_OK)
            .then(() => true)
            .catch(() => false);

        if (!isImageExists) {
            const err = new customerrorhandle(400, 'image you try to add is not imagesfolder')
            return next(err);
        }
        const baseUrl = "http://localhost:3300";
        const imageUrl = `${baseUrl}/${oldfile}`;

        const image = await Images.findOne({
            where: {
                ContentId,
                image: imageUrl
            }
        });

        if (!image) {
            const err = new customerrorhandle(402, "Image not found or not associated with the specified URL")
            return next(err);
        }

        const isDuplicateUrlExists = await Images.findOne({
            where: {
                ContentId,
                image: `${baseUrl}/${newFile}`
            }
        });


        if (isDuplicateUrlExists) {
            const err = new customerrorhandle(404, 'image want to add was already associated with particular content')
            return next(err);
        }

        image.image = `http://localhost:3300/${newFile}`;
        await image.save();

        res.status(200).json({
            message: "Image updated successfully",
            data: image
        });
    }
    catch (error) {
        console.error("Error updating image:", error);
        const err = new customerrorhandle(500, error.message)
        next(err);
    }

}
module.exports = updateImage