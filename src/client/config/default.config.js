
if (process.env.NODE_ENV === 'production') {
  module.exports =  {
      "github":'https://github.com/503945930/',
      "qq"    :"http://wpa.qq.com/msgrd?v=3&uin=503945930&site=qq&menu=yes",
      "weixin":"#",
      "weibo" :"#",
      "API_URL":"http://115.28.6.179:8011/api/v1",
      "jwtSecret":"xStmbyc066BOFn40gIr29y09Ud94z1P7"
  };
} else {
  module.exports =  {
      "github":'https://github.com/503945930/',
      "qq"    :"http://wpa.qq.com/msgrd?v=3&uin=503945930&site=qq&menu=yes",
      "weixin":"#",
      "weibo" :"#",

    //  "API_URL":"http://localhost:8000"
    "API_URL":"http://localhost:1337/api/v1",
    "jwtSecret":"xStmbyc066BOFn40gIr29y09Ud94z1P7"
  };
}
