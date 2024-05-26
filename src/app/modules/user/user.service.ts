import { IUser } from './user.interface'
import { User } from './user.model'

const create = async (userData: IUser): Promise<IUser | null> => {
  const { displayName, photoURL, email } = userData

  const user = await User.findOne({ email })

  if (user) {
    return user;
  }

  const result = await User.create(userData)

  return result
}

const getAll = async (): Promise<IUser[] | null> => {
  const result = await User.find()

  return result
}

const getSingle = async (id: string): Promise<IUser | null> => {
  const result = await User.findOne({ _id: id })

  return result
}

const update = async (
  id: string,
  payload: Partial<IUser>
): Promise<IUser | null> => {
  const result = await User.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  })

  if (!result) {
    throw new Error(`Faild to update user`)
  }

  return result
}

export const UserService = {
  create,
  update,
  getSingle,
  getAll,
}
