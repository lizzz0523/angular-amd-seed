define([
    'underscore',
    'app/index'
], function(_, app) {

    app.config([
        '$routeProvider',
    function($routeProvider) {
        _.extend(app, {
            when : function(path, config) {
                $routeProvider.when(path, amdRoute(config));
                return this;
            },

            otherwise : function(config) {
                $routeProvider.otherwise(amdRoute(config));
                return this;
            }
        });
    }]);

    function amdRoute(config) {
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
    }

});