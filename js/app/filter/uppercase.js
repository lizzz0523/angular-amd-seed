define([
    'filter/index'
], function(module) {

    module.filter('uppercase', function() {
        return function(value) {
            return String(value).toUpperCase();
        };
    });

});