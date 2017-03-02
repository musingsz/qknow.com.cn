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

    // configure entities
    require('./modules/users/config')(nga, admin);
    // ...
    //menu
    admin.menu(require('./menu')(nga, admin));
    // attach the admin application to the DOM and run it
    nga.configure(admin);
}]);

myApp.config(['RestangularProvider', function(RestangularProvider) {
    RestangularProvider.addResponseInterceptor((data,operation) => {
      console.log("element.data",data);
      return data.data;
    })
}]);
