/**
 * Receta.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	 id : {
      type: 'integer',
      primaryKey: true,
      autoIncrement: true
    },

    nombre : {
      type: 'string',
      required: true
    },

    preparacion : {
      type: 'string',
      required: true
    },

    dificultad : {
      type: 'string',
      required: true
    },

    enfermedad : {
      type: 'string',
      required: true
    },

    etapa : {
      type: 'string',
      required: true
    },
    imagen : {
      type: 'string',
      required: true
    }
  }
};

