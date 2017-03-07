webpackJsonp([5,6,8],{58:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){return{type:p.FETCH_COURSE_LIST_SUCCESS,data:e}}function a(e){return{type:p.FETCH_COURSE_SUCCESS,data:e}}function i(e){return function(t){c.default.get(f.default.API_URL+("/courseType/"+e+"/course")).then(function(e){if(200!==e.status&&200!==e.data.meta.code)throw new Error("Bad response from server");return e.data.data}).then(function(e){return t(o(e))})}}function l(e){return function(t){c.default.get(f.default.API_URL+("/course/"+e)).then(function(e){if(200!==e.status&&200!==e.data.meta.code)throw new Error("Bad response from server");return e.data.data}).then(function(e){return t(a(e))})}}Object.defineProperty(t,"__esModule",{value:!0}),t.fetchCourseByCourseTypeId=i,t.fetchCourseById=l;var u=n(36),c=r(u),s=n(25),f=r(s),p=n(15)},268:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(1),c=r(u),s=n(16),f=r(s),p=n(23),d={base:{},item:{width:"100%",height:250,position:"relative",overflow:"hidden"},h3:{margin:0,padding:" 16px 0 6px ",fontSize:14,maxHeight:40,overflow:"hidden",color:"#07111b",lineHeight:"21px"},p:{color:"#93999f",fontSize:"12px",height:"40px",overflow:"hidden",lineHeight:"20px"},img:{height:"50%",width:"100%"},intro:{position:"absolute",top:"50%",height:"50%",width:"100%"},bottom:{position:"absolute",bottom:0,color:"#93999f",fontSize:"12px",lineHeight:"36px"}},m=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),l(t,[{key:"render",value:function(){return c.default.createElement("div",null,c.default.createElement("div",{style:[d.item]},c.default.createElement(p.Link,{to:"/view/course/"+this.props.id},c.default.createElement("img",{src:this.props.image,alt:"",style:[d.img]}),c.default.createElement("div",{style:[d.intro]},c.default.createElement("h3",{style:[d.h3]},this.props.title),c.default.createElement("p",{style:[d.p]},this.props.subTitle," ")),c.default.createElement("div",{style:[d.bottom]},c.default.createElement("span",null," ",this.props.sum," 人在学")))))}}]),t}(u.Component);t.default=(0,f.default)(m)},277:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(1),c=r(u),s=n(16),f=r(s),p=n(40),d=r(p),m=n(22),y=n(268),h=r(y),b=n(58),g={base:{},span:{fontSize:30,textAlign:"center"},list:{marginTop:40},item:{marginTop:20},center:{textAlign:"center"},btnStyle:{margin:12,width:320,height:75,marginTop:20},btnLabelStyle:{fontSize:28,color:"#fff",fontWeight:"blod"}},_=c.default.createElement("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-12"},c.default.createElement("span",null,"更加优秀的你，在未来等你")),v=function(e){function t(){var e,n,r,i;o(this,t);for(var l=arguments.length,u=Array(l),c=0;c<l;c++)u[c]=arguments[c];return n=r=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),r.componentDidMount=function(){r.props.onLoadCourse(r.props.params.courseTypeId)},i=n,a(r,i)}return i(t,e),l(t,[{key:"render",value:function(){var e=this.props.courseList.map(function(e){return c.default.createElement("div",{key:e,className:"col-xs-12 col-sm-4 col-md-3 col-lg-3",style:[g.item]},c.default.createElement(h.default,{id:e.id,courseTypeId:e.course_type_id,subTitle:e.sub_title,image:e.image,sum:e.statistic.sum,title:e.title}))});return c.default.createElement("div",{className:"container",style:[g.base]},c.default.createElement("div",{className:"row",style:[g.span]},_),c.default.createElement("div",{className:"row",style:[g.list]},e),c.default.createElement("div",{className:"row",style:[g.center]},c.default.createElement("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-12"},c.default.createElement(d.default,{label:"加载更多 >>>",backgroundColor:"rgba(72, 70, 109, 1)",labelStyle:g.btnLabelStyle,style:g.btnStyle}))))}}]),t}(u.Component),E=function(e){return{courseList:e.course}},w=function(e){return{onLoadCourse:function(t){e((0,b.fetchCourseByCourseTypeId)(t))}}};t.default=(0,m.connect)(E,w)((0,f.default)(v))}});
//# sourceMappingURL=course.90c5a9e0.chunk.js.map