import { NextFunction, Request, Response } from 'express'
import { UserService } from './user.service'


const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = req.body

    const result = await UserService.create(user)
console.log(result);

    res.status(200).json({
      success: true,
      message: 'User created successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

const getAll = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {

    const result = await UserService.getAll()

    res.status(200).json({
      success: true,
      message: 'User retrieved successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}
const getSingle = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id

    const result = await UserService.getSingle(id)

    res.status(200).json({
      success: true,
      message: 'User retrieved successfully',
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
    
    const result = await UserService.update(id, updatedData)

    res.status(200).json({
      success: true,
      message: 'User updated successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

export const UserController = {
  create,
  update,
  getSingle,
  getAll,
}
