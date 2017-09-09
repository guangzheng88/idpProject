var app = angular.module('leftApp', []);
app.controller('myCtrl', function($scope){
    //左侧导航配置文件
    $scope.dataArr  = [
    {name:'按钮',collapse:'collapse01',
        'component':[
            {cname:'按钮组件A',link:'/app/#/buttonA'},
            {cname:'按钮组件B',link:'/app/#/buttonB'},
            {cname:'按钮组件C',link:'/app/#/buttonC'},
            {cname:'按钮组件D',link:'/app/#/buttonD'},
            ]},
    {name:'列表',collapse:'collapse02',
        'component':[
            {cname:'列表组件A',link:'/app/#/listA'},
            {cname:'列表组件B',link:'/app/#/listB'},
            {cname:'列表组件C',link:'/app/#/listC'},
            {cname:'列表组件D',link:'/app/#/listD'},
            {cname:'列表组件E',link:'/app/#/listE'},
            {cname:'M列表组件F',link:'/app/#/listF'},
            {cname:'M列表组件G',link:'/app/#/listG'},
            {cname:'信息列表组件H',link:'/app/#/listH'},
            {cname:'信息列表组件I',link:'/app/#/listI'},
            ]},
    {name:'输入框',collapse:'collapse03',
        'component':[
        {cname:'输入框组件A',link:'/app/#/inputA'},
        {cname:'输入框组件B',link:'/app/#/inputB'},
        {cname:'输入框组件C',link:'/app/#/inputC'},
        {cname:'输入框组件D',link:'/app/#/inputD'},
        {cname:'输入框组件E',link:'/app/#/inputE'},
        {cname:'输入框组件F',link:'/app/#/inputF'},
        {cname:'输入框组件G',link:'/app/#/inputG'},
        {cname:'输入框组件H',link:'/app/#/inputH'},
        {cname:'输入框组件I',link:'/app/#/inputI'},
        {cname:'输入框组件J',link:'/app/#/inputJ'},
        {cname:'输入框组件K',link:'/app/#/inputK'},
        {cname:'输入框组件L1',link:'/app/#/inputL1'},
        {cname:'输入框组件L2',link:'/app/#/inputL2'},
            ]},
    {name:'搜索框',collapse:'collapse04',
        'component':[
            {cname:'搜索框组件A',link:'/app/#/searchboxA'},
            {cname:'搜索框组件B',link:'/app/#/searchboxB'}
            ]},
    {name:'文本框',collapse:'collapse05',
        'component':[
            {cname:'文本框组件A',link:'/app/#/textareaA'},
            {cname:'文本框组件B',link:'/app/#/textareaB'},
            {cname:'文本框组件C',link:'/app/#/textareaC'}
            ]},
    {name:'选择框',collapse:'collapse06',
        'component':[
            {cname:'选择框A',link:'/app/#/selectA'},
            {cname:'选择框C',link:'/app/#/selectC'},
            {cname:'选择框D',link:'/app/#/selectD'},
            ]},
    {name:'单选框',collapse:'collapse07',
        'component':[
        {cname:'单选框组件A',link:'/app/#/radioA'},
            ]},
    {name:'复选框',collapse:'collapse08',
        'component':[
        {cname:'复选框组件A',link:'/app/#/checkboxA'},
        {cname:'复选框组件B',link:'/app/#/checkboxB'},
            ]},
    {name:'日期选择器',collapse:'collapse09',
        'component':[
            {cname:'日期选择器A',link:'/app/#/datepickerA'},
            {cname:'日期选择器B',link:'/app/#/datepickerB'},
            ]},
    {name:'分页',collapse:'collapse10',
        'component':[
        {cname:'分页A',link:'/app/#/pagingA'},
            ]},
    {name:'面包屑导航',collapse:'collapse11',
        'component':[
         {cname:'面包屑导航A',link:'/app/#/breadcrumbA'},
            ]},
    {name:'弹出框',collapse:'collapse12',
        'component':[
        {cname:'弹出框A',link:'/app/#/promptA'},
        {cname:'弹出框B',link:'/app/#/promptB'},
        {cname:'弹出框C',link:'/app/#/promptC'},
        {cname:'弹出框D',link:'/app/#/promptD'},
        {cname:'弹出框E',link:'/app/#/promptE'},
            ]},
    {name:'轮播图',collapse:'collapse14',
        'component':[
        {cname:'轮播图A',link:'/app/#/waveGraphA'},
        {cname:'M轮播图B',link:'/app/#/waveGraphB'},
            ]},
    {name:'验证码',collapse:'collapse15',
        'component':[
        {cname:'验证码A',link:'/app/#/verificationCodeA'},
        {cname:'验证码B',link:'/app/#/verificationCodeB'},
    ]},
    {name:'标签',collapse:'collapse16',
        'component':[
        {cname:'标签A',link:'/app/#/labelA'},
        {cname:'标签B',link:'/app/#/labelB'},
    ]},
    {name:'弹出层',collapse:'collapse17',
        'component':[
        {cname:'弹出层A',link:'/app/#/popupA'},
    ]},
    {name:'上传图片',collapse:'collapse18',
        'component':[
        {cname:'上传图片A',link:'/app/#/uploaderA'},
        {cname:'上传图片B',link:'/app/#/uploaderB'},
    ]},
    {name:'选项卡',collapse:'collapse19',
        'component':[
        {cname:'选项卡A',link:'/app/#/tabA'},
        {cname:'选项卡B',link:'/app/#/tabB'},
        {cname:'选项卡C',link:'/app/#/tabC'},
    ]},
    {name:'商品组件',collapse:'collapse20',
        'component':[
        {cname:'M商品A',link:'/app/#/productA'},
    ]},
    {name:'内容组件',collapse:'collapse21',
        'component':[
        {cname:'M内容A',link:'/app/#/contentA'},
    ]},
    {name:'树结构',collapse:'collapse22',
        'component':[
        {cname:'树结构A',link:'/app/#/treeA'},
    ]},
    ];
});