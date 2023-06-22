const updateService = require("../../services/maptableservices/updateservice");
const customerrorhandle = require("../../utils/customerror");

const updatedetail = async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log(id);
    const { oldcontentid, newcontentid } = req.body;

    const updatedData = await updateService.updateDetail(id, oldcontentid, newcontentid);

    res.status(200).json({
      statuscode: 200,
      status: "success",
      message: "userid updated",
      data: updatedData,
    });
  } catch (error) {
    console.error(error.message);
    const err = new customerrorhandle(500, error.message);
    next(err);
  }
};

module.exports = updatedetail;
