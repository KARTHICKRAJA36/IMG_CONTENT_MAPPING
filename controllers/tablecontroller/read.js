const readService = require("../../services/maptableservices/readservice");
const customerrorhandle = require("../../utils/customerror");

const readparticular = async (req, res, next) => {
  try {
    const { userId } = req.params;
    console.log(userId);

    const transformedData = await readService.getParticularData(userId);

    res.json({
      statuscode: 200,
      status: "success",
      message: "data extracted",
      data: transformedData,
    });
  } catch (error) {
    console.error("Error retrieving map associations:", error);
    const err = new customerrorhandle(500, error.message);
    next(err);
  }
};

module.exports = readparticular;
