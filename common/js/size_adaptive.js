//计算根节点HTML的字体大小
function resizeRoot(){
 var deviceWidth = document.documentElement.clientWidth,
  num = 750,
  num1 = num / 100;
 if(deviceWidth > num){
  deviceWidth = num; 
 }
 document.documentElement.style.fontSize = deviceWidth / num1 + "px";
}
//根节点HTML的字体大小初始化
resizeRoot();
 
window.onresize = function(){
 resizeRoot();
};