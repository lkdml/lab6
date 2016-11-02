angular
  .module('miApp')
  .controller('ListadoCtrl', ['$scope', 'Datos',
   function($scope, Datos){

   	$scope.listadoUsuarios=Datos.listado();
   	console.log($scope.listadoUsuarios);

   	$scope.borrar=function(indice){
   		console.log(indice);
   		$scope.listadoUsuarios.splice(indice,1);
   	};

  }]);
