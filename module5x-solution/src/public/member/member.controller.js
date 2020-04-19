(function() {
    'use strict';

    angular.module('public')
    .controller('MemberController',MemberController);

    MemberController.$inject = ['SignUpService'];
    function MemberController(SignUpService) {
        var memberCtrl = this;
        memberCtrl.showMember = false;
        memberCtrl.result = SignUpService.getMember();
        if (!memberCtrl.result.hasOwnProperty('firstName')) {
            memberCtrl.errorMsg = "Please sign up"
        } else {
            memberCtrl.showMember = true;
        }
    }
})();