var express = require('express');
var enrutador = express().Router();



var miJson = {
    'nombre': 'pepas',
    'marca': 'arcor',
    'peso' : '200 grs',
    'categoria' : 'dulce',
    'descripcion' : 'galletitas dulces y ricas',
    'proveedor' : [{ 
        'nombre' : 'galletos',
        'localidad' : 'caba',
        'telefono' : ' 5555-5555',
        'direccion' : 'Lomas 49'

                    }]
};

enrutador.get('/',function (req,res,next){
	res.send("Hola Mundo");
});


//El usuario verá un listado con los artículos con el nombre,  marca,  precio, stock y nombre del proveedor.
ej.route('/articulos')
	.get(function (req,res,next){
		res.send(req.db.find({},{nombre:1,marca:1,precio:1,stock:1,proveedor:{nombre:1}}).toArray(err,data)=>{res.send(data);});
	});

// Al presionar sobre un item se verán todos los datos de dicho artículo. 
ej.route('/articulos/:id')
	.get(function (req,res,next){
		res.send(req.db.find({},{nombre:1,marca:1,precio:1,stock:1,proveedor:{nombre:1}}).toArray(err,data)=>{res.send(data);});
	});
//Se dará de alta un artículo con los siguientes datos:
// nombre, marca, tamaño/peso,  precio,  categoría, descripción y los siguientes datos del proveedor, nombre, localidad, teléfono y dirección.
ej.route('/articulos')
	.post(function (req,res,next){
		req.db.insert({
			'nombre':req.params.nombre,
			'marca':req.params.marca,
			'precio':req.params.precio,
			'stock':req.params.stock,
			'proveedor':{'nombre':req.params.proveedorNombre,
						'localidad':req.params.proveedorLocalidad,
						'telefono':req.params.proveedorTelefono,
						'direccion':req.params.proveedorDireccion}
			};
		res.send('operacion realizada');
	});


//Hacer las consultas a la bd en un módulo que será incluido en el módulo de inicio del servidor.


