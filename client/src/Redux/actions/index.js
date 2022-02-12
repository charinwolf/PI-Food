import axios from 'axios'

export const GET_RECIPES = 'GET_RECIPES';
export const GET_RECIPE_NAME = 'GET_RECIPE_NAME';
export const GET_RECIPE_ID = 'GET_RECIPE_ID';
export const GET_DIET = 'GET_DIET';
export const POST_RECIPE = 'POST_RECIPE';
export const FILTER_NAME = 'FILTER_NAME';
export const FILTER_SCORE = 'FILTER_SCORE'; 
export const FILTER_DIET = 'FILTER_DIET';




export function getRecipes() {
    return (dispatch) => {
        axios.get("http://localhost:3001/recipes")
            .then(res => {
                dispatch({
                    type: 'GET_RECIPES',
                    payload: res.data
                })
            })
    }
}

export function getRecipeByName(name) {
    return (dispatch) => {
        axios.get(`http://localhost:3001/recipe?name=${name}`)
            .then(res => {
                dispatch({
                    type: 'GET_RECIPE_NAME',
                    payload: res.data

                })
            })
    }
}

export function getRecipeById(id) {
    return (dispatch) => {
        axios.get(`http://localhost:3001/recipe/${id}`)
            .then(res => {
                dispatch({
                    type: 'GET_RECIPE_ID',
                    payload: res.data
                })
            })
    }
}

export function getDiet() {
    return (dispatch) => {
        axios.get(`http://localhost:3001/diet`)
            .then(res => {
                dispatch({
                    type: 'GET_DIET',
                    payload: res.data

                })
            })

    }
}

export function postRecipe(recipe) {
    return (dispatch) => {
        axios.post(`http://localhost:3001/recipe`, recipe)
            .then(res => {
                dispatch({
                    type: 'POST_RECIPE',
                    payload: res.data
                })
            })
    }
}

export function filterName(payload){
    return {
        type: 'FILTER_NAME',
        payload
    }
}

export function filterScore(payload){
    return{
        type: 'FILTER_SCORE',
        payload
    }
}

export function filterDiet(payload){
    return {
        type: 'FILTER_DIET',
        payload

    }
}
