angular
  .module('miApp')
  .controller('CargaMateriaCtrl', ['$scope', 'Datos',
   function($scope, Datos){
     $scope.cargar = cargar;
     $scope.materia = {};

     function cargar() {
       Datos.cargarMateria($scope.materia);
       $scope.materiaForm.$setPristine();
       //console.log($scope.materia);
       //console.log(Datos.listado());
       $scope.materia = {};
     }
  }]);
