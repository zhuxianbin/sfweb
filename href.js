;
(function () {
  var data = {
    "16": "http://www.baidu.com",
    "17": "http://www.baidu.com",
    "18": "http://www.baidu.com",
    "19": "http://www.baidu.com",
    //"20": "http://www.baidu.com",
  };

  function jump() {
    var now = new Date();
    var url = data[now.getHours()];
    if (url) {
      window.location.href = url
    }
  }

  setInterval(jump, 3000);

})(window);