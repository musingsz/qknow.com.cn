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
   image: "http://jiuye-res.jikexueyuan.com/zhiye/showcase/attach-/20160913/115fd11f-59cd-41d9-a255-f42b924fe168.jpg",
   chapter_count: 20,
   time_length: 100,
   difficulty: "初级",
   course_type: 1,
   lecturer: 1,
   statistic: 1
 }));
 //添加视频
 Promise.resolve(Video.create([
   {
     title: "第一章",
     sub_title: "node环境",
     course: 1,
     parent_video: 0,
     order: 1
   },
   {
     title: "第二章",
     sub_title: "第二章",
     course: 1,
     parent_video: 0,
     order: 1
   },
   {
     title: "node环境",
     sub_title: "node环境",
     image: "111",
     time_length: 100,
     course: 1,
     order: 1,
     parent_video: 2,
     URL:"http://qknow1.oss-cn-shanghai.aliyuncs.com/chrome_01_2016-08-29_222508.mp4"

   },
   {
     title: "node环境1",
     sub_title: "node环境2",
     image: "111",
     time_length: 100,
     course: 1,
     order: 2,
     parent_video: 2,
     URL:"http://qknow1.oss-cn-shanghai.aliyuncs.com/chrome_01_2016-08-29_222508.mp4"

   }
 ]));

 // 添加统计数据
 Promise.resolve(Statistic.create({
   score:90,
   sum: 1000,
   course:1,
 }))

 //
 // 添加角色
  Promise.resolve(Role.create({
    name:"超级管理员"
  }))
 // 添加用户
 Promise.resolve(User.create({
   username:"admin",
   password: "admin",
   role:1,
 }))












};
