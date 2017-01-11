/**
 * PropertyDetails.js 属性明细
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name: {
      type: 'string'
    },
    order: {
      type: 'integer'
    },
    status: {
      type: 'integer',
      defaultsTo: 1
    },
    property_id: {
      model: 'property'
    }
  }
};
