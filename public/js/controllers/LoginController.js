app.controller('LoginController', ['$scope', '$http', '$window', function($scope, $http, $window) {

  $scope.submitted = false;
  $scope.showErrorAlert = false;

  $scope.errorAlert = '';

  $scope.account = {
    email : '',
    password : ''
  }


  $scope.login = function(account) {
    $scope.submitted = true;

    var user = {
      email : account.email,
      password : account.password
    };

    $http.post("/api/login", user)
    .success(function (data, status) {
      console.log('Successful login.');
      $window.location.href = '/';
    })
    .error(function (data) {
      console.log('Error: ' + data);
      $scope.showErrorAlert = true;
      $scope.errorAlert = data[0];
    });
  };


}]);
