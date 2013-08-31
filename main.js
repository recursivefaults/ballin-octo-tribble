requirejs.config({
    shim: {
        'backbone': {
            exports: 'Backbone',
            deps: ['jquery', 'underscore']
        },
        'underscore': {
            exports: '_'
        }
    },
    baseUrl: 'app',
    paths: {
        'coffee-script': '../libs/coffee-script',
        cs: '../libs/cs',
        text: '../libs/text',
        backbone: '../libs/backbone',
        jquery: '../libs/jquery-2.0.3.min',
        underscore: '../libs/underscore-min'
    }
});

require([
        'backbone',
        'cs!controllers/main'
], function(Backbone, Main) {
    console.log(Backbone)
    console.log(Main)
    Main.initialize(); 
});
