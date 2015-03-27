define(['jquery', 'underscore', 'backbone'], function($, _, Backbone) {
	var Widget = Backbone.View.extend({
		id: null,
		el: "[wid='" + this.id + "']",
	});

	return Widget;
});
