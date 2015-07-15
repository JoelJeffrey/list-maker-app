var BaseView = require('views/BaseView.js');
var template = require('templates/todo-list.hbs');
var Backbone = require('backbone');

module.exports = BaseView.extend({

	template: template,

	ui: {
		form: 'form',
		listItemBox: '.list-item-box'
	},

	events: {
		'submit @ui.form': 'onFormSubmit'
	},

    initialize: function() {

    },

    onShow: function() {
    	this.todoCollection = new Backbone.Collection();
    },

    onFormSubmit: function(e) {
    	e.preventDefault();
    	e.stopPropagation();

    	var todo = this.ui.listItemBox.val();

    	if (!todo) {
    		return
    	}

    	var todoModel = new Backbone.Model({
    		todo: todo
    	});

    	this.todoCollection.add(todoModel);

    	console.log(this.todoCollection);

    }

});
