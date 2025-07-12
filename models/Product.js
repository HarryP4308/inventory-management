import mongoose from "mongoose";

const Product = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    stock :{
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    minimumStock: { type: Number, default: 5 }
},{timestamps: true});

export default mongoose.model('Product', Product);