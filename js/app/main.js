define(['angular', 'ngRoute'], function(angular) {
    var app = angular.module('app', ['ngRoute']);

    var amdRoute = function(config) {
            var controllerUrl = config.controllerUrl,
                controller = config.controller,
                resolve = config.resolve || {};

            if (controller === void 0) {
                controller = ['$scope', '$injector', 'amdController', function($scope, $injector, amdController) {
                    if (typeof amdController !== 'undefined') {
                        $injector.invoke(amdController, this, {'$scope' : $scope});
                    }
                }];

                config.controller = controller;
            }
            
            if (controllerUrl) {
                delete config.controllerUrl;

                resolve['amdController'] = ['$q', '$rootScope', function($q, $rootScope) {
                    var defer = $q.defer();

                    require([controllerUrl], function (amdController) {
                        defer.resolve(amdController);
                        $rootScope.$apply();
                    });

                    return defer.promise;
                }];

                config.resolve = resolve;
            }

            return config;
        },

        init = function() {
            angular.resumeBootstrap(['app']);
        };

    app.config([
        '$routeProvider',
        '$controllerProvider',
        '$compileProvider',
        '$filterProvider',
        '$provide',
        '$injector',
    function($routeProvider, $controllerProvider, $compileProvider, $filterProvider, $provide, $injector) {
        angular.extend(app, {
            when : function(path, config) {
                $routeProvider.when(path, amdRoute(config));
                return this;
            },

            otherwise : function(config) {
                $routeProvider.otherwise(amdRoute(config));
                return this;
            },

            provider : function(name, constructor) {
                $provide.provider(name, constructor);
                return this;
            },

            controller : function(name, constructor) {
                $controllerProvider.register(name, constructor);
                return this;
            },

            directive : function(name, constructor) {
                $compileProvider.directive(name, constructor);
                return this;
            },

            filter : function(name, constructor) {
                $filterProvider.register(name, constructor);
                return this;
            },

            factory : function(name, constructor) {
                $provide.factory(name, constructor);
                return this;
            },

            service : function(name, constructor) {
                $provide.service(name, constructor);
                return this;
            },

            constant : function(name, constructor) {
                $provide.constant(name, constructor);
                return this;
            },

            value : function(name, constructor) {
                $provide.value(name, constructor);
                return this;
            }
        });
    }]);
    
    app.config(function() {
        app.when('/', {
            templateUrl   : './tmpl/index.html',
            controllerUrl : 'controller/mainController'
        })
        .when('/list', {
            templateUrl   : './tmpl/list.html',
            controllerUrl : 'controller/listController'
        })
        .otherwise({
            redirectTo : '/'
        });
    });

    init(/* app bootstarp */);

    return app;
});