angular
  .module('miApp')
  .controller('ListadoMasctaCtrl', ['$scope', 'Datos',
   function($scope, Datos){

   	Datos.listarMascotas().then(function(rta){
        $scope.mascotas= rta.data;
      })
      .catch(function(error){
        console.log(error);
      });

   	$scope.borrar=function(indice){
   		$scope.usuarios.splice(indice,1);
   		//llamar a datos
   	};

   	$scope.editar=function(objetoMascota){
   		//$scope.usuarios.splice(indice,1);
      $state.go('modifMascota');
      console.log(indice);
   	};


  }]);