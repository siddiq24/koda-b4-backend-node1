const productModel = require('../models/products.model');

module.exports = {
    getAllProducts: (req, res) => {
        const products = productModel.getAllProducts();
        res.json({
            success: true,
            message: "Products retrieved successfully",
            data: products
        })
    },
    getProductsById: (req, res) => {
        const productId = req.params.id;
        console.log(productId)
        const product = productModel.getProductById(productId);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.json({
            success: true,
            message: "Product retrieved successfully",
            data: product
        });
    },
    createNewProduct: (req, res) => {
        const newProduct = req.body;
        console.log(newProduct)
        const createdProduct = productModel.createProduct(newProduct);
        res.status(201).json({
            success: true,
            message: "Product created successfully",
            data: createdProduct
        });
    },

    updateProduct: (req, res) => {
        const productId = req.params.id;
        const updatedProduct = req.body;
        productModel.updateProduct(productId, updatedProduct);
        res.json({
            success: true,
            message: "Product updated successfully"
        });
    },

    deleteProduct: (req, res) => {
        const productId = req.params.id;
        productModel.deleteProduct(productId);
        res.json({
            success: true,
            message: "Product deleted successfully"
        });
    },
}