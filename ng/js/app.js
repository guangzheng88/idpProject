var myApp = angular.module('ljApp', ['ngRoute','ngAnimate','ng.ueditor','ctrls','dirs','MyModule','ljHelper']);
myApp.config(function($routeProvider){
    $routeProvider.
    when('/classify', {
        controller: 'classifyCtrl',
        templateUrl: renovateUrl('views/classify/index.html')
    }).
when('/booksAdd', {
        controller: 'booksAddCtrl',
        templateUrl: renovateUrl('views/books/booksAdd.html')
    }).
when('/booksList', {
        controller: 'booksListCtrl',
        templateUrl: renovateUrl('views/books/booksList.html')
    }).

    when('/booksAuditing', {
        controller: 'booksAuditingCtrl',  
        templateUrl: renovateUrl('views/books/booksAuditing.html')
    }).
    otherwise({
        redirectTo: '/classify'
    });
});

function renovateUrl(str) {
    var rand = Math.floor(Math.random() * 900) + 100;
    return str+'?'+ rand;
}