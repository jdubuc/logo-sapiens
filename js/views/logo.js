var app = app || {};

app.LogoView = Backbone.View.extend({
    tagName: 'div',
    template: $( '#logo-template' ).html(),

    events: {
    },

    render: function() {
        var tmpl = _.template( this.template );

        this.$el.html( tmpl( this.model.toJSON() ) );

        return this;
    }
});
