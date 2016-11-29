console.log("NODE_ENV",process.env.NODE_ENV);

if (process.env.NODE_ENV === 'production') {
  module.exports =  {
      "github":'https://github.com/503945930/',
      "qq"    :"http://wpa.qq.com/msgrd?v=3&uin=503945930&site=qq&menu=yes",
      "weixin":"#",
      "weibo" :"#",

      //"API_URL":"http://localhost:8000"
      "API_URL":"http://115.28.6.179:8005"
  };
} else {
  module.exports =  {
      "github":'https://github.com/503945930/',
      "qq"    :"http://wpa.qq.com/msgrd?v=3&uin=503945930&site=qq&menu=yes",
      "weixin":"#",
      "weibo" :"#",

    //  "API_URL":"http://localhost:8000"
    "API_URL":"http://localhost:8000"
  };
}
