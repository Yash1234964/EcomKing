import jwt from 'jsonwebtoken'
import { User } from './models/userModel'
import dotenv from 'dotenv'
dotenv.config({ path: '../.env' })

console.log(process.env.JWT_SECRET)
export const generateToken = (user: User) => {
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    process.env.JWT_SECRET || 'somethingsecret',
    {
      expiresIn: '30d',
    }
  )
}

