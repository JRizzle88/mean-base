app.controller('IndexController', ['$scope', '$http', 'User', '$window', function($scope, $http, User, $window) {

  $scope.user = User;

  $http.get("/loggedin")
  .success(function (data) {
    if (data.isLoggedIn) {
      User.isLoggedIn = data.isLoggedIn;
      User.email = data.email;
      $scope.user = User;
    }
  })
  .error(function (err) {
    console.log('Error: ' + err);
  });

  $scope.logout = function() {
    $http.get("/logout");
    User.isLoggedIn = false;
    User.email = undefined;
  }
}]);
