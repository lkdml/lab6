angular
  .module('miApp')
  .controller('ListadoAlumnoCtrl', ['$scope','$state', 'Datos','ActualizarAlumno',
   function($scope,$state, Datos, ActualizarAlumno){


   	Datos.listarAlumnos().then(function(rta){
        $scope.alumnos= rta.data;
      })
      .catch(function(error){
        console.log(error);
      });

   	$scope.borrar=function(indice){
      $scope.alumnos.splice($scope.alumnos.indexOf(indice),1);
      Datos.eliminarAlumno(indice);
   	};

    $scope.editar=function(Alumno){
      $state.go('modifAlumno');
      ActualizarAlumno.alumnos=Alumno;
   	};


    $scope.buscarPorIndice= function(criterio){
      $scope.criterio="";
      Datos.buscarAlumno(criterio).then(function(rta){
        $scope.alumnos= rta.data;
      })
      .catch(function(error){
        console.log(error);
      });
    }
    $scope.buscarPorNota= function(nota){
      $scope.nota="";
      Datos.buscarNotas(nota).then(function(rta){
        $scope.alumnos= rta.data;
      })
      .catch(function(error){
        console.log(error);
      });
    }

  }]);
