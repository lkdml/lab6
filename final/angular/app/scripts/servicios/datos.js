angular
  .module('miApp')
  .factory('Datos', ['$http',function($http){
    var data = [];
    var Url="http://localhost:3000/";

    return { buscarAlumno:buscarAlumno,
          cargarAlumno:cargarAlumno,
          eliminarAlumno:eliminarAlumno,
          actualizarAlumno:actualizarAlumno,
          listarAlumnos: listarAlumnos,
          buscarNotas: buscarNotas,

          buscarMateria:buscarMateria,
          cargarMateria:cargarMateria,
          eliminarMateria:eliminarMateria,
          actualizarMateria:actualizarMateria,
          listarMaterias: listarMaterias
        };

  function cargarAlumno(Alumno){
    return $http.post(Url+'alumnos/nueva',Alumno);
  }

  function listarAlumnos(){
    return $http.get(Url+'alumnos/');
  }

  function actualizarAlumno(Alumno){
    return $http.post(Url+'alumnos/actualizar',Alumno);
  }

  function eliminarAlumno(Alumno){
    return $http.post(Url+'alumnos/eliminar',Alumno);
  }

  function buscarAlumno(criterio){
    return $http.get(Url+'alumnos/buscar/'+criterio);
  }

  function buscarNotas(nota){
    return $http.get(Url+'alumnos/buscarNotas/'+nota);
  }

  function cargarMateria(Materia){
    return $http.post(Url+'materias/nueva',Materia);
  }

  function listarMaterias(){
    return $http.get(Url+'materias/');
  }

  function actualizarMateria(Materia){
    return $http.post(Url+'materias/actualizar',Materia);
  }

  function eliminarMateria(Materia){
    return $http.post(Url+'materias/eliminar',Materia);
  }

  function buscarMateria(criterio){
    console.log(criterio);
    return $http.get(Url+'materias/buscar/'+criterio);
  }

  }]);
