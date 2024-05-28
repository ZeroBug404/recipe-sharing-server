"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Recipe = void 0;
/* eslint-disable @typescript-eslint/no-this-alias */
const mongoose_1 = require("mongoose");
const RecipeSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    details: {
        type: String,
        required: true,
    },
    videoCode: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    creatorEmail: {
        type: String,
        required: true,
    },
    watchCount: {
        type: Number,
        default: 0,
    },
    purchasedBy: {
        type: [String],
        default: [],
    },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
    versionKey: false,
});
exports.Recipe = (0, mongoose_1.model)('Recipe', RecipeSchema);
