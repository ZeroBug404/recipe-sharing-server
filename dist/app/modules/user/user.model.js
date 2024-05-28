"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
/* eslint-disable @typescript-eslint/no-this-alias */
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    displayName: {
        type: String,
    },
    photoURL: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    coin: {
        type: Number,
        default: 50,
    },
    reacted: {
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
exports.User = (0, mongoose_1.model)('User', UserSchema);
