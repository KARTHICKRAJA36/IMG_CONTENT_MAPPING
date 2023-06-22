const Images = require("../../models/image");
const customerrorhandle = require("../../utils/customerror")

const deleteImage = async (req, res, next) => {

  const filename = req.params.filename;
  const id = req.params.id;
  const baseUrl = "http://localhost:3300";
  const imageUrl = `${baseUrl}/${filename}`;


  try {
    const image = await Images.findOne({
      where: {
        id: id,
        image: imageUrl
      }
    });
    console.log(imageUrl);

    if (!image) {
      const err = new customerrorhandle(400, 'image not in database')
      return next(err);
    }


    await image.destroy();

    res.status(200).json({
      success: "true",
      message: "Image deleted successfully"
    });
  } catch (error) {
    console.log(error.message);
    const err = new customerrorhandle(500, error.message)
    next(err);
  }
};

module.exports = deleteImage;