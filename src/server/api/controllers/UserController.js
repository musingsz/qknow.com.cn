/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
const Promise = require("bluebird");

module.exports = {
	login: (req, res) => {
			UserService.findByUserAndPwd({
				username: req.body.username,
				pwd: req.body.password
			},(err,user) => {
				if (err) return res.apiError(err);
				UserService.generateUserToken(user, (err,token) => {
					if (err) return res.apiError(err);
					return res.apiSuccess(token);
				})
			})
	},
	logout: () => {

	}

};
