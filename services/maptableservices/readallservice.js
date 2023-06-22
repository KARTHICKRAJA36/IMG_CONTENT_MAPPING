const Users = require("../../models/user");
const Images = require("../../models/image");
const Contents = require("../../models/content");
const Details = require("../../models/details");
const customerrorhandle = require("../../utils/customerror");

const getMaps = async () => {
    try {
        const allData = await Details.findAll({
            attributes: [],
            include: [
                {
                    model: Users,
                    attributes: ["username"],
                },
                {
                    model: Contents,
                    attributes: ["id", "content"],
                    include: [
                        {
                            model: Images,
                            attributes: ["image"],
                        },
                    ],
                },
            ],
        });

        const transformedData = {};

        allData.forEach((data) => {
            const username = data.User.username;
            const content = data.Content.content;
            const imageUrls = data.Content.Images.map((image) => image.image);

            if (!transformedData[username]) {
                transformedData[username] = {
                    username,
                    contents: [],
                };
            }

            transformedData[username].contents.push({
                content,
                images: imageUrls,
            });
        });

        return Object.values(transformedData);
    } catch (error) {
        console.error("Error retrieving map associations:", error);
        throw new customerrorhandle(500, error.message);
    }
};

module.exports = {
    getMaps,
};
