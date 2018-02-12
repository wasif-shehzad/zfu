var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose);
var Schema = mongoose.Schema;
var employeeSchema = new Schema({
  EmployeeId: {
            type: Number,
            required: true
        },
    name:String,
    firstName:String,
    lastName:String,
    userName:String,
    skills:[],
    autoApprove:{
        type:Boolean,
        default:false
    },
  about:String,
  password:String,
  contact:String,
    city:String,
    town:String,
  website:String,
  email:String,
  type:String,
    posts:Number,
    following:Number,
    followers:Number,
    company:{},
    addedBy:{
        name:{type:String},
        email:{type:String},
        UserId:{type:Number},
        contact:{type:String},
        type:{type:String}
    },

});
employeeSchema.plugin(autoIncrement.plugin, {
        model: 'employees',
        field: 'EmployeeId',
        startAt: 1,
        incrementBy: 1
    });
var employees = mongoose.model('employees',employeeSchema);
module.exports = employees;