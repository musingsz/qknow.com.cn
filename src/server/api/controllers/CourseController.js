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
	}
};
