var app = app || {};

app.LevelsList = Backbone.Collection.extend({
    model: app.Level,

    localStorage: new Backbone.LocalStorage('levels-backbone'),

    comparator: function( todo ) {
        return todo.get('level_number');
    },
});
