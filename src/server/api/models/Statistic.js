/**
 * Statistic.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    score:{
      type: 'integer'
    },
    sum: {
      type: 'integer'
    },
    order: {
      type: 'integer'
    },
    status: {
      type: 'integer'
    }

  }
};
