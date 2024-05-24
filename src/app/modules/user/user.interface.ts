export type IUser = {
  save(): unknown
  displayName: string
  photoURL: string
  email: string
  coin: number
  //   adminRef?: Types.ObjectId | IAdmin
}
