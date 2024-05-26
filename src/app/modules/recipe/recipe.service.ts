import { IRecipe } from './recipe.interface'
import { Recipe } from './recipe.model'

const create = async (recipeData: IRecipe): Promise<IRecipe | null> => {
  const { name, image, details, videoCode, country, category, creatorEmail } =
    recipeData

  const recipe = new Recipe({
    name,
    image,
    details,
    videoCode,
    country,
    category,
    creatorEmail,
    watchCount: 0,
    purchasedBy: [],
  })

  const result = await Recipe.create(recipe)

  if (!result) {
    throw new Error('Recipe not created')
  }

  return result
}

const getAll = async (): Promise<IRecipe[]> => {
  const result = await Recipe.find()

  if (!result) {
    throw new Error('Recipe not created')
  }

  return result
}

const getSingleRecipe = async (id: string): Promise<IRecipe | null> => {
  const result = await Recipe.findOne({ _id: id })

  return result
}

const update = async (
  id: string,
  payload: Partial<IRecipe>
): Promise<IRecipe | null> => {
  const result = await Recipe.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  })

  if (!result) {
    throw new Error(`Faild to update recipe`)
  }

  return result
}


export const RecipeService = {
  create,
  getAll,
  getSingleRecipe,
  update,
}
