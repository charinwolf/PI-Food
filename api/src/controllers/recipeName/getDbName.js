const {Recipe}= require('../../db');

const getDbName = async (name) => {
    return await Recipe.findAll({
        where: {name: name}
    })
}

module.exports = getDbName