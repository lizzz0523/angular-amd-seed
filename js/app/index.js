define([
    'angular',
    'ngRoute',

    'controller/index',
    'directive/index',
    'service/index',
    'filter/index',
], function(angular) {
    
    return angular.module('app', [
        'ngRoute',

        'app.controller',
        'app.directive',
        'app.service',
        'app.filter'
    ]);

});