/**
 * RoleController
 *
 * @description :: Server-side logic for managing roles
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getAllRole: (req, res) => {
		RoleService.getAllRole({},(err, roles) => {
			if (err) return res.apiError(err);
			return res.apiSuccess(roles);
		})
	},
	getRoleById: (req, res) => {
		RoleService.getRoleById({id: req.params.id },(err, role) => {
			if (err) return res.apiError(err);
			return res.apiSuccess(role);
		})
	}
};
