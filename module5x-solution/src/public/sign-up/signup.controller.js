(function() {
    'use strict';

    angular.module("public")
    .controller("SignUpController", SignUpController);

    SignUpController.$inject = ['SignUpService'];
    function SignUpController(SignUpService) {
        var signupCtrl = this;
        signupCtrl.firstName = '';
        signupCtrl.lastName = '';
        signupCtrl.email = '';
        signupCtrl.phone = '';
        signupCtrl.favDish = '';
        signupCtrl.showInfo = false;
        signupCtrl.errorMsg = '';
        signupCtrl.user = SignUpService.member;

        signupCtrl.signUpClick = function() {
            signupCtrl.successMsg = "";
            signupCtrl.errorMsg = "";
            
            var promise = SignUpService.getItem(signupCtrl.favDish);
            promise.then(function(result) {
                signupCtrl.showInfo = true;
                SignUpService.member = {
                    firstName: signupCtrl.firstName,
                    lastName: signupCtrl.lastName,
                    email: signupCtrl.email,
                    phone: signupCtrl.phone,
                    dish: result
                };
                signupCtrl.successMsg = "Your information has been saved";
            }, function() {
                signupCtrl.errorMsg = "No such menu number exists";
            });
        }
    }
})();