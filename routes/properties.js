
"use strict";

var express = require("express");
var router=express.Router();
var properties =require('../libs/properties.js');

    router.put("/addProperty", function (req, res) {
        properties.add(req.body).then(function (data) {
            res.status(200).json(data);
        }).catch(function (err) {
            res.status(400).json(err);
        });
    });
    router.get("/getPropertyCount",function (req,res) {
       properties.getCount().then(function (data) {
           res.status(200).json(data);
       }).catch(function (err) {
           res.status(400).json(err);
       });
    });
    router.post("/getAll",function (req,res) {
        properties.getAll(req.body).then(function (data) {
            res.status(200).json(data);
        }).catch(function (err) {
            res.status(400).json(err);
        });
    });
    router.post("/getAllByAgent",function (req,res) {
        properties.getAllByUser(req.body).then(function (data) {
            res.status(200).json(data);
        }).catch(function (err) {
            res.status(400).json(err);
        });
    });
    router.delete("/deleteProperty",function (req,res) {
        properties.deleteById(req.body).then(function (data) {
            res.status(200).json(data);
        }).catch(function (err) {
            res.status(400).json(err);
        });
    });
    router.post("/saveProperty",function (req,res) {
        properties.saveProperty(req.body).then(function (data) {
            res.status(200).json(data);
        }).catch(function (err) {
            res.status(400).json(err);
        });
    });

    router.post("/filterProperties",function (req,res) {
        properties.filterProperties(req.body).then(function (data) {
            res.status(200).json(data);
        }).catch(function (err) {
            res.status(400).json(err);
        });
    });
    router.get("/pendingProperties",function (req,res) {
        properties.pendingProperties().then(function (data) {
            res.status(200).json(data);
        }).catch(function (err) {
            res.status(400).json(err);
        });
    });
    router.post("/pendingAgentProperties",function (req,res) {
        properties.pendingAgentProperties(req.body).then(function (data) {
            res.status(200).json(data);
        }).catch(function (err) {
            res.status(400).json(err);
        });
    });
    router.post("/filterPropertiesForAgent",function (req,res) {
        properties.filterPropertiesForAgent(req.body).then(function (data) {
            res.status(200).json(data);
        }).catch(function (err) {
            res.status(400).json(err);
        });
    });
    router.post("/getPropertyCountForAgent",function (req,res) {
           properties.getCountForAgent(req.body).then(function (data) {
             res.status(200).json(data);
           }).catch(function (err) {
               res.status(400).json(err);
           });
        });
    router.post("/favouriteProperties",function (req,res) {
           properties.getFavouriteProperties(req.body).then(function (data) {
             res.status(200).json(data);
           }).catch(function (err) {
               res.status(400).json(err);
           });
        });
module.exports = router;