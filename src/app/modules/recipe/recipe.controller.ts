import { NextFunction, Request, Response } from 'express'
import { RecipeService } from './recipe.service'

const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = req.body

    const result = await RecipeService.create(user)

    res.status(200).json({
      success: true,
      message: 'Recipe created successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

const getAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await RecipeService.getAll()

    res.status(200).json({
      success: true,
      message: 'Recipe retrieved successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

const getSingleRecipe = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id

    const result = await RecipeService.getSingleRecipe(id)

    res.status(200).json({
      success: true,
      message: 'Recipe retrieved successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

const update = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id

    const updatedData = req.body

    const result = await RecipeService.update(id, updatedData)

    res.status(200).json({
      success: true,
      message: 'Recipe updated successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

export const RecipeController = {
  create,
  getAll,
  getSingleRecipe,
  update,
}
