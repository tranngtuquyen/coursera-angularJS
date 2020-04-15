(function() {
    'use strict';
    angular.module('NarrowItDownApp',[])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService',MenuSearchService)
    .directive('foundItems',FoundItems);

    function FoundItems() {
        var ddo = {
            scope: {
                found: '<',
                remove: '&' //"Don't want this one!" button
            },
            templateUrl: 'foundItems.html'
        };
        return ddo;
    }

    NarrowItDownController.$inject = ['MenuSearchService', '$http'];

    function NarrowItDownController(MenuSearchService, $http) {
        var ctrl = this;
        ctrl.searchTerm = '';
        ctrl.emptyMsg = '';

        ctrl.narrowDown = function() {
            if (ctrl.searchTerm == undefined || ctrl.searchTerm == '') {
                ctrl.emptyMsg = 'Nothing found!';
            } else {
                ctrl.emptyMsg = '';
                var promise = MenuSearchService.getMatchedMenuItems(ctrl.searchTerm);
                promise.then(function(response) {
                ctrl.found = response;
                });    
            }
        }
        
        ctrl.remove = function(index) {
            ctrl.found.splice(index,1);
        };
    }

    MenuSearchService.$inject = ['$http'];
    
    function MenuSearchService($http) {
        var service = this;
        //service.searchTerm = '';
        
        service.getMatchedMenuItems = function(searchTerm) {
         //$http 
         
         return $http({
            method: 'GET',
            url: 'https://davids-restaurant.herokuapp.com/menu_items.json'
         }).then(function(response) {
            var allItems = response.data.menu_items;
            var foundItems = [];
            for (var i = 0; i < allItems.length; i++) {
                var item = allItems[i];
                var str = item.description;
                if (str.indexOf(searchTerm) != -1) {
                    foundItems.push(item);
                }
            }
            return foundItems;
        });  
        }

    }

})();