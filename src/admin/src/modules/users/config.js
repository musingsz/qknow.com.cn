export default function(nga, admin) {
   let users = admin.getEntity('users');
   users.listView().fields([
      nga.field('id'),
      nga.field('username'),
      nga.field('e_mail'),
      nga.field('role.name'),
      nga.field('createdAt'),

  ]);
  return users;

}
