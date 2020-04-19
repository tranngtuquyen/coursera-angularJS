(function() {
    "use strict";

    angular.module('public')
    .service("SignUpService", SignUpService);

    SignUpService.$inject = ['$http'];
    function SignUpService($http) {
        var service = this;
        service.member = {};
        service.getItem = function(itemShortName) {
            return $http({
                method: 'GET',
                url: 'https://quyentran-coursera-angular.herokuapp.com/menu_items/' + itemShortName + '.json'
            }).then(function (result) {
                return result.data;
            });
        }
        service.getMember = function() {
            return service.member;
        }

        service.updateMember = function(member) {
            service.member = member;
        }

    }
})();