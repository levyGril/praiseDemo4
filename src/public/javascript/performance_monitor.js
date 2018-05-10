/**
 * Created by levy on 2018/5/8.
 */
// 1. DNS查询耗时
var dnsTime = window.performance.timing.domainLookupEnd-window.performance.timing.domainLookupStart;
console.log("DNS查询耗时:"+dnsTime);

// 2. TCP链接耗时
var tcpTime = window.performance.timing.connectEnd-window.performance.timing.connectStart;
console.log("TCP链接耗时:"+tcpTime);

// 3. request请求耗时
var requestTime = window.performance.timing.responseEnd-window.performance.timing.responseStart;
console.log("request请求耗时:"+requestTime);

// 4. 解析dom耗时
var domTime = window.performance.timing.domComplete-window.performance.timing.domInteractive;
console.log("解析dom耗时:"+domTime);

// 5. 白屏耗时
var baipingTime = window.performance.timing.responseEnd-window.performance.timing.navigationStart;
console.log("白屏耗时:"+baipingTime);

// 6. domReady耗时(用户可操作时间节点)
var domReadyTime = window.performance.timing.domContentLoadedEventEnd-window.performance.timing.navigationStart;
console.log("domReady耗时:"+domReadyTime);

//7.  onLoad耗时(总下载时间)
var onLoadTime = window.performance.timing.loadEventEnd-window.performance.timing.navigationStart;
console.log("onLoad耗时:"+onLoadTime);