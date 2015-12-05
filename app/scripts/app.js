'use strict';
/**
 * @ngdoc overview
 * @name ngMastersApp
 * @description
 * # ngMastersApp
 *
 * Main module of the application.
 */
angular
	.module('ngMastersApp', ['ngAnimate', 'ngAria', 'ngMessages', 'ngResource', 'ui.router'])

	.config(function($stateProvider, $urlRouterProvider){
		$urlRouterProvider.otherwise('/home');

		$stateProvider
			.state(
				'home',
				{
					url : '/home',
					templateUrl : 'views/home.html',
					controller: 'HomeCtrl'
				}
			)

			.state(
				'config',
				{
					url : '/config',
					templateUrl : 'views/config.html',
					controller : 'ConfigCtrl'
				}
			)

			.state(
				'config.menu',
				{
					url : '/menu',
					templateUrl : 'views/config.menu.html',
					controller : 'ConfigCtrl'
				}
			)			
	})

	.run(function($rootScope, layoutModel){
		$rootScope.l = layoutModel;
	})