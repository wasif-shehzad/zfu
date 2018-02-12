"use strict";
var Properites=require('../models/properties.js');
module.exports = {
    add: function (_Data) {
        return  Properites.create(_Data)
            .then(function (data) {
                return {
                    data: data,
                    status:true
                };
            }).catch(function (err) {
                return{
                    status:false,
                    err:err
                };
            });

    },
    getCount:function () {
        return Properites.count({}).then(function (data) {
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
    getAll:function (_DATA) {
        return Properites.find(_DATA).then(function (data) {
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
    getAllByUser:function(_DATA){
        return Properites.find(_DATA).then(function (data) {
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
    saveProperty:function(_Data){
        return  Properites.findOneAndUpdate({PropertyId:_Data.PropertyId},{$set:_Data})
            .then(function (data) {
                return {
                    data: data,
                    status:true
                };
            }).catch(function (err) {
                return{
                    status:false,
                    err:err
                };
            });
    },
    deleteById:function (_Data) {
        return  Properites.remove({PropertyId:_Data.PropertyId})
            .then(function (data) {
                return {
                    data: data,
                    status:true
                };
            }).catch(function (err) {
                return{
                    status:false,
                    err:err
                };
            });

    },
    filterPropertiesForAgent:function (_DATA) {
        return Properites.find(_DATA).then(function (data) {
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
    pendingAgentProperties:function(_DATA){
        return Properites.find({"adminApproved":false,"addedBy.type":"agent","addedBy.UserId":_DATA.AgentId}).then(function (data) {
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
    pendingProperties:function(){
        return Properites.find({"adminApproved":false}).then(function (data) {
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
    filterProperties:function (_DATA) {
        return Properites.find(_DATA).then(function (data) {
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
    getCountForAgent:function (_DATA) {
        return Properites.count(_DATA).then(function (data) {
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
    getFavouriteProperties:function (_DATA) {
        return Properites.find({PropertyId:{$in:_DATA.data}}).then(function (data) {
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
    filterPropertiesForUser:function (_DATA) {
        _DATA.adminApproved=true;
        return Properites.find(_DATA).then(function (data) {
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
    getUserProperites:function(_DATA){
        return Properites.find({"addedBy.UserId":_DATA.UserId}).then(function (data) {
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
    }


};