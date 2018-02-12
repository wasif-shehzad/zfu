var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose);
var Schema = mongoose.Schema;
var agentSchema = new Schema({
  AgentId: {
            type: Number,
            required: true
        },
    name:String,
    firstName:String,
    lastName:String,
    userName:String,
    skills:[],
    adminApproved:{
      type:Boolean,
        default:false
    },
    drafts:{
        name:String,
        message:String,
        subject:String
    },
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
    company:{}

});
agentSchema.plugin(autoIncrement.plugin, {
        model: 'users',
        field: 'AgentId',
        startAt: 1,
        incrementBy: 1
    });
var agents = mongoose.model('agents',agentSchema);
module.exports = agents;