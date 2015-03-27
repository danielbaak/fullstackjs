/**
 * Application core
 *
 * exposes Module, Page and Widget.
 *
 * TODO: Provide pub/sub functionality
 *
 **/
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

define([
  'js/module',
  'js/page',
  'js/widget'
], function(
  Module,
  Page,
  Widget
) {

  return {
    Module: Module,
    Page: Page,
    Widget: Widget
  };
});

