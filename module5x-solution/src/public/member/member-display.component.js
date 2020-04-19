(function() {
    'use strict';

    angular.module('public')
    .component('memberDisplay', {
        templateUrl: 'src/public/sign-up/member-display.html',
        bindings: {
            user: '<'
        }
    });
})();