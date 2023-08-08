/* eslint-disable @typescript-eslint/no-unused-vars */
import dotenv from 'dotenv'
import cors from 'cors'
import mongoose from 'mongoose';
import { errors } from '@typegoose/typegoose';
import { productRouter } from './routers/productRouter';
import express from 'express';
import { seedRouter } from './routers/seedRouter';
import { userRouter } from './routers/userRouter';


dotenv.config({ path: '../.env' })
const MONGODB_URI = process.env.MONGODB_URI!
mongoose.set('strictQuery',true);

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log('connected to mongodb')
  })
  .catch(() => {
    console.log('error mongodb'+ errors)
  })

const app= express();

app.use(
    cors({
        credentials:true,
        origin:['http://localhost:5173'],
    })
)

app.use(express.json())
app.use(express.urlencoded({extended:true}));

app.use('/api/products', productRouter)
app.use('/api/users', userRouter)
app.use('/api/seed', seedRouter)

const PORT=4000

app.listen(PORT , () =>{
    console.log(`server started on port ${PORT}`)
})