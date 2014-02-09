var app = app || {};

app.LogosList = Backbone.Collection.extend({
    model: app.Logo,

    localStorage: new Backbone.LocalStorage('logos-backbone'),
});
