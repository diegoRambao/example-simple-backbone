var $ = require('jquery');
var Backbone = require('backbone');
var _ = require('underscore')

var template = require('../templates/Item.template.hbs');
var MyMixin = require('../mixins/MyMixin')

Backbone.$ = $;

var ItemView = Backbone.View.extend({
    tagName: 'li',
    className: 'card-post',
    template: template,
    
    events: {
        'click button#btn-delete': 'clear'
    },
    
    initialize: function() {
        this.listenTo(this.model, 'change', this.render)
        this.listenTo(this.model, 'destroy', this.remove)
    },
    
    render: function() {
        this.$el.html(template(this.model.toJSON()));
        return this;
    },
})

_.extend(ItemView.prototype, MyMixin)

module.exports = ItemView;