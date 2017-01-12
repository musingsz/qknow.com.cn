/**
 * CourseController
 *
 * @description :: Server-side logic for managing courses
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	courseList: (req, res) => {
		CourseService.courseList(function(course) {
				//res.ok(course);
				res.apiSuccess(course)
		});
	},
	courseListByCourseTypeId: (req, res) => {
		CourseService.courseListById({ courseType: req.params.courseType } ,function(course) {
				res.apiSuccess(course)
		});
	},
	courseById: (req, res) => {
		CourseService.courseById({ courseId: req.params.courseId } ,function(course) {
				res.apiSuccess(course)
		});
	}
};
