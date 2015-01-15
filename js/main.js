require.config({
    paths : {
        'app'                : 'app',
        'config'             : 'app/config',
        'controller'         : 'app/controller',
        'directive'          : 'app/directive',
        'service'            : 'app/service',
        'filter'             : 'app/filter',

        'underscore'         : 'vendor/underscore',
        'jquery'             : 'vendor/jquery',
		'angular'            : 'vendor/angular',
        'ngRoute'            : 'vendor/angular-route'
    },

    shim : {
        'angular'            : {exports : 'angular'},
        'ngRoute'            : ['angular']
    },

    map : {
        '*'                  : {
            'underscore' : 'underscore-private',
            'jquery'     : 'jquery-private'
        },
        'jquery-private'     : {'jquery' : 'jquery'},
        'underscore-private' : {'underscore' : 'underscore'}
    }
});

define('underscore-private', ['underscore'], function(_) {
    return _.noConflict(true);
});

define('jquery-private', ['jquery'], function($) {
    return $.noConflict(true);
});

require(['app/boot']);