define(['jquery', 'underscore', 'backbone'], function($, _, Backbone) {
  var Module = Backbone.Router.extend({
    routes: {
      'foo': 'bar'
    },
    bar: function() {
      console.log('it`s working!...');
    },
    historyStart: function() {
      Backbone.history.start();
    }
  });

  return Module;
});

