define(['jquery', 'underscore', 'backbone'], function($, _, Backbone) {
	var Page = Backbone.View.extend({
		el: '.page',
		tagName: 'div',
		initialize: function() {
			this.widgets.on('change', this.render, this);
		},
		template: '<h1>Blank Page</h1>',
		render: function(){
			var compiledTemplate = _.template(this.template);
			var htmlString = compiledTemplate(this.options); // options e.g. page.title, page.nav, user.auth
			$(el).html();
			_.each(this.widgets, function(widget) {
				$("[wid='" + widget.id + "']").html(widget.render().$el);
			});

			return this;
		}

	});

	return Page;
});
