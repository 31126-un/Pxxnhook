chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    console.log("测试")
    return { redirectUrl: chrome.extension.getURL("hook.js") }; //hook.js是你要替换的js脚本
  },
  {
    urls: ["*://baidu.cm/static/msvodx/js/video.js"],  //你要拦截的url地址
    types: ["script"]       //拦截类型为script，

  },
  ["blocking"] //类型blocking为拦截,
);
