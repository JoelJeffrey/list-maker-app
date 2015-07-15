var Marionette = require('backbone.marionette');

module.exports = Marionette.ItemView.extend({

    initialize: function() {},

    onShow: function() {
        this.delegateEvents();
    }

});
