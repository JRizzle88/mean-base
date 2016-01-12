app.controller('LoginController', ['$scope', '$http', '$window', function($scope, $http, $window) {

  // booleans to show/hide alerts
  $scope.submitted = false;
  $scope.showErrorAlert = false;

  // alert string
  $scope.errorAlert = '';

  // account model for our view
  $scope.account = {
    email : '',
    password : '',
    admin: false,
    notes: ''
  }

  // at login button click
  $scope.login = function(account) {
    $scope.submitted = true;

    // user obj we are sending to the server
    var user = {
      email : account.email,
      password : account.password,
      admin : account.admin,
      notes : account.notes
    };
    console.log(user);

    $http.post("/api/login", user)
    .success(function (data, status) {
      console.log('Successful login.');
      // if successfull redirect to /
      $window.location.href = '/';
    })
    .error(function (data) {
      console.log('Error: ' + data);
      $scope.showErrorAlert = true;
      $scope.errorAlert = data[0];
    });
  };
}]);
