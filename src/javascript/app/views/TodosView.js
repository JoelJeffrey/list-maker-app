var Marionette = require('backbone.marionette');
var TodoView = require('views/TodoView');

module.exports = Marionette.CollectionView.extend({

    childView: TodoView,

    tagName: 'ul',

    initialize: function() {

    },

    onShow: function() {

    }

});
