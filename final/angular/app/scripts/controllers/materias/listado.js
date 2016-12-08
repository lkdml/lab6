angular
  .module('miApp')
  .controller('ListadoMateriaCtrl', ['$scope','$state', 'Datos','ActualizarMateria',
   function($scope,$state, Datos, ActualizarMateria){


   	Datos.listarMaterias().then(function(rta){
        $scope.materias= rta.data;
      })
      .catch(function(error){
        console.log(error);
      });

   	$scope.borrar=function(indice){
      $scope.materias.splice($scope.materias.indexOf(indice),1);
      Datos.eliminarMateria(indice);
   	};

    $scope.editar=function(Materia){
      $state.go('modifMateria');
      ActualizarMateria.materias=Materia;
   	};


    $scope.buscarPorIndice= function(criterio){
      $scope.criterio="";
      Datos.buscarMateria(criterio).then(function(rta){
        $scope.materias= rta.data;
      })
      .catch(function(error){
        console.log(error);
      });
    }


  }]);
