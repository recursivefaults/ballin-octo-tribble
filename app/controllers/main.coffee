define [
    'jquery'
    'backbone'
    'cs!views/main'
], ($, Backbone, MainView) ->
    class MainRouter extends Backbone.Router
        routes: {
            '': 'mainPage'
        }
        mainPage: () ->
            $('body').append(new MainView().render())

