const updateContentService = require("../../services/contenttableservices/updateservice");
const customerrorhandle = require("../../utils/customerror");

const updateContent = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { content } = req.body;

    const record = await updateContentService.updateContent(id, content);

    res.json({
      statuscode: 200,
      status: 'success',
      message: `Content for id ${id} has been updated`,
      data: record,
    });
  } catch (error) {
    console.log(error.message);
    const err = new customerrorhandle(500, error.message);
    next(err);
  }
};

module.exports = updateContent;
