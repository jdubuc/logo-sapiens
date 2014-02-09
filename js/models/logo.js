var app = app || {};

app.Logo = Backbone.Model.extend({
    defaults: {
        'image': './img/foto.jpg',
        'level': 1,
        'name': 'nestle',
    },
});
