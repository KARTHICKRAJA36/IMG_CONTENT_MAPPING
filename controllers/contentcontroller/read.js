const Contents = require('../../models/content');
const Images = require('../../models/image');
const customerrorhandle = require("../../utils/customerror")
const readData = async (req, res, next) => {
  try {
    const { id } = req.params

    const contents = await Contents.findAll({
      where: {
        id: id
      },
      include: Images
    });

    res.json({
      statuscode: 200,
      status: 'success',
      data: contents
    });
  } catch (error) {
    console.error(error);
    const err = new customerrorhandle(500, error.message)
    next(err);
  }
};

module.exports = readData;
