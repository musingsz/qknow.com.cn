module.exports = {
  //获取所有课程
  //
  courseList: (next) => {
    Course.find().populate('lecturer')
      .populate('course_type')
      .exec((err, course) => {
        if (err) next(err, null);
        next(null, course);
      });
  },
  //根据课程类型id查询课程
  courseListByCourseTypeId: (obj, next) => {
    Course.find({
        "course_type": obj.courseType
      })
      .populate('statistic')
      .exec((err, course) => {
        if (err) next(err, null);
        next(null, course);
      });
  },
  //根据课程id查询课程
  courseById: (obj, next) => {
    Course.findOne({
        "id": obj.courseId
      })
      .populate('course_type')
      .populate('lecturer')
      .exec((err, course) => {
        if (err) next(err, null);
        next(null, course);
      });
  },
  UpdateCourseById:(obj,done) => {
    Promise.resolve(Course.update({
      id: obj.id
    },obj))
    .then((course) => {
      done(null,course)
    }).catch((err) => {
      done(err)
    })
  },
  createCourse:(obj,done) => {
    Promise.resolve(Course.create(obj)).then((course) => {
      done(null,course)
    }).catch((err) => {
      done(err)
    })
  },
}
