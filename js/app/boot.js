define([
    'angular',
    'app/index',
    'config/lazyload',
    'config/route'
], function(angular, app) {
    
    app.config(function() {
        app.when('/', {
            templateUrl   : 'view/home',
            controllerUrl : 'controller/home',
            controller    : 'home'
        })
        .when('/list', {
            templateUrl   : 'view/list',
            controllerUrl : 'controller/list',
            controller    : 'list'
        })
        .otherwise({
            redirectTo : '/'
        });
    });

    angular.resumeBootstrap([app.name]);

});