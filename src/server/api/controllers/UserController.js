/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	attributes: {
		name: 'string',
		password: 'string'
	}
};

sails.config.models.migrate='drop';
