var app = app || {};

app.Level = Backbone.Model.extend({
    defaults: {
        'comments': 0,
        'completed': 0,
        'image': './img/foto.jpg',
        'level_number': 0,
        'progress_icon': 'icon-uniF778',
        'total': 0,
    },
});
