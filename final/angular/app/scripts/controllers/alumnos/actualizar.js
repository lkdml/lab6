angular
  .module('miApp')
  .controller('ModifAlumnoCtrl', ['$scope', 'Datos', 'ActualizarAlumno',
   function($scope, Datos, ActualizarAlumno){
     $scope.cargar = actualizar;
   	$scope.alumno=ActualizarAlumno.alumnos;


    function actualizar(){
   		Datos.actualizarAlumno($scope.alumno);
      $scope.alumnoForm.$setPristine();
  		$scope.alumno={};
   	};

  }]);
