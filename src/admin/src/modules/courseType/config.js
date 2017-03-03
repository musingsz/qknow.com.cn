export default function(nga, admin) {
   let courseType = admin.getEntity('courseType');

   courseType.listView().fields([
      nga.field('id'),
      nga.field('name'),
      nga.field('status'),
      nga.field('createdAt'),

  ]);



  courseType.creationView().fields([
    nga.field('name')
  ]);
  //
  courseType.editionView().fields([
    nga.field('id'),
    nga.field('name')
  ]);
  
  return courseType;

}
