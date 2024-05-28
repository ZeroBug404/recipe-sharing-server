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
exports.RecipeController = void 0;
const recipe_service_1 = require("./recipe.service");
const create = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = req.body;
        const result = yield recipe_service_1.RecipeService.create(user);
        res.status(200).json({
            success: true,
            message: 'Recipe created successfully',
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
const getAll = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield recipe_service_1.RecipeService.getAll();
        res.status(200).json({
            success: true,
            message: 'Recipe retrieved successfully',
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
const getSingleRecipe = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const result = yield recipe_service_1.RecipeService.getSingleRecipe(id);
        res.status(200).json({
            success: true,
            message: 'Recipe retrieved successfully',
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
const update = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const result = yield recipe_service_1.RecipeService.update(id, updatedData);
        res.status(200).json({
            success: true,
            message: 'Recipe updated successfully',
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.RecipeController = {
    create,
    getAll,
    getSingleRecipe,
    update,
};
