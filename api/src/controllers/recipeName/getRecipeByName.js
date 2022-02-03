const getApiName = require('./getApiName');
const getDbName = require('./getDbName');

const getRecipeByName = async (req, res) => {
    const name = req.query.name;
    
        if (name) {
            const api = await getApiName(name)
            const db = await getDbName(name)
            const allRecipes = api.concat(db)

            if (allRecipes.length > 0) {
                return res.send(allRecipes)
            } 
            else {
                return res.send('No Recipe')
            }
        }else res.send('Escribe un nombre de una receta')
}

module.exports = getRecipeByName