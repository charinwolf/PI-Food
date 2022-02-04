const { Router } = require('express');

const getAllRecipes = require('../controllers/allRecipes/getAllRecipes');
const getRecipeByName = require('../controllers/recipeName/getRecipeByName.js');
const getRecipeById = require('../controllers/recipeId/getRecipeById');
const getDietType = require('../controllers/getDietType.js');
const postRecipe = require('../controllers/postRecipe');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/recipes', getAllRecipes);
router.get('/recipe', getRecipeByName);
router.get('/recipe/:idReceta', getRecipeById);
router.get('/diet', getDietType);
router.post('/recipe', postRecipe);



module.exports = router;
