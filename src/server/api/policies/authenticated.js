module.exports = function (req, res, next) {

    // currently just using url query for testing
    // this will actually come from the http header
    var issueDate = req.headers["x-token-issued"];
    var tokenValue = req.headers["x-token"];

    // validate we have all params
    if (!tokenValue || !issueDate) {
        return res.apiError("params error");
    }

    // validate token and set req.user if we have a valid token
    UserService.authenticateUserToken(tokenValue, issueDate, function (err, user) {
        if (err) {
            if (err.message === 'invalid-token') return res.apiError(err);

            return res.apiError(err);
        }

        if (!user) return res.apiError(err);

        req.user = user;

        next();
    });
};
