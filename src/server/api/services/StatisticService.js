const Promise = require("bluebird");


module.exports = {
    findByCourseId:(obj,next) => {
      Statistic.find({
        course: obj.courseId
      }).exec((err, statistic) => {
        if (err) next(err, null);
        next(null, statistic);
      });
    },
    getAllStatistics: (obj,done) => {
      Promise.resolve(Statistic.find({
        status: 1
      }).populate('course')).then((statistics) => {
        done(null,statistics)
      }).catch((err) => {
        done(err)
      })
    },
    getStatisticById:(obj,done) => {
      Promise.resolve(Statistic.findOne({
        status: 1,
        id: obj.id
      }).populate('course'))
      .then((statistic) => {
        done(null,statistic)
      }).catch((err) => {
        done(err)
      })
    },
    UpdateStatisticById:(obj,done) => {
      Promise.resolve(Statistic.update({
        id: obj.id
      },obj))
      .then((statistic) => {
        done(null,statistic)
      }).catch((err) => {
        done(err)
      })
    },
    createStatistic:(obj,done) => {
      Promise.resolve(Statistic.create(obj)).then((statistic) => {
        done(null,statistic)
      }).catch((err) => {
        done(err)
      })
    },
}
