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
  },
  UpdateCourseById: (req, res) => {
    let id = req.body.id;
    let title = req.body.title;
    let sub_title = req.body.sub_title;
    let image = req.body.image;
    let chapter_count = req.body.chapter_count;
    let time_length = req.body.time_length;
    let difficulty = req.body.difficulty;
    let course_type = req.body.course_type.id;
    let lecturer = req.body.lecturer.id;
    CourseService.UpdateCourseById({
      id: id,
      title: title,
      sub_title: sub_title,
      image: image,
      chapter_count: chapter_count,
      time_length: time_length,
      difficulty: difficulty,
      course_type: course_type,
      lecturer: lecturer
    },(err,course) => {
      if (err) return res.apiError(err);
      return res.apiSuccess(course);
    })
  },
  createCourse:(req, res) => {
    let title = req.body.title;
    let sub_title = req.body.sub_title;
    let image = req.body.image;
    let chapter_count = req.body.chapter_count;
    let time_length = req.body.time_length;
    let difficulty = req.body.difficulty;
    let course_type = req.body.course_type.id;
    let lecturer = req.body.lecturer.id;
		CourseService.createCourse({
      title: title,
      sub_title: sub_title,
      image: image,
      chapter_count: chapter_count,
      time_length: time_length,
      difficulty: difficulty,
      course_type: course_type,
      lecturer: lecturer
		},(err,course) => {
			if (err) return res.apiError(err);
			return res.apiSuccess(course);
		})
	}
};
