var ljdirective = angular.module('dirs', ['ui.bootstrap','ng.ueditor','ngAnimate','ljHelper']);
/**
 *组件列表 list-demo 列表样本
 *@author : zoulipeng
 */
ljdirective.directive('ljListDemo',function(){
    return{
        restrict : "E",
        templateUrl: '/common/components/list/ljListDemo.html',
        replace : true,
        scope:{
            titleArr: "=titles",
            listArr: "=lists"
         }
    };
});
/*
* button 组件 A型号 大 蓝色
* 按钮最大文字个数限制为：8
* author:yanglijun
* date:2017-02-24
*/
ljdirective.directive('ljButtonA1B',function(){
    return{
        restrict : "E",
        templateUrl: '/common/components/button/ljButtonA1B.html',
        replace : true,
        scope:{
            ljn: "@ljn",//按钮名称
            ljd: "=ljd",//按钮是否禁用标识
            ljf: "&ljf"//按钮方法
        }
    }
});

/*
* button 组件 A型号 大 白色
* 按钮最大文字个数限制为：8
* author:yanglijun
* date:2017-02-24
*/
ljdirective.directive('ljButtonA1W',function(){
    return{
        restrict:"E",
        templateUrl:"/common/components/button/ljButtonA1W.html",
        replace:true,
        scope:{
            ljn: "@ljn",//按钮名称
            ljd: "=ljd",//按钮是否禁用标识
            ljf: "&ljf"//按钮方法
        }
    }
});

/**
* button 组件 A型号 大 灰色
* 按钮最大文字个数限制为：8
* author:yanglijun
* date:2017-02-24 
*/
ljdirective.directive('ljButtonA1G',function(){
    return{
        restrict:"E",
        templateUrl:"/common/components/button/ljButtonA1G.html",
        replace:true,
        scope:{
            ljn: "@ljn",//按钮名称
            ljd: "=ljd",//按钮是否禁用标识
            ljf: "&ljf"//按钮方法
        }
    }
});
/**
* button 组件 B型号 常规 蓝色
* 按钮最大文字个数限制为：6
* author:yanglijun
* date:2017-02-24 
*/
ljdirective.directive('ljButtonB1B',function(){
    return{
        restrict:"E",
        templateUrl:"/common/components/button/ljButtonB1B.html",
        replace:true,
        scope:{
            ljn: "@ljn",//按钮名称
            ljd: "=ljd",//按钮是否禁用标识
            ljf: "&ljf"//按钮方法
        }
    }
});
/**
* button 组件 B型号 常规 白色
* 按钮最大文字个数限制为：6
* author:yanglijun
* date:2017-02-24 
*/
ljdirective.directive('ljButtonB1W',function(){
    return{
        restrict:"E",
        templateUrl:"/common/components/button/ljButtonB1W.html",
        replace:true,
        scope:{
            ljn: "@ljn",//按钮名称
            ljd: "=ljd",//按钮是否禁用标识
            ljf: "&ljf"//按钮方法
        }
    }
});
/**
* button 组件 B型号 常规 灰色
* 按钮最大文字个数限制为：6
* author:yanglijun
* date:2017-02-24 
*/
ljdirective.directive('ljButtonB1G',function(){
    return{
        restrict:"E",
        templateUrl:"/common/components/button/ljButtonB1G.html",
        replace:true,
        transclude:true,
        scope:{
            ljn: "@ljn",//按钮名称
            ljd: "=ljd",//按钮是否禁用标识
            ljf: "&ljf"//按钮方法
        }
    }
});
/*
* button 组件 C型号 小 蓝色
* 按钮最大文字个数限制为：5
* author:zoulipeng
* date:2017-02-24
*/
ljdirective.directive('ljButtonC1B',function(){
    return{
        restrict : "E",
        templateUrl: '/common/components/button/ljButtonC1B.html',
        replace : true,
        scope:{
            ljn: "@ljn",//按钮名称
            ljd: "=ljd",//按钮是否禁用标识
            ljf: "&ljf"//按钮方法
         }
    };
});
/*
* button 组件 C型号 小 白色
* 按钮最大文字个数限制为：5
* author:zoulipeng
* date:2017-02-24
*/
ljdirective.directive('ljButtonC1W',function(){
    return{
        restrict : "E",
        templateUrl: '/common/components/button/ljButtonC1W.html',
        replace : true,
        scope:{
            ljn: "@ljn",//按钮名称
            ljd: "=ljd",//按钮是否禁用标识
            ljf: "&ljf"//按钮方法
         }
    };
});
/*
* button 组件 C型号 小 灰色
* 按钮最大文字个数限制为：5
* author:zoulipeng
* date:2017-02-24
*/
ljdirective.directive('ljButtonC1G',function(){
    return{
        restrict : "E",
        templateUrl: '/common/components/button/ljButtonC1G.html',
        replace : true,
        scope:{
            ljn: "@ljn",//按钮名称
            ljd: "=ljd",//按钮是否禁用标识
            ljf: "&ljf"//按钮方法
         }
    };
});
/*
* button 组件 D型号 大 link按钮
* 按钮最大文字个数限制为：无限制
* author:zoulipeng
* date:2017-02-24
*/
ljdirective.directive('ljButtonD1',function(){
    return{
        restrict : "E",
        templateUrl: '/common/components/button/ljButtonD1.html',
        replace : true,
        scope:{
            ljn: "@ljn",//按钮名称
            ljd: "=ljd",//按钮是否禁用标识
            ljf: "&ljf"//按钮方法
         }
    };
});
/*
* button 组件 D型号 小 link按钮
* 按钮最大文字个数限制为：无限制
* author:zoulipeng
* date:2017-02-24
*/
ljdirective.directive('ljButtonD2',function(){
    return{
        restrict : "E",
        templateUrl: '/common/components/button/ljButtonD2.html',
        replace : true,
        scope:{
            ljn: "@ljn",//按钮名称
            ljd: "=ljd",//按钮是否禁用标识
            ljf: "&ljf"//按钮方法
         }
    };
});

/*
* list组件 lj-list-a-1
* author:yanglijun
* date:2017-02-27
*/
ljdirective.directive('ljListA1',function(){
    return{
        restrict : "E",
        templateUrl: '/common/components/list/ljListA1.html',
        replace : true,
        scope:{
            titleArr: "=titles",
            listArr: "=lists",
            operations:'=operations',
            iscomplete:'@iscomplete',
            limit:'@limit',
            fun1:"&fun1",  
            fun2:"&fun2",
            fun3:"&fun3", 
            fun4:"&fun4"
         },
 link: function (scope,element,attr){
                    scope.$watch('listArr', function (val){
                           //处理补全
                            scope.completes = '';//初始化补全信息
                            if (val)
                            {
                                var trLen =scope.limit-scope.listArr.length;//需要补全列表行数
                                //如果有补全标示 而且 补全列表行数 大于0 而且 小于 limit 做补全处理
                                if (scope.iscomplete == '1' && trLen>0  && trLen < scope.limit)
                                {
                                       var tdLen = 0;//列表列数
                                       var tds = {};
                                       var trs = {};
                                       angular.forEach(scope.titleArr,function(item){
                                            tdLen++;
                                       });
                                       for (var i = 0; i < tdLen; i++) { tds[i]=i;}
                                       for (var i = 0; i < trLen; i++) { trs[i] = tds; }
                                       scope.completes = trs;
                                }
                            }
                    });
         }
    };
});
/*
* list组件 lj-list-b-1
* author:yanglijun
* date:2017-02-28
*/
ljdirective.directive('ljListB1',function(){
    return{
        restrict:"E",
        templateUrl:"/common/components/list/ljListB1.html",
        replace:true,
        scope:{
            titleArr: "=titles",
            listArr: "=lists",
            operations:'=operations',
            iscomplete:'@iscomplete',
            limit:'@limit',
            fun1:"&fun1",  
            fun2:"&fun2",
            fun3:"&fun3", 
            fun4:"&fun4" 
        },
 link: function (scope,element,attr){
                    scope.$watch('listArr', function (val){
                           //处理补全
                            scope.completes = '';//初始化补全信息
                            if (val)
                            {
                                var trLen =scope.limit-scope.listArr.length;//需要补全列表行数
                                //如果有补全标示 而且 补全列表行数 大于0 而且 小于 limit 做补全处理
                                if (scope.iscomplete == '1' && trLen>0  && trLen < scope.limit)
                                {
                                       var tdLen = 0;//列表列数
                                       var tds = {};
                                       var trs = {};
                                       angular.forEach(scope.titleArr,function(item){
                                            tdLen++;
                                       });
                                       for (var i = 0; i < tdLen; i++) { tds[i]=i;}
                                       for (var i = 0; i < trLen; i++) { trs[i] = tds; }
                                       scope.completes = trs;
                                }
                            }
                    });
         }
    };
});
/*
* list组件 lj-list-c-1
* author:yanglijun
* date:2017-02-27
*/
ljdirective.directive('ljListC1',function(){
    return{
        restrict : "E",
        templateUrl: '/common/components/list/ljListC1.html',
        replace : true,
        scope:{
            titleArr: "=titles",
            listArr: "=lists",
            operations:'=operations',
            iscomplete:'@iscomplete',
            limit:'@limit',
            fun1:"&fun1",
            fun2:"&fun2",  
            fun3:"&fun3",  
            fun4:"&fun4", 
         },
 link: function (scope,element,attr){
                    scope.$watch('listArr', function (val){
                           //处理补全
                            scope.completes = '';//初始化补全信息
                            if (val)
                            {
                                var trLen =scope.limit-scope.listArr.length;//需要补全列表行数
                                //如果有补全标示 而且 补全列表行数 大于0 而且 小于 limit 做补全处理
                                if (scope.iscomplete == '1' && trLen>0  && trLen < scope.limit)
                                {
                                       var tdLen = 0;//列表列数
                                       var tds = {};
                                       var trs = {};
                                       angular.forEach(scope.titleArr,function(item){
                                            tdLen++;
                                       });
                                       for (var i = 0; i < tdLen; i++) { tds[i]=i;}
                                       for (var i = 0; i < trLen; i++) { trs[i] = tds; }
                                       scope.completes = trs;
                                }
                            }
                    });
         }
    };
});
/*
* list 组件 lj-list-d-1
* author:zoulipeng
* date:2017-02-27
*/
ljdirective.directive('ljListD1',function(){
    return{
        restrict : "E",
        templateUrl: '/common/components/list/ljListD1.html',
        replace : true,
        scope:{
            titleArr: "=titles",
            listArr: "=lists",
            operations:'=operations',
            iscomplete:'@iscomplete',
            limit:'@limit',
            fun1:"&fun1",
            fun2:"&fun2",  
            fun3:"&fun3",  
            fun4:"&fun4", 
         },
 link: function (scope,element,attr){
                    scope.$watch('listArr', function (val){
                           //处理补全
                            scope.completes = '';//初始化补全信息
                            if (val)
                            {

                                var trLen =scope.limit-scope.listArr.length;//需要补全列表行数
                                //如果有补全标示 而且 补全列表行数 大于0 而且 小于 limit 做补全处理
                                if (scope.iscomplete == '1' && trLen>0  && trLen < scope.limit)
                                {
                                       var tdLen = 0;//列表列数
                                       var tds = {};
                                       var trs = {};
                                       angular.forEach(scope.titleArr,function(item){
                                            tdLen++;
                                       });
                                       for (var i = 0; i < tdLen; i++) { tds[i]=i;}
                                       for (var i = 0; i < trLen; i++) { trs[i] = tds; }
                                       scope.completes = trs;
                                }
                            }
                    });
         }
    };
});
/*
* list 组件 lj-list-E-1
* author:zoulipeng
* date:2017-04-06
*/

ljdirective.directive('ljListE1',function(){
    return{
        restrict : "E",
        templateUrl: '/common/components/list/ljListE1.html',
        replace : true,
        scope:{
            titleArr: "=titles",
            listArr: "=lists",
            operations:'=operations',
            iscomplete:'@iscomplete',
            limit:'@limit',
            fun1:"&fun1",
            fun2:"&fun2",  
            fun3:"&fun3",  
            fun4:"&fun4", 
         },
 link: function (scope,element,attr){
                    scope.allDone = false;
                     //处理补全
                    scope.$watch('listArr', function (val){
                            scope.completes = '';//初始化补全信息
                            if (val)
                            {
                                var trLen =scope.limit-scope.listArr.length;//需要补全列表行数
                                //如果有补全标示 而且 补全列表行数 大于0 而且 小于 limit 做补全处理
                                if (scope.iscomplete == '1' && trLen>0  && trLen < scope.limit)
                                {
                                       var tdLen = 0;//列表列数
                                       var tds = {};
                                       var trs = {};
                                       angular.forEach(scope.titleArr,function(item){
                                            tdLen++;
                                       });
                                       for (var i = 0; i < tdLen+1; i++) { tds[i]=i;}
                                       for (var i = 0; i < trLen; i++) { trs[i] = tds; }
                                       scope.completes = trs;
                                }
                            }
                    });
                      //点击全选按钮 方法
                scope.allCheck = function(isAll)
                {                
                            if (isAll == true) {
                                angular.forEach(scope.listArr, function (item) {
                                      item.done = true;
                                })
                            }else
                            {
                                angular.forEach(scope.listArr, function (item) {
                                      item.done = false;
                                })
                            }
                }
                //单击一项方法
                scope.oneCheck = function()
                {
                            var listCount = 0;
                            var checkCount = 0;
                            angular.forEach(scope.listArr, function (item) {
                                  if(item.done == true)
                                  {
                                        listCount++;
                                  }
                                  checkCount++;
                            })
                            if (listCount == checkCount){
                                scope.allDone = true;
                            }else{
                                scope.allDone = false;
                            }
                }

         }
    };
});

/*
* textarea组件  lj-textarea-a-1-s
* author:yanglijun
* date:2017-03-01
*/
ljdirective.directive('ljTextareaA1S',function(){
    return{
        restrict:"E",
        templateUrl:"/common/components/textarea/ljTextareaA1S.html",
        replace:true,
        scope:{
            ljl: "@",//文字限制长度长度 默认为 300
            ischeck:"@",//是否验证为空
            ljt: "=ljt",//文本框的显示信息
        },
        link:function(scope){
            scope.check = function()
            {                
                if(scope.ischeck == 1)
                {
                    if(scope.ljt == undefined){
                        scope.errors = '不可为空';
                    }else{
                        scope.errors = '';
                    }
                }
            }
        }
    };
});
/*
* textarea组件  lj-textarea-a-1-m
* author:yanglijun
* date:2017-03-01
*/
ljdirective.directive('ljTextareaA1M',function(){
    return{
        restrict:"E",
        templateUrl:"/common/components/textarea/ljTextareaA1M.html",
        replace:true,
        scope:{
            ljl: "@",
            ljt: "=",
            ischeck: "@"
        },
        link:function(scope){
            scope.check = function()
            {                
                if(scope.ischeck == 1)
                {
                    if(scope.ljt == undefined){
                        scope.errors = '不可为空';
                    }else{
                        scope.errors = '';
                    }
                }
            }
        }
    };
});
/*
* textarea组件  lj-textarea-a-1-l
* author:yanglijun
* date:2017-03-01
*/
ljdirective.directive('ljTextareaA1L',function(){
    return{
        restrict:"E",
        templateUrl:"/common/components/textarea/ljTextareaA1L.html",
        replace:true,
        scope:{
            ljl: "@",
            ljt: "=",
            ischeck: "@"
        },
        link:function(scope){
            scope.check = function()
            {                
                if(scope.ischeck == 1)
                {
                    if(scope.ljt == undefined){
                        scope.errors = '不可为空';
                    }else{
                        scope.errors = '';
                    }
                }
            }
        }
    };
});
/*
* textarea组件  lj-textarea-b-1
* author:yanglijun
* date:2017-04-05
*/
ljdirective.directive('ljTextareaB1',function(){
    return{
        restrict:"E",
        templateUrl:"/common/components/textarea/ljTextareaB1.html",
        replace:true,
        scope:{
            ljl: "=",
            ljt: "=",//文本框内文字
            msgb :"=msgb",//错误提示信息
        },
        link:function(scope){
            var textareaobj=document.getElementById('inputword');  
            scope.checklastword = function()
            {  
              var lastwordnum=scope.ljl-textareaobj.value.length;  
              if(lastwordnum>=0) document.getElementById('lastwordnum').innerHTML=lastwordnum;  
              if(lastwordnum < 1) 
              {
                textareaobj.value= textareaobj.value.substr(0,scope.ljl); 
              } 
            }
        }
    };
});
/*
* select(选择框大) 组件 lj-select-a-1-l
* author:zoulipeng
* date:2017-03-01
*/
ljdirective.directive('ljSelectA1L',function(){
    return{
        restrict : "E",
        templateUrl: '/common/components/select/ljSelectA1L.html',
        replace : true,
        scope:{
            selectArr: "=selects",//下拉选项
            errorShow: "=isshow",//是否显示提示语标示
            errorText: "=message",//提示语 selected
            selected: "=selected",//默认显示
            ljfun:"&ljf",
         }
    };
});
/*
* select(选择框小) 组件 lj-select-a-1-m
* author:zoulipeng
* date:2017-03-01
*/
ljdirective.directive('ljSelectA1M',function(){
    return{
        restrict : "E",
        templateUrl: '/common/components/select/ljSelectA1M.html',
        replace : true,
        scope:{
            selectArr: "=selects",//下拉选项
            errorShow: "=isshow",//是否显示提示语标示
            errorText: "=message",//提示语 selected
            selected: "=selected",//默认显示
            ljfun:"&ljf",
         }
    };
});
/*
* 省市区联动 区域 
* author:zoulipeng
* date:2017-03-01
*/
ljdirective.directive('ljSelectC1',['ljFactory',function(ljFactory){
    return{
        restrict : "E",
        templateUrl: '/common/components/select/ljSelectC1.html',
        replace : true,
        scope:{
            addr: "=addr",//存放选择区域结果
            msg: "=msg",//错误提示信息
         },
         link: function (scope, element, attr){
            scope.address ={};
            scope.address.province = '';
            scope.address.city = '';
            scope.address.district = '';
            var promise = ljFactory.getDivision(); //获取省市区信息
            promise.then(function(data){
                scope.division=data;  //调用承诺接口resolove()
            },function(data){
                scope.division = {}; //调用承诺接口reject();
            });
            scope.$watch('address.province + address.city + address.district', function (val){
                    scope.addr = scope.address.province + scope.address.city + scope.address.district;
                    console.log(scope.addr);
            });
        }

    };
}]);
/*
* 三级联动 区域 
* author:liujingxia
* date:2017-06-07
*/
ljdirective.directive('ljSelectD1',['ljFactory',function(ljFactory){
    return{
        restrict : "E",
        templateUrl: '/common/components/select/ljSelectD1.html',
        replace : true,
        scope:{
            classification: "=classification",//存放选择区域结果
            select2:'@select2',//二级分类是否显示
            select3:'@select3',//三级分类是否显示
            msg: "=msg",//错误提示信息
         },
         link: function (scope, element, attr){
            if(scope.select2==1){
                scope.select2==true;
            }else{
                scope.select2=false;
            }
            if(scope.select3==1){
                scope.select3=true;
            }else{
                scope.select3=false;
            }
        }
    };
}]);
/*
* datepicker 日期选择器A
* author:yanglijun
* date:2017-03-03
*/
ljdirective.directive('ljDatepickerA1',function(){
    return{
        restrict:"E",
        templateUrl:"/common/components/datepicker/ljDatepickerA1.html",
        scope:{
            datevalue:"=",
            timeerror:"=",
            ischeck:"="
        },
        replace : false,
        transclude : true, 
    }
});
/*
* datepicker 日期选择器A2
* author:yanglijun
* date:2017-03-30
*/
ljdirective.directive('ljDatepickerA2',function(){
    return{
        restrict:"E",
        templateUrl:"/common/components/datepicker/ljDatepickerA2.html",
        scope:{
            datevalueb:"=",
            timeerrorb:"=",
            ischeckb:"=",
        },
        replace : false,
        transclude : true, 
    }
});
/*
* datepicker 日期选择器A3
* author:yanglijun
* date:2017-03-31
*/
ljdirective.directive('ljDatepickerA3',function(){
    return{
        restrict:"E",
        templateUrl:"/common/components/datepicker/ljDatepickerA3.html",
        scope:{
            datevaluec:"=",
            timeerrorc:"=",
            ischeckc:"=",
        },
        replace : false,
        transclude : true, 
    }
});
/*
* breadcrumbtrail 面包屑导航A1
* author:yanglijun
* date:2017-03-06
*/
ljdirective.directive('ljBreadcrumbtrailA1',function(){
    return{
        restrict:"E",
        templateUrl:"/common/components/breadcrumbtrail/ljBreadcrumbNavA1.html",
        replace:true,
        scope:{
            listArr: "=lists",
        }
    }
});

/*
* breadcrumbtrail 面包屑导航A2
* author:yanglijun
* date:2017-03-06
*/
ljdirective.directive('ljBreadcrumbtrailA2',function(){
    return{
        restrict:"E",
        templateUrl:"/common/components/breadcrumbtrail/ljBreadcrumbNavA2.html",
        replace:true,
        scope:{
            listArr: "=lists",
        }
    }
});
/*
* checkbox 复选框A1
* author:zoulipeng
* date:2017-03-06
*/
ljdirective.directive('ljCheckboxA1',function(){
    return{
        restrict:"E",
        templateUrl:"/common/components/checkbox/ljCheckboxA1.html",
        replace:false,
        scope:{
            checks: "=checks",//选项数组
        }
    }
});
/*
* checkbox 复选框B1
* author:zoulipeng
* date:2017-03-06
*/
ljdirective.directive('ljCheckboxB1',function(){
    return{
        restrict:"E",
        templateUrl:"/common/components/checkbox/ljCheckboxB1.html",
        replace:false,
        scope:{
            checks: "=checks",//选项数组
            isAll: "=isall",//是否全选标识
            newline: "@newline",//是否换行显示
        },
        link:function(scope)
        {
                //点击全选按钮 方法
                scope.getAll = function(isAll)
                {                
                            if (isAll == true) {
                                angular.forEach(scope.checks, function (item) {
                                      item.done = true;
                                })
                            }else
                            {
                                angular.forEach(scope.checks, function (item) {
                                      item.done = false;
                                })
                            }
                }
                //单击一项方法
                scope.getOne = function()
                {
                            var listCount = 0;
                            var checkCount = 0;
                            angular.forEach(scope.checks, function (item) {
                                  if(item.done == true)
                                  {
                                        listCount++;
                                  }
                                  checkCount++;
                            })
                            if (listCount == checkCount){
                                scope.isAll = true;
                            }else{
                                scope.isAll = false;
                            }
                }
        }
    }
});
/*
* radio 单选框A1
* author:zoulipeng
* date:2017-03-06
*/
ljdirective.directive('ljRadioA1',function(){
    return{
        restrict:"AE",
        templateUrl:"/common/components/radio/ljRadioA1.html",
        replace:false,
        scope:{
            radios: "=radios",//选项数组
            checkvalue: "=checkvalue",//默认选中值 如果没有则为空
        }
    }
});

/**
* 搜索框组件A
* author:yanglijun
* date:2017-03-08
*/
ljdirective.directive('ljSearchboxA1',function(){
    return{
        restrict:"E",
        templateUrl:'/common/components/searchbox/ljSearchboxA1.html',
        replace:true,
        scope:{
            ljn:"@",
            maxlen:"@",
            ljd:"=",
            ljf:"&",
            searchval:'='
        }
    }
});
/**
* 搜索框组件B
* author:yanglijun
* date:2017-03-08
*/
ljdirective.directive('ljSearchboxB1',function(){
    return{
        restrict:"E",
        templateUrl:'/common/components/searchbox/ljSearchboxB1.html',
        replace:true,
        scope:{
            maxlen:"@",
            ljf:"&",
            ljdefault:"@",
            ljd:'=',
            searchval:'='
        }
    }
});

/*
* 弹出框(提示框组件A1)
* author:zoulipeng
* date:2017-03-06
*/
ljdirective.directive('ljPromptA1',['$timeout','$window',function($timeout,$window){  
    return{
        restrict: 'E',
        transclude: true,
        templateUrl:"/common/components/prompt/ljPromptA1.html",
        scope:{
            sec: "=sec",//秒数
            loading :"=loading",//是否显示
            msg: "=msg",//提示信息
        },
        controller: function($scope) { 
            if(!$scope.loading){$scope.loading = false};
            if(!angular.isNumber($scope.sec)){$scope.sec = 3};//默认3秒
            
        },  
        link: function (scope, element, attr){
            scope.$watch('loading+sec', function (val){
               if (scope.loading && angular.isNumber(scope.sec))
               {
                    if (val <= 1)
                    {
                            scope.ljJump();
                    }else{
                            $timeout(function(){
                                        scope.sec --;
                            },1000);
                    }
               }                                              
            });
            scope.ljJump = function()
            {
                //原始链接地址
                var originalUrl = $window.location.href;
                //跳转链接设置的地址
                var newUrl = $window.location.origin + scope.msg.url;
                if(originalUrl == newUrl)//原始地址和跳转链接地址相等，重新加载页面
                {
                    $window.location.reload();
                }else
                {
                    $window.location.href = newUrl;//原始地址和跳转链接地址不相等，跳转到新的链接地址
                }
            }
        }
    }
}]);
/*
* 弹出框(询问框组件B1)
* author:zoulipeng
* date:2017-03-10
*/
ljdirective.directive('ljPromptB1',['$timeout','$window',function($timeout,$window){  
    return{
            restrict: 'E',
            transclude: true,
            templateUrl:"/common/components/prompt/ljPromptB1.html",
            scope:{
                ljf :"&ljf",//绑定 点击确认方法
                msg: "=msg",//提示信息
            }
        }
}]);
/*
* 弹出框(提示框组件C1)
* author:zoulipeng
* date:2017-03-10
*/
ljdirective.directive('ljPromptC1',['$timeout','$window',function($timeout,$window){  
    return{
        restrict: 'E',
        transclude: true,
        templateUrl:"/common/components/prompt/ljPromptC1.html",
        scope:{
            msg :"=msg",//是否显示 默认 false 不显示
            ljshow :"=ljshow",//是否显示 默认 false 不显示
        },
        link: function (scope, element, attr){
            scope.ljPromptCHide = function()
            {
                scope.ljshow = false;
            }
        }
    }
}]);
/*
* 弹出框(提示框组件D1)
* author:zoulipeng
* date:2017-03-10
*/
ljdirective.directive('ljPromptD1',['$timeout','$window',function($timeout,$window){  
    return{
        restrict: 'E',
        transclude: true,
        templateUrl:"/common/components/prompt/ljPromptD1.html",
        scope:{
            ljshow :"=ljshow",//是否显示 默认 false 不显示
            ljstyle :"=ljstyle",//提示框样式 三种样式 success warning danger
            msg :"=msg",//提示信息

        },
        link: function (scope,element,attr){
            scope.$watch('ljshow', function (val){
                    if (scope.ljshow == true)
                    {
                        $timeout(function(){ scope.ljshow = false; },3000);                      
                    }
            })
        }
    }
}]);
/*
* 弹出框(提示框组件E1)
* author:liujingxia
* date:2017-08-14
*/
ljdirective.directive('ljPromptE1',['$timeout','$window',function($timeout,$window){  
    return{
        restrict: 'E',
        transclude: true,
        templateUrl:"/common/components/prompt/ljPromptE1.html",
        scope:{
            msgtip :"=",//是否显示 默认 false 不显示
            ljshow :"=ljshow",//是否显示 默认 false 不显示
            ljf :"&ljf",//绑定 点击确认方法
        }
    }
}]);
/*
* 输入框(组件A1M)
* author:zoulipeng
* date:2017-03-10
*/
ljdirective.directive('ljInputA1M',['$timeout','$window','ljChecks',function($timeout,$window,ljChecks){  
    return{
        restrict: 'E',
        transclude: true,
        templateUrl:"/common/components/input/ljInputA1M.html",
        scope:{
            len :"@len",//输入框的最大长度
            ljvalue :"=value",//输入的值
            msg :"=msg",//提示信息
            active :"=active",// input 框的样式
            isnull:'@',//是否进行空验证
            isblur:'@',//是否进行失去焦点验证
            defaultmsg:'@'
        },
        link: function (scope,element,attr){
            if(scope.isblur == 1)//失去焦点验证输入框标志
            {
                //失去焦点，对输入框进行验证,参数为：输入框的值，是否验证空的标志
                scope.ljf = function()
                {
                    var res = ljChecks.ckInputA1M(scope.ljvalue,scope.isnull);
                    if(res.status == 2) 
                    {
                        scope.msg = '不可为空'; //错误提示信息
                        scope.active = false;//输入框样式
                    }else
                    {
                        scope.msg = ''; //错误提示信息
                        scope.active = true;//输入框样式
                    }
                }
            }
        }
    }
}]);

/*
* 输入框(组件A1L)
* author:zoulipeng
* date:2017-03-10
*/
ljdirective.directive('ljInputA1L',['$timeout','$window','ljChecks',function($timeout,$window,ljChecks){ 
    return{
        restrict: 'E',
        transclude: true,
        templateUrl:"/common/components/input/ljInputA1L.html",
        scope:{
            len :"@len",//输入框的最大长度
            ljvalue :"=value",//输入的值
            msg :"=msg",//提示信息
            active :"=active",// input 框的样式
            isnull:'@',//是否进行空验证
            isblur:'@',//是否进行失去焦点验证
            defaultmsg:'@'
        },
        link: function (scope,element,attr){
            if(scope.isblur == 1)//失去焦点验证输入框标志
            {
                //失去焦点，对输入框进行验证,参数为：输入框的值，是否验证空的标志
                scope.ljf = function()
                {
                    var res = ljChecks.ckInputA1L(scope.ljvalue,scope.isnull);
                    if(res.status == 2) 
                    {
                        scope.msg = '不可为空'; //错误提示信息
                        scope.active = false;//输入框样式
                    }else
                    {
                        scope.msg = ''; //错误提示信息
                        scope.active = true;//输入框样式
                    }
                }
            }
        }
    }
}]);
/*
* 输入框(组件B1 名称)
* author:yanglijun
* date:2017-03-15
*/
ljdirective.directive('ljInputB1',['$timeout','$window','ljChecks',function($timeout,$window,ljChecks){  
    return{
        restrict: 'E',
        transclude: true,
        templateUrl:"/common/components/input/ljInputB1.html",
        scope:{
            ljvalue :"=value",//输入的值
            msg :"=msg",//提示信息
            active :"=active",// input 框的样式
            isnull:'@',//是否进行空验证
            isblur:'@',//是否进行失去焦点验证
            defaultmsg:'@'
        },
        link: function (scope,element,attr){
            if(scope.isblur == 1)//失去焦点验证输入框标志
            {
                //失去焦点，对输入框进行验证,参数为：输入框的值，是否验证空的标志
                scope.ljf = function()
                {
                    var res = ljChecks.ckInputA1M(scope.ljvalue,scope.isnull);
                    if(res.status == 2) 
                    {
                        scope.msg = '不可为空'; //错误提示信息
                        scope.active = false;//输入框样式
                    }else
                    {
                        scope.msg = ''; //错误提示信息
                        scope.active = true;//输入框样式
                    }
                }
            }
        }
    }
}]);
/*
* 输入框(组件C1 地址)
* author:yanglijun
* date:2017-03-15
*/
ljdirective.directive('ljInputC1',['$timeout','$window','ljChecks',function($timeout,$window,ljChecks){ 
    return{
        restrict: 'E',
        transclude: true,
        templateUrl:"/common/components/input/ljInputC1.html",
        scope:{
            ljvalue :"=value",//输入的值
            msg :"=msg",//提示信息
            active :"=active",// input 框的样式
            isnull:'@',//是否进行空验证
            isblur:'@',//是否进行失去焦点验证
            defaultmsg:'@'
        },
        link: function (scope,element,attr){
            if(scope.isblur == 1)//失去焦点验证输入框标志
            {
                //失去焦点，对输入框进行验证,参数为：输入框的值，是否验证空的标志
                scope.ljf = function()
                {
                    var res = ljChecks.ckInputA1L(scope.ljvalue,scope.isnull);
                    if(res.status == 2) 
                    {
                        scope.msg = '不可为空'; //错误提示信息
                        scope.active = false;//输入框样式
                    }else
                    {
                        scope.msg = ''; //错误提示信息
                        scope.active = true;//输入框样式
                    }
                }
            }
        }
    }
}]);
/*
* 输入框(组件D1 金额)
* author:yanglijun
* date:2017-03-14
*/
ljdirective.directive('ljInputD1',['$timeout','$window','ljChecks',function($timeout,$window,ljChecks){
    return{
        restrict:'E',
        replace:true,
        templateUrl:"/common/components/input/ljInputD1.html",
        scope:{
            len :"@",//输入框的最大长度
            ljvalue :"=value",//输入的值
            msg :"=",//提示信息
            active :"=",// input 框的样式
            isnull:'@',//是否进行空验证
            isblur:'@',//是否进行失去焦点验证
            defaultmsg:'@'
        },
        link: function (scope,element,attr){
            //监听input框输入值 
            scope.$watch('ljvalue', function (newVal,oldVal){
                var reg = /^\d+(\.\d{0,2})?$/; //验证规则整数或者整数最多两位小数
                var flag = reg.test(scope.ljvalue); //true
                if (scope.ljvalue != undefined && scope.ljvalue!='' && flag == false)
                {
                    //输入的值不匹配，倒退到之前的值
                    scope.ljvalue = oldVal;
                };
            })
            //失去焦点验证input框
            if(scope.isblur == 1)//失去焦点验证输入框标志
            {
                //失去焦点，对输入框进行验证
                scope.ljf = function()
                {
                    var res = ljChecks.ckInputB1(scope.ljvalue,scope.isnull);//参数为：输入框的值，是否验证空的标志
                    if(res.status == 2) 
                    {
                        scope.msg = '不可为空'; //错误提示信息
                        scope.active = false;//输入框样式
                    }else if(res.status == 3)
                    {
                        scope.msg = res.info; //错误提示信息
                        scope.active = false;//输入框样式
                    }else
                    {
                        scope.msg = ''; //错误提示信息
                        scope.active = true;//输入框样式
                    }
                }
            }
        }
    }
}]);
/*
* 输入框(组件E1数量)
* author:zoulipeng
* date:2017-03-14
*/
ljdirective.directive('ljInputE1',['$timeout','$window','ljChecks',function($timeout,$window,ljChecks){ 
    return{
        restrict: 'E',
        transclude: true,
        templateUrl:"/common/components/input/ljInputE1.html",
        scope:{
            maxnum :"@maxnum",//输入框的最大值
            ljvalue :"=value",//输入的值
            msg :"=msg",//提示信息
            active :"=active",// input 框的样式
            isnull:'@',//是否进行空验证 1 验证 其他不验证
            isblur:'@',//是否进行失去焦点验证  1 验证 其他不验证
            place:'@',//placeholder 提示信息
        },
        link: function (scope,element,attr){
            //监听input框输入值 
            scope.$watch('ljvalue', function (newVal,oldVal){
                        if (!scope.ljvalue)
                        {
                               if (oldVal && scope.ljvalue !==null)
                               {
                                    scope.ljvalue = oldVal;
                                }else{
                                    scope.ljvalue ='';
                                }
                        }else
                        {
                                var reg =  /^[1-9][0-9]*$/;
                                var flag = reg.test(scope.ljvalue); //true;
                                if (flag == false )
                                {
                                    //输入的值不匹配，倒退到之前的值
                                    if (oldVal){
                                        scope.ljvalue = oldVal;
                                    }else{
                                        scope.ljvalue ='';
                                    }
                                }
                        }
            });
            //标示为1 失去光标验证
             if(scope.isblur == 1)//失去焦点验证输入框标志
            {
                //失去焦点，对输入框进行验证,参数为：输入框的值，是否验证空的标志
                scope.ljf = function()
                {
                    var res = ljChecks.ckInputI1(scope.ljvalue,scope.isnull);
                    if(res.status == 2) 
                    {
                        scope.msg = '不可为空'; //错误提示信息
                        scope.active = false;//输入框样式
                    }else
                    {
                        scope.msg = ''; //错误提示信息
                        scope.active = true;//输入框样式
                    }
                }
            }
        }
    }
}]);
/*
* 输入框(组件F1数字)
* author:liujingxia
* date:2017-03-16
*/
ljdirective.directive('ljInputF1',['$timeout','$window','ljChecks',function($timeout,$window,ljChecks){ 
    return{
        restrict: 'E',
        transclude: true,
        templateUrl:"/common/components/input/ljInputF1.html",
        scope:{
            ljvalue :"=value",//输入的值
            msg :"=msg",//提示信息
            active :"=active",// input 框的样式
            maxnum :"@",
            isnull:'@',//是否进行空验证 1 验证 其他不验证
            isblur:'@',//是否进行失去焦点验证  1 验证 其他不验证
            place:'@',//placeholder 提示信息
        },
        link: function (scope,element,attr){
            var num = parseInt(scope.maxnum);//字符串转换为数字
            //监听input框输入值 
            scope.$watch('ljvalue', function (newVal,oldVal){
                var reg =  /^(0|[1-9][0-9]*)$/;
                var flag = reg.test(scope.ljvalue); //true;
                if(num<scope.ljvalue){
                    scope.ljvalue = oldVal;
                }
                if (flag == false && scope.ljvalue)
                {
                    //输入的值不匹配，倒退到之前的值
                    if (oldVal){
                        scope.ljvalue = oldVal;
                    }else{
                        scope.ljvalue ='';
                    }
                } 
            });
            //标示为1 失去光标验证
             if(scope.isblur == 1)//失去焦点验证输入框标志
            {
                //失去焦点，对输入框进行验证,参数为：输入框的值，是否验证空的标志
                scope.ljf = function()
                {
                    var res = ljChecks.ckInputI1(scope.ljvalue,scope.isnull);
                    if(res.status == 2) 
                    {
                        scope.msg = '不可为空'; //错误提示信息
                        scope.active = false;//输入框样式
                    }else
                    {
                        scope.msg = ''; //错误提示信息
                        scope.active = true;//输入框样式
                    }
                }
            }
        }
    }
}]);
/*
* 输入框(组件G1手机号)
* author:zoulipeng
* date:2017-03-14
*/
ljdirective.directive('ljInputG1',['$timeout','$window','ljChecks',function($timeout,$window,ljChecks){ 
    return{
        restrict: 'E',
        transclude: true,
        templateUrl:"/common/components/input/ljInputG1.html",
        scope:{
            len :"@len",//输入框的最大长度
            ljvalue :"=value",//输入的值
            msg :"=msg",//提示信息
            active :"=active",// input 框的样式
            isnull:'@',//是否进行空验证 1 验证 其他不验证
            isblur:'@',//是否进行失去焦点验证  1 验证 其他不验证
            place:'@',//placeholder 提示信息
        },
        link: function (scope,element,attr){
            if (scope.isblur == 1) {
                scope.ljf = function()
                {
                    var res = ljChecks.ckInputF1(scope.ljvalue,scope.isnull);
                    if(res.status == 2) 
                    {
                        scope.msg = '不可为空'; //错误提示信息
                        scope.active = false;//输入框样式
                    }else if(res.status == 3) 
                    {
                        scope.msg = '格式错误'; //错误提示信息
                        scope.active = false;//输入框样式
                    }else
                    {
                        scope.msg = ''; //错误提示信息
                        scope.active = true;//输入框样式
                    }
                }
            }
        }
    }
}]);
/*
* 输入框(组件H1固定电话)
* author:zoulipeng
* date:2017-03-10
*/
ljdirective.directive('ljInputH1',['$timeout','$window','ljChecks',function($timeout,$window,ljChecks){ 
    return{
        restrict: 'E',
        transclude: true,
        templateUrl:"/common/components/input/ljInputH1.html",
        scope:{
            len :"@len",//输入框的最大长度
            ljvalue :"=value",//输入的值
            msg :"=msg",//提示信息
            active :"=active",// input 框的样式
            isnull:'@',//是否进行空验证 1 验证 其他不验证
            isblur:'@',//是否进行失去焦点验证  1 验证 其他不验证
            place:'@',//placeholder 提示信息
        },
        link: function (scope,element,attr){
            if (scope.isblur == 1) {
                scope.ljf = function()
                {
                    var res = ljChecks.ckInputG1(scope.ljvalue,scope.isnull);
                    if(res.status == 2) 
                    {
                        scope.msg = '不可为空'; //错误提示信息
                        scope.active = false;//输入框样式
                    }else if(res.status == 3) 
                    {
                        scope.msg = '格式错误'; //错误提示信息
                        scope.active = false;//输入框样式
                    }else
                    {
                        scope.msg = ''; //错误提示信息
                        scope.active = true;//输入框样式
                    }
                }
            }
        }
    }
}]);
/*
* 输入框(组件I1固定电话或手机号)
* author:zoulipeng
* date:2017-03-14
*/
ljdirective.directive('ljInputI1',['$timeout','$window','ljChecks',function($timeout,$window,ljChecks){ 
    return{
        restrict: 'E',
        transclude: true,
        templateUrl:"/common/components/input/ljInputI1.html",
        scope:{
            len :"@len",//输入框的最大长度
            ljvalue :"=value",//输入的值
            msg :"=msg",//提示信息
            active :"=active",// input 框的样式
            isnull:'@',//是否进行空验证 1 验证 其他不验证
            isblur:'@',//是否进行失去焦点验证  1 验证 其他不验证
            place:'@',//placeholder 提示信息
        },
        link: function (scope,element,attr){
            if (scope.isblur == 1) {
                scope.ljf = function()
                {
                    var res = ljChecks.ckInputH1(scope.ljvalue,scope.isnull);
                    if(res.status == 2) 
                    {
                        scope.msg = '不可为空'; //错误提示信息
                        scope.active = false;//输入框样式
                    }else if(res.status == 3) 
                    {
                        scope.msg = '格式错误'; //错误提示信息
                        scope.active = false;//输入框样式
                    }else
                    {
                        scope.msg = ''; //错误提示信息
                        scope.active = true;//输入框样式
                    }
                }
            }
        }
    }
}]);
/**
* 输入框（组件J1邮箱）
* author:yanglijun
* date:2017-03-15
*/
ljdirective.directive('ljInputJ1',['$timeout','$window','ljChecks',function($timeout,$window,ljChecks){
    return{
        restrict:"E",
        templateUrl:"/common/components/input/ljInputJ1.html",
        replace:true,
        scope:{
            ljvalue :"=value",//输入的值
            msg :"=",//提示信息
            active :"=active",// input 框的样式
            isnull:'@',//是否进行空验证
            defaultmsg:'@'
        },
            
        link: function (scope,element,attr){
            //失去焦点，对输入框进行验证
            scope.ljf = function()
            {
                var res = ljChecks.ckInputD1(scope.ljvalue,scope.isnull);//参数为：输入框的值，是否验证空的标志
                if(res.status == 2) 
                {
                    scope.msg = '不可为空'; //错误提示信息
                    scope.active = false;//输入框样式
                }else if(res.status == 3)
                {
                    scope.msg = res.info; //错误提示信息
                    scope.active = false;//输入框样式
                }else
                {
                    scope.msg = ''; //错误提示信息
                    scope.active = true;//输入框样式
                }  
            }      
        }
    }
}]);
/**
* 输入框（组件K1 URL地址）
* author:yanglijun
* date:2017-03-15
*/
ljdirective.directive('ljInputK1',['$timeout','$window','ljChecks',function($timeout,$window,ljChecks){
    return{
        restrict:"E",
        templateUrl:"/common/components/input/ljInputK1.html",
        replace:true,
        scope:{
            ljvalue :"=value",//输入的值
            msg :"=",//提示信息
            active :"=",// input 框的样式
            isnull:'@',//是否进行空验证
            defaultmsg:'@'
        },
            
        link: function (scope,element,attr){
            //失去焦点，对输入框进行验证
            scope.ljf = function()
            {
                var res = ljChecks.ckInputC1(scope.ljvalue,scope.isnull);//参数为：输入框的值，是否验证空的标志
                if(res.status == 2) 
                {
                    scope.msg = '不可为空'; //错误提示信息
                    scope.active = false;//输入框样式
                }else if(res.status == 3)
                {
                    scope.msg = res.info; //错误提示信息
                    scope.active = false;//输入框样式
                    console.log(scope.active)
                }else
                {
                    scope.msg = ''; //错误提示信息
                    scope.active = true;//输入框样式
                }  
            }      
        }
    }
}]);
/*
* 密码输入框(组件L1)
* author:yanglijun
* date:2017-03-16
*/
ljdirective.directive('ljInputL1',['$timeout','$window','ljChecks',function($timeout,$window,ljChecks){ 
    return{
        restrict: 'E',
        transclude: true,
        templateUrl:"/common/components/input/ljInputL1.html",
        scope:{
            ljvalue :"=value",//输入的值
            msg :"=msg",//提示信息
            active :"=active",// input 框的样式
            defaultmsg:'@'
        },
        link: function (scope,element,attr){
            scope.issame = 0;//不验证密码重复性标志
            scope.valueold = 0;//第一个输入框输入密码的标志
            //失去焦点，对输入框进行验证,参数为：输入框的值，是否验证空的标志
            scope.ljfja = function()
            {
                var res = ljChecks.ckInputJ1(scope.ljvalue,scope.valueold,scope.issame);
                if(res.status != 1) 
                {
                    scope.msg = res.info; //错误提示信息
                    scope.active = false;//输入框样式
                }else
                {
                    scope.msg = ''; //错误提示信息
                    scope.active = true;//输入框样式
                }
            }
        }
    }
}]);
/*
* 重复密码输入框(组件L2)
* author:yanglijun
* date:2017-03-16
*/
ljdirective.directive('ljInputL2',['$timeout','$window','ljChecks',function($timeout,$window,ljChecks){ 
    return{
        restrict: 'E',
        transclude: true,
        templateUrl:"/common/components/input/ljInputL2.html",
        scope:{
            valuere :"=",//输入的值
            msgre :"=",//提示信息
            activere :"=",// input 框的样式
            defaultmsgre:'@',//默认提示信息
            issame:'=',//是否验证两次密码一致
            valueold:'@'
        },
        link: function (scope,element,attr){
            //失去焦点，对输入框进行验证,参数为：输入框的值，是否验证空的标志
            scope.ljfrel2 = function()
            {
                var res = ljChecks.ckInputJ1(scope.valuere,scope.valueold,scope.issame);
                if(res.status != 1) 
                {
                    scope.msgre = res.info; //错误提示信息
                    scope.activere = false;//输入框样式
                }else
                {
                    scope.msgre = ''; //错误提示信息
                    scope.activere = true;//输入框样式
                }
            }
        }
    }
}]);
/**
*分页D1
*@author : yanglijun
*@data:2017-03-16
*/
ljdirective.directive('ljPagingD1',function(){
    return{
        restrict : "E",
        templateUrl:"/common/components/page/ljPagingD1.html",
        replace : true,
        scope:
        {
            ljf:"&",
            currentpage:'=',
            count:'='
        },
        link: function (scope,element,attr){
            scope.classPrev= false;//默认上一页的class
            scope.classLast = true;//默认下一页的class
            scope.search = function(currentPage)
            {
                //不是第一页的时候，上一页的小三角class变红
                if(currentPage > 1)
                {
                    scope.classPrev = true;
                }else
                {
                    scope.classPrev = false;
                } 
                //最后一页的时候，下一页的小三角class变灰
                if(currentPage < scope.count)
                {
                    scope.classLast = true;
                }else
                {
                    scope.classLast = false;
                } 
            }
        }
    };
    
});

/*
* 分页A1
* author:zoulipeng
* date:2017-03-14
*/
ljdirective.directive('ljPagingA1',['$timeout','$window','ljChecks',function($timeout,$window,ljChecks){ 
    return{
        restrict: 'E',
        transclude: true,
        templateUrl:"/common/components/page/ljPagingA1.html",
        scope:{
            count :"=count",//输入框的最大值
            offset :"=offset",//输入的值
            limit :"=limit",//提示信息
            ljf:"&ljf",//提示信息
        },
        link: function (scope,element,attr)
        {
            if (!scope.count) {scope.count = 0};//总条数         
            if (!scope.limit) {scope.limit = 15};//默认15 行
            if (!scope.offset) {scope.offset = 0};//偏移量
            scope.res  = '';
            scope.$watch('count+offset', function (newVal,oldVal){
                scope.res = ljChecks.pageA(scope.count,scope.limit,scope.offset,7);
            });
            scope.go = function(goNum){
                    var reg =  /^[1-9][0-9]*$/;
                    var flag = reg.test(goNum); //true;
                if (flag){
                    var goOffset = (goNum-1)*scope.limit> scope.res.lastOffset ? scope.res.lastOffset : (goNum-1)*scope.limit;
                    scope.ljf({data:goOffset});
                } 
            }
        }
    }
}]);
/*
* 分页B1
* author:zoulipeng
* date:2017-03-14
*/
ljdirective.directive('ljPagingB1',['$timeout','$window','ljChecks',function($timeout,$window,ljChecks){ 
    return{
        restrict: 'E',
        transclude: true,
        templateUrl:"/common/components/page/ljPagingB1.html",
        scope:{
            count :"=count",//输入框的最大值
            offset :"=offset",//输入的值
            limit :"=limit",//提示信息
            ljf:"&ljf",//提示信息
        },
        link: function (scope,element,attr)
        {
            if (!scope.count) {scope.count = 0};//总条数         
            if (!scope.limit) {scope.limit = 15};//默认15 行
            if (!scope.offset) {scope.offset = 0};//偏移量
            scope.res  = '';
            scope.$watch('count+offset', function (newVal,oldVal){
                scope.res = ljChecks.pageA(scope.count,scope.limit,scope.offset,11);
            });
        }
    }
}]);
/*
* 分页C1
* author:zoulipeng
* date:2017-03-14
*/
ljdirective.directive('ljPagingC1',['$timeout','$window','ljChecks',function($timeout,$window,ljChecks){ 
    return{
        restrict: 'E',
        transclude: true,
        templateUrl:"/common/components/page/ljPagingC1.html",
        scope:{
            count :"=count",//输入框的最大值
            offset :"=offset",//输入的值
            limit :"=limit",//提示信息
            ljf:"&ljf",//提示信息
        },
        link: function (scope,element,attr)
        {
            if (!scope.count) {scope.count = 0};//总条数         
            if (!scope.limit) {scope.limit = 15};//默认15 行
            if (!scope.offset) {scope.offset = 0};//偏移量
            scope.res  = '';
            scope.$watch('count+offset', function (newVal,oldVal){
                scope.res = ljChecks.pageA(scope.count,scope.limit,scope.offset,7);
            });
            scope.go = function(goNum){
                    var reg =  /^[1-9][0-9]*$/;
                    var flag = reg.test(goNum); //true;
                if (flag){
                    var goOffset = (goNum-1)*scope.limit> scope.res.lastOffset ? scope.res.lastOffset : (goNum-1)*scope.limit;
                    scope.ljf({data:goOffset});
                } 
            }
        }
    }
}]);
/*
* 轮波图A
* author:yanglijun
* date:2017-03-29
*/
ljdirective.directive('ljWaveGraphA',['$window',function($window){ 
    return{
        restrict: 'E',
        transclude: true,
        templateUrl:"/common/components/waveGraph/ljWaveGraphA.html",
        scope:{
           myInterval :"@myinterval",//轮波图间隔时间
           images:'=' //轮波图图片
        },
        link: function (scope,element,attr)
        {
            scope.noWrapSlides = false;
            var slides = scope.slides = [];// 轮播图数据初始化
            //添加轮播图源
            scope.addSlide = function () 
            {
                var newWidth = 600 + slides.length + 1;
                angular.forEach(scope.images, function(data){
                    slides.push({
                        image: data.image,//图片
                        text: data.text,//图片上显示的文字
                    });
                });
            };
            scope.addSlide();
        }
    }
}]);
/*
* 图片滑动验证码
* author:yanglijun
* date:2017-03-30
*/
ljdirective.directive('ljVerificationCodeA1',['$timeout','$window','ljChecks','$http',function($timeout,$window,ljChecks,$http){ 
    return{
        restrict: 'E',
        transclude: true,
        templateUrl:"/common/components/verificationCode/ljVerificationCodeA1.html",
        // scope:{
           
        // },   
    }
}]);
/*
* 时间控件B1
* author:yanglijun
* date:2017-04-07
*/
ljdirective.directive('ljDatepickerB1', function($timeout) 
{
    return {
        restrict: 'E',
        transclude: true,
        templateUrl:"/common/components/datepicker/ljDatepickerB1.html",
        scope: {
            ljtvalue :"=",//输入的值
            maxDate:'@',//最大时间
            minDate:'@',//最小时间
            ischeckt:'=',//是否验证时间不可为空
            timeerrort:'=',//错误提示信息
        },
        link: function(scope, element, attr) {
            //input框的id的值
            var timeId = document.getElementById("timeStartId").id;   
            // 初始化参数 
            var config = {
                    elem: '#'+timeId, //需显示日期的元素选择器
                    format: attr.format != undefined && attr.format != '' ? attr.format : 'YYYY-MM-DD',//日期格式
                    max:attr.hasOwnProperty('maxDate')?attr.maxDate:'',//最大日期
                    min:attr.hasOwnProperty('minDate')?attr.minDate:'',//最小日期
                    istime: attr.istime == 'true' ? true : false,//是否开启时分秒的时间选择
                    istoday: false,//是否显示今天
                    //选择好日期的回调
                    choose: function(data) {
                        scope.$apply(setViewValue);
                    },
                };
                //初始化参数配置
                var date= laydate(config);
                laydate.skin(attr.timeskin !=''? attr.timeskin:'default');//初始化皮肤
                //更新模型上的视图值
                function setViewValue() {
                    var value = document.getElementById('timeStartId');
                    var calues = value.value;
                    scope.ljtvalue = calues
                }
        }
    };
})
/*
* 时间控件B2
* author:yanglijun
* date:2017-04-07
*/
ljdirective.directive('ljDatepickerB2', function($timeout) 
{
    return {
        restrict: 'E',
        transclude: true,
        templateUrl:"/common/components/datepicker/ljDatepickerB2.html",
        scope: {
            ljtvalueend :"=",//输入的值
            maxDate:'@',//最大时间
            minDate:'@',//最小时间
            ischeckend:'=',//是否验证时间不可为空
            timeerrorend:'=',//错误提示信息
        },
        link: function(scope, element, attr) {
            //input框的id的值
            var timeId = document.getElementById("timeEndId").id;   
            // 初始化参数 
            var config = {
                    elem: '#'+timeId, //需显示日期的元素选择器
                    format: attr.formatend != undefined && attr.formatend != '' ? attr.formatend : 'YYYY-MM-DD',//日期格式
                    max:attr.hasOwnProperty('maxDateEnd')?attr.maxDateEnd:'',//最大日期
                    min:attr.hasOwnProperty('minDateEnd')?attr.minDateEnd:'',//最小日期
                    istime: attr.istimeend == 'true' ? true : false,//是否开启时分秒的时间选择
                    istoday: false,//是否显示今天
                    //选择好日期的回调
                    choose: function(data) {
                        scope.$apply(setViewValue);
                    },
                };
                //初始化参数配置
                var date= laydate(config);
                laydate.skin(attr.timeskinend !=''? attr.timeskinend:'default');//初始化皮肤
                //更新模型上的视图值
                function setViewValue() {
                    var value = document.getElementById('timeEndId');
                    var calues = value.value;
                    scope.ljtvalueend = calues
                }
        }
    };
})
/*
* 时间控件B3 (开始时间和结束时间)
* author:yanglijun
* date:2017-04-11
*/
ljdirective.directive('ljDatepickerB3', function($timeout) 
{
    return {
        restrict: 'E',
        transclude: true,
        templateUrl:"/common/components/datepicker/ljDatepickerB3.html",
        scope: {
            startvalueb3 :"=",//输入的开始时间
            endvalueb3:"=",//输入的结束时间
            ischeckb3:'=',//是否验证时间不可为空
            timeerrorb3:'=',//错误提示信息
            starttimename:"@",//开始时间
            endtimename:"@",//结束时间
            foldline:'@'//是否折行
        },
        link: function(scope, element, attr) {
            //input框的id的值
            var start = {
                elem: '#starttimeb3',
                format: attr.formatb3 != undefined && attr.formatb3 != '' ? attr.formatb3 : 'YYYY-MM-DD',//日期格式
                max:attr.hasOwnProperty('maxDateB3')?attr.maxDateB3:'',//最大日期
                min:attr.hasOwnProperty('minDateB3')?attr.minDateB3:'',//最小日期
                istime: attr.istimeb3 == 'true' ? true : false,//是否开启时分秒的时间选择
                istoday: false,
                choose: function(datas){
                    end.min = datas; //开始日选好后，重置结束日的最小日期
                    end.start = datas //将结束日的初始值设定为开始日
                    scope.$apply(setViewValue);
                }
            };
            var end = {
                elem: '#endtimeb3',
                format: attr.formatb3 != undefined && attr.formatb3 != '' ? attr.formatb3 : 'YYYY-MM-DD',//日期格式,
                min: laydate.now(),
                max: '2099-06-16 23:59:59',
                istime: attr.istimeb3 == 'true' ? true : false,//是否开启时分秒的时间选择
                istoday: false,
                choose: function(datas){
                    start.max = datas; //结束日选好后，重置开始日的最大日期
                    scope.$apply(setViewValue);
                }
            };
            laydate(start);
            laydate(end);
            laydate.skin(attr.timeskinb3 !=''? attr.timeskinb3:'default');//初始化皮肤
            //更新模型上的视图值
            function setViewValue() {
                //更新开始时间
                var start = document.getElementById('starttimeb3').value;
                scope.startvalueb3 = start;
                //更新结束时间
                var end = document.getElementById('endtimeb3').value;
                scope.endvalueb3 = end;
            }
        }
    };
})
/**
* 标签A
* author:yanglijun
* date:2017-04-12 
*/
ljdirective.directive('ljLabelA1',function(){
    return{
        restrict:"E",
        templateUrl:"/common/components/label/ljLabelA1.html",
        replace:true,
        scope:{
            ljfadd: "&",//添加标签方法
            labelsarr: "=",//标签数组
            ljfdel: "&"//删除标签
        }
    }
});
/*
 * 弹出层A1
 *@author : yanglijun
 *@date:2017-04-13
 */
ljdirective.directive('ljPopupA1',function(){
    return{
        restrict : "E",
        templateUrl: '/common/components/popup/ljPopupA1.html',
        replace : true,
        scope:{
            popupA1Title:'@',//弹出层标题
            popupA1Name1:'@',//第一个输入框的名称
            popupA1Name2:'@',//第二个输入框的名称
            popupA1Name3:'@',//第三个输入框的名称
            popupA1Name4:'@',//第四个输入框的名称
            popupA1Holder1:'@',//第一个输入框的默认值
            popupA1Holder2:'@',//第二个输入框的默认值
            popupA1Holder3:'@',//第三个输入框的默认值
            popupA1Holder4:'@',//第四个输入框的默认值
            ljf:'&',//点击确定触发的方法
            popupA1Value1:'=',//
            popupA1Value2:'=',//
            popupA1Value3:'=',//
            popupA1Value4:'=',//
            popupMsg:'=',
            shows:"="
         }
    };
});
/*
 * 上传图片A1
 *@author : yanglijun
 *@date:2017-04-13
 */
ljdirective.directive('ljUploaderA1',function($http){
    return{
        restrict : "E",
        templateUrl: '/common/components/uploader/ljUploaderA1.html',
        replace : true,
        scope:{
            fileA1Error:'=',//上传图片错误提示信息
            imgUrl:'=',//图片初始化url
            saveA1:'=',//辅助保存按钮
            newImgUrl:'=',//上传图片的url
            uploadeErr:'=',//上传失败返回的信息
            oldImgName:'='//旧图片名称
         },
         link: function (scope, element, attr){
            if(scope.imgUrl != '')
            {
                //已有'src'属性,更改值
                document.getElementsByTagName('img')[0].setAttribute('src',scope.imgUrl);
            }
            //上传图片
            scope.uploadImageOne = function()
            {
                //获取旧图片名称
                var oldImgName= document.getElementById('imageurlo').value;
               
                //获取上传文件信息
                var fileInfo = document.getElementById('image_file').files[0];
                if(fileInfo.size > 1024*1024*2)
                {
                    document.getElementById('error').style.display = 'block';
                    return;
                }
                //过滤图片格式
                var filterRule = /^(image\/bmp|image\/gif|image\/jpeg|image\/png|image\/tiff)$/i;
                if (filterRule.test(fileInfo.type)) 
                {
                    scope.fileA1Value = fileInfo.name;
                    //获取预览节点
                    var previewImage = document.getElementById('preview');
                    //实例化读取文件类
                    var oReader = new FileReader();
                    oReader.onload = function(e)
                    {
                        previewImage.src = e.target.result;
                    };
                    //显示选中的文件
                    oReader.readAsDataURL(fileInfo);
                    $("#imageurl").val(fileInfo.name)
                    //ajax调用上传类上传图片
                    var upimg = $http({
                        url: '/index.php/data/uploade/index',
                        method: 'POST',
                        headers: {
                        'Content-Type': undefined
                            },
                        transformRequest: function() 
                        {
                            var formData = new FormData();
                            formData.append('file',fileInfo);
                            return formData;
                        }
                    });
                    upimg.success(function (data) {
                        if (data.state == 1){
                            //上传成功，错误信息隐藏
                            document.getElementById('error').style.display = 'none';
                            //返回新图片地址
                            scope.newImgUrl = data.info;
                            //旧图片名称
                            scope.oldImgName = data.image_name;
                            //如果上传了新图片，旧图片删除
                            if(oldImgName!='')
                            {
                                //ajax调用删除图片接口
                                var deloldimg = $http({
                                    url: '/index.php/data/uploade/delOldImg',
                                    method: 'POST',
                                    data:{
                                        'oldImgName':oldImgName//要删除图片的url
                                    }
                                });
                                deloldimg.success(function (data) {
                                    if (data.state != 1){
                                       alert('删除旧图片失败！');
                                    }
                                });
                            }
                        }else
                        {
                            //上传失败，错误信息显示
                            document.getElementById('error').style.display = 'block';
                            scope.uploadeErr = data.info;
                        }
                    }).error(function(error){
                        alert('保存图片失败！');
                    });
                }else
                {
                    document.getElementById('error').style.display = 'block';
                    return;
                }
            }
            //删除图片
            scope.delaImageOne = function()
            { 
                if(scope.imgUrl == '')
                {
                    scope.newImgUrl = scope.imgUrl
                }
                //ajax调用删除图片接口
                var delimg = $http({
                        url: '/index.php/data/uploade/delImg',
                        method: 'POST',
                        data:{
                            'newImgUrl':scope.newImgUrl//要删除图片的url
                        }
                    });
                delimg.success(function (data) {
                    if (data.state == 1){
                        //图片src清空
                       document.getElementsByTagName('img')[0].setAttribute('src','');
                    }else
                    {
                       alert('删除图片失败！');
                    }
                }).error(function(error){
                    alert('删除图片失败！');
                });
            }
        }
    };
});
/*
* 选项卡导航 组件 A1
* author:yanglijun
* date:2017-04-18
*/
ljdirective.directive('ljTabA1',function(){
    return{
        restrict : "E",
        templateUrl: '/common/components/tab/ljTabA1.html',
        replace : true,
        scope:{
           tabsA1:'=',//选项卡导航名称
           selectOne:'&'
        },
        link: function (scope, element, attr){
            //iframe 自适应高度
            $("#myiframe").load(function(){
                var mainheight = $(this).contents().find("body").height()+30;
                $(this).height(mainheight);
            }); 
            //单击一个选项卡触发事件
            scope.selectOne = function(contentOne)
            {
                console.log(contentOne.fs1)
                $('#'+contentOne.fs).load(contentOne.fs1);
                $('.r_groupActivie').hide();
                $('.'+contentOne.fs).show();
            }
        }

    }
});
/*
* 轮波图B
* author:yanglijun
* date:2017-03-29
*/
ljdirective.directive('ljWaveGraphB',['$window',function($window){ 
    return{
        restrict: 'E',
        transclude: true,
        templateUrl:"/common/components/waveGraph/ljWaveGraphB.html",
        scope:{
            intervalb :"=",//轮播图轮转间隔时间
            imagesb:'=', //轮波图图片
            imgwidthb:'@',//图片的宽
            imgheghtb:'@',//图片的高
            isarrowsb:'=',//是否显示上一页下一页的左右箭头,设置为1:显示，其余不显示
            isaginationb:'=',//是否显示轮播图下面的小圆点,设置为1：显示,其余不显示
            effectb:"@",//轮播图的切换效果,slide(位移切换),fade(淡入),cube(方块),coverflow(3d流)
            imgdetail:'&',//点击轮播图跳转地址
            defaultimg:'@'//没有轮播图片默认图
        },
        link: function (scope,element,attr)
        {
            //监听ng-repeat数据，等到ng-repeat数据加载完成后再进行轮播初始化
            scope.$watch(scope.imagesb, function (newVal,oldVal){
               if(oldVal!=''||undefined) 
               {
                    //执行轮播初始化
                    var swiper = new Swiper('.swiper-container', {
                    pagination: '.swiper-pagination',//显示不显示小圆点的class
                    nextButton: '.swiper-button-next',//上页下页按钮显示
                    prevButton: '.swiper-button-prev',
                    paginationClickable: true,//点小圆点切换图片
                    spaceBetween: 0,//图片之间切换的距离
                    centeredSlides: true,//设定为true时，活动块会居中，而不是默认状态下的居左
                    autoplay: scope.intervalb,//滑动间隔秒数
                    autoplayDisableOnInteraction: false,
                    effect: scope.effectb,//轮播图样式fade：淡入slide：位移切换
                    observer:true,//修改swiper自己或子元素时，自动初始化swiper
                    observeParents:true,//修改swiper的父元素时，自动初始化swiper
                    });
                } 
            });
        }
    }
}]);
/*
 * 手机端列表（品牌）
 *@author : yanglijun
 *@date:2017-04-27
 */
ljdirective.directive('ljListF',['ljChecks','$http',function(ljChecks,$http){ 
    return{
        restrict : "E",
        templateUrl: '/common/components/list/ljListF.html',
        replace : true,
        scope:{
            brandlist:'=',//品牌列表
            brandposition:'&',//点击英文字母触发品牌定位的方法
            defualtimg:'@',//默认logo图片
            imgwid:'@',//图片宽
            imgheight:'@',//图片高
            brandurl:'@',//点击品牌跳转链接
            logourl:'@',//logo图片存放地址
            gotopimg:'@'//返回顶部图片地址
         },
        link: function (scope,element,attr)
        {
            ljChecks.moveMgoTop();       
        }
    };
}]);
/*
* 选项卡导航 组件 B1
* author:yanglijun
* date:2017-05-03
*/
ljdirective.directive('ljTabB1',['ljChecks','$http',function(ljChecks,$http){ 
    return{
        restrict : "E",
        templateUrl: '/common/components/tab/ljTabB1.html',
        replace : true,
        scope:{
            classifys:'=',//选项卡数据
            tabsA1:'=',//选项卡导航名称
            firstclassify:'&',//点击一级分类触发
            typeurl:'@',//点击三级分类跳转的地址
            gotopurl:'@'//返回顶部图片地址
        },
        link: function (scope, element, attr){
            //点击一级分类时候触发
            scope.firstclassify = function(classifyone,$event)
            {
                angular.element(event.target).parent('li').siblings('li').removeClass('commodity_active');
                angular.element(event.target).parent('li').addClass('commodity_active');
            };
            ljChecks.moveMgoTop(); //调用返回顶部的helper
        }
    }
}]);
/*
* 列表组件G
* author:yanglijun
* date:2017-05-04
*/
ljdirective.directive('ljListG',['ljChecks','$http',function(ljChecks,$http){ 
    return{
        restrict : "E",
        templateUrl: '/common/components/list/ljListG.html',
        replace : true,
        scope:{
            newlist:'=',//资讯列表数据
            newdetailurl:'@',//新闻跳转链接地址
            cutwordlen:'@',//文字截取个数
            topurl:'@'//返回顶部图片链接
        },
        link: function (scope, element, attr){
            ljChecks.moveMgoTop(); //调用返回顶部的helper
        }
    }
}]);
/*
* 文字截取过滤器
* author:yanglijun
* date:2017-05-04
*/
ljdirective.filter('cutword',function () {
  return function (value, wordwise, max, tail) {
    if (!value) return '';
    max = parseInt(max, 10);
    if (!max) return value;
    if (value.length <= max) return value;
    value = value.substr(0, max);
    if (wordwise) {
      var lastspace = value.lastIndexOf(' ');
      if (lastspace != -1) {
        value = value.substr(0, lastspace);
      }
    }
    return value + (tail || ' …');
  };
});
/*
* 商品组件A1
* author:yanglijun
* date:2017-05-05
*/
ljdirective.directive('ljProductA1',['ljChecks','$http',function(ljChecks,$http){ 
    return{
        restrict : "E",
        templateUrl: '/common/components/product/ljProductA1.html',
        replace : true,
        scope:{
           product:'=',//商品信息
           prowidth:'@',//商品的宽
           proheight:'@', //商品的高
           altimg:'@', //没有商品图片时默认图片
           producturl:'@', //点击商品跳转链接地址
        },
    }
}]);
/*
* 商品组件A2
* author:yanglijun
* date:2017-05-09
*/
ljdirective.directive('ljProductA2',['ljChecks','$http',function(ljChecks,$http){ 
    return{
        restrict : "E",
        templateUrl: '/common/components/product/ljProductA2.html',
        replace : true,
        scope:{
           product:'=',//商品信息
           prowidth:'@',//商品的宽
           proheight:'@', //商品的高
           altimg:'@', //没有商品图片时默认图片
           producturl:'@', //点击商品跳转链接地址
        },
    }
}]);
/*
* 商品组件A3
* author:yanglijun
* date:2017-05-09
*/
ljdirective.directive('ljProductA3',['ljChecks','$http',function(ljChecks,$http){ 
    return{
        restrict : "E",
        templateUrl: '/common/components/product/ljProductA3.html',
        replace : true,
        scope:{
           product:'=',//商品信息
           prowidth:'@',//商品的宽
           proheight:'@', //商品的高
           altimg:'@', //没有商品图片时默认图片
           producturl:'@', //点击商品跳转链接地址
           activityimg:'@',//活动图片
           activitywidth:'@',//活动图片的宽
        },
    }
}]);
/*
* 商品组件A4
* author:yanglijun
* date:2017-05-09
*/
ljdirective.directive('ljProductA4',['ljChecks','$http',function(ljChecks,$http){ 
    return{
        restrict : "E",
        templateUrl: '/common/components/product/ljProductA4.html',
        replace : true,
        scope:{
           product:'=',//商品信息
           prowidth:'@',//商品的宽
           proheight:'@', //商品的高
           altimg:'@', //没有商品图片时默认图片
           producturl:'@', //点击商品跳转链接地址
           activityimg:'@',//活动图片
           activitywidth:'@',//活动图片的宽
        },
    }
}]);
/*
* 列表组件H
* author:liujingxia
* date:2017-05-08
*/
ljdirective.directive('ljListH',['ljChecks','$http',function(ljChecks,$http){ 
    return{
        restrict : "E",
        templateUrl: '/common/components/list/ljListH.html',
        replace : true,
        scope:{
           inforlist:'=', //信息数据
           titlewidth:'@', //信息title的宽
           namewidth:'@', //信息name的宽
        },
    }
}]);

/*
* 编辑器组件
* author:liujingxia
* date:2017-05-15
*/
ljdirective.directive('ljTextareaC1',['ljChecks','$http',function(ljChecks,$http){ 
    return{
        restrict : "E",
        templateUrl: '/common/components/textarea/ljTextareaC1.html',
        replace : true,
        scope:{
            msgc :"=msgc",//错误提示信息
        },
    }
}]);

/*
* content内容
* author:yanglijun
* date:2017-05-19
*/
ljdirective.directive('ljContentA',['ljChecks','$http',function(ljChecks,$http){ 
    return{
        restrict : "E",
        templateUrl: '/common/components/content/ljContentA.html',
        replace : true,
        scope:{
            newcontent: "=",//显示内容
            gotopurl:'@'
        },
        link: function (scope, element, attr){
            ljChecks.moveMgoTop(); //调用返回顶部的helper
        }
    }
}]);
/*
* tabC切换标签组件
* author:liujingxia
* date:2017-07-21
*/
ljdirective.directive('ljTabC1',function(){
    return{
        restrict : "E",
        templateUrl: '/common/components/tab/ljTabC1.html',
        replace : true,
        scope:{
            tabsc: "=",//选项卡导航数据
            ljf:'&' //点击单个选项卡触发的方法
        },
        link:function(scope,element,attr){
            //点击单个选项卡改变该选项卡样式
            scope.moduleActive = function($event){
                angular.element(event.target).addClass('active').parent('li').siblings('li').find('a').removeClass('active');
            }
        }
    }
})
/**
* 验证码 组件 B
* author:yanglijun
* date:2017-07-21 
*/
ljdirective.directive('ljVerificationCodeB',function(){
     return{
        restrict: 'E',
        transclude: true,
        templateUrl:"/common/components/verificationCode/ljVerificationCodeB.html",
        scope:{
            verifycode:'=',//验证码
            verifyerror:'='//是否显示验证码错误信息0：不显示 1：显示
        },
        link: function (scope, element, attr){
            //实例化验证码的类
            var verifyCode = new GVerify("verifyCanvas");
            //获取验证码值
            scope.verifycode = verifyCode.options.code
            //点击换一张图片
            scope.changeImg = function()
            {
                verifyCode.refresh();//更新验证码
                scope.verifycode = verifyCode.options.code;//获取验证码值
            }
        }   
    }
});
/**
* 标签B
* author:liujingxia
* date:2017-07-21 
*/
ljdirective.directive('ljLabelB1',function(){
    return{
        restrict:"E",
        templateUrl:"/common/components/label/ljLabelB1.html",
        replace:true,
        scope:{
            labelsarr: "=",//标签数组
            count:"=count",//总数
            labelclick:"&",//点击标签
            loadmore:"&",//加载更多标签
            listlen:'=listlen'
        },
        link:function(scope, element, att){
            //单击标签则边框变颜色
            // scope.labelActive = function($event){
            //     alert(1);
            // }
        }
    }
});

/*
 * 上传图片B1
 *@author : yanglijun
 *@date:2017-08-03
 */
ljdirective.directive('ljUploaderB1',function($http){
    return{
        restrict : "E",
        templateUrl: '/common/components/uploader/ljUploaderB1.html',
        replace : true,
        scope:{
            alreadyImg:'=',//已经存在的图片数组
            imgName:'=',//上传成功图片的名称
            imgNames:'=',//所有上传成功图片的名称
            uploadUrl:'=',//上传照片成返回的图片路径
            delid:'=',//要删除的图片id
            delImg:'&'//删除已经有的照片
        },
        link: function (scope, element, attr)
        {
            scope.delid = 100;
            scope.imgNames = [];
            //上传并保存图片
            scope.uploadImageOne = function()
            {
                var fileInfo = document.getElementById('photoimg').files[0];//上传图片的信息
                var status = $("#up_status");//上传进度条
                var btn = $("#up_btn");//上传按钮
                var imgError = $('#imgError');//错误提示信息
                status.show();
                btn.hide();
                //执行图片上传
                var upimg = $http({
                    url: '/index.php/data/upload/index',
                    method: 'POST',
                    headers: {
                    'Content-Type': undefined
                        },
                    transformRequest: function() 
                    {
                        var formData = new FormData();
                        formData.append('photoimg',fileInfo);
                        return formData;
                    }
                });
                upimg.success(function (data) {
                    if(data.state == 1)
                    {
                        scope.delid+=1;//给上传好的图片动态分配id
                        status.hide();//上传进度条隐藏
                        btn.show();//添加图片按钮显示
                        imgError.hide();//错误提示信息隐藏
                        scope.uploadUrl = data.info;//上传照片成返回的图片路径
                        scope.imgName = data.image_name;//图片名称
                        //添加成功一张往id为preview这个div里面追加一张图片，让其显示
                        angular.element("#preview").prepend("<span><img src="+scope.uploadUrl+" class='preview'><em class='del' id='delimgb"+scope.delid+"'><input type='hidden' id='path' value="+data.imagepath+"><input type='hidden' id='imagename' value="+data.image_name+"></em><!-- 删除按钮 --></span>");
                        //上传成功一张往图片名称数组里面追加一个图片名称
                        scope.imgNames.push(data.image_name)
                    }else
                    {
                        //上传失败
                        status.hide();//上传进度条隐藏
                        btn.show();//添加图片按钮显示
                        imgError.show();//错误提示信息显示
                    }
                }).error(function(error){
                    status.hide();//上传进度条隐藏
                    btn.show();//添加图片按钮显示
                    imgError.show();//错误提示信息显示
                });
            }

            //点击小叉子删除图片
            $(".uploader-images-b1").on('click','.del',function($event){
                var delImgId = event.srcElement.id;//要删除图片的id
                var delImgUrl = $('#'+delImgId).children('#path').val()//获取要删除图片的url
                var imagName = $('#'+delImgId).children('#imagename').val()//获取要删除图片的名称
                //ajax调用删除图片接口
                var delimg = $http({
                    url: '/index.php/data/upload/delImg',
                    method: 'POST',
                    data:{
                        'delImgUrl':delImgUrl//要删除图片的url
                    }
                });
                delimg.success(function (data) {
                    if (data.state == 1){
                        $('#'+delImgId).parent('span').remove();//图片清空 
                        //把删除的图片名称从图片名称数组中删除
                        for (var i = 0; i <= scope.imgNames.length; i++) 
                        {
                            if(scope.imgNames[i] == imagName)
                            {
                                scope.imgNames.splice(i, 1);
                                break;
                            }
                        }    
                    }else
                    {
                       alert('删除图片失败！');
                    }   
                }).error(function(error){
                    alert('删除图片失败！');
                });
            });
        }
    }
});


/*
* list组件 lj-list-i-1
* author:yanglijun
* date:2017-08-11
*/
ljdirective.directive('ljListI1',function(){
    return{
        restrict:"E",
        templateUrl:"/common/components/list/ljListI.html",
        replace:true,
        scope:{
            titleArr: "=titles",
            listArr: "=lists",
            operations:'=operations',
            iscomplete:'@iscomplete',
            limit:'@limit',
            fun1:"&fun1",  
            fun2:"&fun2",
            fun3:"&fun3", 
            fun4:"&fun4",
            statusArr:'=status'
        },
    link: function (scope,element,attr){
        scope.$watch('listArr', function (val){
               //处理补全
                scope.completes = '';//初始化补全信息
                if (val)
                {
                    var trLen =scope.limit-scope.listArr.length;//需要补全列表行数
                    //如果有补全标示 而且 补全列表行数 大于0 而且 小于 limit 做补全处理
                    if (scope.iscomplete == '1' && trLen>0  && trLen < scope.limit)
                    {
                       var tdLen = 0;//列表列数
                       var tds = {};
                       var trs = {};
                       angular.forEach(scope.titleArr,function(item){
                            tdLen++;
                       });
                       for (var i = 0; i < tdLen; i++) { tds[i]=i;}
                       for (var i = 0; i < trLen; i++) { trs[i] = tds; }
                       scope.completes = trs;
                    }
                }
        });
        }
    };
});