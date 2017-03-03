export default function(nga, admin) {
   let statistics = admin.getEntity('statistics');
   let course = admin.getEntity('course');

   statistics.listView().fields([
      nga.field('id'),
      nga.field('score'),
      nga.field('sum'),
      nga.field('course.title')
  ]);



  statistics.creationView().fields([
    nga.field('score'),
    nga.field('sum'),
    nga.field('course.id','reference').label('课程')
       .targetEntity(course) // Select a target Entity
       .targetField(nga.field('title')) // Select the field to be displayed
  ]);
  //
  statistics.editionView().fields([
    nga.field('id'),
    nga.field('score'),
    nga.field('sum'),
    nga.field('course.id','reference').label('课程')
       .targetEntity(course) // Select a target Entity
       .targetField(nga.field('title')) // Select the field to be displayed
  ]);

  return statistics;

}
