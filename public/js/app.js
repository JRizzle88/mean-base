// angular routing
var app = angular.module('BoilerplateApp', ['ngRoute']);

// User global object to check loggedin status
app.service('User', function () {
    return {};
})

app.config(function ($routeProvider, $locationProvider) {
  $routeProvider
  .when('/login', {
    controller: 'LoginController',
    templateUrl: 'views/login.html'
  })
  .when('/signup', {
    controller: 'SignupController',
    templateUrl: 'views/signup.html'
  })
  .otherwise({
    controller: 'HomeController',
    templateUrl: 'views/home.html'
  });

  // use the HTML5 History API
  $locationProvider.html5Mode(true);
});
