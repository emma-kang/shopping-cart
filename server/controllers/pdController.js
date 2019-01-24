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

exports.updateProduct = () => {
    Products.findOneAndUpdate({id: req.params.pdId}, req.body, {new:true}, (err, pd) =>{
        if(err) res.send(err);

        res.json(pd);
    });
};

exports.deleteProduct = (req, res) => {
    Products.remove({
        _id: req.params.pdId
    }, (err, pd) => {
        if(err) res.send(err);

        res.json({ message: 'The product successfully deleted'});
    });
};

/*
let product;
let db = mongoose.createConnection(process.env.MONGO_URI);

let product;
let db = mongoose.createConnection("mongodb://kh0626:alclsajdrn0626@ds161794.mlab.com:61794/ecommerce", 
    { useNewUrlParser: true,
      useCreateIndex: true, }
);
db.on('error', (err) => {
    console.log(err);
});
db.once('open', () => {
    product = db.model("products", productSchema); // put -s
    console.log('Connected Database');
});

module.exports.selectAllProduct = () => {
    return new Promise((resolve, reject) => {
        product.find({}).sort({ id : 0 }).then((data) => {
            resolve(data);
        }).catch((err) => {
            reject(err);
        })
    })
};

// module.exports.selectOneProduct = (productData) => {
//     return new Promise((resolve, reject) => {
//         product.find({id : productData.id}).exec().then((data) => {
//             resolve(data);
//         }).catch((err) => {
//             reject(err);
//         })
//     })
// };

module.exports.insertProduct = (productData) => {
    return new Promise((resolve, reject) => {
        product.create(productData).then(() => { // without exec()
            resolve();
        }).catch((err) => {
            reject(err);
        })
    })
}

module.exports.updateProduct = (productData) => {
    return new Promise((resolve, reject) => {
        product.updateOne(
            {id : productData.id},
            {$set : 
                {name : productData.name, picURL : productData.picURL, quantity : productData.quantity, price : productData.price,
                description : productData.description}
            }).exec().then(() => {
                resolve();
            }).catch((err) => {
                reject(err);
            })
    })
}

module.exports.deleteProduct = (productData) => {
    return new Promise((resolve, reject) => {
        product.deleteOne({id : productData.id}).exec().then(() => {
            resolve();
        }).catch((err) => {
            reject(err);
        })
    })
}
*/


