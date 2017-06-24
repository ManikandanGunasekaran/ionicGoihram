app.controller('loginController', function($scope,$state) {
  $scope.a ="page1";
   $scope.signUp = function(){
    alert("Button clicked");
      $state.go("userDetails");
    }
 })
