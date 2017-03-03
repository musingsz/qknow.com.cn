export default function(nga, admin) {
   let users = admin.getEntity('users');
   let roles = admin.getEntity('roles');
   users.listView().fields([
      nga.field('id'),
      nga.field('username'),
      nga.field('e_mail'),
      nga.field('role.name'),
      nga.field('createdAt'),

  ]);

  // users.showView().fields([
  //   nga.field('username').label('用户名'),
  //   nga.field('role.name').label('角色'),
  //   nga.field('e_mail').label('邮箱')
  // ]);

  users.creationView().fields([
    nga.field('username'),
    nga.field('password','password'),
    nga.field('email', 'email'),
    nga.field('role.id','reference').label('角色')
       .targetEntity(roles) // Select a target Entity
       .targetField(nga.field('name')) // Select the field to be displayed
  ]);

  users.editionView().fields([
    nga.field('id'),
    nga.field('username'),
    nga.field('password','password'),
    nga.field('e_mail', 'email'),
    nga.field('role.id','reference').label('角色')
       .targetEntity(roles) // Select a target Entity
       .targetField(nga.field('name')) // Select the field to be displayed
  ]);
  return users;

}
