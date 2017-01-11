module.exports = {
  courseList: ( next ) => {
    Course.find().exec((err,course) => {
      if(err) throw err;
      next(course)
    });
  }
}
