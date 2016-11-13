/**
 * RecetaController
 *
 * @description :: Server-side logic for managing recetas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
	create : function(req,res){
		console.log(req);
		
		var recetaObj= {
			nombre : req.param('nombre'),
			preparacion : req.param('preparacion'),
			dificultad : req.param('dificultad'),
			enfermedad :req.param('enfermedad'),
			etapa : req.param('etapa'),
			imagen : req.param('imagen')
		}

		Receta.create(recetaObj, function(err, receta){
			if(err){
				console.log(err);
				return res.redirect('receta')
			}
			res.redirect('');
		});
	}
};

