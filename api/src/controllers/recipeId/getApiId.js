const axios = require('axios')
const { URL_ID, URL_ID2 } = require('../../utils/constants')

const getApiId = async (id) => {
    const apiWeb = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=4786cb7da9594b549068c4f4504fdf6f`);

    const e = apiWeb.data
    const obj = {
      
            id: e.id,
            name: e.title,
            summary: e.summary,
            spoonacularScore: e.spoonacularScore,
            healthScore: e.healthScore,
            instructions: e.analyzedInstructions.map(e => e.steps.map(e => e.step)),
            image: e.image, 
            createdInDb: false,
        }
    
    return obj; 

}

module.exports = getApiId