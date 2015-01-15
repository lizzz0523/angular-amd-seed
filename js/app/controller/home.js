define([
    'controller/index'
], function(module) {

    module.controller('home', ['$scope', function($scope) {
        $scope.user = {
            name : 'liz'
        };
    }]);

});