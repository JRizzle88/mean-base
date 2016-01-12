app.controller('HomeController', ['$scope', '$http', 'User', function($scope, $http, User) {
  // User is the global obj we use to check the user login status
  $scope.user = User;
}]);
