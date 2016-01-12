app.controller('IndexController', ['$scope', '$http', 'User', '$window', function($scope, $http, User, $window) {

  // User is the global obj we use to check the user login status
  $scope.user = User;

  // check if user is loggedin
  $http.get("/loggedin")
  .success(function (data) {
    if (data.isLoggedIn) {
      // if user is logged in update the global obj
      User.isLoggedIn = data.isLoggedIn;
      User.email = data.email;
      // create a local copy of the global obj for local access
      $scope.user = User;
    }
  })
  .error(function (err) {
    console.log('Error: ' + err);
  });

  $scope.logout = function() {
    // user is logging out
    $http.get("/logout");
    // update global object
    User.isLoggedIn = false;
    User.email = undefined;
    // update local copy of the global obj
    $scope.user = User;
  }
}]);
