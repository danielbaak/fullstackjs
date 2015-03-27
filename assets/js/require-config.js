requirejs.config({
  baseUrl: '/',
  paths: {
    'jquery': 'js/dependencies/jquery',
    'underscore': 'js/dependencies/underscore',
    'backbone': 'js/dependencies/backbone',
    'bootstrap': 'js/dependencies/bootstrap',
    'core': 'js/core'
  },

  shim: {
    backbone: {
      deps: ['jquery', 'underscore'],
      exports: 'Backbone'
    }
  },

  config: {},
  packages: [{}]
});

