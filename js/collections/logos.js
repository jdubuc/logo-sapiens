var app = app || {};

app.LevelsList = Backbone.Collection.extend({
    model: app.Logo,

    localStorage: new Backbone.LocalStorage('logos-backbone'),
});
