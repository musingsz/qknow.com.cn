const Promise = require("bluebird");

module.exports = {
  //根据课程ID 查询视频
  videoByCourseId: (obj, next) => {
    Video.find({
        course: obj.courseId,
        parent_video: 0
      }, {
        sort: "order ASC"
      })
      .exec((err, videos) => {
        if (err) next(err, null);
        next(null, videos);
      });
  },
  //根据父课程ID 查询视频
  videoByParentId: (obj) => {
    return Video.find({
      parent_video: obj.parentId
    }, {
      sort: "order ASC"
    });
  },
  //根据课程ID 查询视频
  videoById: (obj, next) => {
    Video.findOne({
      id: obj.videoId
    }).populate('course')
     .populate('parent_video')
     .populate('pre_video')
     .populate('next_video').exec((err, videos) => {
      if (err) next(err, null);
      next(null, videos);
    });
  },
  getAllVideos: (obj,done) => {
    Promise.resolve(Video.find({
      status: 1
    }).populate('course').populate('parent_video')).then((videos) => {
      done(null,videos)
    }).catch((err) => {
      done(err)
    })
  },
  UpdateVideoById:(obj,done) => {
    Promise.resolve(Video.update({
      id: obj.id
    },obj))
    .then((video) => {
      done(null,video)
    }).catch((err) => {
      done(err)
    })
  },
  createVideo:(obj,done) => {
    Promise.resolve(Video.create(obj)).then((video) => {
      done(null,video)
    }).catch((err) => {
      done(err)
    })
  }
}
