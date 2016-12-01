angular
  .module('miApp')
  .controller('CargaMascotaCtrl', ['$scope', 'Datos',
   function($scope, Datos){
     $scope.cargar = cargar;
     $scope.mascota = {};

     function cargar() {
       Datos.cargarMascota($scope.mascota);
       console.log($scope.mascota);
       console.log(Datos.listado());
       $scope.mascota = {};
     }
  }]);
