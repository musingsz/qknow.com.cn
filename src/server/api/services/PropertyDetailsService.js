const Promise = require("bluebird");

module.exports = {
  getAllCourseType: (obj,done) => {
    Promise.resolve(PropertyDetails.find({
      property: 1,
      status: 1
    })).then((courseType) => {
      done(null,courseType)
    }).catch((err) => {
      done(err)
    })
  },
  getCourseTypeById:(obj,done) => {
    Promise.resolve(PropertyDetails.findOne({
      status: 1,
      id: obj.id
    }))
    .then((courseType) => {
      done(null,courseType)
    }).catch((err) => {
      done(err)
    })
  },
  UpdateCourseTypeById:(obj,done) => {
    Promise.resolve(PropertyDetails.update({
      id: obj.id
    },{
      name: obj.name
    }))
    .then((courseType) => {
      done(null,courseType)
    }).catch((err) => {
      done(err)
    })
  },
  createCourseType:(obj,done) => {
    Promise.resolve(PropertyDetails.create({
      name: obj.name,
      property: 1
    })).then((courseType) => {
      done(null,courseType)
    }).catch((err) => {
      done(err)
    })
  },
}
