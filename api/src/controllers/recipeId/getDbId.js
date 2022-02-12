const { Recipe, Diet } = require('../../db')

const getDbId = async (id) => {
    try {
        if (id.length === 36) {
            const getId = await Recipe.findOne({
              where: {
                id: id,
              },
              include: {
                model: Diet,
              },
            });
            return getId
        }
    } catch (err) {
        console.log(err)
    }
}

module.exports = getDbId