// angular routing
var app = angular.module('BoilerplateApp', ['ngRoute']);

// User global object to check loggedin status anywhere in the app
app.service('User', function () {
    return {};
})

// route provider to redirect the user to the requested view, using a single page application setup
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
  // this line is needed because the SPA urls would show # characters otherwise. It also needs line 6 in index.html
  $locationProvider.html5Mode(true);
});
