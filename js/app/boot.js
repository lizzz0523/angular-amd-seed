define([
    'angular',
    'app/index',
    'config/lazyload',
    'config/route'
], function(angular, app) {
    
    app.config(function() {
        app.when('/', {
            templateUrl   : './view/index.html',
            controllerUrl : 'controller/home'
        })
        .when('/list', {
            templateUrl   : './view/list.html',
            controllerUrl : 'controller/list'
        })
        .otherwise({
            redirectTo : '/'
        });
    });

    angular.resumeBootstrap([app.name]);

});