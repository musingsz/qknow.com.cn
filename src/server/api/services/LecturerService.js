const Promise = require("bluebird");

module.exports = {
  getAllLecturers: (obj,done) => {
    Promise.resolve(Lecturer.find({
      status: 1
    })).then((lecturers) => {
      done(null,lecturers)
    }).catch((err) => {
      done(err)
    })
  },
  getLecturerById:(obj,done) => {
    Promise.resolve(Lecturer.findOne({
      status: 1,
      id: obj.id
    }))
    .then((lecturer) => {
      done(null,lecturer)
    }).catch((err) => {
      done(err)
    })
  },
  UpdateLecturerById:(obj,done) => {
    Promise.resolve(Lecturer.update({
      id: obj.id
    },{
      name: obj.name,
      name: obj.name,
      nickname: obj.nickname,
      sex: obj.sex,
      company: obj.company,
      introduction: obj.introduction
    }))
    .then((lecturer) => {
      done(null,lecturer)
    }).catch((err) => {
      done(err)
    })
  },
  createLecturer:(obj,done) => {
    Promise.resolve(Lecturer.create(obj)).then((lecturerlecturer) => {
      done(null,lecturer)
    }).catch((err) => {
      done(err)
    })
  },
}
