const {Recipe, Diet} = require('../../db');

const getDbInfo = async () => {
    return await Recipe.findAll({
        include: {
            model: Diet,
        }
    })
}

module.exports = getDbInfo