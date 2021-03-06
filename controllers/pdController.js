'use strict';

var mongoose = require('mongoose');
var Products = mongoose.model('Products');

exports.getAllProducts = (req, res) => {
    Products.find({}, (err, pd) => {
        if(err) res.send(err);

        res.json(pd);
    });
};

exports.addProduct = (req, res) => {
    var newPd = new Products(req.body);
    newPd.save((err,pd) => {
        if(err) res.send(err);

        res.json(pd);
    });
};

exports.findOneProduct = (req, res) => {
    // find one by product Id(not _id)
    Products.findOne({id: req.params.pdId}, (err, pd) => {
        if(err) res.send(err);

        res.json(pd);
    });
};

exports.updateProduct = (req, res) => {
    Products.updateOne({_id: req.params.pdId}, 
        { "$set": req.body }, {upsert: true, w: 1}, (err, pd) => {
        if(err) res.send(err);

        res.json(pd);
    })
};

exports.deleteProduct = (req, res) => {

    Products.deleteOne({
        _id: req.params.pdId
    }, (err, pd) => {
        if(err) res.send(err);
        
        res.json({ message: 'The product successfully deleted'});
    });
};



