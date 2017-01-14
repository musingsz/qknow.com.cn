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
    }).exec((err, videos) => {
      if (err) next(err, null);
      next(null, videos);
    });
  }
}
