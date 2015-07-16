var Marionette = require('backbone.marionette');
var template = require('templates/todo-list.hbs');
var TodosView = require('views/TodosView');
var Backbone = require('backbone');

module.exports = Marionette.LayoutView.extend({

	template: template,

    regions: {
        todosRegion: '#region-todos'
    },

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

        this.showTodos();
    },

    showTodos: function() {
        this.collectionView = new TodosView({
            collection: this.todoCollection
        });
        this.todosRegion.show(this.collectionView);
    }

});
