/**
 * StatisticController
 *
 * @description :: Server-side logic for managing statistics
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getAllStatistics: (req,res) => {
		StatisticService.getAllStatistics({},(err, statistics) => {
			if (err) return res.apiError(err);
			return res.apiSuccess(statistics);
		})
	},
	getStatisticById: (req, res) => {
		StatisticService.getStatisticById({id: req.params.id },(err, statistic) => {
			if (err) return res.apiError(err);
			return res.apiSuccess(statistic);
		})
	},
	UpdateStatisticById: (req, res) => {
		let id = req.body.id;
		let score = req.body.score;
		let sum = req.body.sum;
		let course = req.body.course.id;
		StatisticService.UpdateStatisticById({
			id: id,
			score: score,
			sum: sum,
			course: course
		},(err,statistic) => {
			if (err) return res.apiError(err);
			return res.apiSuccess(statistic);
		})
	},
	createStatistic:(req, res) => {
		let score = req.body.score;
		let sum = req.body.sum;
		let course = req.body.course.id;
		StatisticService.createStatistic({
			score: score,
			sum: sum,
			course: course
		},(err,statistic) => {
			if (err) return res.apiError(err);
			return res.apiSuccess(statistic);
		})
	}
};
