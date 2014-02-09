var app = app || {};

app.LogosView = Backbone.View.extend({
    el: $( '#header' ),

    template: _.template( $('#logos-template').html() ),

    initialize: function(attr) {
        this.level = attr.level;
        this.collection = attr.logos;
        this.render();

        this.listenTo( this.collection, 'add', this.renderLogo );
        this.listenTo( this.collection, 'reset', this.render );
    },

    events: {
    },

    render: function() {
        this.$el.html( this.template({level: this.level }) );
        this.collection.each(function( item ) {
            this.renderLogo( item );
        }, this );
    },

    renderLogo: function( item ) {
        var logoview = new app.LogoView({
            model: item
        });
        var $el = this.$('#logos');
        $el.append( logoview.render().el );
    },
});
