/**
 * ProductoPorReceta.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	tableName: 'productoPorReceta',
  attributes: {
  	 recet : {
      type: 'integer',
      primaryKey: true,
      model: 'Receta'
    },

    product : {
      type: 'integer',
      model: 'Producto'
    },

    cantidadProducto : {
      type: 'string',
      required: true
    }
  }
};

