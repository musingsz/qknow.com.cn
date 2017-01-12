const Promise = require("bluebird");


module.exports.init = () => {
  // body...
  //
  //添加测试数据  属性
  Promise.resolve(Property.create({
    name: "课程分类"
  })).then((property) => {
    Promise.resolve(PropertyDetails.create([{
        name: 'web',
        order: 1,
        property: property.id
      },
      {
        name: 'php',
        order: 2,
        property: property.id
      },
      {
        name: 'nodejs',
        order: 3,
        property: property.id
      },
      {
        name: 'wechat',
        order: 3,
        property: property.id
      },
      {
        name: 'linux',
        order: 3,
        property: property.id
      },
      {
        name: 'tools',
        order: 3,
        property: property.id
      }
    ])).then((propertyDetails) => {

    })
  }).catch(function(e) {
    //Generic catch-the rest, error wasn't TypeError nor
    //ReferenceError
});

//添加 讲师数据

 Promise.resolve(Lecturer.create({
   name: "老魏",
   nickname: "wei",
   sex: "男",
   company: "公司",
   introduction: "非常优秀",
   order: 1
 }));

//添加 课程数据
 Promise.resolve(Course.create({
   title: "node",
   sub_title: "node学习",
   image: "...",
   chapter_count: 20,
   time_length: 100,
   difficulty: "初级",
   course_type: 1,
   lecturer: 1
 }));
 //添加视频
 Promise.resolve(Course.create({
   title: "node环境",
   sub_title: "node环境",
   URL: "...",
   image: "111",
   time_length: 100,
   course: "course",
   parent_video: 0
 }));












};
