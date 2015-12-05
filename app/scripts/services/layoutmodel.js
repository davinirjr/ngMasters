'use strict';
/**
 * @ngdoc service
 * @name ngMastersApp.layoutModel
 * @description
 * # layoutModel
 * Factory in the ngMastersApp.
 */
angular.module('ngMastersApp').factory('layoutModel', function() {

    var layout = {

        navbarMenuItens : [
            {
                state : 'home',
                icon : 'fa fa-home',
                title : 'Home',
                subItens : []
            },

            {
                state : 'atividades',
                icon : 'fa fa-list',
                title : 'Curso ngMaster',
                subItens : [
                    {
                        state : 'atividades.aula1',
                        icon : '',
                        title : 'Aula 01',
                    },
                    {
                        state : 'atividades.aula2',
                        icon : '',
                        title : 'Aula 02',
                    },
                    {
                        state : 'atividades.aula3',
                        icon : '',
                        title : 'Aula 03',
                    },
                    {
                        state : 'atividades.aula4',
                        icon : '',
                        title : 'Aula 04',
                    },
                ]
            },

            {
                state : 'playground',
                icon : 'fa fa-code',
                title : 'Playground',
                subItens : [
                    {
                        state : 'playground.angularlife',
                        icon : '',
                        title : 'angLife',
                    },
                ]
            },            
        ],


        addMenu : function(config){
            return _addMenu(config);
        }
    }

    function _addMenu(config){
        layout.navbarMenuItens.push({
            state : config.state,
            icon : config.icon,
            title : config.title,
            subItens : config.subItens         
        })
    }

    return layout;
});