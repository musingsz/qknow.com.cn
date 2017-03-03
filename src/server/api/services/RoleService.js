const Promise = require("bluebird");

module.exports = {
  getAllRole: (obj ,done) => {
    Promise.resolve(Role.find({
      status: 1
    }))
    .then((roles) => {
      done(null,roles)
    }).catch((err) => {
      done(err)
    })
  },
  getRoleById:(obj,done) => {
    Promise.resolve(Role.findOne({
      status: 1,
      id: obj.id
    }))
    .then((role) => {
      done(null,role)
    }).catch((err) => {
      done(err)
    })
  },
};
