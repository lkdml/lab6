var app = angular.module("parcial",['ngRoute']);
    app.config(function($routeProvider){
        $routeProvider.when("/inicio",
              { templateUrl  : "/views/punto1.html"});
    });
    app.controller("lkdmlController", ['$scope',
        function ($scope){
            $scope.algo = 2;
        console.log("algo");
    }])
    ;