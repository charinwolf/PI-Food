const axios = require('axios')
const { URL_ID, URL_ID2 } = require('../../utils/constants')

const getApiId = async (id) => {
    const apiWeb = await axios.get(URL_ID + id + URL_ID2 );

    let apiData = apiWeb.data
    apiData = [apiData]
    const apiId = await apiData.map((e) => {
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
    return apiId; 

}

module.exports = getApiId