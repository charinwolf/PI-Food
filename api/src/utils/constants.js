require("dotenv").config();
const { API_KEY } = process.env;

const BASE_URL = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100` 
const URL_NAME = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&titleMatch=`
const URL_ID = `https://api.spoonacular.com/recipes/`
const URL_ID2 = `/information?apiKey=${API_KEY}`

module.exports = {
    BASE_URL,
    URL_NAME,
    URL_ID,
    URL_ID2
}