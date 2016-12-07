angular
  .module('miApp')
  .factory('Datos', ['$http',function($http){
    var data = [];
    var Url="http://localhost:3000/";

    return { buscarMascota:buscarMascota,
          cargarMascota:cargarMascota,
          eliminarMascota:eliminarMascota,
          actualizarMascota:actualizarMascota,
          listarMascotas: listarMascotas,
          cargarProducto: cargarProducto,
          listarProductos: listarProductos
        };

  function cargarMascota(Mascota){
    return $http.post(Url+'mascotas/nueva',Mascota);
  }

  function listarMascotas(){
    return $http.get(Url+'mascotas/');
  }

  function actualizarMascota(Mascota){
    return $http.post(Url+'mascotas/actualizar',Mascota);
  }

  function eliminarMascota(Mascota){
    return $http.post(Url+'mascotas/eliminar',Mascota);
  }

  function buscarMascota(criterio){
    return $http.get(Url+'mascotas/buscar/'+criterio);
  }


  function cargarProducto(Producto){
    return $http.post(Url+'productos/cargar',Producto);
  }

  function listarProductos(){
    return $http.get(Url+'productos/');
  }


  }]);
