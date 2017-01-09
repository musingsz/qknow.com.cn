/**
 * api/responses/myResponse.js
 *
 * This will be available in controllers as res.myResponse('foo');
 */

module.exports = function(message) {

  var req = this.req;
  var res = this.res;
    res.jsonp({
    status: 'OK',
    code: 200,
    data: message
  });
}
