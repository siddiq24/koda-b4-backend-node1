const productModel = require('../models/products.model')

/**
 * GET /products
 * @summary Retrieve all products
 * @tags Products
 * @return {object} 200 - Products retrieved successfully
 */
function getAllProducts(req, res) {
    const products = productModel.getAllProducts();
    res.json({
        success: true,
        message: "Products retrieved successfully",
        data: products
    });
}


/**
 * GET /products/{id}
 * @summary Retrieve a product by ID
 * @tags Products
 * @param {string} id.path.required - Product ID
 * @return {object} 200 - Product retrieved successfully
 */
function getProductsById(req, res) {
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
    })
}

/**
 * POST /products
 * @summary Create a new product
 * @tags Products
 * @param {object} request.body.required - New product data
 * @example request - Example new product data
 * {
 *   "name": "Nano nano",
 *   "price": 30.50
 * }
 * @return {object} 201 - Product created successfully
 * @return {object} 400 - Invalid product data
 */
function createNewProduct(req, res) {
    const newProduct = req.body;
    if (!newProduct.name || !newProduct.price) {
        return res.status(400).json({
            success: false,
            message: "Invalid product data"
        });
    }
    const createdProduct = productModel.createProduct(newProduct);
    res.status(201).json({
        success: true,
        message: "Product created successfully",
        data: createdProduct
    });
}

/**
 * PATCH /products/{id}
 * @summary Update a product by ID
 * @tags Products
 * @param {string} id.path.required - Product ID
 * @param {object} request.body.required - Updated product data
 * @example request - Example updated product data
 * {
 *  "name": "Updated Product Name",
 *  "price": 99.99
 * }
 * @return {object} 200 - Product updated successfully
 * @return {object} 400 - Invalid product data
 */
function updateProduct(req, res) {
    const productId = req.params.id;
    const updatedProduct = req.body;

    if (!updatedProduct.name || !updatedProduct.price) {
        return res.status(400).json({
            success: false,
            message: "Invalid product data"
        });
    }

    productModel.updateProduct(productId, updatedProduct);
    res.json({
        success: true,
        message: "Product updated successfully"
    });
}

/**
 * DELETE /products/{id}
 * @summary Delete a product by ID
 * @tags Products
 * @param {string} id.path.required - Product ID
 * @return {object} 200 - Product deleted successfully
 * @return {object} 404 - Product not found
 */
function deleteProduct(req, res) {
    const productId = req.params.id;
    productModel.deleteProduct(productId);
    res.json({
        success: true,
        message: "Product deleted successfully"
    });
}

module.exports = {
    getAllProducts,
    getProductsById,
    createNewProduct,
    updateProduct,
    deleteProduct
}
