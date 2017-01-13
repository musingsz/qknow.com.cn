/**
 * CourseController
 *
 * @description :: Server-side logic for managing courses
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  courseList: (req, res) => {
    CourseService.courseList(function(err, course) {
      if (err) return res.apiError(err);
      return res.apiSuccess(course)
    });
  },
  courseListByCourseTypeId: (req, res) => {
    CourseService.courseListByCourseTypeId({
      courseType: req.params.courseType
    }, function(err, course) {
      if (err) return res.apiError(err);
			//StatisticService.findByCourseId()
      return res.apiSuccess(course)
    });
  },
  courseById: (req, res) => {
    CourseService.courseById({
      courseId: req.params.courseId
    }, function(err, course) {
      if (err) return res.apiError(err);
      return res.apiSuccess(course)
    });
  }
};
