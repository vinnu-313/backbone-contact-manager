'use strict';

angular.module('contactApp', ['contactApp.controller', 'contactApp.services', 'ui.router'])

.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/home");
  //
  // Now set up the states
  $stateProvider
    .state('home', {
      url: "/home",
      templateUrl: "partials/contacts.html",
      controller: 'ContactsCtrl'
    })
    .state('edit', {
    	url: "/edit/:id",
    	templateUrl : "partials/newcontact.html",
    	controller: 'EditContactCtrl'
    })
    .state('new', {
    	url: "/new",
    	templateUrl : 'partials/newcontact.html',
    	controller: 'NewContactCtrl'
    })
    .state('delete', {
    	url: '/delete/:id',
    	controller: 'DeleteContactCtrl'
    });
});