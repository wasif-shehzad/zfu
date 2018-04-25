
"use strict";

var express = require("express");
var router=express.Router();
var Agents =require('../libs/agents.js');


    router.get("/getAgentCount",function (req,res) {
        Agents.getCount().then(function (data) {
            res.status(200).json(data);
        }).catch(function (err) {
            res.status(400).json(err);
        });
    });

    router.get("/pendingAgents",function (req,res) {
        Agents.pendingAgents().then(function (data) {
            res.status(200).json(data);
        }).catch(function (err) {
            res.status(400).json(err);
        });
    });
    router.post("/signin",function (req,res) {
        var data={
            userName:req.body.userName,
            password:req.body.password
        };
        Agents.signIn(data).then(function (data) {
            res.status(200).json(data);
        }).catch(function (err) {
            res.status(400).json(err);
        });
    });
    router.get("/getAll",function (req,res) {
        Agents.getAll().then(function (data) {
            res.status(200).json(data);
        }).catch(function (err) {
            res.status(400).json(err);
        });
    });

    router.get("/AllCities",function (req,res) {
        Agents.getAllCities().then(function (data) {
            res.status(200).json(data);
        }).catch(function (err) {
            res.status(400).json(err);
        });
    });

    router.post("/saveAgent",function (req,res) {
        Agents.saveAgent(req.body).then(function (data) {
            res.status(200).json(data);
        }).catch(function (err) {
            res.status(400).json(err);
        });
    });
    router.put("/addAgent",function (req,res) {
        Agents.addAgent(req.body).then(function (data) {
            res.status(200).json(data);
        }).catch(function (err) {
            res.status(400).json(err);
        });
    });
    router.delete("/deleteAgent",function (req,res) {
        Agents.deleteAgentById(req.body).then(function (data) {
            res.status(200).json(data);
        }).catch(function (err) {
            res.status(400).json(err);
        });
    });
    router.post("/filterAgents",function (req,res) {
        Agents.filterAgents(req.body).then(function (data) {
            res.status(200).json(data);
        }).catch(function (err) {
            res.status(400).json(err);
        });
    });
    router.get("/agent/:agentId",function (req,res) {
        Agents.getAgent(req.params.agentId).then(function (data) {
            res.status(200).json(data);
        }).catch(function (err) {
            res.status(400).json(err);
        });
    });

module.exports = router;