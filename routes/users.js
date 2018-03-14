
"use strict";

    var express = require("express");
    var router=express.Router();
    var Users =require('../libs/users.js');
    var Agents =require('../libs/agents.js');
    var Employees =require('../libs/employees.js');
    var Properties = require('../libs/properties');

    router.post("/signin", function (req, res) {
        var data={
            userName:req.body.userName,
            password:req.body.password
        };
      Users.get(data).then(function (data) {
            res.status(200).json(data);
        }).catch(function (err) {
            res.status(400).json(err)
        });
    });
    router.post("/signup", function (req, res) {

        Users.create(req.body).then(function (data) {
            res.status(200).json(data);
        }).catch(function (err) {
            res.status(400).json(err)
        });
    });
    router.post("/save", function (req, res) {
        var data={
            UserId:req.body.UserId,
            data:req.body.data
        };
        Users.saveUser(data).then(function (data) {
            res.status(200).json(data);
        }).catch(function (err) {
            res.status(400).json(err)
        });
    });
    router.post("/filterPropertiesForUser", function (req, res) {
        Properties.filterPropertiesForUser(req.body).then(function (data) {
            res.status(200).json(data);
        }).catch(function (err) {
            res.status(400).json(err);
        });
    });
    router.get("/getUserCount",function (req,res) {
        Users.getCount().then(function (data) {
            Agents.getCount().then(function(data1){
                Employees.getCountAll().then(function(data2)
                {
                    res.status(200).json({count:data.count+data1.count+data2.count,status:true});

                });
            });
        }).catch(function (err) {
            res.status(400).json(err);
        });
    });
    router.post("/getUserProperties",function (req,res) {
            Properties.getUserProperites(req.body).then(function(data){
                    res.status(200).json(data);
        }).catch(function (err) {
            res.status(400).json(err);
        });
    });
    router.get("/user/:UserId",function (req,res) {
        Users.getUser({"UserId":req.params.UserId}).then(function(data){
            res.status(200).json(data);
        }).catch(function (err) {
            res.status(400).json(err);
        });
    });

module.exports = router;