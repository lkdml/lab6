//8. Crear el módulo “operaciones” que contenga los métodos: 
//a. iBrutos: Devuelve el 3% del importe ingresado.
//b. Iva: Devuelve el 21% del importe.
//c. importeTotal: Le suma el iva al importe.
var operaciones = { "iBrutos": function(valor){return valor*0.3;},
					"iva" : function(valor){return valor*0.21;},
					"importeTotal": function(valor){ return valor+this.iva(valor);}
				}
module.exports  =  operaciones;