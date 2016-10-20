angular
  .module('miApp', ['ngAnimate', 'ui.router'])
  //routeo por estado
  //las provider las usamos para antes de que cargue angular, cargue la config del routeo.
  .config(function($stateProvider,$urlRouterProvider){
    //adentro del bloque declaramos los estados
    //state recibe 1 parametro, el nombre del estado y 2ndo el objeto donde vamos a configurar las variables del estado
    //aca podemos atachar el controller, lo que nos permite reutilizar la vista con diferentes controllers
    $stateProvider.state('home',{
          url:'/home',
          views:{
            principal:{
                controller: 'CargaCtrl',
                templateUrl:'views/form.html'
            },
            secundaria:{
                controller: 'ListadoCtrl',
                templateUrl:'views/list.html'
            }
          }//este objeto sirve para ponerle nombre a la propiedad, diciendole que hay una vista que se llama principal, en el ui-view la llamo x el nombre
        })

    $stateProvider.state('listadoPersonas',{
          url:'/personas/listado',
          controller: 'ListadoCtrl',
          templateUrl:'views/list.html',
        })

    $stateProvider.state('calculosPersonas',{
          url:'/personas/calculos',
          abstract:true, //los estados abstractos son como las clases abstractas, no se pueden llamar. Tenemos que llamar a los hijos
          controller: 'CalculosCtrl',
          templateUrl:'views/calculos.html',
        })

    //creamos un estado que herede todo lo que tiene calculos(dado que es abstracto)
    //haciendo nombreDelPadre.NombreHijo con esto hereda el html y el controller
    $stateProvider.state('calculosPersonas.Calculos',{
          url:'/Calcular',
          controller: 'MainCtrl',
          templateUrl:'views/form.html',
        })


    //despues en el html, usamos ui-sref="" y le pasamos el estado de las diferentes configuraciones

    //si ningun estado existe o matchea con los definidos, va al default
    //se maneja por nombres de estado
    $urlRouterProvider.otherwise('home');

    })


  .animation('.slide', [function() {
    return {
      enter: function(element, doneFn) {
        jQuery(element).fadeIn(1000, doneFn);
      },

      move: function(element, doneFn) {
        jQuery(element).fadeIn(1000, doneFn);
      },

      leave: function(element, doneFn) {
        jQuery(element).fadeOut(1000, doneFn);
      }
    }
  }])

  .filter('miFiltro',function(){
    //necesita devolver una funcion
    return function(item){
      //este primer parametro es el que esta en la propiedad a la izquierda del |
      //console.log(item);
      if (item != 'heatherlucas@bisba.com')
      {
          return item;
      }
      else{
        return 'Sin email';
      }
    }
  })

  .filter('traduccionGenero',function(){
    return function(item){
        if (item == "female"){
          return "Femenino";
        }
        else{
          return "Masculino";
        }
    };
  })

  .filter('filtroAmigos',function () {
    return function(items){
      //console.log(items);
      return items.map(function(item){
        return item.name;
      })
      .reduce(function(ant,act,indice,array){
        if (indice==array.length-1)
        {
          return ant+act;
        }
        else{
          return ant+act+",";
        }
    
      },'')
    };
  })

  .filter('fTags',function () {
    return function(items){
      //console.log(items);
      return items.reduce(function(ant,act,indice,array){
        if (indice==array.length-1)
        {
          return ant+act;
        }
        else{
          return ant+act+",";
        }
    
      },'')
    };
  })

  //este filtro se ve aplicado en list.html en el ng-repeat
  .filter('filtroArray',function(){
    return function(lista,edad){

      //si no tengo edad puesta, fijo una
      if (!edad)edad=25;

      var arrayResultados=[];

      for (var i = 0; i <lista.length; i++) {
        if (lista[i].age>edad){
          arrayResultados.push(lista[i]);
        }
      };

      return arrayResultados;
    };
  })

  //filtro aplicado al array entero del ng-repeat
  .filter('filterTags',function(){
    return function(lista,tag) {

      if(!tag)tag='in';
      var resultados=[];

      resultados=lista.filter(function(item){
          return item.tags.indexOf(tag)>-1;
      });
      return resultados;
    };
  })
