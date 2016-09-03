if (process.env.NODE_ENV === 'production') {
  module.exports =  {
      "github":'https://github.com/503945930/',
      "qq"    :"http://wpa.qq.com/msgrd?v=3&uin=503945930&site=qq&menu=yes",
      "weixin":"#",
      "weibo" :"#",

      "API_URL":"http://localhost:8000"
  };
} else {
  module.exports =  {
      "github":'https://github.com/503945930/',
      "qq"    :"http://wpa.qq.com/msgrd?v=3&uin=503945930&site=qq&menu=yes",
      "weixin":"#",
      "weibo" :"#",

      "API_URL":"http://localhost:8000"
  };
}
