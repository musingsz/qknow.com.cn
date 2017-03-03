/**
 * LecturerController
 *
 * @description :: Server-side logic for managing lecturers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */


module.exports = {
	getAllLecturers: (req,res) => {
		LecturerService.getAllLecturers({},(err, lecturers) => {
			if (err) return res.apiError(err);
			return res.apiSuccess(lecturers);
		})
	},
	getLecturerById: (req, res) => {
		LecturerService.getLecturerById({id: req.params.id },(err, courseType) => {
			if (err) return res.apiError(err);
			return res.apiSuccess(courseType);
		})
	},
	UpdateLecturerById: (req, res) => {
		let id = req.body.id;
		let name = req.body.name;
		let sex = req.body.sex;
		let nickname = req.body.nickname;
		let company = req.body.company;
		let introduction = req.body.introduction;
		LecturerService.UpdateLecturerById({
			id: id,
			name: name,
			nickname: nickname,
			sex: sex,
			company: company,
			introduction: introduction
		},(err,courseType) => {
			if (err) return res.apiError(err);
			return res.apiSuccess(courseType);
		})
	},
	createLecturer:(req, res) => {
		let name = req.body.name;
		let sex = req.body.sex;
		let nickname = req.body.nickname;
		let company = req.body.company;
		let introduction = req.body.introduction;
		LecturerService.createLecturer({
			name: name,
			nickname: nickname,
			sex: sex,
			company: company,
			introduction: introduction
		},(err,courseType) => {
			if (err) return res.apiError(err);
			return res.apiSuccess(courseType);
		})
	}

};
