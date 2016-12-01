angular
  .module('miApp')
  .factory('Datos', ['$http',function($http){
    var data = [];
    var Url="http://localhost:3000";

    return { cargarMascota: cargarMascota,
          listarMascotas: listarMascotas,
          cargarProducto: cargarProducto,
          listarProductos: listarProductos
        };

  function cargarMascota(objetoMascota){
    return $http.post(Url+'/mascotas/nueva',objetoMascota);
  }

  function listarMascotas(){
    return $http.get(Url+'/mascotas/');
  }

  function cargarProducto(objetoProducto){
    return $http.post(Url+'/productos/cargar',objetoProducto);
  }

  function listarProductos(){
    return $http.get(Url+'/productos/');
  }


  }]);
