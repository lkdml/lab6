angular
  .module('miApp', ['ngAnimate', 'ui.router'])

  .config(function($stateProvider,$urlRouterProvider){
    //adentro del bloque declaramos los estados
    //state recibe 1 parametro, el nombre del estado y 2ndo el objeto donde vamos a configurar las variables del estado
    //aca podemos atachar el controller, lo que nos permite reutilizar la vista con diferentes controllers
    $stateProvider.state('home',{
          url:'/home',
          controller: 'MainCtrl',
          templateUrl:'views/home.html'
        })

    $stateProvider.state('listadoAlumnos',{
        url:'/alumnos/listado',
        controller: 'ListadoAlumnoCtrl',
        templateUrl:'views/alumnos/listado.html'
      })

    $stateProvider.state('altaAlumno',{
        url:'/alumnos/alta',
        controller: 'CargaAlumnoCtrl',
        templateUrl:'views/alumnos/carga.html'
      })

    $stateProvider.state('modifAlumno',{
        url:'/alumnos/modificar',
        controller: 'ModifAlumnoCtrl',
        templateUrl:'views/alumnos/carga.html'
      })

    $stateProvider.state('listadoMaterias',{
        url:'/materias/listado',
        controller: 'ListadoMateriaCtrl',
        templateUrl:'views/materias/listado.html'
      })

    $stateProvider.state('altaMateria',{
        url:'/materias/alta',
        controller: 'CargaMateriaCtrl',
        templateUrl:'views/materias/carga.html'
      })

    $stateProvider.state('modifMateria',{
        url:'/materias/modificar',
        controller: 'ModifMateriaCtrl',
        templateUrl:'views/materias/carga.html'
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
