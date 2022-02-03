const getApiId = require("./getApiId");
const getDbId = require("./getDbId");


const getRecipeById = async (req, res) => {
    const {idReceta} = req.params;
    const db = await getDbId(idReceta);
        if (!db){
            const api = await getApiId(idReceta);
            if(api){
                res.send(api)
            }else{
                res.status(404).json({
                    error: 'There is no recipe'
                })
            }
        }else{ 
            res.send(db)
    }
}

module.exports = getRecipeById 
