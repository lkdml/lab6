angular
  .module('miApp')
  .controller('ModifMateriaCtrl', ['$scope', 'Datos', 'ActualizarMateria',
   function($scope, Datos, ActualizarMateria){
    console.log(ActualizarMateria);
     $scope.cargar = actualizar;
   	$scope.materia=ActualizarMateria.materias;


    function actualizar(){
   		Datos.actualizarMateria($scope.materia);
      $scope.materiaForm.$setPristine();
  		$scope.materia={};
   	};

  }]);
