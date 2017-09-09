var myApp = angular.module('ljApp', ['ngRoute','ngAnimate','ng.ueditor','ctrls','dirs','MyModule','ljHelper']);
myApp.config(function($routeProvider){
    $routeProvider.
    when('/classify', {
        controller: 'classifyCtrl',
        templateUrl: renovateUrl('views/classify/index.html')
    }).



    when('/buttonA', {
        controller: 'buttonACtrl',  //控制器名称
        templateUrl: renovateUrl('views/button/buttonA.html')//按钮A超大类型指向视图
    }).
    otherwise({
        redirectTo: '/classify'
    });
});

function renovateUrl(str) {
    var rand = Math.floor(Math.random() * 900) + 100;
    return str+'?'+ rand;
}