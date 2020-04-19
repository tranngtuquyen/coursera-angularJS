(function() {
    'use strict';

    angular.module('public')
    .service('MemberService', MemberService);

    function MemberService() {
        var service = this;
        service.getMember = function() {
            return {name: 'QT'};
        }
    }
})();