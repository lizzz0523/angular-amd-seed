define([
    'underscore',
    'app/index',
    'controller/index',
    'directive/index',
    'service/index',
    'filter/index',
], function(_, app, controller, directive, service, filter) {

    app.config([
        '$controllerProvider',
        '$compileProvider',
        '$filterProvider',
        '$provide',
    function($controllerProvider, $compileProvider, $filterProvider, $provide) {
        _.extend(app, {
            controller : function(name, constructor) {
                $controllerProvider.register(name, constructor);
                return this;
            },

            provider : function(name, constructor) {
                $provide.provider(name, constructor);
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

    controller.config([
        '$controllerProvider',
    function($controllerProvider) {
        _.extend(controller, {
            controller : function(name, constructor) {
                $controllerProvider.register(name, constructor);
                return this;
            }
        });
    }]);

    directive.config([
        '$compileProvider',
    function($compileProvider) {
        _.extend(directive, {
            directive : function(name, constructor) {
                $compileProvider.directive(name, constructor);
                return this;
            }
        });
    }]);

    service.config([
        '$provide',
    function($provider) {
        _.extend(service, {
            provider : function(name, constructor) {
                $provide.provider(name, constructor);
                return this;
            },

            factory : function(name, constructor) {
                $provide.factory(name, constructor);
                return this;
            },

            service : function(name, constructor) {
                $provide.service(name, constructor);
                return this;
            }
        });
    }]);

    filter.config([
        '$filterProvider',
    function($filterProvider) {
        _.extend(filter, {
            filter : function(name, constructor) {
                $filterProvider.register(name, constructor);
                return this;
            }
        });
    }]);

});