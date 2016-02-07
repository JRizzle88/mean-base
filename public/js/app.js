// angular routing
var app = angular.module('AppName', ['ngRoute']);

// User global object to check loggedin status anywhere in the app
app.service('User', function () {
    return {};
})

// route provider to redirect the user to the requested view, using a single page application setup
app.config(function ($routeProvider, $locationProvider) {
  $routeProvider
  .when('/login', {
    controller: 'LoginController',
    templateUrl: 'js/users/views/login.html'
  })
  .when('/signup', {
    controller: 'SignupController',
    templateUrl: 'js/users/views/signup.html'
  })
  .when('/account', {
    controller: 'AccountController',
    templateUrl: 'js/users/views/account.html'
  })
  .when('/admin', {
    controller: 'BackendController',
    templateUrl: 'js/backend/views/backend.html'
  })
  .otherwise({
    controller: 'HomeController',
    templateUrl: 'js/home/views/home.html'
  });

  // use the HTML5 History API
  // this line is needed because the SPA urls would show # characters otherwise. It also needs line 6 in index.html
  $locationProvider.html5Mode(true);
});
