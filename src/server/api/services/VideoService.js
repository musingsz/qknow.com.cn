module.exports = {
  getVideo: (next) => {
    Video.find().exec((err,videos) => {
      if(err) throw err;
      next(videos)
    });
  }
}
