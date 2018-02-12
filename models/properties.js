var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose);
var Schema = mongoose.Schema;
var propertySchema = new Schema({
    PropertyId: {
        type: Number,
        required: true
    },
    name: String,
    description: String,
    address: String,
    description: String,
    title: String,
    unit: String,
    expiresAfter: Number,
    views: Number,
    addedBy: {
        name: {type: String},
        email: {type: String},
        UserId: {type: Number},
        contact: {type: String},
        type: {type: String}
    },
    adminApproved: {
        type: Boolean,
        default: false
    }, addedAt: {
        type: Date,
        default: Date.now()
    },
    status: String,
    type: {
        type: {type: String},
        subType: {type: String}
    },
    town: String,
    price: Number,
    area: Number,
    purpose: String,
    city: String,
    images: [],
    location: String,
    features: {}


});
propertySchema.plugin(autoIncrement.plugin, {
    model: 'properties',
    field: 'PropertyId',
    startAt: 1,
    incrementBy: 1
});
var properties = mongoose.model('properties', propertySchema);
module.exports = properties;