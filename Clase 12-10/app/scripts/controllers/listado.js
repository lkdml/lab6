angular
  .module('miApp')
  .controller('ListadoCtrl', ['$scope', 'Datos', 'Personas' ,
   function($scope, Datos,Personas){

   	$scope.usuarios={};

   	Personas.listado()
   	.then(function(rta){
        $scope.usuarios=rta;
      })
   	
   	$scope.borrar=function(indice){
   		$scope.usuarios.splice(indice,1);
   	};

   	//ANGULAR NOS OFRECE UN FILTER QUE VA A SER DE LA FORMA $FILTER('nombreFiltro')(propiedad,valor)
   	//dentro de los filtros de angular, esta el | uppercase es que pasa todos los que estan en mayuscula.
   	//otro es currency que es para moneda
   	// otro es number para cambiar la coma y demas number:2
   	// otro es date que se usa date: 'yyyy-MM-dd'


  }]);
