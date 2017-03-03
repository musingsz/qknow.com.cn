export default function(nga, admin) {
   let videos = admin.getEntity('videos');
   let course = admin.getEntity('course');

   videos.listView().fields([
      nga.field('id'),
      nga.field('title'),
      nga.field('course.title'),
      nga.field('parent_video.title'),

  ]);



  videos.creationView().fields([
    nga.field('title'),
    nga.field('sub_title'),
    nga.field('URL'),
    nga.field('image'),
    nga.field('time_length'),
    nga.field('course.id','reference').label('课程')
       .targetEntity(course) // Select a target Entity
       .targetField(nga.field('title')), // Select the field to be displayed
   nga.field('parent_video.id','reference').label('所属课程')
       .targetEntity(videos) // Select a target Entity
       .targetField(nga.field('title'))
       .remoteComplete(true), // Select the field to be displayed
   nga.field('pre_video.id','reference').label('上一节')
       .targetEntity(videos) // Select a target Entity
       .targetField(nga.field('title'))
       .remoteComplete(true), // Select the field to be displayed
   nga.field('next_video.id','reference').label('下一节')
       .targetEntity(videos) // Select a target Entity
       .targetField(nga.field('title')) // Select the field to be displayed
       .remoteComplete(true), // Select the field to be displayed
  ]);
  //
  videos.editionView().fields([
    nga.field('id'),
    nga.field('title'),
    nga.field('sub_title'),
    nga.field('URL'),
    nga.field('image'),
    nga.field('time_length'),
    nga.field('course.id','reference').label('课程')
       .targetEntity(course) // Select a target Entity
       .targetField(nga.field('title')), // Select the field to be displayed
   nga.field('parent_video.id','reference').label('所属课程')
       .targetEntity(videos) // Select a target Entity
       .targetField(nga.field('title'))
       .remoteComplete(true), // Select the field to be displayed
   nga.field('pre_video.id','reference').label('上一节')
       .targetEntity(videos) // Select a target Entity
       .targetField(nga.field('title'))
       .remoteComplete(true), // Select the field to be displayed
   nga.field('next_video.id','reference').label('下一节')
       .targetEntity(videos) // Select a target Entity
       .targetField(nga.field('title')) // Select the field to be displayed
       .remoteComplete(true), // Select the field to be displayed

  ]);

  return videos;

}
