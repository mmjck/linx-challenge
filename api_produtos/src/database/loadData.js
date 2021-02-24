const fs = require('fs');
const ProductSchema = require('../app/models/productSchema');


async function loadDataBase () {
    const filePath = 'src/database/catalog.json';
    const dados = fs.readFileSync(filePath, 'UTF-8');

    const lines = dados.split(/\r?\n/);
    lines.forEach(async (line) => {
        const _ = line.replace(" ", '');
        if (_ != '') {
            const productJson = JSON.parse(_);
            const newProduct = new ProductSchema({ ...productJson });
            await ProductSchema.create(newProduct);
        }

    });
}

module.exports = loadDataBase;
