const mapService = require("../../services/maptableservices/readallservice");
const customerrorhandle = require("../../utils/customerror");

const getMaps = async (req, res, next) => {
  try {
    const transformedData = await mapService.getMaps();

    res.json(transformedData);
  } catch (error) {
    console.error("Error retrieving map associations:", error);
    const err = new customerrorhandle(500, error.message);
    next(err);
  }
};

module.exports = getMaps;
