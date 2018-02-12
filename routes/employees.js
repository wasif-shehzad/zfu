
"use strict";

var express = require("express");
var router=express.Router();
var Employees =require('../libs/employees.js');


    router.post("/getCount",function (req,res) {
                Employees.getCount(req.body).then(function (data) {
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
        Employees.signIn(data).then(function (data) {
            res.status(200).json(data);
        }).catch(function (err) {
            res.status(400).json(err)
        });
    });
    router.post("/getAll",function (req,res) {
        Employees.getAll(req.body).then(function (data) {
            res.status(200).json(data);
        }).catch(function (err) {
            res.status(400).json(err);
        });
    });

    router.get("/AllCities",function (req,res) {
        Employees.getAllCities().then(function (data) {
            res.status(200).json(data);
        }).catch(function (err) {
            res.status(400).json(err);
        });
    });

    router.post("/saveEmployee",function (req,res) {
        Employees.saveEmployee(req.body).then(function (data) {
            res.status(200).json(data);
        }).catch(function (err) {
            res.status(400).json(err);
        });
    });
    router.put("/addEmployee",function (req,res) {
        Employees.addEmployee(req.body).then(function (data) {
            res.status(200).json(data);
        }).catch(function (err) {
            res.status(400).json(err);
        });
    });
    router.delete("/deleteEmployee",function (req,res) {
        Employees.deleteEmployeeById(req.body).then(function (data) {
            res.status(200).json(data);
        }).catch(function (err) {
            res.status(400).json(err);
        });
    });
    router.post("/filterEmployees",function (req,res) {
        Employees.filterEmployees(req.body).then(function (data) {
            res.status(200).json(data);
        }).catch(function (err) {
            res.status(400).json(err);
        });
    });

module.exports = router;