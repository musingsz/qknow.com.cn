export default function(nga, admin) {
   let course = admin.getEntity('course');
   let courseType = admin.getEntity('courseType');
   let lecturers = admin.getEntity('lecturers');

   course.listView().fields([
      nga.field('id'),
      nga.field('title'),
      nga.field('difficulty'),
      nga.field('course_type.name'),
      nga.field('lecturer.name'),


  ]);



  course.creationView().fields([
    nga.field('title'),
    nga.field('sub_title'),
    nga.field('chapter_count'),
    nga.field('time_length'),
    nga.field('difficulty','choice').choices([
        { value: '初级', label: '初级' },
        { value: '中级', label: '中级' },
        { value: '高级', label: '高级' },
      ]),
    nga.field('course_type.id','reference').label('课程类型')
       .targetEntity(courseType) // Select a target Entity
       .targetField(nga.field('name')), // Select the field to be displayed
   nga.field('lecturer.id','reference').label('讲师')
       .targetEntity(lecturers) // Select a target Entity
       .targetField(nga.field('name')) // Select the field to be displayed
  ]);

  course.editionView().fields([
    nga.field('id'),
    nga.field('title'),
    nga.field('sub_title'),
    nga.field('chapter_count'),
    nga.field('time_length'),
    nga.field('difficulty','choice').choices([
        { value: '初级', label: '初级' },
        { value: '中级', label: '中级' },
        { value: '高级', label: '高级' },
      ]),
    nga.field('course_type.id','reference').label('课程类型')
       .targetEntity(courseType) // Select a target Entity
       .targetField(nga.field('name')), // Select the field to be displayed
   nga.field('lecturer.id','reference').label('讲师')
       .targetEntity(lecturers) // Select a target Entity
       .targetField(nga.field('name')) // Select the field to be displayed
  ]);

  return course;

}
