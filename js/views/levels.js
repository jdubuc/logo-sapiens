var app = app || {};

app.LevelsView = Backbone.View.extend({
    el: $( '#posts' ),

    initialize: function(levels_list) {
        this.collection = levels_list;
        this.render();

        this.listenTo( this.collection, 'add', this.renderLevel );
        this.listenTo( this.collection, 'reset', this.render );
    },

    events: {
    },

    render: function() {
        this.collection.each(function( item ) {
            this.renderLevel( item );
        }, this );
    },

    renderLevel: function( item ) {
        var levelview = new app.LevelView({
            model: item
        });
        this.$el.append( levelview.render().el );
    }
});
