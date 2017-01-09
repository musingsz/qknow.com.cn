/**
 * VideoController
 *
 * @description :: Server-side logic for managing videos
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getVideo: function(req, res) {
		VideoService.getVideo(function(videos) {
				//res.ok(videos);
				res.myResponse(videos)
		});
},
};
