const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
    // Root - Show all products
    root: (req, res) => {
        res.render('products', { data: products, toThousand });
    },

    // Detail - Detail from one product
    detail: (req, res) => {
        let productID = req.params.productId;
        let filteredProduct = products.filter(product => product.id == productID);
        res.render('detail', { product: filteredProduct[0], toThousand, title: filteredProduct[0].name });
    },

    // Create - Form to create
    create: (req, res) => {
        res.render('product-create-form');
    },

    // Create -  Method to store
    store: (req, res) => {

        /*const productsSaved =  JSON.parse(fs.readFileSync(productsFilePath, 'utf-8')) ;*/
        res.render('products', { data: productsSaved, toThousand });
    },

    // Update - Form to edit
    edit: (req, res) => {
        let productID = req.params.productId;
        let productToEdit = products.filter(product => product.id == productID);
        console.log(productToEdit);
        res.render('product-edit-form', { product: productToEdit[0], toThousand, title: productToEdit[0].name });
    },
    // Update - Method to update
    update: (req, res) => {
        // Do the magic
    },

    // Delete - Delete one product from DB
    destroy: (req, res) => {
        // Do the magic
    }
};

module.exports = controller;