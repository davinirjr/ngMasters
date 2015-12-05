'use strict';
/**
 * @ngdoc function
 * @name ngMastersApp.controller:ConfigCtrl
 * @description
 * # ConfigCtrl
 * Controller of the ngMastersApp
 */
angular.module('ngMastersApp').controller('ConfigCtrl', function($scope, layoutModel, $state) {
    $scope.showListMenu = true;

    var newMenu = {
    	state : '',
    	icon : '',
    	title : '',
    	subItens : []
    };

    var form = {
    	state : 'Visualizando',
    	object : {}
    }

    var d = {
    	listMenu : layoutModel.navbarMenuItens
    }

    var f = {
    	newMenu : function(){
    		form.state = 'Inserindo';
    		newMenu = {
		    	state : '',
		    	icon : '',
		    	title : '',
		    	subItens : []
		    };
    		$scope.showListMenu = false;
    	},
    	editMenu : function(menu){
    		// $scope.showListMenu = false;
    		form.state = 'Editanto Menu';
    		$scope.showListMenu = false;
    		form.object = menu;
			$state.transitionTo('config.menu');
			$scope.newMenu = menu;
    	},
    	removeMenu : function(menu){

    	},
    	addSubItem : function(){
    		$scope.newMenu.subItens.push({
		     	state : '',
		    	icon : '',
		    	title : ''   			
    		});
    	},
    	addMenu : function(newMenu){
    		$scope.showListMenu = true;

    		if (form.state == 'Inserindo')
    		{
    			layoutModel.addMenu(newMenu);
    		}
    	}
    }

    $scope.f = f;
    $scope.d = d;
    $scope.form = form;
    $scope.newMenu = newMenu;
});