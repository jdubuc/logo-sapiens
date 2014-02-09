var app = app || {};

app.LevelView = Backbone.View.extend({
    tagName: 'article',
    className: 'post',
    template: $( '#level-template' ).html(),

    events: {
    },

    render: function() {
        var tmpl = _.template( this.template );

        this.$el.html( tmpl( this.model.toJSON() ) );

        return this;
    }
});
