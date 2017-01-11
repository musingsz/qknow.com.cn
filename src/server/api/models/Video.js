/**
 * Video.js 视频
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
    URL: {
      type: 'string'
    },
    image: {
      type: 'string'
    },
    time_length: {
      type: 'integer'
    },
    order: {
      type: 'integer'
    },
    status: {
      type: 'integer'
    },
    course_id: {
      model: 'Course'
    }
  }
};
