angular
  .module('miApp')
  .controller('CalculosCtrl', ['$scope', 'Personas',
   function($scope, Personas){

   	var datos;
   	Personas.listado().then(function(rta){
        datos= rta; 
      }) 
      .catch(function(e){
        return e;
      });
   	

   	$scope.calculo1=function(){
   		$scope.resultado1 = datos.reduce(function(prev, next){
			        			return prev + next.age;
			     				 }, 0) / datos.length;
   	};
   	$scope.calculo2=function(){
   		$scope.resultado2 = datos.filter(function(user){
   									return user.gender=="female";
								})
   								.reduce(function(prev, next){
			        			return prev + next.age;
			     				 }, 0) / datos.filter(function(user){
                    return user.gender=="female";
                }).length;
   	};
   	$scope.calculo3=function(){
   		
   		$scope.resultado3 = datos.map(function (user) {
						      return {
						      			nombre:user.name
						      			,edad:user.age};
						      })
						      .reduce(function (anterior,actual) {
						      if (anterior.edad >=actual.edad)
						      {
						        return anterior;
						      }
						      else{return actual;}
						      });
						   	};

     
  }]);
