import { IUser } from './user.interface'
import { User } from './user.model'

const create = async (userData: IUser): Promise<IUser | null> => {
  const { displayName, photoURL, email } = userData

  const user = await User.findOne({ email })

  if (user) {
    throw new Error('User already exists')
  }

  const result = await User.create(userData)

  return result
}

export const UserService = {
  create,
}
