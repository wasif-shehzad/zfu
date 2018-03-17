"use strict";
var Email=require('../helper/mail.js');
var Users= require("../models/users");
var Agents= require("../models/agents");
var async = require('async');
module.exports = {
    sendEmail: function (_DATA) {
        var Emails=[];
        if(_DATA.AllUsers){
            Users.find({},{email:1}).then(function(USERS){
                if(_DATA.AllAgents){
                    Agents.find({},{email:1}).then(function(AGENTS) {
                        if(_DATA.To){
                            Emails.push(_DATA.To);
                        }
                        _DATA.To=USERS.concat(AGENTS);
                        for(var a in _DATA.To){
                            Emails.push(_DATA.To[a].email);
                        }
                        _DATA.To=Emails;
                        Email(_DATA).then(function(data){
                            console.log(data);
                        }).catch(function (err) {
                            console.log(err);

                        });

                    }).catch(function(err){
                        console.log(err);
                    });

                }else{
                    Email(_DATA).then(function(data){
                        console.log(data);
                    }).catch(function (err) {
                        console.log(err);

                    });
            }
            }).catch(function(err){
                console.log(err);
            });
        }
    }
};