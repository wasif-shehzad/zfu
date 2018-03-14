"use strict";
var Email=require('../helper/mail.js');
module.exports = {
    sendEmail: function (_DATA) {
                Email(_DATA).then(function(data){
console.log(data);
                }).catch(function (err) {
console.log(err);
                });
    }
};