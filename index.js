import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import productRoute from './routes/productRoute.js';
const app = express();
dotenv.config();
app.use(express.json())

app.use('/products', productRoute);

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log('Database connected successfully');
}).catch((err=>{
    console.log('Database connection failed', err);
}))

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
})
