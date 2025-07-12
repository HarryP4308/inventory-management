import express from "express";
const router = express.Router();
import { getProduct, getAllProducts,
     createProduct, updateProduct, deleteProduct } from "../controllers/productController.js";


router.get("/", getAllProducts);
router.get("/:id", getProduct);
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id",deleteProduct)

export default router;