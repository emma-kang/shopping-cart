'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var productSchema = new Schema({
    "id": {
      "type" : String,
      "unique" : true // unique value is mandatory
    },
    "name" : String,
    "picURL" : String,
    "quantity" : Number,
    "price" : Number,
    "description" : String
    },
    {versionKey : false}
  );

module.exports = mongoose.model('Products', productSchema);
