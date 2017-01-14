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
      .exec((err, course) => {
        if (err) next(err, null);
        next(null, course);
      });
  }
}
