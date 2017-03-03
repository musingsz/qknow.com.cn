import angular from 'angular';


const myApp = angular.module('myApp', [
  require('ng-admin')
]);

myApp.config(['NgAdminConfigurationProvider', function(NgAdminConfigurationProvider) {
    var nga = NgAdminConfigurationProvider;
    // create an admin application
    var admin = nga.application('qknom后面管理系统')
                .baseApiUrl('http://localhost:1337/api/v1/');
    // more configuration here later



    // add entities
    admin.addEntity(nga.entity('users'));
    admin.addEntity(nga.entity('roles'));
    admin.addEntity(nga.entity('courseType'));
    admin.addEntity(nga.entity('lecturers'));
    admin.addEntity(nga.entity('statistics'));
    admin.addEntity(nga.entity('course'));
    admin.addEntity(nga.entity('videos'));

    // configure entities
    require('./modules/users/config')(nga, admin);
    require('./modules/courseType/config')(nga, admin);
    require('./modules/lecturers/config')(nga, admin);
    require('./modules/statistics/config')(nga, admin);
    require('./modules/courses/config')(nga, admin);
    require('./modules/videos/config')(nga, admin);

    // ...
    //menu
    admin.menu(require('./menu')(nga, admin));
    // attach the admin application to the DOM and run it
    nga.configure(admin);
}]);

myApp.config(['RestangularProvider', function(RestangularProvider) {
    RestangularProvider.addResponseInterceptor((data,operation) => {
      return data.data;
    })
}]);
