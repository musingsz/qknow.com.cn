/**
 * Lecturer.js 讲师
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name: {
      type: 'string'
    },
    nickname: {
      type: 'string'
    },
    sex: {
      type: 'string'
    },
    compane: {
      type: 'string'
    },
    introduction: {
      type: 'string'
    },
    order: {
      type: 'integer'
    },
    status: {
      type: 'integer'
    }
  }
};
