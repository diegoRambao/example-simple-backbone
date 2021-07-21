var Backbone = require('backbone');
var Todo = require('../models/Todo')

var TodoCollection = Backbone.Collection.extend({
    model: Todo,
    url: 'https://jsonplaceholder.typicode.com/posts',
    comparator: 'id',
})

module.exports = TodoCollection;