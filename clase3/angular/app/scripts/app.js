// con 1 parametro hacemos un getter y con 2 parametros es un setter
angular
	.module('miApp',['ngAnimate'])
	.controller("miCtrl",function($scope){
		$scope.email = "mi@email.com";
		$scope.vista = 1;
	})