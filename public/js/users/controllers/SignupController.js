app.controller('SignupController', ['$scope', '$http', '$window', function($scope, $http, $window) {

    // booleans to show/hide alerts
    $scope.submitted = false;
    $scope.showPasswordAlert = false;
    $scope.showErrorAlert = false;

    // account model for our view
    $scope.account = {
        email : '',
        password : '',
        repeatPassword : '',
        notes: '',
        admin: false,
        role: '',
        license: ''
    }

    // signup button click
    $scope.signup = function(account) {
        resetErrors();
        $scope.submitted = true;

        if (account.password != account.repeatPassword) {
            $scope.submitted = false;
            $scope.showPasswordAlert = true;
        }

        // user obj we are sending to the server
        var user = {
            email: account.email,
            password: account.password,
            notes: account.notes,
            admin: account.admin,
            role: account.role,
            license: account.license
        };

        $http.post("/api/signup", user).success(function (data, status) {
            console.log('Successful signup.');
            // if successful, redirect to login page
            $window.location.href = '/login';
            console.log("this is what we sent to mongoose" + JSON.stringify(user));
        })
        .error(function (data) {
            console.log('Error: ' + data);
            $scope.showErrorAlert = true;
            $scope.submitted = false;
        });
    };

    var resetErrors = function() {
        $scope.submitted = false;
        $scope.showPasswordAlert = false;
        $scope.showErrorAlert = false;
    }
}]);
