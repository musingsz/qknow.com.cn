export default function(nga, admin) {
   let lecturers = admin.getEntity('lecturers');

   lecturers.listView().fields([
      nga.field('id'),
      nga.field('sex'),
      nga.field('name'),
      nga.field('company'),
      nga.field('createdAt'),

  ]);



  lecturers.creationView().fields([
    nga.field('sex'),
    nga.field('name'),
    nga.field('nickname'),
    nga.field('company'),
    nga.field('introduction')
  ]);
  //
  lecturers.editionView().fields([
    nga.field('id'),
    nga.field('sex'),
    nga.field('name'),
    nga.field('nickname'),
    nga.field('company'),
    nga.field('introduction')
  ]);

  return lecturers;

}
