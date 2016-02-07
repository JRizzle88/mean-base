
app.controller('AccountController', ['$scope', '$http', '$window', 'User', function($scope, $http, $window, User) {

    // User is the global obj we use to check the user login status
    $scope.user = User;

    // check if user is loggedin
    $http.get("/checksession").success(function (data) {
      if (data.isLoggedIn) {
        // obj for data
        User = data;
        // update scope
        $scope.user = User;
        //console.log("user: " + JSON.stringify($scope.user));
      } else {
          // if not logged in
        $window.location.href = '/login';
      }
    })
    .error(function (err) {
      console.log('Error: ' + err);
    });

}]);
