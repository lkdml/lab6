var MAIN = (function (DATA) {

  var lib = {};

  /*
    realizar las operaciones usando los metosos map,  reduce y filter y combinaciones entre ellos
  */

  // Retornar una array de strings (el nombre de los usarios de sexo femenino)
  lib.femaleUsers = function () {
    return DATA
      .filter(function (user) {
        return user.gender === 'female';
      })
      .map(function (user) {
        return user.name;
      });
  };

  // Retornar una array de strings (el email de los usarios de sexo masculino)
  lib.maleUsersEmails = function () {
    return DATA
      .filter(function (user) {
        return user.gender === 'male';
      })
      .map(function (user) {
        return user.email;
      });
  };

  // Retornar un array de objetos que solo contengan las claves name, email y age, de todos los usuarios mayores que 'age'
  lib.userOlderThan = function (age) {
    return DATA
      .filter(function (user) {
        return user.age > age;
      })
      .map(function (user) {
        return [user.name,user.email,user.age];
      });
  };

  // Retornar un objeto que contenga solo el nombre y la edad (name y age) del usuario mas grande.
  lib.olderUser = function () {
    var pepe = DATA
    .reduce(function(anteriorViejo,nuevoViejo){
      if (anteriorViejo.age >= nuevoViejo.age){
        return anteriorViejo
      } else {
        return nuevoViejo;
      }});
    return {"nombre":pepe.name,
            "edad":pepe.age};
    ;
  };

  // Retornar el promedio de edad de los usuarios (number)
  lib.userAgeAverage = function () {
    return DATA
    .map(function (datos){
      return datos.age
    })
    .reduce(function(anteriorViejo,nuevoViejo){
      return anteriorViejo + nuevoViejo;
    })/DATA.length
  };

  // Retornar el promedio de edad de los usuarios hombres (number)
  lib.userMaleAgeAverage = function () {
    return DATA
    .filter(function (user) {
        return user.gender === 'male';
      })
    .map(function (datos,index,array){
      return (datos.age)/array.length;
    })
    .reduce(function(anteriorViejo,nuevoViejo){
      return anteriorViejo + nuevoViejo;
    })
  };

  // Retornar el promedio de edad de los usuarios mujeres (number)
  lib.userFemaleAgeAverage = function () {
    return DATA
    .filter(function (user) {
        return user.gender === 'female';
      })
    .map(function (datos,index,array){
      return (datos.age)/array.length;
    })
    .reduce(function(anteriorViejo,nuevoViejo){
      return anteriorViejo + nuevoViejo;
    })
  };

  // Retornar un objeto  de etiquetas (tags)
  // cada property del objeto es el nombre de una etiqueta
  // y el value es la cantidad de usuarios que tienene esa etiqueta
  lib.tagCloud = function () {
    var tags;

    //console.log(Object.keys(DATA));
    return DATA
    .forEach(function (k){
      console.log(Object.keys(k));
    })

  };

  return lib;

})(DATA);
