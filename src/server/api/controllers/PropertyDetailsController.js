/**
 * PropertyDetailsController
 *
 * @description :: Server-side logic for managing propertydetails
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getAllCourseType: (req,res) => {
		PropertyDetailsService.getAllCourseType({},(err, courseType) => {
			if (err) return res.apiError(err);
			return res.apiSuccess(courseType);
		})
	},
	getCourseTypeById: (req, res) => {
		PropertyDetailsService.getCourseTypeById({id: req.params.id },(err, courseType) => {
			if (err) return res.apiError(err);
			return res.apiSuccess(courseType);
		})
	},
	UpdateCourseTypeById: (req, res) => {
		let id = req.body.id;
		let name = req.body.name;
		PropertyDetailsService.UpdateCourseTypeById({
			id: id,
			name: name
		},(err,courseType) => {
			if (err) return res.apiError(err);
			return res.apiSuccess(courseType);
		})
	},
	createCourseType:(req, res) => {
		let name = req.body.name;
		PropertyDetailsService.createCourseType({
			name: name
		},(err,courseType) => {
			if (err) return res.apiError(err);
			return res.apiSuccess(courseType);
		})
	}

};
