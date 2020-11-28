chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    return { redirectUrl: "https://cdn.jsdelivr.net/gh/beichenhpy/Pxxnhook@1.0/hook.js" }; //hook.js是你要替换的js脚本
  },
  {
    urls: ["*://baidu.cm/static/msvodx/js/video.js"],  //你要拦截的url地址
    types: ["script"]       //拦截类型为script，

  },
  ["blocking"] //类型blocking为拦截,
);
