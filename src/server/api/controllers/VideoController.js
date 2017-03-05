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
	},
  getvideoById: (req, res) => {
    VideoService.videoById({videoId:req.params.videoId},(err,video) => {
      if (err) return res.apiError(err);
      return res.apiSuccess(video)
    })
  },
  getAllVideos: (req,res) => {
    VideoService.getAllVideos({},(err, videos) => {
      if (err) return res.apiError(err);
      return res.apiSuccess(videos);
    })
  },
  UpdateVideoById: (req, res) => {
    let id = req.body.id;
    let title = req.body.title;
    let image = req.body.image;
    let URL = req.body.URL;
    let sub_title = req.body.sub_title;
    let time_length = req.body.time_length;
    let course = req.body.course ?  req.body.course.id: 0;
    let parent_video = req.body.pre_video ?  req.body.parent_video.id: 0;
    let pre_video = req.body.pre_video ?  req.body.pre_video.id: 0;
    let next_video = req.body.next_video ?  req.body.next_video.id: 0;
    VideoService.UpdateVideoById({
      id: id,
      title: title,
      image: image,
      URL: URL,
      sub_title: sub_title,
      time_length: time_length,
      course: course,
      parent_video: pre_video,
      pre_video: pre_video,
      next_video: next_video
    },(err,video) => {
      if (err) return res.apiError(err);
      return res.apiSuccess(video);
    })
  },
  createVideo:(req, res) => {
    let title = req.body.title;
    let image = req.body.image;
    let URL = req.body.URL;
    let sub_title = req.body.sub_title;
    let time_length = req.body.time_length;
    let course = req.body.course ?  req.body.course.id: 0;
    let parent_video = req.body.pre_video ?  req.body.parent_video.id: 0;
    let pre_video = req.body.pre_video ?  req.body.pre_video.id: 0;
    let next_video = req.body.next_video ?  req.body.next_video.id: 0;
    VideoService.createVideo({
      title: title,
      image: image,
      URL: URL,
      sub_title: sub_title,
      time_length: time_length,
      course: course,
      parent_video: pre_video,
      pre_video: pre_video,
      next_video: next_video
    },(err,video) => {
      if (err) return res.apiError(err);
      return res.apiSuccess(video);
    })
  }

};
