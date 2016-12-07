angular
  .module('miApp')
  .controller('ListadoMascotaCtrl', ['$scope','$state', 'Datos','ActualizarMascota',
   function($scope,$state, Datos, ActualizarMascota){


   	Datos.listarMascotas().then(function(rta){
        $scope.mascotas= rta.data;
      })
      .catch(function(error){
        console.log(error);
      });

   	$scope.borrar=function(indice){
      $scope.mascotas.splice($scope.mascotas.indexOf(indice),1);
      Datos.eliminarMascota(indice);
   	};

    $scope.editar=function(Mascota){
      $state.go('modifMascota');
      ActualizarMascota.mascota=Mascota;
   	};


    $scope.buscarPorIndice= function(criterio){
      $scope.criterio="";
      Datos.buscarMascota(criterio).then(function(rta){
        $scope.mascotas= rta.data;
      })
      .catch(function(error){
        console.log(error);
      });
    }


  }]);
