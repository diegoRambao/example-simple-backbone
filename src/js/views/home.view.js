var $ = require('jquery');
var Backbone = require('backbone');
var _ = require('underscore')

var template = require('../templates/home.template.hbs');
var TodoCollection = require('../collections/TodoCollection')
var ItemView = require('../views/Item.view')
var MyMixin = require('../mixins/MyMixin')

Backbone.$ = $;
var Todos = new TodoCollection(); 

var HomeView = Backbone.View.extend({
  el: '#main',
  template: template,

  initialize: function() {
    this.listenTo(Todos, 'add', this.addOne)
    Todos.fetch();
  },

  addOne: function(todo) {
    var itemView = new ItemView({ model: todo });
    this.$('#todo-list').prepend(itemView.render().el);
  },

  events: {
    'submit #form-post': 'createPost'
  },

  about: function(e) {
    Backbone.history.navigate('about');
    var aboutView = new AboutView();
    aboutView.render();
  },

  render: function() {
    this.$el.html(template());
  },

  createPost: function(e) {
    e.preventDefault();
    var title = $('#title').val().trim()
    var body = $('#body').val().trim()
    var userId = 1;
    Todos.create({
      title,
      body,
      userId
    });
    $('#title').val('')
    $('#body').val('')
  }
});

_.extend(HomeView.prototype, MyMixin)

module.exports = HomeView;
