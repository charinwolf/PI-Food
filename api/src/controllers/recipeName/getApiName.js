const axios = require('axios');
const { URL_NAME } = require('../../utils/constants');


const getApiName = async (name) => {
    const apiWeb = await axios.get(URL_NAME + name);

    const apiData = apiWeb.data.results.map(e => {
        return {
            id: e.id,
            name : e.title,
            summary: e.summary,
            spoonacularScore: e.spoonacularScore,
            healthScore: e.healthScore,
            instructions: e.analyzedInstructions.map(e => e.steps.map(e => e.step)),
            image: e.image, 
            diets: e.diets,
            createdInDb: false,

        }
    })
    return apiData
}

module.exports= getApiName