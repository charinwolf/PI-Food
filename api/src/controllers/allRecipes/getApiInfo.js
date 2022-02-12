const axios = require('axios');
const { BASE_URL } = require('../../utils/constants');

const getApiInfo = async () => {
    const apiWeb = await axios.get(BASE_URL);
    
    const apiData = apiWeb.data.results.map(e => {
        return {
            id: e.id,
            name: e.title,
            summary: e.summary,
            spoonacularScore: e.spoonacularScore,
            healthScore: e.healthScore,
            instructions: e.analyzedInstructions.map(e => e.steps.map(e => e.step)),
            image: e.image, 
            diets: e.diets,
            createdInDb: false,
        }
    })
    return apiData; 
}
    
module.exports = getApiInfo
