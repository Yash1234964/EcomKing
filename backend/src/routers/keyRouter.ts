import express from 'express'
import dotenv from 'dotenv'

dotenv.config({ path: '../.env' })

export const keyRouter = express.Router()
// /api/keys/paypal
keyRouter.get('/paypal', (req, res) => {
  res.json({ clientId: process.env.PAYPAL_CLIENT_ID || 'sb' })
})