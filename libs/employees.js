"use strict";
    var Employees=require('../models/employees.js');
module.exports = {
    getCountAll:function () {
        return Employees.count({}).then(function (data) {
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
    getCount:function (_DATA) {
        return Employees.count(_DATA).then(function (data) {
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
        return  Employees.findOne({userName:_DATA.userName,password:_DATA.password}).lean()
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
    getAll:function (_DATA) {
        return Employees.find(_DATA).then(function (data) {
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
    addEmployee:function (_DATA) {
        return Employees.find({email:_DATA.email}).then(function (user) {
            if(user.length>0)
            {
                return {status:false,
                    message:"employee already exists",
                    code:200
                };
            }else {
              return  Employees.create(_DATA).then(function (data) {
                    return{
                        status:true,
                        message:"employee added Successfully",
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
    deleteEmployeeById:function (_DATA) {
        return Employees.remove({EmployeeId:_DATA.EmployeeId}).then(function (user) {
                    return{
                        status:true,
                        message:"employee deleted Successfully",
                        code:200
                    };
                }).catch(function (err) {
                    return {status:false,
                        message:err,
                        code:404
                    };
                });
    },
    saveEmployee:function (_DATA) {
        return Employees.findOneAndUpdate({EmployeeId:_DATA.EmployeeId},{$set:_DATA}).then(function (user) {
            return{
                status:true,
                message:"Employee updated Successfully",
                code:200
            };
        }).catch(function (err) {
            return {status:false,
                message:err,
                code:404
            };
        });
    },
    filterEmployees:function (_DATA) {
        return Employees.find(_DATA).then(function (data) {
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