export default function(nga, admin) {
   let lecturers = admin.getEntity('lecturers');

   lecturers.listView().fields([
      nga.field('id'),
      nga.field('sex'),
      nga.field('company'),
      nga.field('createdAt'),

  ]);



  lecturers.creationView().fields([
    nga.field('name')
  ]);
  //
  lecturers.editionView().fields([
    nga.field('id'),
    nga.field('name')
  ]);

  return lecturer;

}
