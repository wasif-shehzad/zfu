/* ============================================================
 * File: config.js
 * Configure routing
 * ============================================================ */
angular.module('app')
    .config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', '$httpProvider',

        function ($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, $httpProvider) {
            $urlRouterProvider
                .otherwise('app/dashboard');
            $stateProvider
                .state('app', {
                    abstract: true,
                    url: "/app",
                    templateUrl: "tpl/app.html",
                    controller: 'appCtrl'
                })

                .state('app.dashboard', {
                    url: '/dashboard',
                    template: '<div> <dashboard class="full-height"></dashboard> </div>',
                    //templateUrl: 'tpl/dashboard.html',
                    //controller: 'dashboardCtrl',
                    data: {
                        pageTitle: 'ITBoost-Global Dashboard'
                    },
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                    'switchery',
                                    'select',
                                    'moment',
                                    'inputMask',
                                    'autonumeric',
                                    'tagsInput',
                                    'dropzone',
                                    'typehead',
                                    'dataTables'
                                ], {
                                    insertBefore: '#lazyload_placeholder'
                                })
                                .then(function () {
                                    return $ocLazyLoad.load([

                                        'assets/plugins/bootstrap-collapse/bootstrap-tabcollapse.js',
                                        'assets/plugins/pace/pace-theme-flash.css',
                                        'assets/plugins/switchery/css/switchery.min.css',
                                        // 'assets/plugins/codrops-dialogFx/dialog.css',
                                        // 'assets/plugins/codrops-dialogFx/dialog-sandra.css',
                                        'assets/plugins/owl-carousel/assets/owl.carousel.css',
                                        'assets/plugins/jquery-nouislider/jquery.nouislider.css',
                                        'pages/css/widget-market.css',
                                        'pages/css/pages-icons.css',
                                        'assets/plugins/classie/classie.js',
                                        'assets/plugins/switchery/js/switchery.min.js',
                                        'assets/plugins/jquery-metrojs/MetroJs.min.js',
                                        'assets/plugins/moment/moment-with-locales.min.js',
                                        'assets/plugins/imagesloaded/imagesloaded.pkgd.min.js',
                                        'assets/plugins/jquery-isotope/isotope.pkgd.min.js',
                                        //'assets/plugins/codrops-dialogFx/dialogFx.js',
                                        // 'assets/plugins/fuelux/wizard/demo.min.css'
                                        //'assets/plugins/fuelux/spinbox/fuelux.spinbox.js'
                                        'assets/plugins/bootstrap-spinbox/jquery.bootstrap-touchspin.css',
                                        'assets/plugins/bootstrap-spinbox/jquery.bootstrap-touchspin.js',
                                        'assets/plugins/bootstrap-spinbox/jquery.bootstrap-touchspin.js',
                                        'assets/plugins/morris/raphael-2.0.2.min.js',
                                        'assets/plugins/morris/morris.js',
                                        'assets/js/controllers/dashboardCtrl.js',
                                        'assets/plugins/angular-charts/Chart.js',
                                        'assets/plugins/angular-charts/angular-chart.min.js'

                                    ]);
                                });
                        }]
                    }
                })

                .state('app.crashplan', {
                    url: '/crashplan',
                    templateUrl: 'tpl/crashPlan.html',
                    controller: 'crashPlanCtrl',
                    //data: { pageTitle: 'ITBoost-Global Dashboard' },
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                'switchery',
                                'select',
                                'moment',
                                'inputMask',
                                'autonumeric',
                                'tagsInput',
                                'dropzone',
                                'typehead',
                                'dataTables'
                            ], {
                                    insertBefore: '#lazyload_placeholder'
                                })
                                .then(function () {
                                    return $ocLazyLoad.load([

                                        'assets/plugins/bootstrap-collapse/bootstrap-tabcollapse.js',
                                        'assets/plugins/pace/pace-theme-flash.css',
                                        'assets/plugins/switchery/css/switchery.min.css',
                                        'assets/plugins/owl-carousel/assets/owl.carousel.css',
                                        'assets/plugins/jquery-nouislider/jquery.nouislider.css',
                                        'pages/css/widget-market.css',
                                        'pages/css/pages-icons.css',
                                        'assets/plugins/classie/classie.js',
                                        'assets/plugins/switchery/js/switchery.min.js',
                                        'assets/plugins/jquery-metrojs/MetroJs.min.js',
                                        'assets/plugins/moment/moment-with-locales.min.js',
                                        'assets/plugins/imagesloaded/imagesloaded.pkgd.min.js',
                                        'assets/plugins/jquery-isotope/isotope.pkgd.min.js',
                                        'assets/plugins/bootstrap-spinbox/jquery.bootstrap-touchspin.css',
                                        'assets/plugins/bootstrap-spinbox/jquery.bootstrap-touchspin.js',
                                        'assets/plugins/bootstrap-spinbox/jquery.bootstrap-touchspin.js',
                                        'assets/plugins/morris/raphael-2.0.2.min.js',
                                        'assets/plugins/morris/morris.js',
                                        'assets/js/controllers/crashPlanCtrl.js',
                                        'assets/plugins/angular-charts/Chart.js',
                                        'assets/plugins/angular-charts/angular-chart.min.js'

                                    ]);
                                });
                        }]
                    }
                })

                .state('app.tabsettings', {
                    url: '/Tab/Settings',
                    template: '<div> <tab-settings class="full-height"></tab-settings> </div>',
                    data: {
                        pageTitle: 'ITBoost-Tab Settings'
                    },
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                    'switchery',
                                    'select',
                                    'moment',
                                    'inputMask',
                                    'autonumeric',
                                    'tagsInput',
                                    'dropzone',
                                    'typehead',
                                    'tabcollapse',
                                    'dataTables'
                                ], {
                                    insertBefore: '#lazyload_placeholder'
                                })
                                .then(function () {
                                    return $ocLazyLoad.load([

                                        'assets/plugins/bootstrap-collapse/bootstrap-tabcollapse.js',

                                        'assets/plugins/pace/pace-theme-flash.css',
                                        'assets/plugins/switchery/css/switchery.min.css',
                                        // 'assets/plugins/codrops-dialogFx/dialog.css',
                                        // 'assets/plugins/codrops-dialogFx/dialog-sandra.css',
                                        'assets/plugins/owl-carousel/assets/owl.carousel.css',
                                        'assets/plugins/jquery-nouislider/jquery.nouislider.css',
                                        'pages/css/widget-market.css',
                                        'pages/css/pages-icons.css',
                                        'assets/plugins/classie/classie.js',
                                        'assets/plugins/switchery/js/switchery.min.js',
                                        'assets/plugins/jquery-metrojs/MetroJs.min.js',
                                        'assets/plugins/moment/moment-with-locales.min.js',
                                        'assets/plugins/imagesloaded/imagesloaded.pkgd.min.js',
                                        'assets/plugins/jquery-isotope/isotope.pkgd.min.js',
                                        //'assets/plugins/codrops-dialogFx/dialogFx.js',
                                        // 'assets/plugins/fuelux/wizard/demo.min.css'
                                        //'assets/plugins/fuelux/spinbox/fuelux.spinbox.js'
                                        'assets/plugins/bootstrap-spinbox/jquery.bootstrap-touchspin.css',

                                        'assets/plugins/bootstrap-spinbox/jquery.bootstrap-touchspin.js',

                                        'assets/plugins/bootstrap-spinbox/jquery.bootstrap-touchspin.js',
                                        'assets/plugins/morris/raphael-2.0.2.min.js',
                                        'assets/plugins/morris/morris.js',
                                        'assets/js/controllers/dashboardCtrl.js',
                                        'assets/plugins/angular-charts/Chart.js',
                                        'assets/plugins/angular-charts/angular-chart.min.js'

                                    ]);
                                });
                        }]
                    }
                })

                .state('app.companyDashboard', {
                    url: '/companyDashboard',
                    templateUrl: 'tpl/companDashboardNew.html',
                    data: {
                        pageTitle: 'ITBoost-Company Dashboard'
                    },
                    controller: 'companyDashboardCtrl',
                    resolve: {
                        deps: [
                            '$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad.load([
                                    'switchery',
                                    'select',
                                    'moment',
                                    'inputMask',
                                    'autonumeric',
                                    'tagsInput',
                                    'dropzone',
                                    'typehead',
                                    'tabcollapse',
                                    'datepicker',
                                    'dataTables'
                                ], {
                                        insertBefore: '#lazyload_placeholder'
                                    })
                                    .then(function () {
                                        return $ocLazyLoad.load([
                                            'assets/plugins/bootstrap-collapse/bootstrap-tabcollapse.js',
                                            // 'assets/plugins/fuelux/wizard/demo.min.css'
                                            'assets/plugins/morris/raphael-2.0.2.min.js',
                                            'assets/plugins/morris/morris.js',
                                            'assets/plugins/angular-charts/Chart.js',
                                            'assets/plugins/angular-charts/angular-chart.min.js',
                                            'assets/js/controllers/companyDashboardCtrl.js',
                                            'assets/js/moment-timezone-with-data.min.js'

                                        ]);
                                    });
                            }
                        ]

                    }

                })

                .state('app.contactDashboard', {
                    url: '/contactDashboard',
                    templateUrl: 'tpl/contactDashboard.html',
                    data: {
                        pageTitle: 'ITBoost-Contact Dashboard'
                    },
                    controller: 'contactDashboardCtrl',
                    resolve: {
                        deps: [
                            '$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad.load({
                                    serie: true,
                                    files: [
                                        'assets/js/controllers/contactDashboardCtrl.js',
                                        'assets/plugins/bootstrap-collapse/bootstrap-tabcollapse.js',
                                        // 'assets/plugins/fuelux/wizard/demo.min.css'
                                        'assets/plugins/morris/raphael-2.0.2.min.js',
                                        'assets/plugins/morris/morris.js',
                                        'assets/plugins/angular-charts/Chart.js',
                                        'assets/plugins/angular-charts/angular-chart.min.js'
                                    ]
                                });
                            }
                        ]

                    }

                })


                //Domain tracker

                .state('app.domainTracker', {
                    url: '/domainTracker',
                    template: '<div class="full-height" ui-view> </div>',

                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                'datepicker',
                                'daterangepicker',
                                'timepicker',
                                'inputMask',
                                'autonumeric',
                                'wysihtml5',
                                'tagsInput',
                                'dropzone',
                                'typehead',
                                'switchery',
                                'dataTables'
                            ], {
                                    insertBefore: '#lazyload_placeholder'
                                })
                                .then(function () {
                                    return $ocLazyLoad.load([
                                        'assets/js/controllers/domainTrackerCtrl.js'
                                    ]);
                                });
                        }]
                    }
                })

                .state('app.domainTracker.list', {
                    url: '/list',
                    data: {
                        pageTitle: 'ITBoost-Domain Tracker List'
                    },
                    templateUrl: 'tpl/DomainTrackerList.html',
                    controller: 'domainTrackerCtrl',
                })

                .state('app.domainTracker.view', {
                    url: '/view',
                    data: {
                        pageTitle: 'ITBoost-Domain Tracker View'
                    },
                    templateUrl: 'tpl/DomainTracker.html',
                    controller: 'domainTrackerCtrl',
                })

                // SSL ROUTING START HERE

                .state('app.ssl', {
                    url: '/ssl',
                    template: '<div class="full-height" ui-view> </div>',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                    'datepicker',
                                    'daterangepicker',
                                    'timepicker',
                                    'inputMask',
                                    'autonumeric',
                                    'wysihtml5',
                                    'tagsInput',
                                    'dropzone',
                                    'dataTables',
                                    'typehead',
                                    'switchery',
                                    'moment',
                                    'assets/plugins/moment/moment-with-locales.min.js',
                                ], {
                                    insertBefore: '#lazyload_placeholder'
                                })
                                .then(function () {
                                    return $ocLazyLoad.load([
                                        'assets/js/controllers/sslTrackerCtrl.js',
                                        'assets/js/moment-timezone-with-data.min.js'
                                    ]);
                                });
                        }]
                    }
                })
                .state('app.ssl.list', {
                    url: '/sslList',
                    data: {
                        pageTitle: 'ITBoost-SSL Tracker List'
                    },
                    templateUrl: 'tpl/SSLTrackerList.html',
                    controller: 'sslTrackerCtrl'
                })

                .state('app.ssl.add', {
                    url: '/addssl',
                    data: {
                        pageTitle: 'ITBoost-SSL Tracker Add'
                    },
                    templateUrl: 'tpl/AddSSLTracker.html',
                    controller: 'sslTrackerCtrl'
                })

                .state('app.ssl.view', {
                    url: '/viewssl',
                    data: {
                        pageTitle: 'ITBoost-SSL Tracker View'
                    },
                    templateUrl: 'tpl/sslTracker.html',
                    controller: 'sslTrackerCtrl',
                })

                .state('app.ssl.edit', {
                    url: '/editssl',
                    data: {
                        pageTitle: 'ITBoost-SSL Tracker Edit'
                    },
                    templateUrl: 'tpl/EditSSLTracker.html',
                    controller: 'sslTrackerCtrl'
                })

                //Question

                .state('app.survey', {
                    url: '/survey',
                    templateUrl: 'tpl/feedback/survey/survey.html',
                    controller: "surveyCtrl",
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                    'datepicker',
                                    'daterangepicker',
                                    'timepicker',
                                    'inputMask',
                                    'autonumeric',
                                    'wysihtml5',
                                    'tagsInput',
                                    'dataTables',
                                    'dropzone',
                                    'typehead',
                                    'switchery'
                                ], {
                                    insertBefore: '#lazyload_placeholder'
                                })
                                .then(function () {
                                    return $ocLazyLoad.load([
                                        'assets/js/controllers/survey/surveyCtrl.js'

                                    ]);
                                });
                        }]
                    }
                })
                .state('app.survey.list', {
                    url: '/list',
                    data: {
                        pageTitle: 'ITBoost-Survey Template List'
                    },
                    views: {
                        'body': {
                            templateUrl: 'tpl/feedback/survey/surveyList.html'
                        }
                    }

                })
                .state('app.survey.add', {
                    url: '/add',
                    data: {
                        pageTitle: 'ITBoost-Survey Template Add'
                    },
                    views: {
                        'body': {
                            templateUrl: 'tpl/feedback/survey/AddSurvey.html'
                        }
                    }

                })
                .state('app.survey.view', {
                    url: '/view',
                    data: {
                        pageTitle: 'ITBoost-Survey Template View'
                    },
                    views: {
                        'body': {
                            templateUrl: 'tpl/feedback/survey/ViewSurvey.html'
                        }
                    }

                })
                .state('app.survey.edit', {
                    url: '/edit',
                    data: {
                        pageTitle: 'ITBoost-Survey Template Edit'
                    },
                    views: {
                        'body': {
                            templateUrl: 'tpl/feedback/survey/EditSurvey.html'
                        }
                    }


                })

                .state('app.question', {
                    url: '/question',
                    template: '<div class="full-height" ui-view> </div>',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                    'datepicker',
                                    'daterangepicker',
                                    'timepicker',
                                    'inputMask',
                                    'autonumeric',
                                    'wysihtml5',
                                    'tagsInput',
                                    'dropzone',
                                    'typehead',
                                    'switchery'
                                ], {
                                    insertBefore: '#lazyload_placeholder'
                                })
                                .then(function () {
                                    return $ocLazyLoad.load([
                                        'assets/js/controllers/questionCtrl.js'
                                    ]);
                                });
                        }]
                    }
                })

                .state('app.question.list', {
                    url: '/list',
                    templateUrl: 'tpl/questionList.html',
                    data: {
                        pageTitle: 'ITBoost-Question List'
                    },
                    controller: 'questionCtrl'
                })

                .state('app.question.add', {
                    url: '/add',
                    templateUrl: 'tpl/AddQuestion.html',
                    data: {
                        pageTitle: 'ITBoost-Question Add'
                    },
                    controller: 'questionCtrl'
                })

                .state('app.question.view', {
                    url: '/view',
                    templateUrl: 'tpl/ViewQuestion.html',
                    data: {
                        pageTitle: 'ITBoost-Question View'
                    },
                    controller: 'questionCtrl'
                })

                .state('app.question.edit', {
                    url: '/edit',
                    templateUrl: 'tpl/EditQuestion.html',
                    data: {
                        pageTitle: 'ITBoost-Question Edit'
                    },
                    controller: 'questionCtrl'
                })





                /*        .state('app.first', {
                 url: '/first',
                 templateUrl:'tpl/first.html',
                 controller: 'firstPageCtrl',

                 resolve: {
                 deps: [
                 '$ocLazyLoad',
                 function($ocLazyLoad) {
                 return $ocLazyLoad.load({
                 serie: true,
                 files: [
                 'assets/plugins/fuelux/wizard/wizard-custom.js',
                 'assets/plugins/fuelux/wizard/test.js',
                 'assets/plugins/fuelux/wizard/beyond.min.css',
                 'assets/plugins/fuelux/wizard/fuelux.min.css',
                 'assets/js/controllers/first-page.js',
                 'pages/css/styles.css'
                 ]
                 });
                 }
                 ]

                 }

                 })
                 */

                .state('app.first', {
                    url: '/first1',
                    templateUrl: 'tpl/first-1.html',
                    controller: 'Firstlogin1',
                    resolve: {
                        deps: [
                            '$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad.load({
                                    serie: true,
                                    files: [
                                        // 'assets/plugins/fuelux/wizard/wizard-custom.js',
                                        //'assets/plugins/fuelux/wizard/test.js',
                                        //'assets/plugins/fuelux/wizard/beyond.min.css',
                                        'assets/js/controllers/first-page-1.js',
                                        'assets/plugins/fuelux/wizard/fuelux.min.css',
                                        //'pages/css/styles.css'
                                    ]
                                });
                            }
                        ]

                    }

                })


                .state('app.first2', {
                    url: '/first2',
                    templateUrl: 'tpl/first-2.html',
                    controller: 'Firstlogin2',
                    resolve: {
                        deps: [
                            '$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad.load({
                                    serie: true,
                                    files: [
                                        // 'assets/plugins/fuelux/wizard/wizard-custom.js',
                                        //'assets/plugins/fuelux/wizard/test.js',
                                        //'assets/plugins/fuelux/wizard/beyond.min.css',
                                        'assets/js/controllers/first-page-2.js',
                                        'assets/plugins/fuelux/wizard/fuelux.min.css',
                                        //'pages/css/styles.css'
                                    ]
                                });
                            }
                        ]

                    }

                })


                .state('app.first3', {
                    url: '/first3',
                    templateUrl: 'tpl/first-3.html',
                    controller: 'Firstlogin3',
                    resolve: {
                        deps: [
                            '$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad.load({
                                    serie: true,
                                    files: [
                                        // 'assets/plugins/fuelux/wizard/wizard-custom.js',
                                        //'assets/plugins/fuelux/wizard/test.js',
                                        //'assets/plugins/fuelux/wizard/beyond.min.css',
                                        'assets/js/controllers/first-page-3.js',
                                        'assets/plugins/fuelux/wizard/fuelux.min.css',
                                        //'pages/css/styles.css'
                                    ]
                                });
                            }
                        ]

                    }

                })


                .state('app.first4', {
                    url: '/first4',
                    templateUrl: 'tpl/first-4.html',
                    controller: 'Firstlogin4',
                    resolve: {
                        deps: [
                            '$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad.load({
                                    serie: true,
                                    files: [
                                        // 'assets/plugins/fuelux/wizard/wizard-custom.js',
                                        //'assets/plugins/fuelux/wizard/test.js',
                                        //'assets/plugins/fuelux/wizard/beyond.min.css',
                                        'assets/js/controllers/first-page-4.js',
                                        'assets/plugins/fuelux/wizard/fuelux.min.css',
                                        //'pages/css/styles.css'
                                    ]
                                });
                            }
                        ]

                    }

                })

                // Extra - Others
                .state('access', {
                    url: '/access',
                    template: '<div class="full-height" ui-view></div>'
                })
                .state('access.404', {
                    url: '/404',
                    templateUrl: 'tpl/extra_404.html'
                })
                .state('access.500', {
                    url: '/500',
                    templateUrl: 'tpl/extra_500.html'
                })


                .state('access.login', {
                    url: '/login',
                    data: {
                        pageTitle: 'ITBoost-Login'
                    },
                    templateUrl: 'tpl/extra_login.html',
                    controller: 'loginCtrl'
                })
                .state('access.fullscreen', {
                    url: '/fullscreen',
                    templateUrl: 'tpl/FullScreen.html',
                    controller: 'fullScreenCtrl',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                    'datepicker',
                                    'daterangepicker',
                                    'timepicker',
                                    'inputMask',
                                    'autonumeric',
                                    'summernote',
                                    'tagsInput',
                                    'dropzone',
                                    'typehead',
                                    'switchery'
                                ], {
                                    insertBefore: '#lazyload_placeholder'
                                })
                                .then(function () {
                                    return $ocLazyLoad.load([
                                        'assets/js/controllers/dataTables.js',
                                        'assets/js/controllers/fullScreenCtrl.js',
                                        'assets/library/gridstack/dist/gridstack2.css',
                                        'assets/library/gridstack/dist/gridstack-extra.css',
                                        'assets/library/gridstack/files/lodash.min.js',
                                        'assets/library/gridstack/files/knockout-min.js',
                                        'assets/library/gridstack/dist/gridstack.js',
                                        'assets/plugins/bootstrap-collapse/bootstrap-tabcollapse.js',

                                        'assets/plugins/pace/pace-theme-flash.css',
                                        'assets/plugins/switchery/css/switchery.min.css',
                                        // 'assets/plugins/codrops-dialogFx/dialog.css',
                                        // 'assets/plugins/codrops-dialogFx/dialog-sandra.css',
                                        'assets/plugins/owl-carousel/assets/owl.carousel.css',
                                        'assets/plugins/jquery-nouislider/jquery.nouislider.css',
                                        'pages/css/widget-market.css',
                                        'pages/css/pages-icons.css',
                                        'assets/plugins/classie/classie.js',
                                        'assets/plugins/switchery/js/switchery.min.js',
                                        'assets/plugins/jquery-metrojs/MetroJs.min.js',
                                        'assets/plugins/moment/moment-with-locales.min.js',
                                        'assets/plugins/imagesloaded/imagesloaded.pkgd.min.js',
                                        'assets/plugins/jquery-isotope/isotope.pkgd.min.js',
                                        'assets/plugins/bootstrap-spinbox/jquery.bootstrap-touchspin.js',
                                        'assets/plugins/morris/raphael-2.0.2.min.js',
                                        'assets/plugins/morris/morris.js'


                                    ]);
                                });
                        }]
                    }
                })

                .state('access.lock_screen', {
                    url: '/lock_screen',
                    templateUrl: 'tpl/extra_lock_screen.html',
                    controller: 'lockScreenCtrl'
                })
                .state('access.extra', {
                    url: '/extra',
                    template: '<div ui-view></div>'
                })


                .state('access.extra.feedback', {
                    url: '/feedback',
                    templateUrl: 'tpl/feedback/extra_timeline.html',
                    controller: 'loginCtrl'
                })


                .state('access.login2', {
                    url: '/login2',
                    templateUrl: 'tpl/extra_login2.html',
                    controller: 'loginCtrl'
                })
                .state('access.newpassword', {
                    url: '/newpassword/:id',
                    templateUrl: 'tpl/NewUserPassword.html',
                    controller: 'newUserPasswordCtrl',
                    data: { pageTitle: 'ITBoost-Register' },
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                            ], {
                                    insertBefore: '#lazyload_placeholder'
                                })
                                .then(function () {
                                    return $ocLazyLoad.load([
                                        'assets/js/controllers/newUserPasswordCtrl.js',
                                    ]);
                                });
                        }]
                    }
                })
                .state('access.invalidLink', {
                    url: '/invalidLink/:id',
                    templateUrl: 'tpl/error-message.html',
                    controller: 'invalidLinkCtrl',
                    data: { pageTitle: 'ITBoost-Register' },
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                            ], {
                                    insertBefore: '#lazyload_placeholder'
                                })
                                .then(function () {
                                    return $ocLazyLoad.load([
                                        'assets/js/controllers/invalidLinkCtrl.js',
                                    ]);
                                });
                        }]
                    }
                })
                .state('access.register', {
                    url: '/register',
                    templateUrl: 'tpl/Register.html',
                    controller: 'registerCtrl',
                    data: {
                        pageTitle: 'ITBoost-Register'
                    },
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                    'datepicker',
                                    'inputMask',
                                ], {
                                    insertBefore: '#lazyload_placeholder'
                                })
                                .then(function () {
                                    return $ocLazyLoad.load([
                                        'assets/js/controllers/registerCtrl.js',
                                    ]);
                                });
                        }]
                    }
                })

                .state('access.registerThanks', {
                    url: '/registered',
                    templateUrl: 'tpl/registerThanks.html',
                    controller: 'registerCtrl',
                    data: {
                        pageTitle: 'ITBoost-Thanks'
                    },
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                    'datepicker',
                                    'inputMask',
                                ], {
                                    insertBefore: '#lazyload_placeholder'
                                })
                                .then(function () {
                                    return $ocLazyLoad.load([
                                        //'assets/js/controllers/registerCtrl.js',
                                    ]);
                                });
                        }]
                    }
                })

                // COntacts ROUTING START HERE

                .state('app.contact', {
                    url: '/contacts',
                    template: '<div class="full-height" ui-view> </div>',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                    'datepicker',
                                    'daterangepicker',
                                    'timepicker',
                                    'inputMask',
                                    'autonumeric',
                                    'wysihtml5',
                                    'summernote',
                                    'tagsInput',
                                    'dropzone',
                                    'typehead',
                                    'switchery',
                                    'dataTables'
                                ], {
                                    insertBefore: '#lazyload_placeholder'
                                })
                                .then(function () {
                                    return $ocLazyLoad.load([
                                        'assets/js/controllers/contactCtrl.js',
                                        'assets/js/directives2/companyModal.js',
                                    ]);
                                });
                        }]
                    }
                })
                .state('app.contact.contactlist', {
                    url: '/contactList',
                    templateUrl: 'tpl/ContactList.html',
                    data: {
                        pageTitle: 'ITBoost-Contact List'
                    },
                    controller: 'contactCtrl'
                })

                .state('app.contact.addcontact', {
                    url: '/addContact',
                    templateUrl: 'tpl/AddContact.html',
                    data: {
                        pageTitle: 'ITBoost-Contact List'
                    },
                    controller: 'contactCtrl'
                })

                .state('app.contact.viewcontact', {
                    url: '/viewContact',
                    templateUrl: 'tpl/ViewContact.html',
                    data: {
                        pageTitle: 'ITBoost-Contact View'
                    },
                    controller: 'contactCtrl',
                })

                .state('app.contact.editcontact', {
                    url: '/editContact',
                    templateUrl: 'tpl/EditContact.html',
                    data: {
                        pageTitle: 'ITBoost-Contact Edit'
                    },
                    controller: 'contactCtrl'
                })

                // Configurations ROUTING START HERE
                .state('app.configurationlist', {
                    url: '/configurationList',
                    templateUrl: 'tpl/configurationList.html',
                    data: {
                        pageTitle: 'ITBoost-Configuration List'
                    },
                    controller: 'configurationCtrl',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                    'dropzone',
                                    'dataTables'
                                ], {
                                    insertBefore: '#lazyload_placeholder'
                                })
                                .then(function () {
                                    return $ocLazyLoad.load([
                                        'assets/js/controllers/configurationCtrl.js'
                                    ]);
                                });
                        }]
                    }
                })

                .state('app.addconfiguration', {
                    url: '/addConfiguration',
                    templateUrl: 'tpl/AddConfiguration.html',
                    data: {
                        pageTitle: 'ITBoost-Configuration Add'
                    },
                    controller: 'configurationCtrl',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                    'datepicker',
                                    'daterangepicker',
                                    'timepicker',
                                    'inputMask',
                                    'autonumeric',
                                    'wysihtml5',
                                    'summernote',
                                    'tagsInput',
                                    'dropzone',
                                    'typehead',
                                    'switchery'
                                ], {
                                    insertBefore: '#lazyload_placeholder'
                                })
                                .then(function () {
                                    return $ocLazyLoad.load([
                                        'assets/js/controllers/configurationCtrl.js'
                                    ]);
                                });
                        }]
                    }
                })

                .state('app.viewconfiguration', {
                    url: '/viewConfiguration',
                    templateUrl: 'tpl/ViewConfiguration.html',
                    data: {
                        pageTitle: 'ITBoost-Configuration View'
                    },
                    controller: 'configurationCtrl',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                    'datepicker',
                                    'daterangepicker',
                                    'timepicker',
                                    'inputMask',
                                    'autonumeric',
                                    'wysihtml5',
                                    'summernote',
                                    'tagsInput',
                                    'dropzone',
                                    'typehead',
                                    'switchery'
                                ], {
                                    insertBefore: '#lazyload_placeholder'
                                })
                                .then(function () {
                                    return $ocLazyLoad.load([
                                        'assets/js/controllers/dataTables.js',
                                        'assets/js/controllers/configurationCtrl.js'
                                    ]);
                                });
                        }]
                    }
                })

                .state('app.editconfiguration', {
                    url: '/editConfiguration',
                    templateUrl: 'tpl/EditConfiguration.html',
                    controller: 'configurationCtrl',
                    data: {
                        pageTitle: 'ITBoost-Configuration Edit'
                    },
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                    'datepicker',
                                    'daterangepicker',
                                    'timepicker',
                                    'inputMask',
                                    'autonumeric',
                                    'wysihtml5',
                                    'summernote',
                                    'tagsInput',
                                    'dropzone',
                                    'typehead',
                                    'switchery'
                                ], {
                                    insertBefore: '#lazyload_placeholder'
                                })
                                .then(function () {
                                    return $ocLazyLoad.load([
                                        'assets/js/controllers/dataTables.js',
                                        'assets/js/controllers/configurationCtrl.js'
                                    ]);
                                });
                        }]
                    }
                })


                //Users ROUTING START HERE
                .state('app.userlist', {
                    url: '/userlist',
                    templateUrl: 'tpl/UsersList.html',
                    data: {
                        pageTitle: 'ITBoost-Users List'
                    },
                    controller: 'userCtrl1',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                    'dataTables',
                                    'dropzone',
                                    'switchery'
                                ], {
                                    insertBefore: '#lazyload_placeholder'
                                })
                                .then(function () {
                                    return $ocLazyLoad.load([
                                        'assets/js/controllers/dataTables.js',
                                        'assets/js/controllers/UsersCtrl1.js'
                                    ]);
                                });
                        }]
                    }
                })

                .state('app.adduser', {
                    url: '/addUser',
                    templateUrl: 'tpl/AddUsers.html',
                    data: {
                        pageTitle: 'ITBoost-Users Add'
                    },
                    controller: 'userCtrl1',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                    'datepicker',
                                    'daterangepicker',
                                    'timepicker',
                                    'inputMask',
                                    'autonumeric',
                                    'wysihtml5',
                                    'summernote',
                                    'tagsInput',
                                    'dropzone',
                                    'typehead',
                                    'switchery'
                                ], {
                                    insertBefore: '#lazyload_placeholder'
                                })
                                .then(function () {
                                    return $ocLazyLoad.load([
                                        'assets/js/controllers/UsersCtrl1.js'
                                    ]);
                                });
                        }]
                    }
                })

                .state('app.viewuser', {
                    url: '/viewUser',
                    templateUrl: 'tpl/ViewUsers.html',
                    data: {
                        pageTitle: 'ITBoost-Users View'
                    },
                    controller: 'userCtrl1',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                    'datepicker',
                                    'daterangepicker',
                                    'timepicker',
                                    'inputMask',
                                    'autonumeric',
                                    'wysihtml5',
                                    'summernote',
                                    'tagsInput',
                                    'dropzone',
                                    'typehead',
                                    'switchery'
                                ], {
                                    insertBefore: '#lazyload_placeholder'
                                })
                                .then(function () {
                                    return $ocLazyLoad.load([

                                        'assets/js/controllers/UsersCtrl1.js'
                                    ]);
                                });
                        }]
                    }
                })

                .state('app.edituser', {
                    url: '/editUser',
                    templateUrl: 'tpl/EditUsers.html',
                    data: {
                        pageTitle: 'ITBoost-Users Edit'
                    },
                    controller: 'userCtrl1',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                    'datepicker',
                                    'daterangepicker',
                                    'timepicker',
                                    'inputMask',
                                    'autonumeric',
                                    'wysihtml5',
                                    'summernote',
                                    'tagsInput',
                                    'dropzone',
                                    'typehead',
                                    'switchery'
                                ], {
                                    insertBefore: '#lazyload_placeholder'
                                })
                                .then(function () {
                                    return $ocLazyLoad.load([
                                        'assets/js/controllers/UsersCtrl1.js'
                                    ]);
                                });
                        }]
                    }
                })

                .state('app.dragableList', {
                    url: '/dragableList',
                    templateUrl: 'tpl/draggable_headers.html',
                    controller: 'mainController',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([

                                    'switchery',
                                    'dropzone'
                                ], {
                                    insertBefore: '#lazyload_placeholder'
                                })
                                .then(function () {
                                    return $ocLazyLoad.load([
                                        'node_modules/object-table-0.2.2/example/js/example.js'
                                    ]);
                                });
                        }]
                    }
                })

                // Locations ROUTING START HERE
                .state('app.locationlist', {
                    url: '/locationList',
                    templateUrl: 'tpl/LocationList.html',
                    data: {
                        pageTitle: 'ITBoost-Location List'
                    },
                    controller: 'locationCtrl',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                    'switchery',
                                    'dropzone',
                                    'dataTables'
                                ], {
                                    insertBefore: '#lazyload_placeholder'
                                })
                                .then(function () {
                                    return $ocLazyLoad.load([
                                        'assets/js/controllers/locationCtrl.js'
                                    ]);
                                });
                        }]
                    }
                })

                .state('app.addlocation', {
                    url: '/addLocation',
                    templateUrl: 'tpl/AddLocation.html',
                    data: {
                        pageTitle: 'ITBoost-Location Add'
                    },
                    controller: 'locationCtrl',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                    'datepicker',
                                    'daterangepicker',
                                    'timepicker',
                                    'inputMask',
                                    'autonumeric',
                                    'wysihtml5',
                                    'summernote',
                                    'tagsInput',
                                    'dropzone',
                                    'typehead',
                                    'switchery'
                                ], {
                                    insertBefore: '#lazyload_placeholder'
                                })
                                .then(function () {
                                    return $ocLazyLoad.load([
                                        'assets/js/controllers/locationCtrl.js'
                                    ]);
                                });
                        }]
                    }
                })

                .state('app.viewlocation', {
                    url: '/viewLocation',
                    templateUrl: 'tpl/ViewLocation.html',
                    data: {
                        pageTitle: 'ITBoost-Location View'
                    },
                    controller: 'locationCtrl',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                    'datepicker',
                                    'daterangepicker',
                                    'timepicker',
                                    'inputMask',
                                    'autonumeric',
                                    'summernote',
                                    'tagsInput',
                                    'dropzone',
                                    'typehead',
                                    'switchery'
                                ], {
                                    insertBefore: '#lazyload_placeholder'
                                })
                                .then(function () {
                                    return $ocLazyLoad.load([
                                        'assets/js/controllers/dataTables.js',
                                        'assets/js/controllers/locationCtrl.js',
                                        'assets/library/gridstack/dist/gridstack2.css',
                                        'assets/library/gridstack/dist/gridstack-extra.css',
                                        'assets/library/gridstack/files/lodash.min.js',
                                        'assets/library/gridstack/files/knockout-min.js',
                                        'assets/library/gridstack/dist/gridstack.js',
                                        'assets/js/controllers/dashboardCtrl.js',
                                        'assets/plugins/bootstrap-collapse/bootstrap-tabcollapse.js',

                                        'assets/plugins/pace/pace-theme-flash.css',
                                        'assets/plugins/switchery/css/switchery.min.css',
                                        // 'assets/plugins/codrops-dialogFx/dialog.css',
                                        // 'assets/plugins/codrops-dialogFx/dialog-sandra.css',
                                        'assets/plugins/owl-carousel/assets/owl.carousel.css',
                                        'assets/plugins/jquery-nouislider/jquery.nouislider.css',
                                        'pages/css/widget-market.css',
                                        'pages/css/pages-icons.css',
                                        'assets/plugins/classie/classie.js',
                                        'assets/plugins/switchery/js/switchery.min.js',
                                        'assets/plugins/jquery-metrojs/MetroJs.min.js',
                                        'assets/plugins/moment/moment-with-locales.min.js',
                                        'assets/plugins/imagesloaded/imagesloaded.pkgd.min.js',
                                        'assets/plugins/jquery-isotope/isotope.pkgd.min.js',
                                        'assets/plugins/bootstrap-spinbox/jquery.bootstrap-touchspin.js',
                                        'assets/plugins/morris/raphael-2.0.2.min.js',
                                        'assets/plugins/morris/morris.js',
                                        'assets/plugins/angular-charts/Chart.js',
                                        'assets/plugins/angular-charts/angular-chart.min.js'


                                    ]);
                                });
                        }]
                    }
                })
                .state('app.editlocation', {
                    url: '/editLocation',
                    templateUrl: 'tpl/EditLocation.html',
                    data: {
                        pageTitle: 'ITBoost-Location Edit'
                    },
                    controller: 'locationCtrl',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                    'datepicker',
                                    'daterangepicker',
                                    'timepicker',
                                    'inputMask',
                                    'autonumeric',
                                    'wysihtml5',
                                    'summernote',
                                    'tagsInput',
                                    'dropzone',
                                    'typehead',
                                    'switchery'
                                ], {
                                    insertBefore: '#lazyload_placeholder'
                                })
                                .then(function () {
                                    return $ocLazyLoad.load([
                                        'assets/js/controllers/dataTables.js',
                                        'assets/js/controllers/locationCtrl.js'
                                    ]);
                                });
                        }]
                    }
                })

                // Company Password Routing Start Here
                .state('app.passwordlist', {
                    url: '/passwordList',
                    templateUrl: 'tpl/CompanyPasswordList.html',
                    data: {
                        pageTitle: 'ITBoost-Password List'
                    },
                    controller: 'companyPasswordCtrl',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                    'switchery',
                                    'dropzone',
                                    'dataTables'
                                ], {
                                    insertBefore: '#lazyload_placeholder'
                                })
                                .then(function () {
                                    return $ocLazyLoad.load([
                                        'assets/js/controllers/companyPasswordCtrl.js'
                                    ]);
                                });
                        }]
                    }
                })

                .state('app.addPassword', {
                    url: '/addPassword',
                    templateUrl: 'tpl/AddCompanyPassword.html',
                    data: {
                        pageTitle: 'ITBoost-Password Add'
                    },
                    controller: 'companyPasswordCtrl',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                    'datepicker',
                                    'daterangepicker',
                                    'inputMask',
                                    'autonumeric',
                                    'wysihtml5',
                                    'tagsInput',
                                    'dropzone',
                                    'typehead',
                                    'nvd3',
                                    'mapplic',
                                    'rickshaw',
                                    'metrojs',
                                    'sparkline',
                                    'skycons',
                                    'switchery'
                                ], {
                                    insertBefore: '#lazyload_placeholder'
                                })
                                .then(function () {
                                    return $ocLazyLoad.load([
                                        'assets/js/controllers/companyPasswordCtrl.js'
                                    ]);
                                });
                        }]
                    }
                })

                .state('app.editPassword', {
                    url: '/editPassword',
                    templateUrl: 'tpl/EditCompanyPassword.html',
                    data: {
                        pageTitle: 'ITBoost-Password edit'
                    },
                    controller: 'companyPasswordCtrl',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                    'datepicker',
                                    'daterangepicker',
                                    'inputMask',
                                    'autonumeric',
                                    'wysihtml5',
                                    'tagsInput',
                                    'dropzone',
                                    'typehead',
                                    'nvd3',
                                    'mapplic',
                                    'rickshaw',
                                    'metrojs',
                                    'sparkline',
                                    'skycons',
                                    'switchery'
                                ], {
                                    insertBefore: '#lazyload_placeholder'
                                })
                                .then(function () {
                                    return $ocLazyLoad.load([
                                        'assets/js/controllers/companyPasswordCtrl.js'
                                    ]);
                                });
                        }]
                    }
                })

                .state('app.viewPassword', {
                    url: '/viewPassword',
                    templateUrl: 'tpl/ViewCompanyPassword.html',
                    data: {
                        pageTitle: 'ITBoost-Password View'
                    },
                    controller: 'companyPasswordCtrl',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                    'datepicker',
                                    'daterangepicker',
                                    'inputMask',
                                    'autonumeric',
                                    'wysihtml5',
                                    'tagsInput',
                                    'dropzone',
                                    'typehead',
                                    'nvd3',
                                    'mapplic',
                                    'rickshaw',
                                    'metrojs',
                                    'sparkline',
                                    'skycons',
                                    'switchery'
                                ], {
                                    insertBefore: '#lazyload_placeholder'
                                })
                                .then(function () {
                                    return $ocLazyLoad.load([
                                        'assets/js/controllers/companyPasswordCtrl.js'
                                    ]);
                                });
                        }]
                    }
                })
                //Company Password Routing End Here

                // Company Password Routing Start Here
                .state('app.embededPasswordList', {
                    url: '/embededPasswordList',
                    templateUrl: 'tpl/EmbededPasswordList.html',
                    data: {
                        pageTitle: 'ITBoost-Password List'
                    },
                    controller: 'embededPasswordCtrl',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                    'switchery',
                                    'dropzone'
                                ], {
                                    insertBefore: '#lazyload_placeholder'
                                })
                                .then(function () {
                                    return $ocLazyLoad.load([
                                        'assets/js/controllers/embededPasswordCtrl.js'
                                    ]);
                                });
                        }]
                    }
                })
                .state('app.editEmbededPassword', {
                    url: '/editEmbededPassword',
                    templateUrl: 'tpl/EditEmbededPassword.html',
                    data: {
                        pageTitle: 'ITBoost-Password edit'
                    },
                    controller: 'embededPasswordCtrl',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                    'datepicker',
                                    'daterangepicker',
                                    'inputMask',
                                    'autonumeric',
                                    'wysihtml5',
                                    'tagsInput',
                                    'dropzone',
                                    'typehead',
                                    'nvd3',
                                    'mapplic',
                                    'rickshaw',
                                    'metrojs',
                                    'sparkline',
                                    'skycons',
                                    'switchery'
                                ], {
                                    insertBefore: '#lazyload_placeholder'
                                })
                                .then(function () {
                                    return $ocLazyLoad.load([
                                        'assets/js/controllers/embededPasswordCtrl.js'
                                    ]);
                                });
                        }]
                    }
                })
                .state('app.addEmbededPassword', {
                    url: '/addEmbededPassword',
                    templateUrl: 'tpl/AddEmbededPassword.html',
                    data: {
                        pageTitle: 'ITBoost-Password edit'
                    },
                    controller: 'embededPasswordCtrl',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                    'datepicker',
                                    'daterangepicker',
                                    'inputMask',
                                    'autonumeric',
                                    'wysihtml5',
                                    'tagsInput',
                                    'dropzone',
                                    'typehead',
                                    'nvd3',
                                    'mapplic',
                                    'rickshaw',
                                    'metrojs',
                                    'sparkline',
                                    'skycons',
                                    'switchery'
                                ], {
                                    insertBefore: '#lazyload_placeholder'
                                })
                                .then(function () {
                                    return $ocLazyLoad.load([
                                        'assets/js/controllers/embededPasswordCtrl.js'
                                    ]);
                                });
                        }]
                    }
                })
                //Company Password Routing End Here

                // Company  ROUTING START HERE
                .state('app.companylist', {
                    url: '/companyList',
                    templateUrl: 'tpl/CompanyList.html',
                    data: {
                        pageTitle: 'ITBoost-Company List'
                    },
                    controller: 'companyCtrl',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                'dropzone',
                                'dataTables'
                            ], {
                                    insertBefore: '#lazyload_placeholder'
                                })
                                .then(function () {
                                    return $ocLazyLoad.load([
                                        'assets/js/controllers/companyCtrl.js'
                                    ]);
                                });
                        }]
                    }
                })

                .state('app.addcompany', {
                    url: "/addcompany",
                    templateUrl: "tpl/AddCompany.html",
                    data: {
                        pageTitle: 'ITBoost-Company Add'
                    },
                    controller: "companyCtrl",
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                'datepicker',
                                'daterangepicker',
                                'inputMask',
                                'autonumeric',
                                'wysihtml5',
                                'tagsInput',
                                'dropzone',
                                'typehead',
                                'nvd3',
                                'mapplic',
                                'rickshaw',
                                'metrojs',
                                'sparkline',
                                'skycons',
                                'switchery'
                            ], {
                                insertBefore: '#lazyload_placeholder'
                            }).then(function () {
                                return $ocLazyLoad.load([
                                    'assets/js/controllers/companyCtrl.js'
                                ]);
                            });
                        }]
                    }
                })

                .state('app.viewcompany', {
                    url: '/viewcompany',
                    templateUrl: 'tpl/ViewCompany.html',
                    data: {
                        pageTitle: 'ITBoost-Company View'
                    },
                    controller: 'companyCtrl',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                    'datepicker',
                                    'daterangepicker',
                                    'timepicker',
                                    'inputMask',
                                    'autonumeric',
                                    'wysihtml5',
                                    'summernote',
                                    'tagsInput',
                                    'dropzone',
                                    'typehead',
                                    'autonumeric',
                                    'wysihtml5',
                                    'nvd3',
                                    'mapplic',
                                    'rickshaw',
                                    'metrojs',
                                    'sparkline',
                                    'skycons',
                                    'switchery'
                                ], {
                                    insertBefore: '#lazyload_placeholder'
                                })
                                .then(function () {
                                    return $ocLazyLoad.load([
                                        'assets/js/controllers/companyCtrl.js'
                                    ]);
                                });
                        }]
                    }
                })

                .state('app.editcompany', {
                    url: '/editcompany',
                    templateUrl: 'tpl/EditCompany.html',
                    data: {
                        pageTitle: 'ITBoost-Company Edit'
                    },
                    controller: 'companyCtrl',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                    'datepicker',
                                    'daterangepicker',
                                    'timepicker',
                                    'inputMask',
                                    'autonumeric',
                                    'wysihtml5',
                                    'summernote',
                                    'tagsInput',
                                    'dropzone',
                                    'typehead',
                                    'switchery'
                                ], {
                                    insertBefore: '#lazyload_placeholder'
                                })
                                .then(function () {
                                    return $ocLazyLoad.load([
                                        'assets/js/controllers/companyCtrl.js'
                                    ]);
                                });
                        }]
                    }
                })
                //Company Routing End Here
                //Completion Report Routing Start Here
                .state('app.completionreport', {
                    url: '/completionreport',
                    templateUrl: 'tpl/CompletionReport.html',
                    data: {
                        pageTitle: 'ITBoost-Completion Report'
                    },
                    controller: 'completionReportCtrl',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                    'dataTables'
                                ], {
                                    insertBefore: '#lazyload_placeholder'
                                })
                                .then(function () {
                                    return $ocLazyLoad.load([
                                        'assets/js/controllers/completionReportCtrl.js'
                                    ]);
                                });
                        }]
                    }
                })
                //Completion Report Routing End Here

                //Sync Management Routing Start Here
                .state('app.syncmanagement', {
                    url: '/syncmanagement',
                    templateUrl: 'tpl/SyncManagement.html',
                    data: {
                        pageTitle: 'ITBoost-Sync Status Management'
                    },
                    controller: 'syncManagementCtrl',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                    'dataTables'
                                ], {
                                    insertBefore: '#lazyload_placeholder'
                                })
                                .then(function () {
                                    return $ocLazyLoad.load([
                                        'assets/js/controllers/dataTables.js',
                                        'assets/js/controllers/syncManagementCtrl.js',
                                        //'assets/plugins/fuelux/wizard/fuelux.min.css'
                                    ]);
                                });
                        }]
                    }
                })
                //Sync Management Routing End Here
                //Max Record Routing Start Here
                .state('app.maxrecord', {
                    url: '/maxrecord',
                    templateUrl: 'tpl/MaxRecord.html',
                    data: {
                        pageTitle: 'ITBoost-Max Record'
                    },
                    controller: 'maxRecordCtrl',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                    'dataTables'
                                ], {
                                    insertBefore: '#lazyload_placeholder'
                                })
                                .then(function () {
                                    return $ocLazyLoad.load([
                                        'assets/js/controllers/dataTables.js',
                                        'assets/js/controllers/tables.js',
                                        'assets/js/controllers/maxRecordCtrl.js',


                                    ]);
                                });
                        }]
                    }
                })
                //Max Record Routing End Here
                // Clien on Board Routing Start Here
                .state('app.companyonboard', {
                    url: '/companyonboard',
                    templateUrl: 'tpl/ClientOnBoard.html',
                    data: {
                        pageTitle: 'ITBoost-Company On Board'
                    },
                    controller: 'clientOnBoardCtrl',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                    'datepicker',
                                    'daterangepicker',
                                    'inputMask',
                                    'autonumeric',
                                    'wysihtml5',
                                    'tagsInput',
                                    'dropzone',
                                    'typehead',
                                    'nvd3',
                                    'mapplic',
                                    'rickshaw',
                                    'metrojs',
                                    'sparkline',
                                    'skycons',
                                    'switchery'
                                ], {
                                    insertBefore: '#lazyload_placeholder'
                                })
                                .then(function () {
                                    return $ocLazyLoad.load([
                                        'assets/js/controllers/clientOnBoardCtrl.js',
                                    ]);
                                });
                        }]
                    }
                })
                // Clien on Board Routing End Here

                /*   .state('app.updateuserprofile', {
                       url: '/updateuserprofile',
                       templateUrl: 'tpl/UpdateUserProfile.html',
                       data : {pageTitle:'ITBoost-Update User Profile'},
                       controller: 'userCtrl',
                       resolve: {
                           deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                               return $ocLazyLoad.load([
                                       'datepicker',
                                       'daterangepicker',
                                       'timepicker',
                                       'inputMask',
                                       'autonumeric',
                                       'wysihtml5',
                                       'summernote',
                                       'tagsInput',
                                       'dropzone',
                                       'typehead'
                                   ], {
                                       insertBefore: '#lazyload_placeholder'
                                   })
                                   .then(function () {
                                       return $ocLazyLoad.load([
                                           'assets/js/controllers/userCtrl.js'
                                       ]);
                                   });
                           }]
                       }
                   }) */

                //update current user profile
                .state('app.userupdateprofile', {
                    url: '/userupdateprofile',
                    templateUrl: 'tpl/usersUpdateProfile.html',
                    data: {
                        pageTitle: 'ITBoost-Update User Profile'
                    },
                    controller: 'userCtrl1',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                    'datepicker',
                                    'inputMask',
                                    'autonumeric',
                                    'switchery'
                                ], {
                                    insertBefore: '#lazyload_placeholder'
                                })
                                .then(function () {
                                    return $ocLazyLoad.load([
                                        'assets/js/controllers/UsersCtrl1.js'
                                    ]);
                                });
                        }]
                    }
                })


                //MASTER DATA ROUTING START HERE
                .state('app.masterdata', {
                    url: "/masterdata",
                    templateUrl: "tpl/MasterData.html",
                    data: {
                        pageTitle: 'ITBoost-Master Data'
                    },
                    controller: "masterDataCtrl",
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                'datepicker',
                                'daterangepicker',
                                'inputMask',
                                'autonumeric',
                                'wysihtml5',
                                'tagsInput',
                                'dropzone',
                                'typehead',
                                'nvd3',
                                'mapplic',
                                'rickshaw',
                                'metrojs',
                                'sparkline',
                                'skycons',
                                'switchery'
                            ], {
                                insertBefore: '#lazyload_placeholder'
                            }).then(function () {
                                return $ocLazyLoad.load([
                                    'assets/js/controllers/masterDataCtrl.js'
                                ]);
                            });
                        }]
                    }
                })


                //MASTER DATA ROUTING END HERE

                //Syc Status Page Routing Start Here
                .state('app.syncstatuspage', {
                    url: '/syncstatuspage',
                    templateUrl: 'tpl/SyncStatusPage.html',
                    data: {
                        pageTitle: 'ITBoost-Sync Status Page'
                    },
                    controller: 'syncStatusPageCtrl',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                    'nvd3'
                                ], {
                                    insertBefore: '#lazyload_placeholder'
                                })
                                .then(function () {
                                    return $ocLazyLoad.load([

                                        'assets/js/controllers/syncStatusPageCtrl.js'
                                    ]);
                                });
                        }]
                    }
                })
                //SycStatusPage Routing End Here

                //Ticket Widget Routing Start Here
                .state('app.ticketwidget', {
                    url: "/ticketwidget",
                    templateUrl: "tpl/TicketWidget.html",
                    data: {
                        pageTitle: 'ITBoost-Ticket Widget'
                    },
                    controller: "ticketWidgetCtrl",
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                //'pages/css/beyond.css',
                                'assets/plugins/jquery/charts/sparkline/jquery.sparkline.js',


                            ], {
                                insertBefore: '#lazyload_placeholder'
                            }).then(function () {
                                return $ocLazyLoad.load([
                                    'assets/js/controllers/ticketWidgetCtrl.js',

                                ]);
                            });
                        }]
                    }
                })
                // Ticket Widget Routing End Here
                // Ticket Dashboard  Start Here
                .state('app.ticketdashboard', {
                    url: "/ticketdashboard",
                    templateUrl: "tpl/TicketDashboard.html",
                    data: {
                        pageTitle: 'ITBoost-Ticket Dashboard'
                    },
                    controller: "ticketDashboardCtrl",
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                'datepicker',
                                'daterangepicker',
                                'inputMask',
                                'autonumeric',
                                'wysihtml5',
                                'tagsInput',
                                'dropzone',
                                'typehead',
                                'nvd3',
                                'mapplic',
                                'rickshaw',
                                'metrojs',
                                'sparkline',
                                'skycons',
                                'switchery',
                                'dataTables'
                            ], {
                                insertBefore: '#lazyload_placeholder'
                            }).then(function () {
                                return $ocLazyLoad.load([
                                    'assets/js/controllers/ticketDashboardCtrl.js',
                                    'assets/plugins/morris/raphael-2.0.2.min.js',
                                    'assets/plugins/morris/morris.js',
                                ]);
                            });
                        }]
                    }
                })
                // Ticket Dashboard End here

                //Flexible Templates Routing Start Here

                .state('app.flexibletemplates', {
                    url: '/flexibleTemplates',
                    template: '<div class="full-height" ui-view> </div>',
                    resolve: {
                        deps: [
                            '$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad.load([
                                    'switchery',
                                    'assets/plugins/bootstrap-collapse/bootstrap-tabcollapse.js',
                                    'dropzone',
                                    'inputMask',
                                    'dataTables'
                                ], {
                                    insertBefore: '#lazyload_placeholder'
                                }).then(function () {
                                    return $ocLazyLoad.load([
                                        'assets/js/controllers/templatesCtrl.js',
                                    ]);
                                });
                            },
                        ]
                    }
                })

                .state('app.flexibletemplates.list', {
                    url: '/List',
                    templateUrl: 'tpl/flexibleTemplatesList.html',
                    data: {
                        pageTitle: 'ITBoost-Flexible Template List'
                    },
                    controller: 'templatesCtrl'
                })

                .state('app.flexibletemplates.add', {
                    url: '/Add',
                    templateUrl: 'tpl/AddFlexibleTemplate.html',
                    data: {
                        pageTitle: 'ITBoost-Flexible Template Add'
                    },
                    controller: 'templatesCtrl'
                })

                .state('app.flexibletemplates.view', {
                    url: '/View',
                    templateUrl: 'tpl/ViewFlexibleTemplate.html',
                    data: {
                        pageTitle: 'ITBoost-Flexible Template View'
                    },
                    controller: 'templatesCtrl',
                })

                .state('app.flexibletemplates.edit', {
                    url: '/Edit',
                    templateUrl: 'tpl/EditFlexibleTemplate.html',
                    data: {
                        pageTitle: 'ITBoost-Flexible Template Edit'
                    },
                    controller: 'templatesCtrl'
                })

                .state('app.flexibletemplatesdata', {
                    url: '/flexibleTemplatesData',
                    template: '<div class="full-height" ui-view> </div>',
                    resolve: {
                        deps: [
                            '$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad.load([
                                    'dataTables',
                                    'switchery',
                                    'datepicker',
                                    'daterangepicker',
                                    'timepicker',
                                    'inputMask',
                                    'autonumeric',
                                    'wysihtml5',
                                    'summernote',
                                    'tagsInput',
                                    'dropzone',
                                    'typehead',
                                    'assets/plugins/bootstrap-collapse/bootstrap-tabcollapse.js'
                                ], {
                                    insertBefore: '#lazyload_placeholder'
                                }).then(function () {
                                    return $ocLazyLoad.load([
                                        'assets/js/controllers/templateDataCtrl.js'
                                    ]);
                                });
                            },
                        ]

                    }
                })

                .state('app.flexibletemplatesdata.list', {
                    url: '/List',
                    templateUrl: 'tpl/TemplateDataList.html',
                    data: {
                        pageTitle: 'ITBoost-Flexible Template Data List'
                    },
                    controller: 'templateDataCtrl'
                })

                .state('app.flexibletemplatesdata.add', {
                    url: '/Add',
                    templateUrl: 'tpl/TemplateData.html',
                    data: {
                        pageTitle: 'ITBoost-Flexible Template Data Add'
                    },
                    controller: 'templateDataCtrl'
                })

                .state('app.flexibletemplatesdata.view', {
                    url: '/View',
                    templateUrl: 'tpl/TemplateDataView.html',
                    data: {
                        pageTitle: 'ITBoost-Flexible Template Data view'
                    },
                    controller: 'templateDataCtrl'
                })

                .state('app.flexibletemplatesdata.edit', {
                    url: '/Edit',
                    data: {
                        pageTitle: 'ITBoost-Flexible Template Edit'
                    },
                    templateUrl: 'tpl/TemplateDataEdit.html',
                    controller: 'templateDataCtrl'
                })

                //Flexible Templates Routing End Here

                //Runbooks Templates Routing Start Here

                .state('app.runbooks', {
                    url: '/Runbooks',
                    template: '<div class="full-height" ui-view> </div>',
                    resolve: {
                        deps: [
                            '$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad.load([
                                    'switchery',
                                    'dropzone',
                                    'dataTables'
                                ], {
                                    insertBefore: '#lazyload_placeholder'
                                }).then(function () {
                                    return $ocLazyLoad.load([
                                        'assets/js/controllers/dataTables.js',
                                        'assets/js/controllers/runbooksCtrl.js',
                                        'assets/js/controllers/runbooksDataCtrl.js',
                                        'assets/plugins/textboxio-client/textboxio/textboxio.js',
                                        'assets/plugins/textboxio-client/example.css'
                                    ]);
                                });
                            },
                        ]

                    }
                })

                .state('app.treeview', {
                    url: '/treeview',
                    templateUrl: 'tpl/ui_treeview.html',
                    controller: 'TreeCtrl',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                    'navTree'
                                ], {
                                    insertBefore: '#lazyload_placeholder'
                                })
                                .then(function () {
                                    return $ocLazyLoad.load('assets/js/controllers/treeview.js');
                                });
                        }]
                    }
                })

                .state('app.runbooks.list', {
                    url: '/List',
                    templateUrl: 'tpl/runbooksList.html',
                    data: {
                        pageTitle: 'ITBoost-Runbook List'
                    },
                    controller: 'runbooksCtrl'
                })

                .state('app.runbooks.add', {
                    url: '/Add',
                    templateUrl: 'tpl/AddRunbook.html',
                    data: {
                        pageTitle: 'ITBoost-Runbook Add'
                    },
                    controller: 'runbooksCtrl'
                })

                .state('app.runbooks.view', {
                    url: '/View',
                    templateUrl: 'tpl/ViewRunbook.html',
                    data: {
                        pageTitle: 'ITBoost-Runbook View'
                    },
                    controller: 'runbooksCtrl',
                })

                .state('app.runbooks.edit', {
                    url: '/Edit',
                    templateUrl: 'tpl/EditRunbook.html',
                    data: {
                        pageTitle: 'ITBoost-Runbook Edit'
                    },
                    controller: 'runbooksCtrl'
                })

                .state('app.runbooks.data', {
                    url: '/Data',
                    templateUrl: 'tpl/RunbookData.html',
                    data: {
                        pageTitle: 'ITBoost-Runbook Data'
                    },
                    controller: 'runbooksDataCtrl'
                })
                //Runbooks Templates Routing End Here

                //Runbooks Templates Routing Start Here

                .state('app.itbrunbookstemplates', {
                    url: '/ITBRunbooksTemplates',
                    template: '<div class="full-height" ui-view> </div>',
                    resolve: {
                        deps: [
                            '$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad.load([
                                    'dataTables',
                                    'switchery',
                                    'nestable',
                                    'summernote',
                                    'assets/plugins/bootstrap-collapse/bootstrap-tabcollapse.js'
                                ], {
                                    insertBefore: '#lazyload_placeholder'
                                }).then(function () {
                                    return $ocLazyLoad.load([
                                        'assets/js/controllers/dataTables.js',
                                        'assets/js/controllers/ITBRunbooksTemplateCtrl.js',
                                        'assets/js/controllers/runbooksDataCtrl.js',
                                        'assets/plugins/textboxio-client/textboxio/textboxio.js',
                                        'assets/plugins/textboxio-client/example.css'
                                    ]);
                                });
                            },
                        ]

                    }
                })


                .state('app.itbrunbookstemplates.list', {
                    url: '/List',
                    templateUrl: 'tpl/itbRunbooksList.html',
                    data: {
                        pageTitle: 'ITBoost-Runbook library List'
                    },
                    controller: 'ITBRunbooksTemplateCtrl'
                })

                .state('app.itbrunbookstemplates.add', {
                    url: '/Add',
                    templateUrl: 'tpl/AddITBRunbookTemplate.html',
                    data: {
                        pageTitle: 'ITBoost-Runbook library Add'
                    },
                    controller: 'ITBRunbooksTemplateCtrl'
                })

                .state('app.itbrunbookstemplates.view', {
                    url: '/View',
                    templateUrl: 'tpl/ViewITBRunbookTemplate.html',
                    data: {
                        pageTitle: 'ITBoost-Runbook library View'
                    },
                    controller: 'ITBRunbooksTemplateCtrl',
                })

                .state('app.itbrunbookstemplates.edit', {
                    url: '/Edit',
                    templateUrl: 'tpl/EditITBRunbookTemplate.html',
                    data: {
                        pageTitle: 'ITBoost-Runbook library Edit'
                    },
                    controller: 'ITBRunbooksTemplateCtrl'
                })

                //Knowledge Base Routing Start Here



                .state('app.knowledgebase', {
                    url: '/KnowledgeBase',
                    template: '<div class="full-height" ui-view> </div>',
                    resolve: {
                        deps: [
                            '$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad.load([
                                    'dropzone',
                                    'dataTables'
                                ], {
                                    insertBefore: '#lazyload_placeholder'
                                }).then(function () {
                                    return $ocLazyLoad.load([
                                        'assets/js/controllers/knowledgebaseCtrl.js'
                                    ]);
                                });
                            },
                        ]

                    }
                })
                .state('app.knowledgebase.viewPublics', {
                    url: '/ViewKnowledgebasePublic',
                    templateUrl: 'tpl/ViewKnowledgebasePublic.html',
                    data: {
                        pageTitle: 'ITBoost-Knowledgebase View Public'
                    },
                    controller: 'publicKbCtrl'
                })
                .state('app.knowledgebase.list', {
                    url: '/List',
                    templateUrl: 'tpl/companyKnowledgebaseList.html',
                    data: {
                        pageTitle: 'ITBoost-Knowledgebase List'
                    },
                    controller: 'knowledgebaseCtrl'
                })

                .state('app.knowledgebase.knowledgebaseList', {
                    url: '/knowledgebaseList',
                    templateUrl: 'tpl/knowledgebaseList.html',
                    data: {
                        pageTitle: 'ITBoost-Knowledgebase List'
                    },
                    controller: 'knowledgebaseCtrl'
                })

                .state('app.knowledgebase.add', {
                    url: '/Add',
                    templateUrl: 'tpl/AddKnowledgebase.html',
                    data: {
                        pageTitle: 'ITBoost-Knowledgebase Add'
                    },
                    controller: 'knowledgebaseCtrl'
                })

                .state('app.knowledgebase.view', {
                    url: '/View',
                    templateUrl: 'tpl/ViewKnowledgebase.html',
                    data: {
                        pageTitle: 'ITBoost-Knowledgebase View'
                    },
                    controller: 'knowledgebaseCtrl'

                })


                .state('app.knowledgebase.edit', {
                    url: '/Edit',
                    templateUrl: 'tpl/EditKnowledgebase.html',
                    data: {
                        pageTitle: 'ITBoost-Knowledgebase Edit'
                    },
                    controller: 'knowledgebaseCtrl'
                })
                //Knowledge Base Routing End Here

                //ITBKnowledgeTemplate Base Routing Start Here

                .state('app.ITBKnowledgebaseTemplate', {
                    url: '/ITBKnowledgebaseTemplate',
                    template: '<div class="full-height" ui-view> </div>',
                    resolve: {
                        deps: [
                            '$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad.load([
                                    'dropzone',
                                ], {
                                    insertBefore: '#lazyload_placeholder'
                                }).then(function () {
                                    return $ocLazyLoad.load([
                                        'assets/js/controllers/ITBKnowledgebaseTemplateCtrl.js'
                                    ]);
                                });
                            },
                        ]

                    }
                })

                .state('app.ITBKnowledgebaseTemplate.list', {
                    url: '/List',
                    templateUrl: 'tpl/itbKnowledgebaseTemplateList.html',
                    data: {
                        pageTitle: 'ITBoost-Knowledgebase Library List'
                    },
                    controller: 'ITBKnowledgebaseTemplateCtrl'
                })

                .state('app.ITBKnowledgebaseTemplate.add', {
                    url: '/Add',
                    templateUrl: 'tpl/AddITBKnowledgebaseTemplate.html',
                    data: {
                        pageTitle: 'ITBoost-Knowledgebase Library Add'
                    },
                    controller: 'ITBKnowledgebaseTemplateCtrl'
                })

                .state('app.ITBKnowledgebaseTemplate.view', {
                    url: '/View',
                    templateUrl: 'tpl/ViewITBKnowledgebaseTemplate.html',
                    data: {
                        pageTitle: 'ITBoost-Knowledgebase Library View'
                    },
                    controller: 'ITBKnowledgebaseTemplateCtrl'
                })

                .state('app.ITBKnowledgebaseTemplate.edit', {
                    url: '/Edit',
                    templateUrl: 'tpl/EditITBKnowledgebaseTemplate.html',
                    data: {
                        pageTitle: 'ITBoost-Knowledgebase Library Edit'
                    },
                    controller: 'ITBKnowledgebaseTemplateCtrl'
                })
                //Knowledge Base Routing End Here

                //usermenu Routing Start Here
                .state('app.editusermenu', {
                    url: '/editUsermenu',
                    templateUrl: 'tpl/ui_nestable3.html',
                    data: {
                        pageTitle: 'ITBoost-Edit User Menu'
                    },
                    controller: 'userMenuCtrl',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                    'nestable'
                                ], {
                                    insertBefore: '#lazyload_placeholder'
                                })
                                .then(function () {
                                    return $ocLazyLoad.load('assets/js/controllers/userMenuCtrl.js');
                                });
                        }]
                    }
                })

                // modals

                .state('app.ui', {
                    url: '/ui',
                    template: '<div ui-view></div>'
                })
                .state('app.ui.notifications', {
                    url: '/notifications',
                    templateUrl: 'tpl/ui_notifications.html',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                'assets/js/controllers/notifications.js'
                            ]);
                        }]
                    }
                })
                .state('app.ui.modals', {
                    url: '/modals',
                    templateUrl: 'tpl/ui_modals.html',
                    controller: 'PortletCtrl',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                'assets/js/controllers/modals.js'
                            ]);
                        }]
                    }
                })
                .state('app.ui.progress', {
                    url: '/progress',
                    templateUrl: 'tpl/ui_progress.html'
                })
                .state('app.ui.tabs', {
                    url: '/tabs',
                    templateUrl: 'tpl/ui_tabs.html',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                'tabcollapse'
                            ], {
                                insertBefore: '#lazyload_placeholder'
                            });
                        }]
                    }
                })
                .state('app.ui.sliders', {
                    url: '/sliders',
                    templateUrl: 'tpl/ui_sliders.html',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                'noUiSlider',
                                'ionRangeSlider'
                            ], {
                                insertBefore: '#lazyload_placeholder'
                            });
                        }]
                    }
                })
                .state('app.ui.treeview', {
                    url: '/treeview',
                    templateUrl: 'tpl/ui_treeview.html',
                    controller: 'TreeCtrl',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                    'navTree'
                                ], {
                                    insertBefore: '#lazyload_placeholder'
                                })
                                .then(function () {
                                    return $ocLazyLoad.load('assets/js/controllers/treeview.js');
                                });
                        }]
                    }
                })
                .state('app.ui.nestables', {
                    url: '/nestables',
                    templateUrl: 'tpl/ui_nestable.html',
                    controller: 'NestableCtrl',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                    'nestable'
                                ], {
                                    insertBefore: '#lazyload_placeholder'
                                })
                                .then(function () {
                                    return $ocLazyLoad.load('assets/js/controllers/nestable.js');
                                });
                        }]
                    }
                })

                /// Global Preference Route Start Here
                .state('app.updateglobalpreferences', {
                    url: '/updateglobalpreferences',
                    templateUrl: 'tpl/EditGlobalPreferences.html',
                    controller: 'globalPreferencesCtrl',
                    data: {
                        pageTitle: 'ITBoost-Update Global Preferences'
                    },
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                    'datepicker',
                                    'daterangepicker',
                                    'timepicker',
                                    'inputMask',
                                    'autonumeric',
                                    'wysihtml5',
                                    'summernote',
                                    'tagsInput',
                                    'dropzone',
                                    'typehead',
                                    'switchery'
                                ], {
                                    insertBefore: '#lazyload_placeholder'
                                })
                                .then(function () {
                                    return $ocLazyLoad.load([
                                        'assets/js/controllers/globalPreferencesCtrl.js'
                                    ]);
                                });
                        }]
                    }
                })
                //////////////////////////////////////////

                // Role Routing Start Here////////////////
                .state('app.rolelist', {
                    url: '/rolelist',
                    templateUrl: 'tpl/RolesList.html',
                    data: {
                        pageTitle: 'ITBoost-Role List'
                    },
                    controller: 'roleCtrl',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                    'dataTables',
                                    'dropzone'
                                ], {
                                    insertBefore: '#lazyload_placeholder'
                                })
                                .then(function () {
                                    return $ocLazyLoad.load([
                                        'assets/js/controllers/dataTables.js',
                                        'assets/js/controllers/roleCtrl.js'
                                    ]);
                                });
                        }]
                    }
                })
                .state('app.addrole', {
                    url: '/addrole',
                    templateUrl: 'tpl/AddRole.html',
                    data: {
                        pageTitle: 'ITBoost-Role Add'
                    },
                    controller: 'roleCtrl',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                    'dropzone',
                                    'switchery'

                                ], {
                                    insertBefore: '#lazyload_placeholder'
                                })
                                .then(function () {
                                    return $ocLazyLoad.load([
                                        'assets/js/controllers/roleCtrl.js'
                                    ]);
                                });
                        }]
                    }
                })
                .state('app.editrole', {
                    url: '/editrole',
                    templateUrl: 'tpl/EditRole.html',
                    data: {
                        pageTitle: 'ITBoost-Role Edit'
                    },
                    controller: 'roleCtrl',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                    'dropzone',
                                    'switchery'

                                ], {
                                    insertBefore: '#lazyload_placeholder'
                                })
                                .then(function () {
                                    return $ocLazyLoad.load([
                                        'assets/js/controllers/roleCtrl.js'
                                    ]);
                                });
                        }]
                    }
                })
                .state('app.viewrole', {
                    url: '/viewrole',
                    templateUrl: 'tpl/ViewRole.html',
                    data: {
                        pageTitle: 'ITBoost-Role View'
                    },
                    controller: 'roleCtrl',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                    'dropzone',
                                    'switchery'

                                ], {
                                    insertBefore: '#lazyload_placeholder'
                                })
                                .then(function () {
                                    return $ocLazyLoad.load([
                                        'assets/js/controllers/roleCtrl.js'
                                    ]);
                                });
                        }]
                    }
                })
                .state('app.mapping', {
                    url: '/mapping',
                    templateUrl: 'tpl/mapping.html',
                    data: {
                        pageTitle: 'ITBoost-Role Mapping'
                    },
                    controller: 'mappingCtrl',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                    'dropzone',
                                    'switchery'
                                ], {
                                    insertBefore: '#lazyload_placeholder'
                                })
                                .then(function () {
                                    return $ocLazyLoad.load([
                                        'assets/js/controllers/mappingCtrl.js'
                                    ]);
                                });
                        }]
                    }
                })
                .state('app.widget', {
                    url: '/widget',
                    templateUrl: 'tpl/Widget.html',
                    controller: 'widgetCtrl',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                    'datepicker',
                                    'daterangepicker',
                                    'inputMask',
                                    'autonumeric',
                                    'wysihtml5',
                                    'tagsInput',
                                    'dropzone',
                                    'typehead',
                                    'nvd3',
                                    'mapplic',
                                    'rickshaw',
                                    'metrojs',
                                    'sparkline',
                                    'skycons',
                                    'switchery'

                                ], {
                                    insertBefore: '#lazyload_placeholder'
                                })
                                .then(function () {
                                    return $ocLazyLoad.load([
                                        'assets/js/controllers/widgetCtrl.js',
                                        'assets/plugins/angular-charts/Chart.js',
                                        'assets/plugins/angular-charts/angular-chart.min.js',
                                        'assets/plugins/morris/raphael-2.0.2.min.js',
                                        'assets/plugins/morris/morris.js'
                                    ]);
                                });
                        }]
                    }
                })
                //Get Survey From User
                .state('access.surveys', {
                    url: '/surveys',
                    templateUrl: 'tpl/feedback/index.html',
                    data: {
                        pageTitle: 'ITBoost-Survey'
                    },
                    controller: 'surveysCtrl',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([], {
                                    insertBefore: '#lazyload_placeholder'
                                })
                                .then(function () {
                                    return $ocLazyLoad.load([
                                        'assets/js/controllers/surveysCtrl.js',
                                    ]);
                                });
                        }]
                    }
                })

                .state('access.surveysThanks', {
                    url: '/thanks',
                    templateUrl: 'tpl/feedback/thankyou.html',
                    controller: 'surveysCtrl',
                    data: {
                        pageTitle: 'ITBoost-Survey Thanks'
                    },
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([], {
                                    insertBefore: '#lazyload_placeholder'
                                })
                                .then(function () {
                                    return $ocLazyLoad.load([
                                        'assets/js/controllers/surveysCtrl.js',

                                    ]);
                                });
                        }]
                    }
                })





                //Survey Report in Dashboard

                .state('app.clientSurvey', {
                    url: '/clientSurvey',
                    template: '<div class="full-height" ui-view> </div>',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                    'datepicker',
                                    'daterangepicker',
                                    'timepicker',
                                    'inputMask',
                                    'autonumeric',
                                    'wysihtml5',
                                    'tagsInput',
                                    'dataTables',
                                    'dropzone',
                                    'typehead',
                                    'switchery'
                                ], {
                                    insertBefore: '#lazyload_placeholder'
                                })
                                .then(function () {
                                    return $ocLazyLoad.load([
                                        'assets/js/controllers/clientSurveyCtrl.js',
                                    ]);
                                });
                        }]
                    }
                })

                .state('app.clientSurvey.list', {
                    url: '/list',
                    data: {
                        pageTitle: 'ITBoost-Client Survey List'
                    },
                    templateUrl: 'tpl/clientSurveyList.html',
                    controller: 'clientSurveyCtrl',
                })

                .state('app.clientSurvey.dashboard', {
                    url: '/dashboard',
                    data: {
                        pageTitle: 'ITBoost-Client Survey Dashboard'
                    },
                    templateUrl: 'tpl/clientSurveyDashboard.html',
                    controller: 'clientSurveyCtrl',
                })

                .state('access.oldBrowser', {
                    url: '/browser',
                    templateUrl: 'tpl/oldBrowser.html'
                })

                .state('app.notifications', {
                    url: '/notifications',
                    template: '<div class="full-height" ui-view> </div>',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                    
                                ], {
                                    insertBefore: '#lazyload_placeholder'
                                })
                                .then(function () {
                                    return $ocLazyLoad.load([   
                                        'assets/js/controllers/notificationsCtrl.js',
                                    ]);
                                });
                        }]
                    }
                })

                .state('app.notifications.modify', {
                    url: '/modify',
                    data: {
                        pageTitle: 'ITBoost-Notifications'
                    },
                    templateUrl: 'tpl/notifications.html',
                    controller: 'notificationsCtrl',
                })
            //////////////////////////////////////////
        }
    ]);
