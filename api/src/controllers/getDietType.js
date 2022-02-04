const {Diet} = require('../db');

const dietDef= [
    "gluten free",
    "dairy free",
    "paleolithic",
    "ketogenic",
    "lacto ovo vegetarian",
    "vegan",
    "pescatarian",
    "primal",
    "fodmap friendly",
    "whole 30"  
]

const getDietType = async (_req, res) => {
    const allDiets = dietDef.map(async(e) => {
        await Diet.findOrCreate({
            where: {name: e}
        })
    })
    console.log(allDiets)
    const diets = await Diet.findAll()

    if (diets){
        res.json(diets)
    }else{
        res.status(401).send('Diet not found');
    }
}

module.exports = getDietType