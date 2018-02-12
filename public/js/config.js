/* ============================================================
 * File: config.js
 * Configure routing
 * ============================================================ */
angular.module('app')
    .config(['$stateProvider', '$urlRouterProvider',

        function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider
                .otherwise('app');
            $stateProvider
                .state('app', {
                    url: "/app",
                    templateUrl: "views/app.html",
                    controller: 'appCtrl'
                })
                .state("app.adminLogin",{
                    url:  '/adminLogin',
                    templateUrl: "views/admin/adminLogin.html",
                    controller:'adminLoginCtrl'
                })
                .state("app.agentLogin",{
                    url:  '/agentLogin',
                    templateUrl: "views/admin/adminLogin.html",
                    controller:'agentLoginCtrl'
                })
                .state('app.admin', {
                    url: '/admin',
                    templateUrl: 'views/admin/dashboard/adminDashboard.html',
                    controller: 'adminDashboardCtrl'

                })
                .state('app.agent', {
                    url: '/agent',
                    templateUrl: 'views/agent/dashboard/agentDashboard.html',
                    controller: 'agentDashboardCtrl'
                })
                .state('app.admin.profile', {
                    url: '/profile',
                    templateUrl: 'views/admin/adminProfile.html',
                    controller: 'adminProfileCtrl'

                })
                .state('app.agent.profile', {
                    url: '/profile',
                    templateUrl: 'views/agent/agentProfile.html',
                    controller: 'agentProfileCtrl'

                })
                .state('app.admin.help', {
                    url: '/help',
                    templateUrl: 'views/help.html',
                    controller: 'helpCtrl'
                })
                .state('app.agent.help', {
                    url: '/help',
                    templateUrl: 'views/help.html',
                    controller: 'helpCtrl'
                })
                .state('app.admin.addProperty', {
                    url: '/addProperty',
                    templateUrl: 'views/admin/property/addProperty.html',
                    controller: 'addPropertyCtrl'
                })
                .state('app.agent.addProperty', {
                    url: '/addProperty',
                    templateUrl: 'views/agent/property/addAgentProperty.html',
                    controller: 'addAgentPropertyCtrl'
                })
                .state('app.admin.editProperty', {
                    url: '/editProperty',
                    templateUrl: 'views/admin/property/editProperty.html',
                    controller: 'editPropertyCtrl'
                })
                .state('app.agent.editProperty', {
                    url: '/editProperty',
                    templateUrl: 'views/agent/property/editAgentProperty.html',
                    controller: 'editAgentPropertyCtrl'
                })
                .state('app.admin.allProperty', {
                    url: '/allProperty',
                    templateUrl: 'views/admin/property/allProperty.html',
                    controller: 'allPropertyCtrl'
                })
                .state('app.agent.allProperty', {
                    url: '/allProperty',
                    templateUrl: 'views/agent/property/allAgentProperty.html',
                    controller: 'allAgentPropertyCtrl'
                })
                .state('app.admin.pendingProperty', {
                    url: '/pendingProperty',
                    templateUrl: 'views/admin/property/pendingProperty.html',
                    controller: 'pendingPropertyCtrl'
                })
                .state('app.agent.pendingProperty', {
                    url: '/pendingProperty',
                    templateUrl: 'views/agent/property/pendingAgentProperty.html',
                    controller: 'pendingAgentPropertyCtrl'
                })
                .state('app.admin.addAgent', {
                url: '/addAgent',
                templateUrl: 'views/admin/agent/addAgent.html',
                controller: 'addAgentCtrl'
            })
                .state('app.admin.allAgent', {
                    url: '/allAgent',
                    templateUrl: 'views/admin/agent/allAgent.html',
                    controller: 'allAgentCtrl'
                })
                .state('app.admin.pendingAgent', {
                    url: '/pendingAgent',
                    templateUrl: 'views/admin/agent/pendingAgent.html',
                    controller: 'pendingAgentCtrl'
                })
                .state('app.admin.composeEmail', {
                    url: '/composeEmail',
                    templateUrl: 'views/admin/email/composeEmail.html',
                    controller: 'composeEmailCtrl'
                })
                .state('app.admin.emailSetting', {
                    url: '/emailSetting',
                    templateUrl: 'views/admin/email/emailSetting.html',
                    controller: 'emailSettingCtrl'
                })
                .state('app.agent.addEmployee', {
                    url: '/addEmployee',
                    templateUrl: 'views/agent/employee/addEmployee.html',
                    controller: 'addEmployeeCtrl'

                })
                .state('app.agent.allEmployee', {
                    url: '/allEmployee',
                    templateUrl: 'views/agent/employee/allEmployee.html',
                    controller: 'allEmployeeCtrl'
                })
                .state("app.user",{
                    url:  '/user',
                    templateUrl: "views/user/dashboard.html",
                    controller:'dashboardCtrl'
                })
                .state("app.user.login",{
                url:  '/login',
                templateUrl: "views/user/login.html",
                controller:'userLoginCtrl'
                })
                .state("app.user.profile",{
                    url:  '/profile',
                    templateUrl: "views/user/profile.html",
                    controller:'userProfileCtrl'
                })
                .state("app.user.myProperties",{
                    url:  '/myProperties',
                    templateUrl: "views/user/myProperties.html",
                    controller:'myPropertiesCtrl'
                })
                .state("app.user.search",{
                    url:  '/search',
                    templateUrl: "views/user/search.html",
                    controller:'searchCtrl'
                })
                .state("app.user.agents",{
                    url:  '/agents',
                    templateUrl: "views/user/agents.html",
                    controller:'agentCtrl'
                })
                 .state("app.user.contact",{
                    url:  '/contact',
                    templateUrl: "views/user/contact.html",
                    controller:'contactCtrl'
                })
                .state("app.user.submitProperty",{
                    url:  '/submitProperty',
                    templateUrl: "views/user/submitProperty.html",
                    controller:'submitPropertyCtrl'
                })
                .state("app.user.saveProperty",{
                    url:  '/saveProperty',
                    templateUrl: "views/user/saveProperty.html",
                    controller:'savePropertyCtrl'
                })
                .state("app.user.property",{
                    url:  '/Property',
                    templateUrl: "views/user/property.html",
                    controller:'propertyCtrl'
                })
                .state("app.user.editProperty",{
                    url:  '/editProperty',
                    templateUrl: "views/user/editProperty.html",
                    controller:'editPropertyCtrl'
                })



            //Question

       }
    ]);
