/**
 * Course.js 课程
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    title: {
      type: 'string'
    },
    sub_title: {
      type: 'string'
    },
    image: {
      type: 'string'
    },
    chapter_count: {
      type: 'integer'
    },
    time_length: {
      type: 'integer'
    },
    difficulty: {
      type: 'string',
      enum: ['初级', '中级', '高级']
    },
    order: {
      type: 'integer'
    },
    status: {
      type: 'integer',
      defaultsTo: 1
    },
    course_type: {
      model: 'PropertyDetails'
    },
    lecturer: {
      model: 'Lecturer'
    }
  }
};
