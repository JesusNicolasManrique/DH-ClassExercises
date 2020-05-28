const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
    root: (req, res) => {
        res.render('index', { data: products, toThousand });

    },
    search: (req, res) => {
        let search = req.query.keywords;
        search = search.toUpperCase();
        let filteredProduct = products.filter(product => product.name.toUpperCase().includes(search));
        let productsQuantity = Object.entries(filteredProduct).length;
        res.render('results', { data: filteredProduct, toThousand, productsQuantity });
    },
};

module.exports = controller;