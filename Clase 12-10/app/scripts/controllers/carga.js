angular
  .module('miApp')
  .controller('CargaCtrl', ['$scope', 'Datos',
   function($scope, Datos){

   	$scope.usuario={};

   	//se encarga de la carga
   	$scope.cargar=function cargar(){
 		Datos.cargar($scope.usuario);
      $scope.userForm.$setPristine();
  		$scope.usuario={};
   	};
     
  }]);