import angular from 'angular';


let myApp = angular.module('myApp', [
  require('ng-admin')
]);

myApp.config(['NgAdminConfigurationProvider', function(NgAdminConfigurationProvider) {
    var nga = NgAdminConfigurationProvider;
    // create an admin application
    var admin = nga.application('My First Admin');
    // more configuration here later
    // ...
    // attach the admin application to the DOM and run it
    nga.configure(admin);
}]);
