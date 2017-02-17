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
	logout: (req, res) => {

	},
	create: (req, res) => {
		let username = req.body.username;
		let password = req.body.password;
		let e_mail = req.body.email;
		UserService.createUser({
			username: username,
      password: password,
      e_mail: e_mail
		},(err,user) => {
			if (err) return res.apiError(err);
			return res.apiSuccess();
		})
	}

};
