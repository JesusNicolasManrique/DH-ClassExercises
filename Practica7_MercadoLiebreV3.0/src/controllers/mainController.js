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
        const search = req.query.keywords;
        let fiilteredProduct = products.filter(product => product.name.includes(search));
        let productsQuantity = Object.entries(fiilteredProduct).length;
        res.render('results', { data: fiilteredProduct, toThousand, productsQuantity });
    },
};

module.exports = controller;