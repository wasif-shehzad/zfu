"use strict";
    var Agents=require('../models/agents.js');
module.exports = {
    getCount:function () {
        return Agents.count({type:"agent"}).then(function (data) {
            return{
                count:data,
                status:true
            };
        }).catch(function (err) {
            return{
                status:false,
                err:err
            };
        });
    },
    signIn:function (_DATA) {
        return  Agents.findOne({userName:_DATA.userName,password:_DATA.password}).lean()
            .then(function (data) {
                if(data){
                    return {
                        data: data,
                        status:true,
                        code:200
                    };
                }else{
                    return {
                        messge: "agnet not found",
                        status:true,
                        code:400
                    };
                }

            }).catch(function (err) {
                return{
                    status:false,
                    err:err,
                    code:400
                };
            });
    },
    getAll:function () {
        return Agents.find({"adminApproved":true}).then(function (data) {
            return{
                data:data,
                status:true
            };
        }).catch(function (err) {
            return{
                status:false,
                err:err
            };
        });
    },
    pendingAgents:function(){
        return Agents.find({"adminApproved":false,"autoApprove":false}).then(function (data) {
            return{
                data:data,
                status:true
            };
        }).catch(function (err) {
            return{
                status:false,
                err:err
            };
        });
    },
    addAgent:function (_DATA) {
        return Agents.find({email:_DATA.email}).then(function (user) {
            if(user.length>0)
            {
                return {status:false,
                    message:"Agent already exists",
                    code:200
                };
            }else {
              return  Agents.create(_DATA).then(function (data) {
                    return{
                        status:true,
                        message:"agent added Successfully",
                        code:200
                    };
                }).catch(function (err) {
                    return {status:false,
                        message:err,
                        code:404
                    };
                });
            }
        })

    },
    deleteAgentById:function (_DATA) {
        return Agents.remove({AgentId:_DATA.AgentId}).then(function (user) {
                    return{
                        status:true,
                        message:"agent deleted Successfully",
                        code:200
                    };
                }).catch(function (err) {
                    return {status:false,
                        message:err,
                        code:404
                    };
                });
    },
    saveAgent:function (_DATA) {
        return Agents.findOneAndUpdate({AgentId:_DATA.AgentId},{$set:_DATA}).then(function (user) {
            return{
                status:true,
                message:"agent updated Successfully",
                code:200
            };
        }).catch(function (err) {
            return {status:false,
                message:err,
                code:404
            };
        });
    },
    getAllCities:function () {
        return Agents.distinct("city").then(function (data) {
            return{
                data:data,
                status:true
            };
        }).catch(function (err) {
            return{
                status:false,
                err:err
            };
        });
    },
    filterAgents:function (_DATA) {
        return Agents.find(_DATA).then(function (data) {
            return{
                status:true,
                data:data,
                code:200
            };
        }).catch(function (err) {
            return {
                status:false,
                message:err,
                code:404
            };
        });
    },
    getAgent:function (_DATA) {
        return Agents.find({AgentId:_DATA}).then(function (data) {
            return{
                status:true,
                data:data,
                code:200
            };
        }).catch(function (err) {
            return {
                status:false,
                message:err,
                code:404
            };
        });
    }

};