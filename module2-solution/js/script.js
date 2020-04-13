(function(){
    'use strict';
    angular.module('ShoppingListCheckOff',[])
    .controller('ToBuyController',ToBuyController)
    .controller('AlreadyBoughtController',AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

    function ToBuyController (ShoppingListCheckOffService) {
        var toBuy = this;
        toBuy.buyList = ShoppingListCheckOffService.buyList;

        toBuy.BuyClick = function(item) {
            ShoppingListCheckOffService.moveItemFromBuyToBoughtList(item);
        }
        toBuy.message = "Everything is bought!";
        toBuy.AddItem = function(item,quantity) {
            toBuy.errorMsg = "";
            try {
                ShoppingListCheckOffService.addToBuyList(item,quantity);
            } catch (error) {
                toBuy.errorMsg = error;
            }
        }
    }

    function AlreadyBoughtController (ShoppingListCheckOffService) {
        var alreadyBought = this;
        alreadyBought.boughtList = ShoppingListCheckOffService.boughtList;
        alreadyBought.message = "Nothing is bought yet!";
    }

    function ShoppingListCheckOffService () {
        var service = this;
        service.buyList = [
            {name: 'Milk', quantity: 5}, 
            {name: 'Cheese', quantity: 2},
            {name: 'Bread', quantity: 4},
            {name: 'Pork Shoulder', quantity: 3},
            {name: 'Salad', quantity: 1}
        ];
        service.boughtList = [];
        service.moveItemFromBuyToBoughtList = function(item) {
            var index = service.buyList.indexOf(item);
            service.buyList.splice(index,1);
            service.boughtList.push(item);
        }
        service.addToBuyList = function(item, quantity) {
            if (item != "" && quantity != 0 && item != undefined && quantity != undefined) {
                service.buyList.push({name: item,quantity: quantity});
            } else {
                throw new Error("Invalid input. Try again!");
            }
        }
    }

})();