(function() {
    'use strict';

    angular.module('Data')
    .controller('ItemsController', ItemsController);

    ItemsController.$inject = ['MenuDataService', 'allItems'];

    function ItemsController (MenuDataService, allItems) {
        var items = this;
        items.name = 'Hello World';
        items.all = allItems;
    }
})();
