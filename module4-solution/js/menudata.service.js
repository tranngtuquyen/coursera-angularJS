(function() {
    'use strict';

    angular.module('Data')
    .service('MenuDataService', MenuDataService);

    MenuDataService.$inject = ['$http'];
    function MenuDataService($http) {
        var service = this;
        service.getAllCategories = function() {
            return $http.get('https://davids-restaurant.herokuapp.com/categories.json')
            .then(function(result) {
                return result.data;
            });
        };
        
        service.getItemsForCategory = function(categoryShortName) {
            return $http({
                method: "GET",
                url: 'https://davids-restaurant.herokuapp.com/menu_items.json',
                params: {category: categoryShortName}
            })
            .then(function(result) {
                var allItems = result.data.menu_items;
                var itemsSameCat = [];
                for (var i = 0; i < allItems.length; i++) {
                    var item = allItems[i];
                    var shortName = item.short_name;
                    if (shortName.indexOf(categoryShortName) != -1) {
                        itemsSameCat.push(item);
                    }
                }
                return itemsSameCat;
            })
        };
    }
})();