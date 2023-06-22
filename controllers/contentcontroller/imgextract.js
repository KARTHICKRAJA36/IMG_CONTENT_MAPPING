const pdfService = require("../../services/pdfservice");
const customerrorhandle = require("../../utils/customerror")

const pdftoimg = async (req, res, next) => {
  const pdfPath = req.file.path;
  const outputDir = "K:/TRAINING/node/IMG_CONT_MAP/images";

  try {
    await pdfService.convertPdfToImages(pdfPath, outputDir);
    res.status(200).json({
      statuscode: 200,
      status: "success",
      message: "Images extracted successfully...",
    });
  } catch (error) {
    console.log("Error while extracting:", error.message);
    const err = new customerrorhandle(500, error.message)
    next(err);
  }
};

module.exports = pdftoimg;
