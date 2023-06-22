const createContentService = require("../../services/contenttableservices/createservice");
const customerrorhandle = require("../../utils/customerror");

const createcontent = async (req, res, next) => {
    try {
        const { content1, content2, image1, image2, image3, image4 } = req.body;

        const result = await createContentService.createContent(content1, content2, image1, image2, image3, image4);

        res.json({
            statuscode: 200,
            status: "success",
            message: "Contents and images added to the database",
            data: result,
        });
    } catch (error) {
        console.error(error.message);
        const err = new customerrorhandle(500, error.message);
        next(err);
    }
};

module.exports = createcontent;
