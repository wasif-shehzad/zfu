var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose);
var Schema = mongoose.Schema;
var userSchema = new Schema({
  UserId: {
            type: Number,
            required: true
        },
  name:String,
    firstName:String,
    lastName:String,
    favouriteProperties:[],
  userName:{
     type:String,
      required:true
  },
    drafts:[{
      name:String,
        message:String,
        subject:String,
        files:[]
    }],
    autoApprove:{
      type:Boolean,
        default:false
    },
    image:String,
    city:String,
    town:String,
    skills:[],
  about:String,
  password:String,
  contact:String,
    skype:String,
    facebook:String,
    twitter:String,
    linkedIn:String,
  website:String,
  email:String,
  type:String,
    posts:Number,
    following:Number,
    followers:Number,
    company:{},
    emailSetting:{
        smtpHost:String,
        smtpUser:String,
        smtpPassword:String,
        smtpPort:Number,
        maiPath:String,
        fromUser:String,
        fromEmail:String
    }

});
userSchema.plugin(autoIncrement.plugin, {
        model: 'users',
        field: 'UserId',
        startAt: 1,
        incrementBy: 1
    });
var users = mongoose.model('users',userSchema);
module.exports = users;