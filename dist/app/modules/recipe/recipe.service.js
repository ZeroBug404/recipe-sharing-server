"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeService = void 0;
const recipe_model_1 = require("./recipe.model");
const create = (recipeData) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, image, details, videoCode, country, category, creatorEmail } = recipeData;
    const recipe = new recipe_model_1.Recipe({
        name,
        image,
        details,
        videoCode,
        country,
        category,
        creatorEmail,
        watchCount: 0,
        purchasedBy: [],
    });
    const result = yield recipe_model_1.Recipe.create(recipe);
    if (!result) {
        throw new Error('Recipe not created');
    }
    return result;
});
const getAll = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield recipe_model_1.Recipe.find();
    if (!result) {
        throw new Error('Recipe not created');
    }
    return result;
});
const getSingleRecipe = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield recipe_model_1.Recipe.findOne({ _id: id });
    return result;
});
const update = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield recipe_model_1.Recipe.findOneAndUpdate({ _id: id }, payload, {
        new: true,
    });
    if (!result) {
        throw new Error(`Faild to update recipe`);
    }
    return result;
});
exports.RecipeService = {
    create,
    getAll,
    getSingleRecipe,
    update,
};
