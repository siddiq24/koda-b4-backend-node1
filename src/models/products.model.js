const products = [
    { id: 1, name: "Laptop", price: 999.99 },
    { id: 2, name: "Smartphone", price: 499.99 },
    { id: 3, name: "Tablet", price: 299.99 },
]

module.exports = {
    getAllProducts: () => {
        return products;
    },
    getProductById: (id) => {
        return products.find(product => product.id === parseInt(id));
    },
    createProduct: (product) => {
        products.push({ id: products.length + 1, ...product });
    },
    updateProduct: (id, updatedProduct) => {
        const index = products.findIndex(product => product.id === parseInt(id));
        if (index !== -1) {
            products[index] = { id: products[index].id, ...updatedProduct };
        }
    },
    deleteProduct: (id) => {
        const index = products.findIndex(product => product.id === parseInt(id));
        if (index !== -1) {
            products.splice(index, 1);
        }
    },

};