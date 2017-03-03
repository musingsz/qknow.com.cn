/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': {
    view: 'homepage'
  },

  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the custom routes above, it   *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/
  //courseType
  'get /api/v1/courseType': 'PropertyDetailsController.getAllCourseType',
  'get /api/v1/courseType/:id': 'PropertyDetailsController.getCourseTypeById',
  'put /api/v1/courseType/:id': 'PropertyDetailsController.UpdateCourseTypeById',
  'post /api/v1/courseType': 'PropertyDetailsController.createCourseType',

  //couse
  'get /api/v1/course': 'CourseController.courseList',
  'get /api/v1/courseType/:courseType/course': 'CourseController.courseListByCourseTypeId',
  'get /api/v1/course/:courseId': 'CourseController.courseById',
  'put /api/v1/course/:id': 'CourseController.UpdateCourseById',
  'post /api/v1/course': 'CourseController.createCourse',

  //video
  'get /api/v1/course/:courseId/video': 'VideoController.videoByCourseId',
  'get /api/v1/course/video/:videoId': 'VideoController.videoById',
  'get /api/v1/videos': 'VideoController.getAllVideos',
  'get /api/v1/videos/:videoId': 'VideoController.videoById',
  'put /api/v1/videos/:id': 'VideoController.UpdateVideoById',
  'post /api/v1/videos': 'VideoController.createVideo',

//  'post /api/v1/course': 'CourseController.createCourse',

  //login
  'post /api/v1/users/login': 'UserController.login',
  'post /api/v1/users/_logout': 'UserController.logout',
  'post /api/v1/users': 'UserController.create',

  //user
  'get /api/v1/users': 'UserController.getAllUser',
  'get /api/v1/users/:id': 'UserController.getUserById',
  'put /api/v1/users/:id': 'UserController.UpdateUserById',

  // role
  'get /api/v1/roles': 'RoleController.getAllRole',
  'get /api/v1/roles/:id': 'RoleController.getRoleById',

  //Lecturer
  'get /api/v1/lecturers': 'LecturerController.getAllLecturers',
  'get /api/v1/lecturers/:id': 'LecturerController.getLecturerById',
  'put /api/v1/lecturers/:id': 'LecturerController.UpdateLecturerById',
  'post /api/v1/lecturers': 'LecturerController.createLecturer',

  //statistic
  'get /api/v1/statistics': 'StatisticController.getAllStatistics',
  'get /api/v1/statistics/:id': 'StatisticController.getStatisticById',
  'put /api/v1/statistics/:id': 'StatisticController.UpdateStatisticById',
  'post /api/v1/statistics': 'StatisticController.createStatistic',
};
