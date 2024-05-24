import { NextFunction, Request, Response } from 'express'
import { UserService } from './user.service'
const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = req.body

    const result = await UserService.create(user)

    res.status(200).json({
      success: true,
      message: 'User created successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

export const UserController = {
  create,
}
