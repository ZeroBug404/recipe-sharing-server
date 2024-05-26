/* eslint-disable @typescript-eslint/no-this-alias */
import { Schema, model } from 'mongoose'
import { IUser } from './user.interface'

const UserSchema = new Schema<IUser, Record<string, never>>(
  {
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
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
    versionKey: false,
  }
)

export const User = model<IUser>('User', UserSchema)
