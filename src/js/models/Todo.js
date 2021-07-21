var Backbone = require('backbone');

var Todo = Backbone.Model.extend({
    defaults: {
        userId: 1,
        id: null,
        title: "delectus aut autem",
        body: ''
    }
})

module.exports = Todo;