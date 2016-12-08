angular
  .module('miApp')
  .controller('CargaAlumnoCtrl', ['$scope', 'Datos',
   function($scope, Datos){
     $scope.cargar = cargar;
     $scope.alumno = {};

     function cargar() {
       Datos.cargarAlumno($scope.alumno);
       $scope.alumnoForm.$setPristine();
       //console.log($scope.mascota);
       //console.log(Datos.listado());
       $scope.alumno = {};
     }
  }]);
