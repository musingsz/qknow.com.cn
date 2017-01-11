const Promise = require("bluebird");


module.exports.init = () => {
  // body...
  //
  Promise.resolve(Property.create({
    name: "课程分类"
  })).then((property) => {
    Promise.resolve(PropertyDetails.create([{
        name: 'web',
        order: 1,
        property_id: property.id
      },
      {
        name: 'php',
        order: 2,
        property_id: property.id
      },
      {
        name: 'nodejs',
        order: 3,
        property_id: property.id
      },
      {
        name: 'wechat',
        order: 3,
        property_id: property.id
      },
      {
        name: 'linux',
        order: 3,
        property_id: property.id
      },
      {
        name: 'tools',
        order: 3,
        property_id: property.id
      }
    ])).then((propertyDetails) => {

    })
  }).catch(function(e) {
    //Generic catch-the rest, error wasn't TypeError nor
    //ReferenceError
});





};
