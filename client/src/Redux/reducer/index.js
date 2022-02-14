import { GET_RECIPES, GET_RECIPE_NAME, GET_RECIPE_ID, GET_DIET, POST_RECIPE, FILTER_NAME, FILTER_SCORE, FILTER_DIET } from '../actions/index';

const initialState = {
    recipes: [],
    recipeName: [],
    recipeId: [],
    diet:[],
    postRecipe: null
}

function rootReducer(state= initialState, action){
    switch(action.type){
        case GET_RECIPES:
            return {
                ...state,
                recipes: action.payload
            }
        case GET_RECIPE_NAME:
            return {
                ...state,
                recipeName: action.payload
            }
        case GET_RECIPE_ID:
            return {
                ...state,
                recipeId: action.payload
            }
        case GET_DIET:
            return {
                ...state,
                diet: action.payload                
            }
        case POST_RECIPE:
            return {
                ...state,
                postRecipe: action.payload
            }

        case FILTER_NAME:
            let totalRecipes = action.payload === 'AZ' ? state.recipes.sort(function(a, b){
                if(a.name.toLowerCase() > b.name.toLowerCase()) return 1
                if(a.name.toLowerCase() < b.name.toLowerCase()) return -1
                return 0
            }) :

            state.recipes.sort(function(a, b){
                if(b.name.toLowerCase() > a.name.toLowerCase()) return 1
                if(b.name.toLowerCase() < a.name.toLowerCase()) return -1
                return 0 
            })
            return {
                ...state,
                recipes: totalRecipes
            }
        case FILTER_SCORE:
            let totalScore = action.payload === 'ASC' ? state.recipes.sort(function(a, b){
                if(a.spoonacularScore > b.spoonacularScore) return 1
                if(a.spoonacularScore < b.spoonacularScore) return -1
                return 0
            }) :
            state.recipes.sort(function(a, b){
                if(b.spoonacularScore > a.spoonacularScore) return 1
                if(b.spoonacularScore < a.spoonacularScore) return -1
                return 0
            })
            return {
                ...state,
                recipes: totalScore
            }
        case FILTER_DIET:
            const allRecipes = state.recipes

            let dietFilter = action.payload === 'ALL' ? state.recipes : allRecipes.filter((i) => i.diets.includes(action.payload));
            return {
                ...state,
                recipes: dietFilter
            }

        default: 
        return state
    }    
}

export default rootReducer;