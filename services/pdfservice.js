const pdfpoppler = require('pdf-poppler');

const convertPdfToImages = async (pdfPath, outputDir) => {
  const options = {
    format: "jpeg",
    out_dir: outputDir,
    out_prefix: "image_",
    page: null,
  };

  try {
    await pdfpoppler.convert(pdfPath, options);
    console.log("Images extracted successfully...");
    return true;
  } catch (error) {
    console.log("Error while extracting:", error.message);
    throw new Error("Error extracting images from PDF.");
  }
};

module.exports = {
  convertPdfToImages,
};
