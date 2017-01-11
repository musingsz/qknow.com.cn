module.exports = function(message) {
  var req = this.req;
  var res = this.res;

  res.json({
    status: 'OK',
    code: 200,
    data: message
  });
};
