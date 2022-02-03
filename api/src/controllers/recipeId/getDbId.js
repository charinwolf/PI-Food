const { Recipe, Diet } = require('../../db')

const getDbId = async (id) => {
    try {
        const getId = await Recipe.findByPk(id, {
            include: {
                model: Diet,
                attributes: ["name"],
                through: {
                    attributes: [],
                }
            }
        })
    return getId

    } catch (err) {
        console.log(err)
    }
}

module.exports = getDbId