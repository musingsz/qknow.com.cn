module.exports = {
  courseList: ( next ) => {
    Course.find().populate('lecturer')
                 .populate('course_type')
                 .exec((err,course) => {
      if(err) throw err;
      next(course)
    });
  }
}
