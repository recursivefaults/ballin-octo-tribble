define [
    'jquery'
    'underscore'
    'backbone'
], ($, _, Backbone) ->
    class MainView extends Backbone.View
        render: () ->
            @.$el.append("<h1>Hello World</h1>")

