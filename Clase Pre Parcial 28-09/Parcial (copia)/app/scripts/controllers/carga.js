angular
  .module('miApp')
  .controller('CargaCtrl', ['$scope', 'Datos',
   function($scope, Datos){

   	$scope.user={};

   	$scope.cargar=function cargar(){
   		Datos.cargar($scope.user);
      $scope.userForm.$setPristine();
  		$scope.user=null;
  		$scope.user={};
   	};
     
  }]);
