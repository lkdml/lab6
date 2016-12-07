angular
  .module('miApp')
  .controller('ModifMascotaCtrl', ['$scope', 'Datos', 'ActualizarMascota',
   function($scope, Datos, ActualizarMascota){
     $scope.cargar = actualizar;
   	$scope.mascota=ActualizarMascota.mascota;


    function actualizar(){
   		Datos.actualizarMascota($scope.mascota);
      $scope.mascotaForm.$setPristine();
  		$scope.mascota={};
   	};

  }]);
