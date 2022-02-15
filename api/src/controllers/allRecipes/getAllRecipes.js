const getApiInfo = require("./getApiInfo");
const getDbInfo = require("./getDbInfo");


const getAllRecipes = async (_req, res) => {
    try {
        const api = await getApiInfo();
        const db = await getDbInfo();
        const all = api.concat(db)

        return res.status(200).json(all)

    } catch (err) {
        return res.json({
            error: 'Access Denied'
        })

    }
};

module.exports = getAllRecipes