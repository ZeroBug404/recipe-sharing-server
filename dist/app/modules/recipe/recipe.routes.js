"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeRoutes = void 0;
const express_1 = __importDefault(require("express"));
const recipe_controller_1 = require("./recipe.controller");
const router = express_1.default.Router();
router.post('/create-recipe', recipe_controller_1.RecipeController.create);
router.get('/:id', recipe_controller_1.RecipeController.getSingleRecipe);
router.get('/', recipe_controller_1.RecipeController.getAll);
router.patch('/:id', recipe_controller_1.RecipeController.update);
exports.RecipeRoutes = router;
