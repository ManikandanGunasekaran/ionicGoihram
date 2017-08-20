app.controller('loginController', function($scope, $rootScope, $state) {


    $scope.checkLoginState = function() {
        // FB.login(function(response) {
        //     if (response.authResponse) {
        //         FB.api('/me', function(response) {
        //             console.log(response);
        //             $rootScope.fbData = response;
        //              $state.go("userDetails");
        //         });
        //     } else {
        //         console.log('User cancelled login or did not fully authorize.');
        //     }
        // }, {scope: 'public_profile,email'});
        $cordovaOauth.facebook("1330034267115606", ["email", "public_profile"], 
        	{ redirect_uri: "http://codingscripts.com/callback" }).then(function (result) {
alert(result.access_token);
}, function (error) {
alert("Error: " + error);
});
}

    // }

    $rootScope.$on('event:social-sign-in-success', function(event, userDetails){
    	console.log(userDetails);
    })

})
