(function(){
    'use strict';

    angular.module('LunchChecker',[])
    .controller('checkerController', appController);

    function appController($scope) {
        $scope.dishesList = "";
        $scope.message = "";
        
        $scope.checkDishes = function() {
            var arr = $scope.makeDishesArray();
            if (arr.length == 0) {
                $scope.message = "Please enter data first";
                $scope.newStyle = {
                    "color": "red"
                }
            } else if (arr.length <= 3) {
                $scope.message = "Enjoy!";
                $scope.newStyle = {
                    "color": "green"
                }
            } else {
                $scope.message = "Too much!";
                $scope.newStyle = {
                    "color": "green"
                }
            }
        }
        $scope.makeDishesArray = function() {
            var arr = [];
            if ($scope.dishesList.length > 0) {
                arr = $scope.dishesList.split(",");
            }
            var i = 0;
            while (i < arr.length) {
                var str = arr[i].trim();
                if (str == "") {
                    arr.splice(i,1);
                } else {
                    i++;
                }
            }
            return arr;
        }
    }
})();