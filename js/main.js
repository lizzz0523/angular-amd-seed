require.config({
    paths : {
        'app'        : 'app',
        'controller' : 'app/controller',
		'angular'    : 'lib/angular',
        'ngRoute'    : 'lib/angular-route'
    },

    shim : {
        'angular' : {exports : 'angular'},
        'ngRoute' : ['angular']
    }
});

require(['app/main']);