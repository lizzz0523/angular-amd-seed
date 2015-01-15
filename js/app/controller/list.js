define([
    'controller/index'
], function(module) {

    module.controller('list', ['$scope', function($scope) {
        $scope.users = [
            {name : 'liz'},
            {name : 'apple'},
            {name : 'banana'},
            {name : 'orange'}
        ];
    }]);

});