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
		let role = req.body.role ? req.body.role : 1;
		UserService.createUser({
			username: username,
      password: password,
      e_mail: e_mail,
			role: role
		},(err,user) => {
			if (err) return res.apiError(err);
			return res.apiSuccess(user);
		})
	},
	getAllUser: (req, res) => {
		UserService.getAllUser({},(err, users) => {
			if (err) return res.apiError(err);
			return res.apiSuccess(users);
		})
	},
	getUserById: (req, res) => {
		UserService.getUserById({id: req.params.id },(err, user) => {
			if (err) return res.apiError(err);
			return res.apiSuccess(user);
		})
	},
	UpdateUserById: (req, res) => {
		let id = req.body.id;
		let username = req.body.username;
		let password = req.body.password;
		let e_mail = req.body.e_mail;
		let role = req.body.role ? req.body.role : 1;
		UserService.UpdateUserById({
			id: id,
			username: username,
			password: password,
			e_mail: e_mail,
			role: role.id
		},(err,user) => {
			if (err) return res.apiError(err);
			return res.apiSuccess(user);
		})
	},
};
