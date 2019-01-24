'use strict';

module.exports = (app) => {
    var products = require('../controllers/pdController');

    app.route('/api/products')
     .get(products.getAllProducts)
     .post(products.addProduct);

    app.route('/api/products/:pdId')
     .get(products.findOneProduct)
     .put(products.updateProduct)
     .delete(products.deleteProduct);
}








