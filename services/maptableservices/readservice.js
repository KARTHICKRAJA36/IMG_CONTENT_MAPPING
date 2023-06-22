const Users = require("../../models/user");
const Images = require("../../models/image");
const Contents = require("../../models/content");
const Details = require("../../models/details");
const customerrorhandle = require("../../utils/customerror");

const getParticularData = async (userId) => {
    try {
        const allData = await Details.findAll({
            attributes: [],
            include: [
                {
                    model: Users,
                    attributes: ["username"],
                    where: { id: userId },
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

        const transformedData = {
            username: allData[0]?.User?.username || "",
            contents: [],
        };

        allData.forEach((data) => {
            const content = data.Content.content;
            const imageUrls = data.Content.Images.map((image) => image.image);

            transformedData.contents.push({
                content,
                images: imageUrls,
            });
        });

        return transformedData;
    } catch (error) {
        console.error("Error retrieving map associations:", error);
        throw new customerrorhandle(500, error.message);
    }
};

module.exports = {
    getParticularData,
};
