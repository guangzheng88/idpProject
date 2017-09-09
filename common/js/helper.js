"use strict"

/**
 * Created by zlp on 2017/03/12
 * 图书管理公共服务
 */
var ljHelper = angular.module('ljHelper', []);

ljHelper.factory('ljFactory', [ '$q', '$http', function($q, $http) {
  /** ----------   ljFactory start  ------- **/
  //固定电话正则表达式
  var isPhone = /^([0-9]{3,4}-)?[0-9]{5,8}$/;
  //手机号正则表达式 适用于 中国  可以加  +86 或 86 开头
  var isMob=/^((\+?86)|(\+86))?(13[012356789][0-9]{8}|15[012356789][0-9]{8}|18[02356789][0-9]{8}|147[0-9]{8}|1349[0-9]{7})$/; 
  //url 正则表达式
  var isUrl = /(?:https|http):\/\//;
  //email 正则表达式
  var isMail = /^[a-z0-9]+([._\\-]*[a-z0-9]){2,63}@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
  //password正则表达式
  var isPassword = /^[A-Za-z0-9@#$%^&*]{6,15}$/;
  var factory = {}; //初始化 factory
  /**
  * function isEmpty 
  *验证是否为空        
  * @param [str] a  
  * @return 不为空：true 为空   ：false
  */
  factory.isEmpty = function(a) 
  {
    if (a !== null && a !== undefined && a !== '')
    {
        return true;
    }else
    {
      return false;
    }
  }
  //验证金额input框输入字符的格式
  factory.isInputB1 = function(a){
    var inres = a.substr(-1);
    if(inres == '.')
    {
      return false;
    }else
    {
      return true;
    }
  }
  /**    
  * function isPhone  
  * 验证是否是固话 
  * @param [str] a  
  * @return 不为空：true
  *                为空   ：false
  */
  factory.isPhone = function(a){      
    if(isPhone.test(a)){  
      return true;  
    }else
    {  
      return false;  
    } 
  }
  /**
  * function isMob 
  * 验证是否是手机号
  * @param [str] a  
  * @return 不为空：true
  *                为空  ：false
  */
  factory.isMob = function(a){        
    if(isMob.test(a)){  
      return true;  
    }else
    {  
      return false;  
    } 
  }
  /**
  * function isTel
  * 验证是否是手机号 或者固话   
  * @param [str] a  
  * @return 不为空：true
  *                为空   ：false
  */
  factory.isTel = function(a){
    if(isMob.test(a) ||isPhone.test(a) ){
      return true;  
    }else
    {  
      return false;  
    } 
  }
  /*
  * function isTel
  * 验证是否是url 
  * @param [str] a  
  */
  factory.isHttp = function(a)
  {
    if(isUrl.test(a)){
      return true;  
    }else
    {
      return false;  
    } 
  }
  /*
  * function isEmail
  * 验证是否是邮箱 
  * @param [str] a  
  */
  factory.isEmail = function(a)
  {
    if(isMail.test(a)){
      return true;  
    }else
    {
      return false;  
    } 
  }
  /*
  * function isPass
  * 验证密码格式
  * @param [str] a  
  */
  factory.isPass = function(a)
  {
    if(isPassword.test(a)){
      return true;  
    }else
    {
      return false;  
    }
  }
  /*
  * function getDivision 
  * 获取省市区信息
  * @param [] 无
  * @return json 对象
  */
  factory.getDivision = function() {
      var deferred = $q.defer();
      $http.get('/common/json/division.json')
      .success(function(data) {
        deferred.resolve(data);
      })
      // .error(function(reason) {
      //   deferred.reject(reason);
      // })
      return deferred.promise;
  }
  /** ----------   ljFactory end  ------- **/
 return factory;
}]);


ljHelper.service('ljChecks', function(ljFactory,$http){
  /**-------------------- ljChecks start ----------------------------------------------**/ 
  //返回顶部
  this.moveMgoTop = function()
  {
    $(document).ready(function(){  
      $("#go_top").hide();  
      $(function () {  
      //检测屏幕高度  
      var height=$(window).height();  
      //scroll() 方法为滚动事件  
      $(window).scroll(function(){  
          if ($(window).scrollTop()>height){  
              $("#go_top").fadeIn(500);  
          }else{  
              $("#go_top").fadeOut(500);  
          }  
      });  
      $("#go_top").click(function(){ //返回顶部 
          $('body,html').animate({scrollTop:0},100);  
              return false;  
          });  
      });  
    }); 
  }
  /**
  * @function ckInputA1M
  * inputA1M 验证  
  * @param [str] inputV  input 框的值
  * @param [str] isNull 是否对input框进行非空验证 1 ：验证 其他则不验证
  * @return 不为空：{status:1};
  *         为空：{status:2,info:'值为空'};
  */
  this.ckInputA1M = function(inputV,isNull)
  {
    //如果isNull为1
    if(isNull == 1)
    {
      var res =  ljFactory.isEmpty(inputV);//对input框进行非空验证
      if(res) return {status:1}; else return {status:2,info:'值为空'};
    }else
    {
      return {status:1}
    }
  }
  /**
  * @function ckInputA1L
  * @param [str] inputV  input 框的值
  * @param [str] isNull 是否对input框进行非空验证 1 ：验证 其他则不验证
  * @return 不为空：{status:1};
  *         为空：{status:2,info:'值为空'};
  */
  this.ckInputA1L = function(inputV,isNull){
    if(isNull == 1)
    {
      var res =  ljFactory.isEmpty(inputV);//对input框进行非空验证
      if(res) return {status:1}; else return {status:2,info:'值为空'};
    }else
    {
      return {status:1}
    }
  }
  /**
  * @function ckInputF1
  * inputH1 验证(适用于手机号 验证)  
  * @param [str] inputV  input 框的值
  * @param [int] isNull  是否验证为空标识 1 验证 其他不验证
  * @return   成功  ：{status:1};
  *                为空    ：{status:2,info:'值为空'};
  *         格式错误   ：{status:3,info:'格式错误'};
  */
  this.ckInputF1 = function(inputV,isNull){
    var isEmpty =  ljFactory.isEmpty(inputV);
    if (isNull != 1 && isEmpty == false)
    {
        return {status:1};
    }
    if (isEmpty == false)
    {
        return {status:2,info:'值为空'};
    }
    var isMob =  ljFactory.isMob(inputV);
    if (isMob == false)
    {
        return {status:3,info:'格式错误'};
    }
    return {status:1};
  }
  /**
  * @function ckInputG1
  * inputH1 验证(适用于固定电话 验证)  
  * @param [str] inputV  input 框的值
  * @param [int] isNull  是否验证为空标识 1 验证 其他不验证
  * @return   成功  ：{status:1};
  *                为空    ：{status:2,info:'值为空'};
  *         格式错误   ：{status:3,info:'格式错误'};
  */
  this.ckInputG1 = function(inputV,isNull){
    var isEmpty =  ljFactory.isEmpty(inputV);
    if (isNull != 1 && isEmpty == false)
    {
        return {status:1};
    }
    if (isEmpty == false)
    {
        return {status:2,info:'值为空'};
    }
    var isPhone =  ljFactory.isPhone(inputV);
    if (isPhone == false)
    {
        return {status:3,info:'格式错误'};
    }
    return {status:1};
  }
  /**
  * @function ckInputH1
  * inputH1 验证(适用于固定电话 或 手机号 验证)  
  * @param [str] inputV  input 框的值
  * @param [int] isNull  是否验证为空标识 1 验证 其他不验证
  * @return   成功  ：{status:1};
  *                为空    ：{status:2,info:'值为空'};
  *         格式错误   ：{status:3,info:'格式错误'};
  */
  this.ckInputH1 = function(inputV,isNull){
    var isEmpty =  ljFactory.isEmpty(inputV);
    if (isNull != 1 && isEmpty == false)
    {
        return {status:1};
    }
    if (isEmpty == false)
    {
        return {status:2,info:'值为空'};
    }
    var isTel =  ljFactory.isTel(inputV);
    if (isTel == false)
    {
        return {status:3,info:'格式错误'};
    }
    return {status:1};
  }
  /**
  * @function ckInputB1
  * @param [str] inputV  input 框的值
  * @param [str] isNull 是否对input框进行非空验证 1 ：验证 其他则不验证
  * @return 不为空：{status:1};
  *         为空：{status:2,info:'值为空'};
  */
  this.ckInputB1 = function(inputV,isNull){
    //对input框进行非空验证
    var isEmpty =  ljFactory.isEmpty(inputV);
    if(isNull != 1 && isEmpty == false)
    {
      return {status:1}

    }
    if(isEmpty == false)
    {
      return {status:2,info:'值为空'};
    }
    //对input框进行格式验证
    var isInputB1 = ljFactory.isInputB1(inputV);
    if(isInputB1 == false)
    {
      return {status:3,info:'格式错误'};
    }
    return {status:1};
  }
  /**
  * @function ckInputC1
  * @param [str] inputV  input 框的值
  * @param [str] isNull 是否对input框进行非空验证 1 ：验证 其他则不验证
  * @return 不为空：{status:1};
  *         为空：{status:2,info:'值为空'};
  */
  this.ckInputC1 = function(inputV,isNull){
    //对input框进行非空验证
    var isEmpty =  ljFactory.isEmpty(inputV);
    if(isNull != 1 && isEmpty == false)
    {
      return {status:1}
    }
    if(isEmpty == false)
    {
      return {status:2,info:'值为空'};
    }
    //对input框进行url格式验证
    var isUrls =  ljFactory.isHttp(inputV);
    if (isUrls == false)
    {
        return {status:3,info:'链接地址格式错误'};
    }
    return {status:1};
  }
  /**
  * @function ckInputD1
  * @param [str] inputV  input 框的值
  * @param [str] isNull 是否对input框进行非空验证 1 ：验证 其他则不验证
  * @return 不为空：{status:1};
  *         为空：{status:2,info:'值为空'};
  */
  this.ckInputD1 = function(inputV,isNull){
    //对input框进行非空验证
    var isEmpty =  ljFactory.isEmpty(inputV);
    if(isNull != 1 && isEmpty == false)
    {
      return {status:1}
    }
    if(isEmpty == false)
    {
      return {status:2,info:'值为空'};
    }
    //对input框进行email格式验证
    var isEmails =  ljFactory.isEmail(inputV);
    if (isEmails == false)
    {
        return {status:3,info:'邮箱格式错误'};
    }
    return {status:1};
  }
  /**
  * @function ckInputI1
  * @param [str] inputV  input 框的值
  * @param [str] isNull 是否对input框进行非空验证 1 ：验证 其他则不验证
  * @return 不为空：{status:1};
  *         为空：{status:2,info:'值为空'};
  */
  this.ckInputI1 = function(inputV,isNull){
    if(isNull == 1)
    {
      var res =  ljFactory.isEmpty(inputV);//对input框进行非空验证
      if(res) return {status:1}; else return {status:2,info:'值为空'};
    }else
    {
      return {status:1}
    }
  }
  /**
  * @function ckInputJ1
  * @param [str] inputV  input 框的值
  * @param [str] isNull 是否对input框进行非空验证 1 ：验证 其他则不验证
  * @return 不为空：{status:1};
  *         为空：{status:2,info:'值为空'};
  */
  this.ckInputK1 = function(inputV,isNull){
    if(isNull == 1)
    {
      var res =  ljFactory.isEmpty(inputV);//对input框进行非空验证
      if(res) return {status:1}; else return {status:2,info:'值为空'};
    }else
    {
      return {status:1}
    }
  }
  /**
  * @function ckInputJ1
  * @param [str] inputV  input 框的值
  * @return 不为空：{status:1};
  *         为空：{status:2,info:'值为空'};
  */
  this.ckInputJ1 = function(inputV,inputO,isSame){
    //对input框进行非空验证
    var isEmpty =  ljFactory.isEmpty(inputV);
    if(isEmpty == false)
    {
      return {status:2,info:'不可为空'};
    }
    if(isEmpty != false)
    {
      //对input框进行密码格式验证
      var isPassw =  ljFactory.isPass(inputV);
      if(isPassw == false && inputV.length < 6)
      {
        return {status:3,info:'密码长度不能小于6位'};
      }
      if(isPassw == false && inputV.length >= 6)
      {
        return {status:4,info:'密码格式错误'};
      }
      //验证两次输入密码是否一致
      if(isSame == 1 && (inputV != inputO))
      {
        return {status:5,info:'两次输入的密码不相符'};
      }
      return {status:1};
    }
  }
  /**
  * @function pageA
  * @param [int] count  数据总条数
  * @param [int] limit    数据查询条数
  * @param [int] offset  数据偏移量
  * @param [int] numLen  最多显示按钮
  * @return [arr] pageInfo
  */
  this.pageA = function(count,limit,offset,numLen){
    if (count<=limit) return '';//如果总数 小于或等于 数据条数 不显示分页
    var res = {};
    var pageInfo = {};
    var parInt = parseInt(numLen/2);
    var lastOffset  = (Math.ceil(count/limit)-1)*limit;//末页偏移量

    for (var i = 1; i < numLen*2; i++)
    {
          var arr = [];
          var numberTmp = offset/limit -numLen+i+1;//第num 页
          var offsetTmp = offset- limit*(numLen-i);//偏移量
          arr.num = numberTmp;//第num 页
          arr.offset = offsetTmp;//偏移量
          arr.sign =  true;

          if (offsetTmp < offset) {
                //当前页 前面处理
                if (numberTmp > 0)
                {                 
                      if (offsetTmp +numLen*limit > lastOffset)
                      {
                        arr.sign =  true;//是否显示标示
                      }else
                      {
                              if (offsetTmp +parInt*limit >= offset)
                              {
                                arr.sign =  true;//是否显示标示
                              }else
                              {
                                arr.sign =  false;//是否显示标示
                              }
                      }
                }else
                {
                  //页数小于0不显示
                  arr.sign =  false;//是否显示标示
                }
          } else {
                //当前页 后面处理
                if (offsetTmp < count && (numberTmp -numLen <=0 || offsetTmp - parInt*limit <=offset) )
                {
                  arr.sign =  true;//是否显示标示
                } else {
                  arr.sign =  false;//是否显示标示
                }
          }          
          pageInfo['row'+i] = arr;
    }
    //处理尾页
    res.lastOffset  = lastOffset;
    res.pageInfo  = pageInfo;
    return res;
  }
  this.ckCapture = function($scope){
    //极验第一次验证
    var p = $http({
          method: 'GET',
          url: "/common/gt-php-sdk/web/StartCaptchaServlet.php?type=pc&t=" + (new Date()).getTime(), // 加随机数防止缓存 
      });
      p.success(function(response, status, headers, config) {
          //返回：challenge和capthca_id
          initGeetest({
                  gt: response.gt,
                  challenge: response.challenge,
                  product: "embed", // 产品形式，包括：float，embed，popup。注意只对PC版验证码有效
                  offline: !response.success // 表示用户后台检测极验服务器是否宕机，一般不需要关注
              }, handlerEmbed);
          
      });
      //回调函数
      var handlerEmbed = function (captchaObj) 
      {
        $scope.checkone = function(e)
        {
           var validate = captchaObj.getValidate();
            $scope.challenge = validate.geetest_challenge;
            $scope.geetestValidate = validate.geetest_validate;
            $scope.seccode = validate.geetest_seccode;
            if (!validate) {
                $("#notice")[0].className = "show";
                setTimeout(function () {
                    $("#notice")[0].className = "hide";
                }, 2000);
            }
        }
        // 将验证码加到id为captcha的元素里，同时会有三个input的值：geetest_challenge, geetest_validate, geetest_seccode
        captchaObj.appendTo("#embed-captcha");
        captchaObj.onReady(function () {
            $("#wait")[0].className = "hide";
        });
      }; 
  }
  /**-------------------- ljChecks end ----------------------------------------------**/ 
});