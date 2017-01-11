module.exports = function(message) {
  var res = this.res;
  res.json({
    status: 'Error',
    error_code: err.err_code || 500,
    error_msg: err.error_msg || err.toString()
  });
};
