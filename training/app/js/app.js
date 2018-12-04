'use strict';

angular.module('app', ['ngRoute', '7minWorkout']).config(function ($routeProvider, $sceDelegateProvider) {
        $routeProvider.when('/start', {
            templateUrl: 'partials/start.html'
        });
        $routeProvider.when('/workout', {
            templateUrl: 'partials/workout.html',
            controller: 'WorkoutController'
        });
        $routeProvider.when('/finish', {
            templateUrl: 'partials/finish.html'
        });
        $routeProvider.otherwise({
            redirectTo: '/start'
        });

        $sceDelegateProvider.resourceUrlWhitelist([
            // zezwalamy na zasoby z tego samego źródła
            'self',
            // A teraz zezwalamy na wczytywanie zasobów z innych domen.  
            // Warto zwrócić uwagę na różnice pomiędzy symbolami * oraz **.
            'http://*.youtube.com/**']);
      
    });

angular.module('7minWorkout', []);

