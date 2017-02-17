const bcrypt = require('bcrypt-nodejs');
const jwt = require('jwt-simple');
const moment = require('moment');
const Promise = require("bluebird");
//const shortid = require('shortid');

// this would need to live in sails config
const jwtSecret = 'xStmbyc066BOFn40gIr29y09Ud94z1P7';


module.exports = {
  findByUserAndPwd: (obj, next) => {
    User.findOne({
      username: obj.username,
      password: obj.pwd
    }).exec((err, user) => {
      if (err) next(err, null);
      next(null, user);
    });
  },
  generateUserToken: function(user, done) {
    var issueDate = moment().utc().format(),
      encodedToken = null;

    try {
      encodedToken = jwt.encode({
        id: user.id,
        username: user.username,
        role: user.role,
        issued: issueDate
      }, jwtSecret);
    } catch (err) {
      return done(err);
    }

    return done(null, {
      issued: issueDate,
      token: encodedToken
    });
  },
  authenticateUserToken: function(token, issueDate, done) {
    var issued = moment.utc(issueDate),
      tokenObj = null;

    // check the issue date to see if the token has expired (quick way to kick out expired tokens)
    // to check accurately for minutes we need to check in seconds as moment rounds the result down
    // to the nearest unit
    if (moment.utc().diff(issued, 'seconds') > 1800) {
      return done(new Error('invalid-token'));
    }

    try {
      tokenObj = jwt.decode(token, jwtSecret);
    } catch (err) {
      return done(err);
    }

    // validate that the issueDate passed in matches the issue date the token was created with
    if (tokenObj.issued !== issueDate) {
      return done(new Error('invalid-token'));
    }

    // find the user and set req.user
    User
      .findOne({
        id: tokenObj.id
      })
      .exec(function(err, user) {
        if (err) return done(err);
        return done(null, user);
      });
  },
  createUser:(obj,done) => {
    Promise.resolve(User.create({
      username: obj.username,
      password: obj.password,
      e_mail: obj.e_mail,
      role: 1
    })).then((user) => {
      done(null,user)
    }).catch((err) => {
      done(err)
    })
  }
}
