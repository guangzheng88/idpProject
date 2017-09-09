var myApp = angular.module('ljApp', ['ngRoute','ngAnimate','ng.ueditor','ctrls','dirs','MyModule','ljHelper']);
myApp.config(function($routeProvider){
    $routeProvider.
    when('/buttonA', {
        controller: 'buttonACtrl',  //控制器名称
        templateUrl: renovateUrl('views/button/buttonA.html')//按钮A超大类型指向视图
    }).
    when('/buttonB', {
        controller: 'buttonBCtrl',  //控制器名称
        templateUrl: renovateUrl('views/button/buttonB.html')//按钮B常规类型指向视图
    }).
    when('/buttonC', {
        controller: 'buttonCCtrl',  //控制器名称
        templateUrl: renovateUrl('views/button/buttonC.html')//按钮C常规类型指向视图
    }).
    when('/buttonD', {
        controller: 'buttonDCtrl', //控制器名称
        templateUrl: renovateUrl('views/button/buttonD.html')//按钮D常规类型指向视图
    }).
    when('/listA', {
        controller: 'listACtrl', //控制器名称
        templateUrl: renovateUrl('views/list/listA.html')//列表A指向视图
    }).
    when('/listB', {
        controller: 'listBCtrl', //控制器名称
        templateUrl: renovateUrl('views/list/listB.html')//列表B指向视图
    }).
    when('/listC', {
        controller: 'listCCtrl', //控制器名称
        templateUrl: renovateUrl('views/list/listC.html')//列表B指向视图
    }).
    when('/listD', {
        controller: 'listDCtrl', //控制器名称
        templateUrl: renovateUrl('views/list/listD.html')//列表D指向视图
    }).
    when('/listE', {
        controller: 'listECtrl', //控制器名称
        templateUrl: renovateUrl('views/list/listE.html')//列表D指向视图
    }).
    when('/listF', {
        controller: 'listFCtrl', //控制器名称
        templateUrl: renovateUrl('views/list/listF.html')//列表F指向视图
    }).
    when('/listG', {
        controller: 'listGCtrl', //控制器名称
        templateUrl: renovateUrl('views/list/listG.html')//列表G指向视图
    }).
    when('/listH', {
        controller: 'listHCtrl', //控制器名称
        templateUrl: renovateUrl('views/list/listH.html')//列表H视图
    }).
    when('/listI', {
        controller: 'listICtrl', //控制器名称
        templateUrl: renovateUrl('views/list/listI.html')//列表I视图
    }).
    when('/textareaA', {
        controller: 'textareaACtrl', //控制器名称
        templateUrl: renovateUrl('views/textarea/textareaA.html')//文本框A指向视图
    }).
    when('/textareaB', {
        controller: 'textareaBCtrl', //控制器名称
        templateUrl: renovateUrl('views/textarea/textareaB.html')//文本框A指向视图
    }).
    when('/textareaC', {
        controller: 'textareaCCtrl', //控制器名称
        templateUrl: renovateUrl('views/textarea/textareaC.html')//文本框A指向视图
    }).
    when('/selectA', {
        controller: 'selectACtrl', //控制器名称
        templateUrl: renovateUrl('views/select/selectA.html')//下拉框A指向视图
    }).
    when('/selectC', {
        controller: 'selectCCtrl', //控制器名称
        templateUrl: renovateUrl('views/select/selectC.html')//省市区联动指向视图
    }).
    when('/selectD', {
        controller: 'selectDCtrl', //控制器名称
        templateUrl: renovateUrl('views/select/selectD.html')//三级联动指向视图
    }).
    when('/datepickerA', {
        controller: 'datepickerACtrl', //控制器名称
        templateUrl: renovateUrl('views/datepicker/datepickerA.html')//日期控件A指向视图
    }).
    when('/datepickerB', {
        controller: 'datepickerBCtrl', //控制器名称
        templateUrl: renovateUrl('views/datepicker/datepickerB.html')//日期控件B指向视图
    }).
    
    when('/breadcrumbA', {
        controller: 'breadcrumbNavACtrl', //控制器名称
        templateUrl: renovateUrl('views/breadcrumb/breadcrumbNavA.html')//面包屑导航指向视图
    }).
    when('/checkboxA', {
        controller: 'checkboxACtrl', //控制器名称
        templateUrl: renovateUrl('views/checkbox/checkboxA.html')//复选框A指向视图
    }).
    when('/checkboxB', {
        controller: 'checkboxBCtrl', //控制器名称
        templateUrl: renovateUrl('views/checkbox/checkboxB.html')//复选框B指向视图
    }).
    when('/radioA', {
        controller: 'radioACtrl', //控制器名称
        templateUrl: renovateUrl('views/radio/radioA.html')//单选框指向视图
    }).
    when('/searchboxA', {
        controller: 'searchboxACtrl', //控制器名称
        templateUrl: renovateUrl('views/searchbox/searchboxA.html')//搜索框A指向视图
    }).
    when('/searchboxB', {
        controller: 'searchboxBCtrl', //控制器名称
        templateUrl: renovateUrl('views/searchbox/searchboxB.html')//搜索框B指向视图
    }).
    when('/promptA', {
        controller: 'promptACtrl', //控制器名称
        templateUrl: renovateUrl('views/prompt/promptA.html')//弹出框A指向视图
    }).
    when('/promptB', {
        controller: 'promptBCtrl', //控制器名称
        templateUrl: renovateUrl('views/prompt/promptB.html')//弹出框B指向视图
    }).
    when('/promptC', {
        controller: 'promptCCtrl', //控制器名称
        templateUrl: renovateUrl('views/prompt/promptC.html')//弹出框C指向视图
    }).
    when('/promptD', {
        controller: 'promptDCtrl', //控制器名称
        templateUrl: renovateUrl('views/prompt/promptD.html')//弹出框D指向视图
    }).
    when('/promptE', {
        controller: 'promptECtrl', //控制器名称
        templateUrl: renovateUrl('views/prompt/promptE.html')//弹出框D指向视图
    }).
    when('/inputA', {
        controller: 'inputACtrl', //控制器名称
        templateUrl: renovateUrl('views/input/inputA.html')//输入框A指向视图
    }).
    when('/inputB', {
        controller: 'inputBCtrl', //控制器名称
        templateUrl: renovateUrl('views/input/inputB.html')//输入框A指向视图
    }).
    when('/inputC', {
        controller: 'inputCCtrl', //控制器名称
        templateUrl: renovateUrl('views/input/inputC.html')//输入框C指向视图
    }).
    when('/inputD', {
        controller: 'inputDCtrl', //控制器名称
        templateUrl: renovateUrl('views/input/inputD.html')//输入框D指向视图
    }).
    when('/inputE', {
        controller: 'inputECtrl', //控制器名称
        templateUrl: renovateUrl('views/input/inputE.html')//输入框E指向视图
    }).
    when('/inputF', {
        controller: 'inputFCtrl', //控制器名称
        templateUrl: renovateUrl('views/input/inputF.html')//输入框F指向视图
    }).
    when('/inputG', {
        controller: 'inputGCtrl', //控制器名称
        templateUrl: renovateUrl('views/input/inputG.html')//输入框F指向视图
    }).
    when('/inputH', {
        controller: 'inputHCtrl', //控制器名称
        templateUrl: renovateUrl('views/input/inputH.html')//输入框H指向视图
    }).
    when('/inputI', {
        controller: 'inputICtrl', //控制器名称
        templateUrl: renovateUrl('views/input/inputI.html')//输入框I指向视图
    }).
    when('/inputJ', {
        controller: 'inputJCtrl', //控制器名称
        templateUrl: renovateUrl('views/input/inputJ.html')//输入框J指向视图
    }).
    when('/inputK', {
        controller: 'inputKCtrl', //控制器名称
        templateUrl: renovateUrl('views/input/inputK.html')//输入框K指向视图
    }).
    when('/inputL1', {
        controller: 'inputL1Ctrl', //控制器名称
        templateUrl: renovateUrl('views/input/inputL1.html')//输入框L1指向视图
    }).
    when('/inputL2', {
        controller: 'inputL2Ctrl', //控制器名称
        templateUrl: renovateUrl('views/input/inputL2.html')//输入框L2指向视图
    }).
    when('/pagingA', {
        controller: 'pagingACtrl', //控制器名称
        templateUrl: renovateUrl('views/page/pagingA.html')//分页A指向视图
    }).
    when('/waveGraphA', {
        controller: 'waveGraphACtrl', //控制器名称
        templateUrl: renovateUrl('views/waveGraph/waveGraphA.html')//轮波图
    }).
    when('/verificationCodeA', {
        controller: 'verificationCodeACtrl', //控制器名称
        templateUrl: renovateUrl('views/verificationCode/verificationCode.html')//验证码A指向视图
    }).
    when('/verificationCodeB', {
        controller: 'verificationCodeBCtrl', //控制器名称
        templateUrl: renovateUrl('views/verificationCode/verificationCodeB.html')//验证码B指向视图
    }).
    when('/labelA', {
        controller: 'labelACtrl', //控制器名称
        templateUrl: renovateUrl('views/label/labelA.html')//标签A指向视图
    }).
    when('/labelB', {
        controller: 'labelBCtrl', //控制器名称
        templateUrl: renovateUrl('views/label/labelB.html')//标签B指向视图
    }).
    when('/popupA', {
        controller: 'popupACtrl', //控制器名称
        templateUrl: renovateUrl('views/popup/popupA.html')//弹出层A指向视图
    }).
    when('/uploaderA', {
        controller: 'uploaderACtrl', //控制器名称
        templateUrl: renovateUrl('views/uploader/uploaderA.html')//上传图片A指向视图
    }).
    when('/uploaderB', {
        controller: 'uploaderBCtrl', //控制器名称
        templateUrl: renovateUrl('views/uploader/uploaderB.html')//上传图片B指向视图
    }).
    when('/tabA', {
        controller: 'tabACtrl', //控制器名称
        templateUrl: renovateUrl('views/tab/tabA.html')//选项卡A指向视图
    }).
    when('/tabB', {
        controller: 'tabBCtrl', //控制器名称
        templateUrl: renovateUrl('views/tab/tabB.html')//选项卡B指向视图
    }).
    when('/tabC', {
        controller: 'tabCCtrl', //控制器名称
        templateUrl: renovateUrl('views/tab/tabC.html')//选项卡C指向视图
    }).
    when('/waveGraphB', {
        controller: 'waveGraphBCtrl', //控制器名称
        templateUrl: renovateUrl('views/waveGraph/waveGraphB.html')//轮波图
    }).
    when('/productA', {
        controller: 'productACtrl', //控制器名称
        templateUrl: renovateUrl('views/product/productA.html')//商品A视图
    }).
    when('/contentA', {
        controller: 'contentACtrl', //控制器名称
        templateUrl: renovateUrl('views/content/contentA.html')//内容A视图
    }).
    when('/treeA', {
        controller: 'treecontrol', //控制器名称
        templateUrl: renovateUrl('views/tree/treeA.html')//树结构A视图
    }).
    otherwise({
        redirectTo: '/buttonA'
    });
});

function renovateUrl(str) {
    var rand = Math.floor(Math.random() * 900) + 100;
    return str+'?'+ rand;
}