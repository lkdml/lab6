angular
  .module('miApp')
  .factory('Datos', [function(){
    var data = [];

    return { listado: listadoData,
    			cargar:cargar
    		};

	function cargar(objeto){
		data.push(objeto);
	}

	function listadoData(){
		return data;
	}


  }]);
