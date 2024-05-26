import express from 'express'
import { RecipeController } from './recipe.controller'
const router = express.Router()

router.post('/create-recipe', RecipeController.create)

router.get('/:id', RecipeController.getSingleRecipe)

router.get('/', RecipeController.getAll)

router.patch('/:id', RecipeController.update)

export const RecipeRoutes = router
