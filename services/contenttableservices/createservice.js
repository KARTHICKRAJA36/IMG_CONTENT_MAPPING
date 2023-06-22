const Contents = require('../../models/content');
const Images = require('../../models/image');
const customerrorhandle = require("../../utils/customerror");

const createContent = async (content1, content2, image1, image2, image3, image4) => {
    try {
        const baseUrl = "http://localhost:3300";

        const contentObj1 = await Contents.create({ content: content1 });
        const contentObj2 = await Contents.create({ content: content2 });

        const image1Obj = await Images.create({ image: `${baseUrl}/${image1}`, ContentId: contentObj1.id });
        const image2Obj = await Images.create({ image: `${baseUrl}/${image2}`, ContentId: contentObj1.id });
        const image3Obj = await Images.create({ image: `${baseUrl}/${image3}`, ContentId: contentObj2.id });
        const image4Obj = await Images.create({ image: `${baseUrl}/${image4}`, ContentId: contentObj2.id });

        return {
            contentObj1,
            image1Obj,
            image2Obj,
            contentObj2,
            image3Obj,
            image4Obj,
        };
    } catch (error) {
        console.error(error.message);
        throw new customerrorhandle(500, error.message);
    }
};

module.exports = {
    createContent,
};
