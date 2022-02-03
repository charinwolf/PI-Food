const getApiInfo = require("./getApiInfo");
const getDbInfo = require("./getDbInfo");


const getAllRecipes = async (_req, res) => {
    try {
        const api = await getApiInfo();
        const db = await getDbInfo();

        return res.json(api.concat(db))

    } catch (err) {
        return res.json({
            error: 'Access Denied'
        })

    }
};

module.exports = getAllRecipes