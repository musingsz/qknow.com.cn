/**
 * VideoController
 *
 * @description :: Server-side logic for managing videos
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
const Promise = require("bluebird");

module.exports = {
  videoByCourseId: function(req, res) {
    VideoService.videoByCourseId({
      courseId: req.params.courseId
    }, function(err, videos) {
      if (err) return res.apiError(err);
      Promise.map(videos, function(video) {
        return VideoService.videoByParentId({
          parentId: video.id
        })
      }).then(function(childVideo) {
        for (var i = 0; i < childVideo.length; i++) {
          videos[i].childVideo = childVideo[i]
        }
        return res.apiSuccess(videos)
      });
    });
  },
	videoById: (req, res) => {
		VideoService.videoById({videoId:req.params.videoId},(err,video) => {
			if (err) return res.apiError(err);
      return res.apiSuccess(video)
		})
	}
};
