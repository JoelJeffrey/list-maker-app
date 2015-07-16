var Marionette = require('backbone.marionette');
var template = require('templates/todo.hbs');

module.exports = Marionette.ItemView.extend({

	template: template,

	tagName: 'li',

	ui: {
		btnDeleteTodo: '.btn-delete-todo',
		btnEditTodo: '.btn-edit-todo'
	},

	events: {
		'click @ui.btnDeleteTodo': 'onDeleteTodo',
		'click @ui.btnEditTodo': 'onEditTodo'
	},

    initialize: function() {
    	console.log(this.model);
    },

    onShow: function() {},

    onDeleteTodo: function() {
    	this.remove();
    },

    onEditTodo: function() {
    	console.log('edit');
    }

});
