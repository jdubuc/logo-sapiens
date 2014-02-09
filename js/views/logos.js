var app = app || {};

app.LogosView = Backbone.View.extend({
    el: $( '#div1 div.span3-fluid' ),

    initialize: function(logos_list) {
        this.collection = logos_list;
        this.render();

        this.listenTo( this.collection, 'add', this.renderLogo );
        this.listenTo( this.collection, 'reset', this.render );
    },

    events: {
    },

    render: function() {
        this.collection.each(function( item ) {
            this.renderLogo( item );
        }, this );
    },

    renderLogo: function( item ) {
        var logoview = new app.LogoView ({
            model: item
        });
        this.$el.append( logoview.render().el );
    }
});
