angular
  .module('miApp', ['ngAnimate', 'ui.router'])

  .config(function($stateProvider,$urlRouterProvider){
    //adentro del bloque declaramos los estados
    //state recibe 1 parametro, el nombre del estado y 2ndo el objeto donde vamos a configurar las variables del estado
    //aca podemos atachar el controller, lo que nos permite reutilizar la vista con diferentes controllers
    $stateProvider.state('home',{
          url:'/home',
          controller: 'MainCtrl',
          templateUrl:'views/list.html'
        })

    $stateProvider.state('listadoProductos',{
        url:'/personas/listado',
        controller: 'ListadoCtrl',
        templateUrl:'views/list.html'
      })

    $stateProvider.state('altaProductos',{
        url:'/personas/alta',
        controller: 'ListadoCtrl',
        templateUrl:'views/list.html'
      })

    $stateProvider.state('modifProducts',{
        url:'/personas/modificar',
        controller: 'ListadoCtrl',
        templateUrl:'views/list.html'
      })

    $stateProvider.state('listadoMascotas',{
        url:'/mascotas/listado',
        controller: 'ListadoMasctaCtrl',
        templateUrl:'views/mascotas/listado.html'
      })

    $stateProvider.state('altaMascota',{
        url:'/mascotas/alta',
        controller: 'CargaMascotaCtrl',
        templateUrl:'views/mascotas/carga.html'
      })

    $stateProvider.state('modifMascota',{
        url:'/mascotas/modificar',
        controller: 'CargaMascotaCtrl',
        templateUrl:'views/list.html'
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


