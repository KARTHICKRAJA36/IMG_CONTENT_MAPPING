const deleteContentService = require("../../services/contenttableservices/deleteservice");
const customerrorhandle = require("../../utils/customerror");

const deleteContent = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await deleteContentService.deleteContent(id);

    res.json({
      status: 'success',
      message: result.message,
    });
  } catch (error) {
    console.error(error);
    const err = new customerrorhandle(500, error.message);
    next(err);
  }
};

module.exports = deleteContent;
