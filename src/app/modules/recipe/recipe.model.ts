/* eslint-disable @typescript-eslint/no-this-alias */
import { Schema, model } from 'mongoose'
import { IRecipe } from './recipe.interface'

const RecipeSchema = new Schema<IRecipe, Record<string, never>>(
  {
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
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
    versionKey: false,
  }
)

export const Recipe = model<IRecipe>('Recipe', RecipeSchema)
