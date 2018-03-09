
"use strict";

var express = require("express");
var router=express.Router();
var Email =require('../libs/email.js');

router.post("/send", function (req, res) {

    Email.sendEmail().then(function (data) {
        res.status(200).json(data);
    }).catch(function (err) {
        res.status(400).json(err);
    });
});

module.exports = router;