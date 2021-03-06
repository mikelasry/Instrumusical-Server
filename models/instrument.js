const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Instrument = new Schema({
    name: {type: String, required: true},
    brand: {type: String, required: true},
    category: { type: String, required: true},
    imgPath: {type: String, default: ""},
    description: {type: String, default: ""},
    reviews: {type: Array, items:{type:String}},
    quantity: {type:Number, default:1, min:1},
    price: {type:Number, required:true, min:0},
    sold: {type: Number}
});
// declare 'text' index for free text searching
Instrument.index({
    name:"text",
    brand:"text",
    category:"text",
    description:"text"
});
module.exports = mongoose.model("Instrument", Instrument);