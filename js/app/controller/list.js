define([
    'controller/index',
    'filter/uppercase'
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