module.exports = {
    findByCourseId:(obj,next) => {
      Statistic.find({
        course: obj.courseId
      }).exec((err, statistic) => {
        if (err) next(err, null);
        next(null, statistic);
      });
    }
}
