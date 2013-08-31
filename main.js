require.config({
    shim: {
        backbone: {
            exports: 'Backbone',
            deps: ['jquery', 'underscore']
        },
        underscore: {
            exports: '_'
        }
    },
    baseURL: 'app',
    paths: {
        'coffee-script': 'libs/coffee-script',
        cs: 'libs/cs',
        text: 'libs/text',
        backbone: 'libs/backbone',
        jquery: 'libs/jquery-2.0.3',
        underscore: 'libs/underscore-min'
    }
});

define([
        'cs!controllers/main'
], function(Backbone) {
    
});
