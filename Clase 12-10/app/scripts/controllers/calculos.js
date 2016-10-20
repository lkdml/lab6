angular
  .module('miApp')
  .controller('CalculosCtrl', ['$scope', 'Personas',
   function($scope, Personas){

    $scope.resultadoEmailUsuarios;
    $scope.promedioEdadHombres;
    $scope.usuarioMasGrande;
   	
    $scope.datos;

   	Personas.listado().then(function(rta){
        $scope.datos= rta;
      })
      .catch(function(e){
        return e;
      });
   	
    /*Retornar un array de strings (el email de los usarios de sexo masculino).*/
    $scope.devolverEmailUsuarios= function(){
      $scope.resultadoEmailUsuarios= $scope.datos.filter(function(persona){
          return persona.gender==="male";
      }).map(function(persona){
        return persona.email;
      });
    };

    /*Retornar el promedio de edad de los usuarios hombres.*/
    $scope.devolverPromedioEdadHombres= function(){
      var countHombres= $scope.datos.filter(function(persona){
          return persona.gender==="male"
      }).length;

      $scope.promedioEdadHombres= $scope.datos.filter(function(persona){
          return persona.gender==="male"
      })
      .reduce(function(valorAnterior,valorActual){
          return valorAnterior+valorActual.age
      },0)/countHombres;

    };

    /*Retornar un objeto que contenga solo el nombre y la edad (name y age) del usuario mas grande.*/
    $scope.devolverUsuarioMasGrande= function(){

        $scope.usuarioMasGrande = $scope.datos.map(function(persona){
          return {Nombre:persona.name,Edad:persona.age};
        })
        .reduce(function(valorAnterior,valorActual){
            if(valorAnterior.Edad>=valorActual.Edad)
            {
              return valorAnterior;
            }
            else{ return valorActual;}
        });
    };
   
  }]);
