import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Product from "../models/Product.js";

export const createProduct = async(req,res) =>{
    try{
        const {name,stock,price} = req.body;
        if(!name || !stock || !price){
            return res.status(400).json({message: "Please fill all the fields"})
        }
        const newProduct = new Product({
            name,
            stock,
            price
        })
        await newProduct.save();
        res.status(201).json({message: "Product created successfully", product: newProduct})
    }
    catch(err){
        res.status(500).json({message: "Internal server error"})
    }
    
}
export const getAllProducts = async(req,res) =>{
    try{
        const products = await Product.find();
        res.status(200).json({message: "Products fetched successfully", products})
    }
    catch(err){
        res.status(500).json({message: "Internal server error"})
    }
}
export const getProduct = async(req,res) =>{
    try{
        const {id}= req.params
        const product = await Product.findById(id);
        res.status(201).json({product})
    }
    catch(err){
        res.status(500).json({message: "Internal server error"})
    }
}
export const updateProduct = async(req,res) =>{
    try{
      const {id} = req.params;
      const updates = req.body;
      const updated = await Product.findByIdAndUpdate(id,updates,{new: true},{runValidators: true});
      if(!updated){
          return res.status(404).json({message: "Product not found"})
      }
      res.status(200).json({message: "Product updated successfully", product: updated})
    }
    catch(err){
        res.status(500).json({message: "Internal server error"})
    }
}

export const deleteProduct = async(req,res) =>{
    try{
        const {id} = req.params;
        await Product.findByIdAndDelete(id);
        
        res.status(200).json({message: "Product deleted successfully"})
    }
    catch(err){
        res.status(500).json({message: "Internal server error"})
    }
    }
    export const getLowStockProducts = async(req,res) =>{
        try{
            const lowStockProducts = await Product.find({stock: {$lt: 5}});
            res.status(200).json({message: "Low stock products fetched successfully", products: lowStockProducts})
        }
        catch(err){
            res.status(500).json({message: "Internal server error"})
        }
    }
    