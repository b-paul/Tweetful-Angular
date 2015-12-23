'use strict';

import angular from 'angular';
import 'angular-route';

angular.module('tweetful', ['ngRoute']).config([
  '$routeProvider',
  function($routeProvider){
    $routeProvider
      .when('/', {
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
      })
      .when('/follows', {
        templateUrl: 'templates/follows.html',
        controller: 'FollowsController'
      })
      .when('/tweets', {
        templateUrl: 'templates/tweets.html',
        controller: 'TweetsController'
      })
      .when('/about', {
        templateUrl: 'templates/about.html',
        controller: 'AboutController'
      })
      .when('/team', {
        templateUrl: 'templates/team.html',
        controller: 'TeamController'
      })
      .otherwise('/');
  }]);
