/**
 * @ngdoc module
 * @name myApp
 *
 * @module myApp
 *
 * @description
 * Create main module (Application) with core dependencies
 * 
 * @author Akash Patel ( gmail::akashpatel1101@gmail.com )
 */
(function () {
  'use strict';

  var app = angular.module("myApp", [
    /**
     * @module myAppService
     *
     * @description
     * Make reusable method's to connect with restfull API's
     */
    'myAppService',
    
    /**
     * @module dashboard
     *
     * @description
     * It will excute on initial level of the application.
     */
    'dashboard',

    /**
     * @module selectedUser
     *
     * @description
     * To display selected user
     */
    'selectedUser',

    /**
     * @module users
     *
     * @description
     * To display users
     */
    'users',

    /**
     * @module ui.router
     *
     * @description
     * AngularUI Router is a routing framework.
     */
    'ui.router',

    /**
     * @module ngStorage
     *
     * @description
     * To store data in storage.
     */
    'ngStorage'
  ]);

/**
 * Setup application routes
 */
  app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/dashboard')

    $stateProvider.state('users', {
      url: '/users',
      component: 'userLists'
    });

    $stateProvider.state('selecteduser', {
      url: '/selecteduser',
      component: 'selectedUser'
    });

    $stateProvider.state('dashboard', {
      url: '/dashboard',
      component: 'dashboard'
    });
  });
})();