"use strict";
    var Users=require('../models/users.js');
module.exports = {
    get: function (_DATA) {
      return  Users.findOne({email:_DATA.userName,password:_DATA.password}).lean()
          .then(function (data) {
              if(data){
                  return {
                      data: data,
                      status:true,
                      code:200
                  };
              }else{
                  return {
                      messge: "user not found",
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
    saveUser:function (_DATA) {
        return  Users.updateOne({UserId:_DATA.UserId},{$set:_DATA.data},{upsert:true})
            .then(function (data) {
                return {
                    message:"user saved successfully",
                    status:true,
                    code:200
                };
            }).catch(function (err) {
                return{
                    status:false,
                    err:err,
                    code:400
                };
            });

    },
    create:function (_DATA) {
        return  Users.create(_DATA)
            .then(function (data) {
                return {
                    message:"user saved successfully",
                    status:true,
                    code:200
                };
            }).catch(function (err) {
                return{
                    status:false,
                    err:err,
                    code:400
                };
            });

    },
    getCount:function () {
        return Users.count({}).then(function (data) {
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
    }

}