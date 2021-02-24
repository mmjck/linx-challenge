const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    imagesSsl: {},
    skus: [Object],
    apiKey: String,
    description: String,
    type: String,
    auditInfo: Object,
    specs: Object,
    eanCode: String,
    price: Number,
    details: Object,
    remoteUrl: String,
    categories: [Object],
    id: {
        type: String,
        index: true
    },
    stock: String,
    brand: String,
    customBusiness: Object,
    basePrice: String,
    images: Object,
    kitProducts: [],
    created: Date,
    oldPrice: Number,
    published: String,
    version: String,
    url: String,
    tags: [],
    unit: String,
    installment: {
        count: Number,
        price: Number
    },
    name: String,
    clientLastUpdated: Date,
    extraInfo: Object,
    status: String,
    ungroupedId: String
});



const Product = mongoose.model('product', productSchema);
module.exports = Product;
