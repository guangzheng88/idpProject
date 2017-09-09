var ctrls = angular.module('ctrls', ['treeControl','ljHelper','ui.bootstrap','ng.ueditor','ngAnimate','ngSanitize']);
/**
 * 控制器样本
 * @author : zlp
 * @date : 0217-02-21
 */
ctrls.controller('demoCtrl',['$scope','$routeParams',function($scope,$routeParams){
    /* --- 测试数据 start ---------------*/
    //表头内容
    $scope.titleArr = [
    {name:'#'},
    {name:'姓名'},
    {name:'性别'},
    {name:'电话'},
    {name:'住址'},
    {name:'备注'}
    ];


    //列表内容 从数据库获取数据然后转换
    $scope.listArr = [
    {td2:'Kevin',td3:'男',td4:'13966888866',td5:'北京市海淀区北三环西路23号',td6:'这里是备注'},
    {td2:'Jordan',td3:'女',td4:'15833388811',td5:'北京市海淀区北三环西路23号',td6:'这里是备注'},
    {td2:'Iverson',td3:'男',td4:'13155668899',td5:'北京市海淀区北三环西路23号',td6:'这里是备注'},
    {td2:'James',td3:'男',td4:'18022062209',td5:'北京市海淀区北三环西路23号',td6:'这里是备注'}
    ];   
    /* --- 测试数据  end ---------------*/ 
}])

/**
 * 控制器  按钮组件A
 * @author : yanglijun
 * @date : 2017-02-27
 */
ctrls.controller('buttonACtrl',['$scope','$timeout','$routeParams',function($scope,$timeout,$routeParams){
    /* --- 测试数据 start ---------------*/
    $scope.a1bDisabled = false;//按钮是否禁用
    $scope.a1bFun = function(){
        $scope.a1bDisabled = true;
        $timeout(function(){
              console.log('执行$timeout回调');
              $scope.a1bDisabled =  false
          },3000);
    }
    $scope.a1wDisabled = false;//按钮是否禁用
    $scope.a1wFun = function(){
        $scope.a1wDisabled = true;
        $timeout(function(){
              console.log('执行$timeout回调');
              $scope.a1wDisabled =  false
          },3000);
    }
    $scope.a1gDisabled = false;//按钮是否禁用
    $scope.a1gFun = function(){
        $scope.a1gDisabled = true;
        $timeout(function(){
              console.log('执行$timeout回调');
              $scope.a1gDisabled =  false
          },3000);
    }
    /* --- 测试数据  end ---------------*/ 
}])
/**
 * 控制器  按钮组件B
 * @author : yanglijun
 * @date : 2017-02-27
 */
ctrls.controller('buttonBCtrl',['$scope','$timeout','$routeParams',function($scope,$timeout,$routeParams){
    /* --- 测试数据 start ---------------*/
    $scope.b1bDisabled = false;//按钮是否禁用
    $scope.b1bFun = function(){
        $scope.b1bDisabled = true;
        $timeout(function(){
              console.log('执行$timeout回调');
              $scope.b1bDisabled =  false
          },3000);
    }
    $scope.b1wDisabled = false;//按钮是否禁用
    $scope.b1wFun = function(){
        $scope.b1wDisabled = true;
        $timeout(function(){
              console.log('执行$timeout回调');
              $scope.b1wDisabled =  false
          },3000);
    }
    $scope.b1gDisabled = false;//按钮是否禁用
    $scope.b1gFun = function(){
        $scope.b1gDisabled = true;
        $timeout(function(){
              console.log('执行$timeout回调');
              $scope.b1gDisabled =  false
          },3000);
    }
    /* --- 测试数据  end ---------------*/ 
}])

/**
 * 控制器  按钮组件C
 * @author : zlp
 * @date : 2017-02-24
 */
ctrls.controller('buttonCCtrl',['$scope','$timeout','$routeParams',function($scope,$timeout,$routeParams){
    /* --- 测试数据 start ---------------*/
    $scope.c1bDisabled = true;//按钮是否禁用
    $scope.c1bFun = function(){
        $scope.c1bDisabled = false;
        $timeout(function(){
              console.log('执行$timeout回调');
              $scope.c1bDisabled =  true
          },3000);
    }
    $scope.c1wDisabled = true;//按钮是否禁用
    $scope.c1wFun = function(){
        $scope.c1wDisabled = false;
        $timeout(function(){
              console.log('执行$timeout回调');
              $scope.c1wDisabled =  true
          },3000);
    }
    $scope.c1gDisabled = true;//按钮是否禁用
    $scope.c1gFun = function(){
        $scope.c1gDisabled = false;
        $timeout(function(){
              console.log('执行$timeout回调');
              $scope.c1gDisabled =  true
          },3000);
    }
    /* --- 测试数据  end ---------------*/ 
}])

/**
 * 控制器  按钮组件C
 * @author : zlp
 * @date : 2017-02-24
 */
ctrls.controller('buttonDCtrl',['$scope','$timeout','$routeParams',function($scope,$timeout,$routeParams){
    /* --- 测试数据 start ---------------*/
    $scope.d1Disabled = true;//按钮是否禁用
    $scope.d1Fun = function(){
        $scope.d1Disabled = false;
        $timeout(function(){
              console.log('执行$timeout回调');
              $scope.d1Disabled =  true
          },3000);
    }
    $scope.d2Disabled = true;//按钮是否禁用
    $scope.d2Fun = function(){
        $scope.d2Disabled = false;
        $timeout(function(){
              console.log('执行$timeout回调');
              $scope.d2Disabled =  true
          },3000);
    }
    /* --- 测试数据  end ---------------*/ 
}])


/*
* 列表样式A lj-list-a-1
* author:yanglijun
* date:2017-02-27
*/
ctrls.controller('listACtrl',['$scope','$routeParams',function($scope,$routeParams){
    /* --- 测试数据 start ---------------*/
    //表头内容
    $scope.titleArr = {
    th1:{name:'序号',width:'8%'},
    th2:{name:'展位号',width:'15%'},
    th3:{name:'商户名称',width:'30%'},
    th4:{name:'品牌',width:'13%'},
    th5:{name:'销售额',width:'14%'},//th5 为右对齐 如果页面不要屏蔽此行并且 删除$scope.listArr.td5
    // th6:{name:'操作人',width:'20%'},
    // th7:{name:'k代码',width:'10%'},
    // th8:{name:'商户电话',width:'10%'},
    operation:{name:'操作',width:'20%'},
    }
    //列表内容 从数据库获取数据然后转换
    $scope.listArr = [
    {id:'1',td2:'A-001-001',td3:'华鹤集团有限公司',td4:'华鹤',td5:'1462204.00',td6:'张',td7:'k100298',td8:'61366725'},
    {id:'2',td2:'',td3:'北京华日家具有限公司',td4:'',td5:'142422.00',td6:'张',td7:'k100298',td8:'61366725'},
    {id:'3',td2:'A-001-003',td3:'北京圣华家具家居建材销售有限公司',td4:'圣华',td5:'1462204.00',td6:'张',td7:'k100298',td8:'61366725'},
    {id:'4',td2:'A-001-004',td3:'',td4:'华丰',td5:'413343.00',td6:'张',td7:'k100298',td8:'61366725'},
    {id:'5',td2:'A-001-005',td3:'北京新发圣家具有限公司',td4:'绿之岛',td5:'',td6:'张',td7:'k100298',td8:'61366725'},
    ];   
    
    //操作显示内容
    $scope.operations = {
      fun1Name:'查看',
      fun2Name:'修改',
      fun3Name:'删除',
      fun4Name:"审核"
    };
    //点击详情触发
    $scope.fun1 = function(fs)
    {
      alert('查看操作，id为:'+fs.id);
    }
    //点击修改触发
    $scope.fun2 = function(fs)
    {
      alert('修改操作，id为:'+fs.id)
    }
    //点击删除触发
    $scope.fun3 = function(fs)
    {
      alert('删除操作，id为'+fs.id);
    }
    //点击审核操作触发
    $scope.fun4 = function(fs)
    {
      alert('审核操作，id为'+fs.id);
    }
    /* --- 测试数据  end ---------------*/ 
}])
/*
* 列表样式B lj-list-b-1
* author:yanglijun
* date:2017-02-28
*/
ctrls.controller('listBCtrl',['$scope','$routeParams',function($scope,$routeParams){
  //表头内容
  $scope.titleArr = {
  th1:{name:'批次编号',width:'20%'},
  th2:{name:'券名称',width:'18%'},
  th3:{name:'券类型',width:'10%'},
  th4:{name:'面额(元)',width:'10%'},
  th5:{name:'添加日期',width:'10%'},
  // th6:{name:'操作人',width:'25%'},
  // th7:{name:'操作人1',width:'10%'},
  // th8:{name:'操作人1',width:'10%'},
  operation:{name:'操作',width:'32%'},
  }
  //列表内容 从数据库获取数据然后转换
  $scope.listArr = [
  {id:'1',td1:'LJB201702160000011',td2:'新春优惠打折促销券',td3:'优惠券',td4:'1000',td5:'2017-02-11',td6:'zhang',td7:'zhang'},
  {id:'2',td1:'LJB201702160000012',td2:'',td3:'优惠券',td4:'300',td5:'2017-03-09',td6:'zhang',td7:'zhang'},
  {id:'3',td1:'LJB201702160000013',td2:'十一金秋大优惠',td3:'优惠券',td4:'200',td5:'2017-03-12',td6:'zhang',td7:'zhang'},
  {id:'4',td1:'LJB201702160000014',td2:'端午促销',td3:'',td4:'900',td5:'2017-01-21',td6:'zhang',td7:'zhang'},
  {id:'5',td1:'LJB201702160000015',td2:'元旦折扣上上上',td3:'优惠券',td4:'',td5:'2017-02-11',td6:'zhang',td7:'zhang'},
  ];   
    
  //操作显示内容
  $scope.operations = {
    fun1Name:'券查看',
    fun2Name:'基本属性设置',
    fun3Name:'黑名单设置',
    fun4Name:"删除"
  };
  //点击基本属性设置触发
  $scope.fun1 = function(fs)
  {
    alert('券查看操作,id为:'+fs.id);
  }
  //点击黑名单设置触发
  $scope.fun2 = function(fs)
  {
    alert('基本属性设置操作,id为:'+fs.id)
  }
  //点击黑名单设置 fun3触发
  $scope.fun3 = function(fs)
  {
    alert('黑名单设置操作,id为:'+fs.id);
  }
  //点击删除操作 fun4触发
  $scope.fun4 = function(fs)
  {
    alert('点击删除操作,id为:'+fs.id);
  }
  /* --- 测试数据  end ---------------*/ 
}])
/**
 * 列表C 控制器
 * 列表C 范围一到八列（除去操作列）
 * @author : zlp
 * @date : 2017-02-27
 */
ctrls.controller('listCCtrl',['$scope','$timeout','$routeParams',function($scope,$timeout,$routeParams){
    /* --- 测试数据 start ---------------*/
    //titleArr 表头信息 width 总和为100%
    /**
    *thImg: 图片列
    *thRed: 显示红色字体列
    *
    */
    $scope.titleArr = {
    //th1:{name:'待续',width:'10%'},

    thImg:{name:'封面图',width:'10%'},//图片字段只显示一列

    th2:{name:'图文标题',width:'25%'},
    th3:{name:'创建时间',width:'15%'},
    th4:{name:'图文类型',width:'11%'},
    th5:{name:'图文格式',width:'11%'},
    //th6:{name:'表头6',width:'10%'},
    // th7:{name:'表头7',width:'10%'},
    //th8:{name:'表头8',width:'10%'},

    thRed:{name:'使用情况',width:'10%'},//标红字段只显示一列
    operation:{name:'操作',width:'18%'},
    };
    //listArr 列表内容 从数据库获取数据然后转换
    /**
    *td1-td8 表内容下标
    *tdImg 存放imgurl
    *tdRed  存放红色字段
    *isRed 是否显示红色 1显示 2不显示
    *id 数据 的唯一标示 
    */ 
    $scope.listArr = [
      {id:'1',tdImg:'/common/images/user_pic.png',tdRed:'已使用',td2:'北京蓝景丽家大钟寺家居广场(以下简称蓝景丽家)地处北京市海淀区北三环西路23号,总建筑面积是84408平方米',td3:'2016-12-15 11:42:52',td4:'正文',td5:'多图文',isRed:1},
      {id:'2',tdImg:'/common/images/user_pic.png',tdRed:'已使用',td2:'北京市海淀区北三环西路23号,总建筑面积是84408平方米',td3:'2016-12-15 11:42:52',td4:'正文',td5:'多图文',isRed:2},
      {id:'3',tdImg:'/common/images/sel_card.jpg',tdRed:'未使用',td2:'(蓝景丽家)地处北京市海淀区北三环西路23号,总建筑面积是84408平方米',td3:'2016-12-15 11:42:52',td4:'正文',td5:'多图文',isRed:2},
    ];
    //操作信息配置
    $scope.operations={
      fun1Name:'编辑',//对应fun1 方法 
      fun2Name:'详情',//对应fun2 方法
      fun3Name:'删除',//对应fun3 方法
      //fun4Name:'其他',//打开注释即可页面显示
    };
    //fun1方法
    $scope.fun1 = function(fs)
    {
      alert('点击编辑 操作, id为'+fs.id);//对应listArr.id
    }
    //fun2方法
    $scope.fun2 = function(fs)
    {
     alert('点击详情 操作, id为'+fs.id);//对应listArr.id
    }
    //fun3方法
    $scope.fun3 = function(fs)
    {
      alert('点击删除 操作, id为'+fs.id);//对应listArr.id
    }
    //fun4方法
    $scope.fun4 = function(fs)
    {
      alert('点击其他 操作, id为'+fs.id);//对应listArr.id
    }
    /* --- 测试数据  end ---------------*/ 
}])
/**
 * 列表D 控制器
 * 列表D 范围一到八列（除去操作列）
 * @author : zlp
 * @date : 2017-02-27
 */
ctrls.controller('listDCtrl',['$scope','$timeout','$routeParams',function($scope,$timeout,$routeParams){
    /* --- 测试数据 start ---------------*/
    //titleArr 表头信息 width 总和为100%
    $scope.titleArr = {
    th1:{name:'卡号',width:'25%'},
    th2:{name:'姓名',width:'20%'},
    th3:{name:'卡类型',width:'10%'},
    th4:{name:'发卡时间',width:'10%'},
    th5:{name:'卡状态',width:'10%'},

    // th6:{name:'表头6',width:'10%'},
    // th7:{name:'表头7',width:'10%'},
    //th8:{name:'表头8',width:'10%'},

    operation:{name:'操作',width:'25%'},
    };
    //listArr 列表内容 从数据库获取数据然后转换
    /**
    *td1-td8 表内容下标
    *id 数据 的唯一标示 
    */ 
    $scope.listArr = [
      {td1:'018746',td2:'',td3:'顾客卡',td4:'',td5:'未使用',id:'1'},
      {td1:'018733',td2:'',td3:'会员卡',td4:'2017-02-24',td5:'',id:'2'},
      {td1:'018715',td2:'Kevin',td3:'',td4:'2017-02-28',td5:'已使用',id:'3'},
      {td1:'019776',td2:'',td3:'',td4:'2017-02-24',td5:'未使用',id:'4'},
      {td1:'019796',td2:'',td3:'会员卡',td4:'',td5:'未使用',id:'5'},
    ];
    //操作信息配置
    $scope.operations={
      fun1Name:'详情',//对应fun1 方法
      //fun2Name:'编辑',//对应fun2 方法
      //fun3Name:'删除',//对应fun3 方法
      //fun4Name:'其他',//打开注释即可页面显示
    };
    //fun1方法
    $scope.fun1 = function(fs)
    {
      alert('点击 详情 操作,id为'+fs.id);//对应listArr.id
    }
    //fun2方法
    $scope.fun2 = function(fs)
    {
      alert('点击 编辑 操作,id为'+fs.id);//对应listArr.id
    }
    //fun3方法
    $scope.fun3 = function(fs)
    {
      alert('点击 删除 操作,id为'+fs.id);//对应listArr.id
    }
    //fun4方法
    $scope.fun4 = function(fs)
    {
      alert('点击 其他 操作,id为'+fs.id);//对应listArr.id
    }
    /* --- 测试数据  end ---------------*/ 
}])
/**
 * 列表E 控制器
 * 列表E 范围一到十五列（除去操作列）
 * @author : zlp
 * @date : 2017-04-04
 */
ctrls.controller('listECtrl',['$scope','$timeout','$routeParams',function($scope,$timeout,$routeParams){
    /* --- 测试数据 start ---------------*/

    $scope.disabledSign = true;
    //点击 获取 选中的id 并转化为数组
    $scope.checkAll = function(){
        $scope.ids = [];
        var i = 0;
        angular.forEach($scope.listArr,function(item){
              if(item.done){
                  $scope.ids[i] = item.id;
                  i++;
              }            
        });
        console.log($scope.ids);
    }
    //titleArr 表头信息 width 总和为95%
    $scope.titleArr = {
      th2:{name:'日期',width:'15%'},
      th3:{name:'展位号',width:'10%'},
      th4:{name:'合同号',width:'10%'},
      th5:{name:'优惠总额（元）',width:'10%'},
      th6:{name:'商户承担（元）',width:'10%'},
      th7:{name:'实付额（元）',width:'10%'},
      th8:{name:'手续费（元）',width:'10%'},
      th9:{name:'结算额（元）',width:'10%'},
      operation:{name:'操作',width:'10%'},
    };
    //listArr 列表内容 从数据库获取数据然后转换
    /**
    *td1-td8 表内容下标
    *id 数据 的唯一标示 
    */ 

    $scope.listArr = [
      {td2:'2017-02-24',td3:'A-001-005',td4:'131233123',td5:'888.50',td6:'200.00',td7:'688.50',td8:'2.50',td9:'99988.50',id:'33',done:false},
      {td2:'2017-03-11',td3:'D-001-005',td4:'131233242',td5:'888.50',td6:'200.00',td7:'688.50',td8:'2.50',td9:'99988.50',id:'43',done:false},
      {td2:'2017-03-13',td3:'F-001-005',td4:'1312345654',td5:'888.50',td6:'200.00',td7:'688.50',td8:'2.50',td9:'99988.50',id:'112',done:false},
      {td2:'2017-03-13',td3:'G-001-005',td4:'131237898',td5:'888.50',td6:'200.00',td7:'688.50',td8:'2.50',td9:'99988.50',id:'124',done:false},
      {td2:'2017-03-13',td3:'K-001-005',td4:'131234543',td5:'888.50',td6:'200.00',td7:'688.50',td8:'2.50',td9:'99988.50',id:'155',done:false},
      {td2:'2017-03-15',td3:'R-001-005',td4:'131233234',td5:'888.50',td6:'200.00',td7:'688.50',td8:'2.50',td9:'99988.50',id:'213',done:false},
      {td2:'2017-03-15',td3:'H-001-005',td4:'131236778',td5:'888.50',td6:'200.00',td7:'688.50',td8:'2.50',td9:'99988.50',id:'226',done:false},
      {td2:'2017-04-24',td3:'N-001-005',td4:'131233123',td5:'888.50',td6:'200.00',td7:'688.50',td8:'2.50',td9:'99988.50',id:'312',done:false},
    ];
    //操作信息配置
    $scope.operations={
      fun1Name:'详情',//对应fun1 方法
      //fun2Name:'编辑',//对应fun2 方法
      //fun3Name:'删除',//对应fun3 方法
      //fun4Name:'其他',//打开注释即可页面显示
    };
    //fun1方法
    $scope.fun1 = function(fs)
    {
      alert('点击 详情 操作,id为'+fs.id);//对应listArr.id
    }
    //fun2方法
    $scope.fun2 = function(fs)
    {
      alert('点击 编辑 操作,id为'+fs.id);//对应listArr.id
    }
    //fun3方法
    $scope.fun3 = function(fs)
    {
      alert('点击 删除 操作,id为'+fs.id);//对应listArr.id
    }
    //fun4方法
    $scope.fun4 = function(fs)
    {
      alert('点击 其他 操作,id为'+fs.id);//对应listArr.id
    }
    /* --- 测试数据  end ---------------*/ 
}])
/**
 * 文本框样式A
 * @author : yanglijun
 * @date : 2017-03-01
 */
ctrls.controller('textareaACtrl',['$scope','$routeParams',function($scope,$routeParams){
  /* --- 测试数据 start s文本框---------------*/
  //$scope.a1stext="hello world !";//文本框的显示信息，一般是从数据库取出来显示的
  
  /* --- 测试数据  end  s文本框---------------*/ 

  /* --- 测试数据 start m文本框---------------*/
  //$scope.a1mtext="hello world !";//文本框的显示信息，一般是从数据库取出来显示的
  
  /* --- 测试数据  end  m文本框---------------*/ 

  /* --- 测试数据 start l文本框---------------*/
  //$scope.a1ltext="hello world !";//文本框的显示信息，一般是从数据库取出来显示的
  /* --- 测试数据  end  m文本框---------------*/ 
}])
/**
 * 文本框样式B
 * @author : yanglijun
 * @date : 2017-04-01
 */
 ctrls.controller('textareaBCtrl',['$scope','$routeParams',function($scope,$routeParams){
  /* --- 测试数据 start s文本框---------------*/
  //$scope.a1stext="hello world !";//文本框的显示信息，一般是从数据库取出来显示的
  /* --- 测试数据  end  s文本框---------------*/ 
  /*********** 测试数据b1 start *********/
  $scope.msgb1="";//默认错误提示信息
  //点击保存时候触发
  $scope.myFunb1 = function()
  {
    if($scope.ljttextb1 == undefined || $scope.ljttextb1 == '')
    {
      $scope.msgb1 = '不可为空';
    }else
    {
      $scope.msgb1 = '';
      alert($scope.ljttextb1)
    }
  }
  /*********** 测试数据b1 end *********/
}])

/**
 * 下拉框A 控制器
 * @author : zlp
 * @date : 2017-03-01
 */
ctrls.controller('selectACtrl',['$scope','$timeout','$routeParams',function($scope,$timeout,$routeParams){
    /* --- 测试数据 lj-select-a-1-l start ---------------*/
    var data =  [
                                {id: "1",name: "蓝景丽家尊享卡"},
                                {id: "2",name: "蓝景丽家黄金卡"},
                                {id: "3",name: "蓝景丽家白银卡"},
                                {id: "4",name: "蓝景丽家终生vip卡"},
                                {id: "5",name: "蓝景丽家钻石卡"},
                            ];
    //设置默认值
    $scope.selectArr =[{id: "0",name: "请选择"}];
    //对应默认设置id
    $scope.selected="0";
    //追加选项
    $scope.selectArr = $scope.selectArr.concat(data);
    //显示错误标示
    $scope.errorShow = false;
    //错误提示语
    $scope.errorText = '不可为空';
    //选中值更换，处理
    $scope.ljfun = function(id)
    {
        console.log('选中的是：'+id);
        if (id == "0")
        {
          $scope.errorShow = true;
        }else{
          $scope.errorShow = false;
        }
    }   
    /* --- 测试数据   lj-select-a-1-l  end ---------------*/
    /* --- 测试数据 lj-select-a-1-m start ---------------*/
    var datas =  [
                                {id: "1",name: "尊享卡"},
                                {id: "2",name: "黄金卡"},
                                {id: "3",name: "白银卡"},
                                {id: "4",name: "终生vip卡"},
                                {id: "5",name: "钻石卡"},
                            ];
    //设置默认值
    $scope.selectArrm =[{id: "0",name: "请选择"}];
    //对应默认设置id
    $scope.selectedm="0";
    //追加选项
    $scope.selectArrm = $scope.selectArrm.concat(datas);
    //显示错误标示
    $scope.errorShowm = false;
    //错误提示语
    $scope.errorTextm = '不可为空';
    //选中值更换，处理
    $scope.ljfunm = function(id)
    {
        console.log('选中的是：'+id);
        if (id == "0")
        {
          $scope.errorShowm = true;
        }else{
          $scope.errorShowm = false;
        }
    }   
    /* --- 测试数据   lj-select-a-1-m  end ---------------*/ 
}])
/**
 * 省市区联动 控制器
 * @author : zlp
 * @date : 2017-03-28
 */
ctrls.controller('selectCCtrl',['$scope','$timeout','$routeParams',function($scope,$timeout,$routeParams){
   $scope.addr = '';
   $scope.msg = '不可为空';
}])
/**
 * 三级联动 控制器
 * @author : liujingxia
 * @date : 2017-06-07
 */
ctrls.controller('selectDCtrl',['$scope','$timeout','$routeParams','$http',function($scope,$timeout,$routeParams,$http){
   $scope.classification = '';//选择区域结果
   $scope.msg = '';//错误提示信息
   $scope.classifys ={};
   $scope.classifys.first = '';//存放一级数据
   $scope.classifys.second = '';//存放二级数据
   $scope.classifys.third = '';//存放三级数据
   var classifys = $http({
    method:'POST',
    url:'/common/json/classification.json'
  });
  classifys.success(function(response, status, headers, config) {
    $scope.classification = response;
    console.log($scope.classification)
  }).error(function(error){
    console.log(error)  
  });
}])
/*
* 时间控件A 控制器
* author:yanglijun
* date:2017-03-03 
*/
ctrls.controller('datepickerACtrl',['$scope','$routeParams',function($scope,$routeParams){
/*只有年月日的日期控件controller*/
$scope.inputtime = '2017-02-11';//有效截止日期
$scope.timeerror= '';//有效截止日期错误信息
$scope.ischeck = 1;//是否验证不可为空1：验证 其他则视为不验证
//提交验证非空
$scope.click = function()
{
  if($scope.ischeck == 1 && $scope.inputtime == '')
  {
    $scope.timeerror = "不可为空";
  }else
  {
    $scope.timeerror = '';
  }
  console.log($scope.inputtime)
}

/*带时分秒的日期控件controller*/
$scope.inputtimeb = '2013-02-14 10:00:39';//有效截止日期
$scope.timeerrorb= '';//有效截止日期错误信息
$scope.ischeckb = 1;//是否验证不可为空1：验证 其他则视为不验证
//提交验证非空
$scope.clickb = function()
{
  if($scope.ischeckb == 1 && $scope.inputtimeb == '')
  {
    $scope.timeerrorb = "不可为空";
  }else
  {
    $scope.timeerrorb = '';
  }
  console.log($scope.inputtimeb)
}
/*日期今天之前不可选的日期控件controller*/
$scope.inputtimec = '2013-02-14';//有效截止日期
$scope.timeerrorc= '';//有效截止日期错误信息
$scope.ischeckc = 1;//是否验证不可为空1：验证 其他则视为不验证
//提交验证非空
$scope.clickc = function()
{
  if($scope.ischeckc == 1 && $scope.inputtimec == '')
  {
    $scope.timeerrorc = "不可为空";
  }else
  {
    $scope.timeerrorc = '';
  }
  console.log($scope.inputtimec)
}
}])

/*
* 面包屑导航A控制器
* author:yanglijun
* date:2017-03-06
*/
ctrls.controller('breadcrumbNavACtrl',['$scope','$routeParams',function($scope,$routeParams){
//自定义的面包屑导航数组
$scope.listArr = [
  {name:'导航1',href:'/app/#/buttonA'},
  {name:'导航2',href:'/app/#/listA'},
  {name:'导航3',href:'/app/#/selectA'},
  {name:'导航4',href:'/app/#/listB'},
  {name:'导航5',href:'/app/#/buttonC'},
  {name:'导航6'}
]
console.log($scope.listArr)
}])
/*
* 复选框A控制器
* author:zoulipeng
* date:2017-03-06
*/
ctrls.controller('checkboxACtrl',['$scope','$routeParams',function($scope,$routeParams){
//自定义的选项数组
$scope.checks = [
  {id:1,name:'禁用选项',isDisabled:'true',done:false},
  {id:2,name:'选项--这是一个字数过多的选项',isDisabled:'false',done:false},
  {id:3,name:'选项3',isDisabled:'',done:false},
  {id:4,name:'选项4',isDisabled:'',done:true},
  {id:5,name:'选项5',isDisabled:'',done:false},
]
//myClick 方法获取 选中数据
$scope.myClick = function(){
    angular.forEach($scope.checks, function (item) {
        if (item.done){
          console.log(item.id);
        }
    })
}
}])
/*
* 复选框B控制器
* author:zoulipeng
* date:2017-03-06
*/
ctrls.controller('checkboxBCtrl',['$scope','$routeParams',function($scope,$routeParams){
    //自定义的选项数组
    $scope.checks = [
      {id:1,name:'选项1',done:false},
      {id:2,name:'选项2',done:false},
      {id:3,name:'选项3',done:false},
      {id:4,name:'选项4',done:true},
      {id:5,name:'选项5',done:false},
    ]
    $scope.isAll=false;//全选标识 默认未勾选
    //myClick 方法获取 选中数据
    $scope.myClick = function(){
        angular.forEach($scope.checks, function (item) {
            if (item.done){
              console.log(item.id);
            }
        })
    }
}])
/*
* 单选框A控制器
* author:zoulipeng
* date:2017-03-06
*/
ctrls.controller('radioACtrl',['$scope','$routeParams',function($scope,$routeParams){
    /*
    * 自定义的选项数组 radios 数组说明 
    * id 唯一标识  不能重复
    * value 选项名称对应的值
    * name 页面显示 选项名称
    * isd 是否禁用标识  true 禁用 false 不禁用
    * isc 是否默认选中标识  true 选中 false 未选中
    *       页面最多只有一个默认选中 为 数组中最后一条 isc:true 的数据
    */
    $scope.radios = [
      {id:1,value:'r1',name:'选项1(禁用)',isd:true,isc:false},
      {id:2,value:'r2',name:'选项2',isd:false,isc:true},//此数据为默认选中
      {id:3,value:'r3',name:'选项3',isd:false,isc:false},
      {id:4,value:'r4',name:'选项4',isd:false,isc:false},
      {id:5,value:'r5',name:'选项5',isd:false,isc:false},
    ]
    $scope.checkValue='r2';//默认选中值 如果没有 $scope.checkValue='';
    //myClick 方法获取 选中数据
    $scope.myClick = function(){
        alert('你选中的是:'+$scope.checkValue);
        console.log('你选中的是:'+$scope.checkValue);
    }
}])
/*
* 搜索框A控制器
* author:yanglijun
* date:2017-03-08
*/
ctrls.controller('searchboxACtrl',['$scope','$routeParams',function($scope,$routeParams){
  $scope.a1Disabled = false;//搜索按钮，默认不禁用
  $scope.searchval = '';//输入框搜索内容
  //a1Fun 点击查询或者搜索按钮触发
  $scope.a1Fun = function(){
    $scope.a1Disabled = true;
    alert($scope.searchval);
  }
}])
/*
* 搜索框B控制器
* author:yanglijun
* date:2017-03-08
*/
ctrls.controller('searchboxBCtrl',['$scope','$routeParams',function($scope,$routeParams){
  $scope.searchval = '';//输入框搜索内容
  $scope.b1Disabled = false;//搜索按钮，默认不禁用
  //b1Fun 点击查询或者搜索按钮触发
  $scope.b1Fun = function(){
    $scope.b1Disabled = true;
    alert($scope.searchval);
  }
}])
/*
* 弹出框A控制器
* author:zoulipeng
* date:2017-03-08
*/
ctrls.controller('promptACtrl',['$scope','$timeout','$routeParams',function($scope,$timeout,$routeParams){
    //myClick 方法 点击显示弹框
    $scope.myClick = function(){
        $scope.loading = true;
        $scope.msg  =
        {
              url:'/app/#/promptA',//跳转地址
              info:'保存成功！',//提示信息
              flag:'su',//跳转样式 er 失败样式  su 成功样式
        }
    }
}])
/*
* 弹出框B控制器(询问框)
* author:zoulipeng
* date:2017-03-09
*/
ctrls.controller('promptBCtrl',['$scope','$timeout','$routeParams',function($scope,$timeout,$routeParams){
  //点击按钮事件 设置参数
   $scope.del = function(delId){
        $scope.promptMsg= '询问是否确定某个操作？';//询问框提示信息
        $scope.delId= delId;//提示信息
   }  
//promptFun 方法 询问框点击确定后绑定方法 处理业务逻辑
    $scope.promptFun = function(){
        console.log('确定后操作。'+$scope.delId);
    }
}])

/*
* 弹出框C控制器(提示框)
* author:zoulipeng
* date:2017-03-09
*/
ctrls.controller('promptCCtrl',['$scope','$timeout','$routeParams',function($scope,$timeout,$routeParams){
  //提示框 设置参数
    $scope.msgInfo = '弹出提示语起到告知作用';//提示信息
    $scope.ljshow = true;//设置：是否显示提示框 
//show 方法 点击按钮 显示提示框(辅助方法)
    $scope.show = function(){
      $scope.msgInfo = '重要提示信息';//提示信息
      $scope.ljshow = true;
    }
}])

/*
* 弹出框D控制器(提示框)
* author:zoulipeng
* date:2017-03-09
*/
ctrls.controller('promptDCtrl',['$scope','$timeout','$routeParams',function($scope,$timeout,$routeParams){
      //show 方法 点击按钮 显示提示框(辅助方法)
      $scope.show1 = function(){
            $scope.ljshow = true;
            $scope.msgInfo = 'this is success';
            $scope.ljstyle = 'success';//只有三种样式  success 成功 warning 警告 danger 危险
      }
      //show 方法 点击按钮 显示提示框(辅助方法)
      $scope.show2 = function(){
            $scope.ljshow = true;
            $scope.msgInfo = 'this is warning';
            $scope.ljstyle = 'warning';//只有三种样式  success 成功 warning 警告 danger 危险
      }
      //show 方法 点击按钮 显示提示框(辅助方法)
      $scope.show3 = function(){
            $scope.ljshow = true;
            $scope.msgInfo = 'this is danger';
            $scope.ljstyle = 'danger';//只有三种样式  success 成功 warning 警告 danger 危险
      }
}])
/*
* 弹出框E控制器(提示框)
* author:liujingxia
* date:2017-08-14
*/
ctrls.controller('promptECtrl',['$scope','$timeout','$routeParams',function($scope,$timeout,$routeParams){
  //提示框 设置参数
  // $scope.msgInfo = '弹出提示语起到告知作用';//提示信息
  $scope.ljshow = false;//设置：是否显示提示框 
  //show 方法 点击按钮 显示提示框(辅助方法)
  $scope.show = function(){
    $scope.msgtip =
    {   
      info:'保存成功！',//提示信息
      flag:'su',//跳转样式 er 失败样式  su 成功样式
    }
    $scope.ljshow = true;
  }
  //单击确定按钮事件
  $scope.promptFun = function(){
    $timeout(function() {
      $scope.ljshow = false;
    }, 100);                 
  }
}])
/*
* 输入框A控制器
* author:zoulipeng
* date:2017-03-09
*/
ctrls.controller('inputACtrl',['$scope','$timeout','$routeParams','ljChecks',function($scope,$timeout,$routeParams,ljChecks){
  //lj-input-a-1-m组件controller
  $scope.value = '';
  $scope.msg = '';
  $scope.ljActive = true;
  //myFun  方法 点击按钮 显示提示框(辅助方法)
  $scope.myFun = function(){
    //调用ckInputA1M方法，第二个参数为1，进行非空验证，其他值则不进行非空验证
    var res = ljChecks.ckInputA1M($scope.value,1);
    if (res.status == 1)
    {
        $scope.msg = '';
        $scope.ljActive = true;
    }else{
        $scope.msg = '不可为空';//提示信息
        $scope.ljActive = false;//class 样式 
    }
  }

  // lj-input-a-1-l组件controller
  $scope.valueal = '';
  $scope.msgal = '';
  $scope.ljActiveal = true;
  //myFun  方法 点击按钮 显示提示框(辅助方法)
  $scope.myFunal = function(){
    var res = ljChecks.ckInputA1L($scope.valueal,1);
    if (res.status == 1)
    {
        $scope.msgal = '';
        $scope.ljActiveal = true;
    }else{
        $scope.msgal = '不可为空';//提示信息
        $scope.ljActiveal = false;//class 样式 
    }
  }
}])
/*
* 输入框B控制器
* author:yanglijun
* date:2017-03-15
*/
ctrls.controller('inputBCtrl',['$scope','$timeout','$routeParams','ljChecks',function($scope,$timeout,$routeParams,ljChecks){
 //lj-input-b-1组件controller
  $scope.valueb = '';
  $scope.msgb = '';
  $scope.ljActiveb = true;
  //myFunem  方法 点击按钮 显示提示框(辅助方法)
  $scope.myFunb = function(){
    //调用ckInputA1M方法，第二个参数为1，进行非空验证，其他值则不进行非空验证
    var res = ljChecks.ckInputA1M($scope.valueb,1);
    if (res.status == 1)
    {
        $scope.msgb = '';
        $scope.ljActiveb = true;
    }else{
        $scope.msgb = '不可为空';//提示信息
        $scope.ljActiveb = false;//class 样式 
    }
  }
}])
/*
* 输入框C控制器
* author:yanglijun
* date:2017-03-15
*/
ctrls.controller('inputCCtrl',['$scope','$timeout','$routeParams','ljChecks',function($scope,$timeout,$routeParams,ljChecks){
  // lj-input-c-1组件controller
  $scope.valuec = '';
  $scope.msgc = '';
  $scope.ljActivec = true;
  //myFunel  方法 点击按钮 显示提示框(辅助方法)
  $scope.myFunc = function(){
    var res = ljChecks.ckInputA1L($scope.valuec,1);
    if (res.status == 1)
    {
        $scope.msgc = '';
        $scope.ljActivec = true;
    }else{
        $scope.msgc = '不可为空';//提示信息
        $scope.ljActivec = false;//class 样式 
    }
  }
}]);
/*
* 输入框D控制器(金额)
* author:yanglijun
* date:2017-03-15
*/
ctrls.controller('inputDCtrl',['$scope','$timeout','$routeParams','ljChecks',function($scope,$timeout,$routeParams,ljChecks){
  $scope.valued = '';
  $scope.msgd = '';
  $scope.ljActived = true;
  //myFunb1  方法 点击按钮 显示提示框(辅助方法)
  $scope.myFund = function(){
    var res = ljChecks.ckInputB1($scope.valued,1);
    if(res.status == 2)
    {
      $scope.msgd = '不可为空';//提示信息
      $scope.ljActived = false;//class 样式 
    }else if(res.status == 3){
      $scope.msgd = '格式错误';//提示信息
      $scope.ljActived = false;//class 样式 
    }else
    {
      $scope.msgd = '';
      $scope.ljActived = true;
    } 
  }
}]);
/*
* 输入框E控制器
* author:zoulipeng
* date:2017-03-14
*/
ctrls.controller('inputECtrl',['$scope','$timeout','$routeParams','ljChecks',function($scope,$timeout,$routeParams,ljChecks){
      /** 数量 输入框 相关参数配置 start**/ 
      $scope.valuee = '';
      $scope.msge = '';
      $scope.ljActivee = true;
      //myFun  方法 点击按钮 (辅助方法)
      $scope.myFune = function(){
              var res = ljChecks.ckInputI1($scope.valuee,1);
              if(res.status == 2) 
              {
                  $scope.msge = '不可为空'; //错误提示信息
                  $scope.ljActivee = false;//输入框样式
              }else
              {
                  $scope.msge = ''; //错误提示信息
                  $scope.ljActivee = true;//输入框样式
                  console.log('获取的值为：'+$scope.valuee);
              }
      }
      /** 数量 输入框 相关参数配置 end **/ 
}]);
/*
* 输入框F控制器(数字)
* author:liujingxia
* date:2017-03-16
*/
ctrls.controller('inputFCtrl',['$scope','$timeout','$routeParams','ljChecks',function($scope,$timeout,$routeParams,ljChecks){
      /** 数字 输入框 相关参数配置 start**/ 
      $scope.valuef = '';
      $scope.msgf = '';
      $scope.ljActivef = true;
      //myFun  方法 点击按钮 (辅助方法)
      $scope.myFunf = function(){
              var res = ljChecks.ckInputK1($scope.valuef,1);
              if(res.status == 2) 
              {
                  $scope.msgf = '不可为空'; //错误提示信息
                  $scope.ljActivef = false;//输入框样式
              }else
              {
                  $scope.msgf = ''; //错误提示信息
                  $scope.ljActivef = true;//输入框样式
                  console.log('获取的值为：'+$scope.valuef);
              }
      }
      /** 数字 输入框 相关参数配置 end **/ 
}]);
/*
* 输入框G控制器
* author:zoulipeng
* date:2017-03-14
*/
ctrls.controller('inputGCtrl',['$scope','$timeout','$routeParams','ljChecks',function($scope,$timeout,$routeParams,ljChecks){
      /** 手机号 输入框 相关参数配置 start**/ 
      $scope.valueg = '';
      $scope.msgg = '';
      $scope.ljActiveg = true;
      //myFun  方法 点击按钮 (辅助方法)
      $scope.myFung = function(){
              var fRes = ljChecks.ckInputF1($scope.valueg,1);
              if(fRes.status == 2) 
              {
                  $scope.msgg = '不可为空'; //错误提示信息
                  $scope.ljActiveg = false;//输入框样式
              }else if(fRes.status == 3) 
              {
                  $scope.msgg = '格式错误'; //错误提示信息
                  $scope.ljActiveg = false;//输入框样式
              }else
              {
                  $scope.msgg = ''; //错误提示信息
                  $scope.ljActiveg = true;//输入框样式
                  console.log('获取的值为：'+$scope.valueg);
              }
      }
      /** 手机号 输入框 相关参数配置 end **/ 
}]);
/*
* 输入框H控制器
* author:zoulipeng
* date:2017-03-14
*/
ctrls.controller('inputHCtrl',['$scope','$timeout','$routeParams','ljChecks',function($scope,$timeout,$routeParams,ljChecks){
     /** 固话 输入框 相关参数配置 start**/ 
      $scope.valueh = '';
      $scope.msgh = '';
      $scope.ljActiveh = true;
      //myFun  方法 点击按钮 (辅助方法)
      $scope.myFunh = function(){
              var gRes = ljChecks.ckInputG1($scope.valueh,1);
              if(gRes.status == 2) 
              {
                  $scope.msgh = '不可为空'; //错误提示信息
                  $scope.ljActiveh = false;//输入框样式
              }else if(gRes.status == 3) 
              {
                  $scope.msgh = '格式错误'; //错误提示信息
                  $scope.ljActiveh = false;//输入框样式
              }else
              {
                  $scope.msgh = ''; //错误提示信息
                  $scope.ljActiveh = true;//输入框样式
                  console.log('获取的值为：'+$scope.valueh);
              }
      }
      /** 固话 输入框 相关参数配置 end **/ 
}]);
/*
* 输入框I控制器
* author:zoulipeng
* date:2017-03-14
*/
ctrls.controller('inputICtrl',['$scope','$timeout','$routeParams','ljChecks',function($scope,$timeout,$routeParams,ljChecks){
      /** 固话&手机号 输入框 相关参数配置 start**/ 
      $scope.valuei = '';
      $scope.msgi = '';
      $scope.ljActivei = true;
      //myFun  方法 点击按钮 (辅助方法)
      $scope.myFuni = function(){
              var res = ljChecks.ckInputH1($scope.valuei,1);
              if(res.status == 2) 
              {
                  $scope.msgi = '不可为空'; //错误提示信息
                  $scope.ljActivei = false;//输入框样式
              }else if(res.status == 3) 
              {
                  $scope.msgi = '格式错误'; //错误提示信息
                  $scope.ljActivei = false;//输入框样式
              }else
              {
                  $scope.msgi = ''; //错误提示信息
                  $scope.ljActivei = true;//输入框样式
                  console.log('获取的值为：'+$scope.valuei);
              }
      }
      /** 固话&手机号 输入框 相关参数配置 end **/ 
}]);
/*
* 输入框J控制器(邮箱)
* author:yanglijun
* date:2017-03-15
*/
ctrls.controller('inputJCtrl',['$scope','$timeout','$routeParams','ljChecks',function($scope,$timeout,$routeParams,ljChecks){
  $scope.valuej = '';
  $scope.msgj = '';
  $scope.ljActivej = true;
  //myFund  方法 点击按钮 (辅助方法)
  $scope.myFunj = function(){
    var dRes = ljChecks.ckInputD1($scope.valuej,1);
    if(dRes.status == 2) 
    {
        $scope.msgj = '不可为空'; //错误提示信息
        $scope.ljActivej = false;//输入框样式
    }else if(dRes.status == 3) 
    {
        $scope.msgj = dRes.info; //错误提示信息
        $scope.ljActivej = false;//输入框样式
    }else
    {
        $scope.msgj = ''; //错误提示信息
        $scope.ljActivej = true;//输入框样式
    }
  }
}]);
/*
* 输入框K控制器
* author:yanglijun
* date:2017-03-15
*/
ctrls.controller('inputKCtrl',['$scope','$timeout','$routeParams','ljChecks',function($scope,$timeout,$routeParams,ljChecks){
  $scope.valuek = '';
  $scope.msgk = '';
  $scope.ljActivek = true;
  //myFunc1  方法 点击按钮 (辅助方法)
  $scope.myFunk = function(){
    var cRes = ljChecks.ckInputC1($scope.valuek,1);
    if(cRes.status == 2) 
    {
        $scope.msgk = '不可为空'; //错误提示信息
        $scope.ljActivek = false;//输入框样式
    }else if(cRes.status == 3) 
    {
        $scope.msgk = cRes.info; //错误提示信息
        $scope.ljActivek = false;//输入框样式
    }else
    {
        $scope.msgk = ''; //错误提示信息
        $scope.ljActivek = true;//输入框样式
    }
  }
}]);
/*
* 密码输入框L1控制器
* author:yanglijun
* date:2017-03-16
*/
ctrls.controller('inputL1Ctrl',['$scope','$timeout','$routeParams','ljChecks',function($scope,$timeout,$routeParams,ljChecks){
  //密码框controller
  $scope.valuel = '';
  $scope.msgl = '';
  $scope.ljActivel = true;
  //myFunl  方法 点击按钮 显示提示框(辅助方法)
  $scope.myFunl = function(){
    var res = ljChecks.ckInputJ1($scope.valuel,0,0);
    if (res.status == 1)
    {
        $scope.msgl = '';
        $scope.ljActivel = true;
    }else{
        $scope.msgl = res.info;//提示信息
        $scope.ljActivel = false;//class 样式 
    }
  }
}]);
/*
* 重复密码输入框L2控制器
* author:yanglijun
* date:2017-03-16
*/
ctrls.controller('inputL2Ctrl',['$scope','$timeout','$routeParams','ljChecks',function($scope,$timeout,$routeParams,ljChecks){
  //密码框controller变量
  $scope.valuel = '';
  $scope.msgl = '';
  $scope.ljActivel = true;
  //新密码框的controller变量
  $scope.valuerell = '';
  $scope.msgrell = '';
  $scope.ljActiverell = true;
  //myFunRej  方法 点击按钮 显示提示框(辅助方法)
  $scope.myFunRell = function(){
    //验证第一input框
    var res = ljChecks.ckInputJ1($scope.valuel,0,0);
    if (res.status == 1)
    {
      $scope.msgl= '';
      $scope.ljActivel = true;
      //验证第二个input框
      var sameRes = ljChecks.ckInputJ1($scope.valuerell,$scope.valuel,1);
      if (sameRes.status == 1)
      {
        $scope.msgrell= '';
        $scope.ljActiverell = true;
        alert('密码一致')
      }else{
        $scope.msgrell = sameRes.info;//提示信息
        $scope.ljActiverell = false;//class 样式 
      }
    }else{
      $scope.msgl = res.info;//提示信息
      $scope.ljActivel = false;//class 样式 
    }
  }
}])
/**
 * 控制器  分页组件a
 * @author : zoulipeng
 * @date : 2017-03-19
 */
ctrls.controller('pagingACtrl',['$scope','$timeout','$routeParams',function($scope,$timeout,$routeParams){
  /***   pageA1 参数配置 start   ****/
      $scope.countA = 150;//总条数
      $scope.offsetA = 0;//注意 偏移量一定是 limit 的整数倍数   默认 0 显示第一页
      $scope.limitA = 15;//每页条数 默认15
      //myFun  方法 点击按钮 (辅助方法)
      $scope.goPageA = function(offset){
       $scope.offsetA = offset;
      }
  /***   pageA1 参数配置 end   ****/

    /***   pageB1 参数配置 start   ****/
      $scope.countB = 200;//总条数
      $scope.offsetB = 0;//注意 偏移量一定是 limit 的整数倍数   默认 0 显示第一页
      $scope.limitB = 15;//每页条数 默认15
      //myFun  方法 点击按钮 (辅助方法)
      $scope.goPageB = function(offset){
       $scope.offsetB = offset;
      }
  /***   pageB1 参数配置 end   ****/

  /***   pageC1 参数配置 start   ****/
      $scope.countC = 200;//总条数
      $scope.offsetC = 0;//注意 偏移量一定是 limit 的整数倍数   默认 0 显示第一页
      $scope.limitC = 15;//每页条数 默认15
      //myFun  方法 点击按钮 (辅助方法)
      $scope.goPageC = function(offset){
       $scope.offsetC = offset;
      }
  /***   pageC1 参数配置 end   ****/
  /***   pageD1 参数配置 start   ****/
    $scope.countD = 14; //总页数，变量
    $scope.currentPage = 1;//当前页
    $scope.toSearch = function(currentPage)
    {   
      if(currentPage < 1 || currentPage > $scope.countD)
      {
        return false; 
      }
      if(currentPage != null) 
      { 
         $scope.currentPage = currentPage; 
      } 
    }
  /***   pageD1 参数配置 end   ****/
}])

/*
* 轮波图A
* author:yanglijun
* date:2017-03-29
*/
ctrls.controller('waveGraphACtrl',['$scope','$routeParams',function($scope,$routeParams){
  //轮波图图片数组
  $scope.images = [
      {image:'/common/images/1.jpg',text:'大海'},
      {image:'/common/images/2.jpg',text:'天鹅'},
      {image:'/common/images/3.jpg',text:'山水'},
      {image:'/common/images/4.jpg',text:'天水一色'},
    ]
}]);
/*
* 验证码A
* author:yanglijun
* date:2017-03-30
*/
ctrls.controller('verificationCodeACtrl',['$scope','$http','$routeParams','ljChecks',function($scope,$http,$routeParams,ljChecks){
  ljChecks.ckCapture($scope);
  $scope.res = '';
  $scope.checkcap = function()
  {   
    // $scope.res = ljChecks.ckCapturetwo($scope);
    var p1 = $http({
        method: 'POST',
        url: "/common/gt-php-sdk/web/VerifyLoginServlet.php", 
        data:{
            'geetest_challenge':$scope.challenge,'geetest_validate':$scope.geetestValidate,'geetest_seccode':$scope.seccode,'type':'pc'
        }
    });
    p1.success(function(response1, status, headers, config) {
        if(response1.status == 'success')
        {
          alert(1)
        }
    });
  }
}]);
/*
* 时间控件b
* author:yanglijun
* date:2017-04-07
*/
ctrls.controller('datepickerBCtrl',['$scope','$routeParams',function($scope,$routeParams){
  //开始时间配置方法
  $scope.ljtvalue = '';//输入框time值
  $scope.timeerrort = '';//错误提示信息
  $scope.ischeckt = '1';//是否验证空时间
  $scope.clickTime = function()
  {
    if($scope.ischeckt ==1 && $scope.ljtvalue == '' || $scope.ljtvalue == undefined)
    {
      $scope.timeerrort = "不可为空";
    }else
    {
      $scope.timeerrort = '';
      alert('您选择的时间为：'+$scope.ljtvalue)
    }
  }
  //结束时间配置方法
  $scope.ljtvalueend = '';//输入框time值
  $scope.timeerrorend = '';//错误提示信息
  $scope.ischeckend = '1';//是否验证空时间
  $scope.clickTimeb2 = function()
  {
    if($scope.ischeckend ==1 && $scope.ljtvalueend == '' || $scope.ljtvalueend == undefined)
    {
      $scope.timeerrorend = "不可为空";
    }else
    {
      $scope.timeerrorend = '';
      alert('您选择的时间为：'+$scope.ljtvalueend)
    }
  }
  //开始日期和截止日期时间控件配置方法
  $scope.startvalueb3 = '';//输入框开始时间
  $scope.endvalueb3 = '';//输入框结束时间
  $scope.timeerrorb3 = '';//错误提示信息
  $scope.ischeckb3 = '1';//是否验证空时间
  $scope.clickTimeb3 = function()
  {
    if(($scope.startvalueb3 == '' || $scope.endvalueb3 == '' || $scope.startvalueb3 == undefined || $scope.endvalueb3 == undefined) && $scope.ischeckb3 ==1)
    {
      $scope.timeerrorb3 = "不可为空";
    }else
    {
      $scope.timeerrorb3 = '';
      alert('您选择的开始时间为：'+$scope.startvalueb3)
      alert('您选择的结束时间为：'+$scope.endvalueb3)
    }
  }
}]);
/*
* 标签A
* author:yanglijun
* date:2017-04-12
*/
ctrls.controller('labelACtrl',['$scope','$http','$routeParams',function($scope,$http,$routeParams){
  //标签数组
  $scope.labelarr = [
    {id: "1",name: "白富美",labels:'2'},
    {id: "2",name: "高富帅",labels:'33'},
    {id: "3",name: "集美丽与智慧并存的你",labels:'15'},
    {id: "4",name: "贫民",labels:'21'},
    {id: "5",name: "小康",labels:'67'},
    {id: "6",name: "白富美",labels:'2'},
    {id: "7",name: "高富帅",labels:'33'},
    {id: "8",name: "集美丽与智慧并存的你",labels:'15'},
    {id: "9",name: "高富帅",labels:'33'},
    {id: "10",name: "集美丽与智慧并存的你",labels:'15'},
    {id: "11",name: "高富帅",labels:'33'},
    {id: "12",name: "集美丽与智慧并存的你",labels:'15'},
  ];
  var length = $scope.labelarr.length;
  //添加标签
  $scope.labeladd = function()
  {
    var newId = length+1;
    var str=prompt("请输入标签名称","");
    if(str)
    {
      var newlabel = {id:newId,name:str,labels:'32'};
      $scope.labelarr.push(newlabel);
    }
  }
  //删除标签
  $scope.labeldel = function(fs)
  {
    id = fs.id-1;
    console.log(id)
    $("ul li:eq("+id+")").remove();
  }
}]);
/*
* 弹出层A
* author:yanglijun
* date:2017-04-13
*/
ctrls.controller('popupACtrl',['$scope','$timeout','$routeParams',function($scope,$timeout,$routeParams){
  $scope.popupa1V1="";//输入框1值
  $scope.popupa1V2="";//输入框2值
  $scope.popupa1V3="";//输入框3值
  $scope.popupa1V4="";//输入框4值
  $scope.popupmsg='';//错误提示信息
  $scope.popupa1sub = function()
  {
    if($scope.popupa1V1 == '')
    {
      $scope.popupmsg = '不可为空';
    }else
    {
      alert($scope.popupa1V1)
      alert($scope.popupa1V2)
      alert($scope.popupa1V3)
      alert($scope.popupa1V4)
      $scope.popupmsg = '';  
      $('#myModal').modal('hide');
    } 
  }
}]);
/*
* 上传图片A
* author:yanglijun
* date:2017-04-13
*/
ctrls.controller('uploaderACtrl',['$scope','$timeout','$routeParams',function($scope,$timeout,$routeParams){
$scope.imgUrl = '/common/images/1.jpg';//旧图地址
$scope.saveA1 = function()
{
  alert('新图片地址为：'+$scope.newImgUrl+',旧图片地址为：'+$scope.imgUrl)
}
}]);
/*
* 选项卡A
* author:yanglijun
* date:2017-04-18
*/
ctrls.controller('tabACtrl',['$scope','$timeout','$routeParams',function($scope,$timeout,$routeParams){
  //选项卡a1导航设置
  $scope.tabsA1 = [
    {tabsA1Name:'首页管理',content:'/common/test/content1.html'},
    {tabsA1Name:'杂谈知识库',content:'/common/test/content2.html'},
  ];
}]);
/*
* 轮播图B
* author:yanglijun
* date:2017-04-25
*/
ctrls.controller('waveGraphBCtrl',['$scope','$routeParams','$window',function($scope,$routeParams,$window){
  //轮播图B图片数组
  $scope.imagesb = [
      {imageurl:'/common/images/1.jpg',id:'1'},
      {imageurl:'/common/images/2.jpg',id:'2'},
      {imageurl:'/common/images/3.jpg',id:'3'},
      {imageurl:'/common/images/4.jpg',id:'4'},
    ]
  //点击图片出发
  $scope.imgdetail=function(str)
  {
    alert("/#/buttonB/"+str)
    //$window.location.href = "/#/buttonB/"+str;
  }
}]);
/*
* 手机端列表（品牌）
* author:yanglijun
* date:2017-04-27
*/
ctrls.controller('listFCtrl',['$scope','$routeParams','$http',function($scope,$routeParams,$http){
  //请求品牌数据
  var brandList = $http({
    method:'POST',
    url:'/index.php/data/brandList'
  });
  brandList.success(function(response, status, headers, config) {
    $scope.brandlist = response;//品牌列表数组
    $scope.brandposition = function(str,$event)
    {
      //alert(str)
      $('.'+str).show();//检索的英文字母对应的品牌显示
      angular.element(event.target).addClass('letter_selected');//英文字母加样式
      angular.element(event.target).siblings('li').removeClass('letter_selected');
      angular.element(event.target).parent('li').removeClass('letter_selected');
      angular.element(event.target).siblings('li').children().removeClass('letter_selected');
      angular.element(event.target).parent('li').siblings('li').children().removeClass('letter_selected');
      angular.element(event.target).parent('li').siblings('li').removeClass('letter_selected');
      var brandsHeight = $("."+str).offset() != undefined ?$("."+str).offset().top :50;//该字母有品牌获取品牌高度，没有品牌，品牌高度为0
      /*注意：这个navheight是指的是滚动条相对于其顶部的偏移,得根据情况算*/
      var hheight = angular.element('#brandContent').siblings("h3").height();  
      var pheight = angular.element('#brandContent').siblings("p").height(); 
      var navheight = pheight+hheight+60;
      /*注意：这个navheight是指的是滚动条相对于其顶部的偏移,得根据情况算*/
      $('html body').animate({scrollTop:brandsHeight-navheight-$(".brand_list_ul").height()-33},10); 
    }
  }).error(function(error){
    console.log(error)  
  });    
}]);
/*
* 选项卡B
* author:yanglijun
* date:2017-05-03
*/
ctrls.controller('tabBCtrl',['$scope','$http','$routeParams',function($scope,$http,$routeParams){
  //请求商品分类的数据
  var classify = $http({
    method:'POST',
    url:'/common/json/prodyctClassify.json'
  });
  classify.success(function(response, status, headers, config) {
    $scope.classifys = response;//品牌列表数组
  }).error(function(error){
    console.log(error)  
  }); 
}]);
/*
* 列表G（新闻资讯）
* author:yanglijun
* date:2017-05-04
*/
ctrls.controller('listGCtrl',['$scope','$http','$routeParams',function($scope,$http,$routeParams){
  //请求新闻资讯列表数据
  var newlists = $http({
    method:'POST',
    url:'/common/json/newsList.json'
  });
  newlists.success(function(response, status, headers, config) {
    $scope.newlist = response;//新闻资讯列表数组
    console.log($scope.newlist)
  }).error(function(error){
    console.log(error)  
  }); 
}]);
/*
* 商品A
* author:yanglijun
* date:2017-05-05
*/
ctrls.controller('productACtrl',['$scope','$http','$routeParams',function($scope,$http,$routeParams){
  //商品信息
  $scope.product ={product_id:'1',product_name:'多喜爱儿童家具FA105-12型号我爱我家功能床优质密度板材质床',product_price:'10500.00',discount_price:'9880.00',product_img:'/common/images/activity_details.jpg',con_resource:'A-001-005',sale_num:'289',customize_status:'1',discount_proportion:'0.98',end_time:'2017-06-24'}
 
}]);

/*
* 列表组件H
* author:liujingxia
* date:2017-05-08
*/
ctrls.controller('listHCtrl',['$scope','$http','$routeParams',function($scope,$http,$routeParams){
  //列表信息
  $scope.inforlist = [
    {infor_title:'品牌',infor_name:'阿玛尼'},
    {infor_title:'型号',infor_name:'W-011S'},
    {infor_title:'材质组成',infor_name:'其他'},
    {infor_title:'床内径尺寸',infor_name:'1800*2000mm'},
    {infor_title:'商品风格',infor_name:'现代简约'},
    {infor_title:'是否定制',infor_name:'是'}
  ]
}]);

/*
* 编辑器组件
* author:liujingxia
* date:2017-05-08
*/
ctrls.controller('textareaCCtrl',['$scope','$http','$routeParams',function($scope,$http,$routeParams){
    /*********** 测试数据c1 start *********/
  $scope.msgc="";//默认错误提示信息
  $scope.content = '';//内容
  $scope.ueConfig = {
    //   //编辑器工具栏配置
      toolbars: [
        ['fullscreen', 'undo', 'redo', 'bold', 'italic','underline','fontborder', 'fontsize', 'fontfamily','justifyleft', 'justifyright','justifycenter', 'justifyjustify','strikethrough','superscript', 'subscript', 'removeformat','formatmatch', 'blockquote', 'pasteplain', '|','forecolor', 'backcolor','insertorderedlist', 'insertunorderedlist','selectall', 'cleardoc','simpleupload', 'insertimage']
      ],
      wordCount:false, //限制字数 false:关闭 true:打开
      elementPathEnabled : false, //元素路径 false:关闭 true:打开
      // scaleEnabled:true, //是否可以拉伸长高,默认true
      initialFrameWidth:1000,  //初始化编辑器宽度,默认1000
      initialFrameHeight:200,  //初始化编辑器高度,默认320
    }
  //点击保存时候触发
  $scope.saveContent=function(){
    alert('输入的内容为:'+$scope.content);
    console.log($scope.content);
  }
  /*********** 测试数据c1 end *********/
}]);
/*
* 内容组件A
* author:杨立军
* date:2017-05-19
*/
ctrls.controller('contentACtrl',['$scope','$http','$routeParams',function($scope,$http,$routeParams){
  //显示内容
  // var newscontent = $http({
  //   method:'POST',
  //   url:'/index.php/data/content'
  // });
  // newscontent.success(function(response, status, headers, config) {
  //   $scope.newcontent = response;//新闻资讯列表数组
  //   console.log($scope.newcontent)
  // }).error(function(error){
  //   console.log(error)  
  // });
var newscontent = "<div class=&apos;new_detaisl_title&apos;><h5>米夏家具蓝景丽家店：木纹艺术打造实木高冷范儿</h5></div><div class=&apos;new_details_date&apos;><span>2017/03/31</span>&nbsp;<span>来源：蓝景丽家</span></div><div class=&apos;new_details_content&apos;><p>米夏家具于近期入驻蓝景丽家大钟寺家居广场，米夏创办于2006年，专业生产经营后现代新古典家具，公司为集体设计、生产、销售于一体的规范化企业。总部位于台湾木田家具。产品已远销欧美、日本等国家。主营星级酒店、别墅和高级公寓配套家具。</p></div><div class=&apos;new_details_img&apos;><img src='/common/images/activity_details.jpg' width=&apos;100%&apos; height=&apos;100%&apos;></div><div class=&apos;new_details_location&apos;><dl><dt>米夏家具地址</dt><dd>蓝景丽家大钟寺店一层 家具西厅</dd><dd>展位号：B-005-003</dd><dd>联系电话：010-62155190</dd><dd>实拍蓝景丽家家居广场 米夏家具店面</dd></dl></div><div class='new_details_describer'><dl><dt>台湾米夏品牌介绍</dt><dd>夜晚不再宁静，但终归是有宁静的，因为梦中的场景还是那么一片灿烂的寂静。我能听见雨滴偶尔打在窗户上的声音，无意间打破了夜的寂静，而心，仍旧一片沉静，我能看见风不甘寂寞的影子，无意间划破夜的安宁。而我，依旧一阵伤怀，这风，这雨，给这清冷的夜增添了少许生动，我能感受到的是悠长夜里的丝丝忧伤。超越生命的本真，睿智与理性共存。<a class='keywordlink' href='http://www.jj59.com/'>文章</a>厚实，耐人品味。我坐在窗的一角，听着雨细细的下，看着风肆意的吹，似乎都很有节奏，告别一切工作的烦恼，抛开生活中的琐碎杂念，撤掉尔虞我诈的防线，摘下面具，脱掉面纱，在这个叫做寂静的夜里，独自品味孤独。寂静的梦里，总是那般温暖，紫色的蝴蝶总会在眼前翩翩起舞，转而又消失。抑或是那缕淡淡的紫光和一束紫色的茉莉静静开放，抑或是一碗香喷喷的蛋炒饭，抑或是没有人的金色舞会现场。所有的一切都是如此的寂静。</dd></dl><div class=&apos;new_details_img&apos;><img src='/common/images/activity_details.jpg' width=&apos;100%&apos; height=&apos;100%&apos;></div><div class=&apos;new_details_location&apos;><dl><dt>米夏家具地址</dt><dd>蓝景丽家大钟寺店一层 家具西厅</dd><dd>展位号：B-005-003</dd><dd>联系电话：010-62155190</dd><dd>实拍蓝景丽家家居广场 米夏家具店面</dd><dd>米夏家具于近期入驻蓝景丽家大钟寺家居广场，米夏创办于2006年，专业生产经营后现代新古典家具，公司为集体设计、生产、销售于一体的规范化企业。总部位于台湾木田家具。产品已远销欧美、日本等国家。主营星级酒店、别墅和高级公寓配套家具。</dd><dd>旧城里的时光是旧的，当时光划过，年轮错乱的记忆偏偏刺伤浓浓的哀情，抓不住的温暖，留不住的馨香，灯光守在寂静的街角，自己躲在被枫叶遮住的窗边，我学不会忘记，偏偏学会了铭记，我深深地记得你幼稚的面容，你就像一座旧城我懂你的破旧，却不懂你的哀伤，我懂你的残缺，却不懂你的快乐，时光刻画的伤痕，在你身上，我假装看不见，我用手傻傻的去触碰你心间的伤，得到的却是你掉落眼泪的轻疼。黑夜里的灯火穿不透浓浓哀伤的云朵，黑夜的寂静在我身边，我守着寂静，等待落寞的灯火可以施舍给我一点点温暖我不奢求很多，只要那么一点点，我靠在树叶遮住的窗边，抬头望枫叶哭红的面容，远方血色的风景刺伤我的双眼，眼泪滑落，心事囚起几多寒颤的凉风，我抱起自己的手臂，原来一个人躲在没有温暖的黑夜里，心是凉的，手是凉的，眼泪也是凉的，全身冰凉，我奢求的温暖没有，还是就连这灯光也不可怜我。</dd><dd></dd>旧城里的时光是旧的，当时光划过，年轮错乱的记忆偏偏刺伤浓浓的哀情，抓不住的温暖，留不住的馨香，灯光守在寂静的街角，自己躲在被枫叶遮住的窗边，我学不会忘记，偏偏学会了铭记，我深深地记得你幼稚的面容，你就像一座旧城我懂你的破旧，却不懂你的哀伤，我懂你的残缺，却不懂你的快乐，时光刻画的伤痕，在你身上，我假装看不见，我用手傻傻的去触碰你心间的伤，得到的却是你掉落眼泪的轻疼。黑夜里的灯火穿不透浓浓哀伤的云朵，黑夜的寂静在我身边，我守着寂静，等待落寞的灯火可以施舍给我一点点温暖我不奢求很多，只要那么一点点，我靠在树叶遮住的窗边，抬头望枫叶哭红的面容，远方血色的风景刺伤我的双眼，眼泪滑落，心事囚起几多寒颤的凉风，我抱起自己的手臂，原来一个人躲在没有温暖的黑夜里，心是凉的，手是凉的，眼泪也是凉的，全身冰凉，我奢求的温暖没有，还是就连这灯光也不可怜我。旧城里的时光是旧的，当时光划过，年轮错乱的记忆偏偏刺伤浓浓的哀情，抓不住的温暖，留不住的馨香，灯光守在寂静的街角，自己躲在被枫叶遮住的窗边，我学不会忘记，偏偏学会了铭记，我深深地记得你幼稚的面容，你就像一座旧城我懂你的破旧，却不懂你的哀伤，我懂你的残缺，却不懂你的快乐，时光刻画的伤痕，在你身上，我假装看不见，我用手傻傻的去触碰你心间的伤，得到的却是你掉落眼泪的轻疼。黑夜里的灯火穿不透浓浓哀伤的云朵，黑夜的寂静在我身边，我守着寂静，等待落寞的灯火可以施舍给我一点点温暖我不奢求很多，只要那么一点点，我靠在树叶遮住的窗边，抬头望枫叶哭红的面容，远方血色的风景刺伤我的双眼，眼泪滑落，心事囚起几多寒颤的凉风，我抱起自己的手臂，原来一个人躲在没有温暖的黑夜里，心是凉的，手是凉的，眼泪也是凉的，全身冰凉，我奢求的温暖没有，还是就连这灯光也不可怜我。旧城里的时光是旧的，当时光划过，年轮错乱的记忆偏偏刺伤浓浓的哀情，抓不住的温暖，留不住的馨香，灯光守在寂静的街角，自己躲在被枫叶遮住的窗边，我学不会忘记，偏偏学会了铭记，我深深地记得你幼稚的面容，你就像一座旧城我懂你的破旧，却不懂你的哀伤，我懂你的残缺，却不懂你的快乐，时光刻画的伤痕，在你身上，我假装看不见，我用手傻傻的去触碰你心间的伤，得到的却是你掉落眼泪的轻疼。黑夜里的灯火穿不透浓浓哀伤的云朵，黑夜的寂静在我身边，我守着寂静，等待落寞的灯火可以施舍给我一点点温暖我不奢求很多，只要那么一点点，我靠在树叶遮住的窗边，抬头望枫叶哭红的面容，远方血色的风景刺伤我的双眼，眼泪滑落，心事囚起几多寒颤的凉风，我抱起自己的手臂，原来一个人躲在没有温暖的黑夜里，心是凉的，手是凉的，眼泪也是凉的，全身冰凉，我奢求的温暖没有，还是就连这灯光也不可怜我。</dl></div></div>"

$scope.newcontent = newscontent;
}]);
/*
* 树结构组件A
* author:杨立军
* date:2017-06-07
*/
ctrls.controller('treecontrol',['$scope','$http','$routeParams','ljChecks',function($scope,$http,$routeParams,$treeControl,ljChecks){
  $scope.openurl ="/common/images/open2.png";//树结构根节点的显示图片 打开状态
  $scope.closeurl = "/common/images/close2.png";//树结构根节点的显示图片 关闭状态
  $scope.fileurl = "/common/images/page.gif";//树结构末尾节点的显示图片
  $scope.addChildUrl="/app/#/buttonA/";//添加子分类的跳转链接
  $scope.modChildUrl="/app/#/listA/";//修改分类的跳转链接
  $scope.delChildUrl="/app/#/textareaA/";//删除分类的跳转链接
  //树结构配置
  $scope.treeOptions = {
    nodeChildren: "children",//节点数组,也就是树结构子分类的key
    dirSelectable: false,//点击根节点的文字,也就是一级分类，是否展开子分类,false：展开;true:不展开,true的时候想要展开子分类只能点击分类名称前面的图片才管用
  }
  //树结构的数据
  $scope.dataForTheTree =
  [
    {"moduleName":'会员管理',"id":1, "children" : [
        {"moduleName":'消费者管理',"id":2, "children" : [
            {"moduleName":'消费者基础信息管理',"id":3,"children" : [] },
            {"moduleName":'消费者基础信息查询',"id":4,"children" : [] },
            {"moduleName":'家装类合同管理',"id":5,"children" : [] }
        ]},
        {"moduleName":'办公室库卡管理', "id":6,"children" : [
                {"moduleName":'办公室库品名称维护',"id":7,"children" : [] },
                {"moduleName":'办公室库管理',"id":8,"children" : [] },
                {"moduleName":'办公室入库批次管理',"id":9,"children" : [] },
                {"moduleName":'办公室库调拨管理',"id":10, "children" : [] }
        ]},
        {"moduleName":'卡类制卡管理',"id":11,"children" : [
                {"moduleName":'单卡制卡管理',"id":12,"children" : [] },
                {"moduleName":'批量制卡管理',"id":13,"children" : [] },
                {"moduleName":'制卡验证',"id":14,"children" : [] },
                {"moduleName":'手动修卡管理',"id":15, "children" : [] }
        ] },
    ]},
    {"moduleName":'财务管理', "id":16,"children" : [
            {"moduleName":'临时收费项目',"id":17,"children" : [] },
            {"moduleName":'日常业务',"id":18,"children" : [] },
    ] },
    {"moduleName":'收银管理', "id":19,"children" : [
            {"moduleName":'基础设施部分',"id":20,"children" : [
                {"moduleName":'结算方式设置',"id":21,"children" : [] },
                {"moduleName":'附加结算方式',"id":22,"children" : [] },
                {"moduleName":'pos打印机设置',"id":23,"children" : [] },  
            ] },
            {"moduleName":'日常业务操作',"id":24,"children" : [] },
            {"moduleName":'数据查询部分',"id":25,"children" : [] },
    ] },
    {"moduleName":'促销管理', "id":7,"children" : [
            {"moduleName":'购物送礼活动',"id":26,"children" : [] },
            {"moduleName":'基础设施部分',"id":27,"children" : [] },
    ] },
    {"moduleName":'食街管理', "id":28,"children" : [
            {"moduleName":'新版食街',"id":29,"children" : [] },
            {"moduleName":'食街管理',"id":30,"children" : [] },
    ] },
    {"moduleName":'商户后台', "id":31,"children" : [] },
  ];
}]);
/*
* tabC切换标签组件
* author:liujingxia
* date:2017-07-21
*/
ctrls.controller('tabCCtrl',['$scope',function($scope){
    $scope.tabsc = [{'id':1,'tabName':'商城商品信息'},{'id':2,'tabName':'商品描述'},{'id':3,'tabName':'云平台信息'},{'id':4,'tabName':'配送说明'},{'id':5,'tabName':'操作信息'}];
    //点击单个选项卡触发
    $scope.toChange = function(item,index)
    {
        console.log('id为：'+item.id+'名称为：'+item.tabName)
    }
}])

/*
* 验证码组件B
* author:杨立军
* date:2017-07-21
*/
ctrls.controller('verificationCodeBCtrl',['$scope','$http','$routeParams',function($scope,$http,$routeParams){
  $scope.verifyerror = 0;//0默认不显示验证码验证错误提示信息，为1的时候才显示
  //点击提交触发 
  $scope.subCheck = function(){
    //获取input框输入的值
    var inputV = angular.lowercase(document.getElementById('code_input').value);
    //图片验证码里面的值
    $scope.verifyCode = angular.lowercase($scope.verifycode);
    //验证码验证
    if(inputV != $scope.verifyCode)
    {
      $scope.verifyerror = 1;//1显示验证码验证错误提示信息
    }else
    {
      $scope.verifyerror = 0;
      alert(inputV)
    }
  };
}]);
/*
* 标签B
* author:liujingxia
* date:2017-07-21
*/
ctrls.controller('labelBCtrl',['$scope','$http','$routeParams',function($scope,$http,$routeParams){
    $scope.limit=20; //每次显示多少个
    $scope.count=0; //总数
    $scope.listlen=0; //总数
    $scope.offset=0; //偏移量
    $scope.jsonArr='';//标签数组
    $scope.labelsarr = [];
    //查询标签主函数
    $scope.main=function(){

        //请求数据
        // var labels = $http({
        //     method:'POST',
        //     url:'/common/json/labelb.json'
        // });
        // labels.success(function(response, status, headers, config){
        //     $scope.labelsarr = response;
        //     $scope.count = response.count;
        //     console.log($scope.limit);
        // }).error(function(error){
        //     console.log(error);
        //     $scope.labelsarr = {};
        //     $scope.count = 0;
        // });


        var labels = $http({
            method:'POST',
            url:'/common/json/labelb.json'
         });


        labels.success(function(response, status, headers, config){
            $scope.jsonArr = response.list;
            $scope.count = response.count;
            var end = $scope.offset+$scope.limit < response.count ? $scope.offset+$scope.limit : response.count;
            for (var i = 0; i < end; i++) {
                $scope.labelsarr[i] = $scope.jsonArr[i];
            }
            $scope.listlen = $scope.labelsarr.length;
        });
    }
    //点击加载更多

    $scope.loadmore = function(){
        $scope.offset+=$scope.limit;
        $scope.main()
    }
    //点击标签  
    $scope.labelclick = function(fs){
       alert('需要操作的数组信息:id=>'+fs.id+'标签名=>'+fs.name);
        angular.forEach($scope.labelsarr,function(item){
                if(item.id == fs.id)
                {
                      if (fs.done == false || fs.done == 'false'){
                         item.done = true;
                      } else {
                        item.done = false;
                      }
                }else
                {
                  item.done = false;
                } 
        });
    }
    //调用主方法
    $scope.main();
}]);

/*
* 上传图片B
* author:yanglijun
* date:2017-08-02
*/
ctrls.controller('uploaderBCtrl',['$scope','$http','$routeParams',function($scope,$http,$routeParams){
  //初始化的图片
  $scope.alreadyImg =[
    {id:'1',imgName:'already1.jpg',imgUrl:'/common/uploade_image/upload_more/already1.jpg'},
    {id:'2',imgName:'already2.jpg',imgUrl:'/common/uploade_image/upload_more/already2.jpg'},
    {id:'3',imgName:'already3.jpg',imgUrl:'/common/uploade_image/upload_more/already3.jpg'}
  ]
  //删除已经有的照片
  $scope.delImg = function(id,imgName,imgUrl,$event)
  {
     var delImgId = event.srcElement.id;//要删除图片的id
    //根据图片名称删除数据库的图片
    if(imgName !='')
    {
      //删除图库里的图片
      var delimg = $http({
        url: '/index.php/data/upload/delImg',
        method: 'POST',
        data:{
          'delImgUrl':imgUrl//要删除图片的url
        }
      });
      delimg.success(function (data) {
        if (data.state == 1){
          $('#'+delImgId).parent('span').remove();//图片清空                        
        }else
        {
          alert('删除图片失败！');
        }   
      }).error(function(error){
        alert('删除图片失败！');
      });
    }
  }
  //点击保存的时候触发
  $scope.saveB1 = function()
  {
    //返回上传的所有图片的名称
    console.log($scope.imgNames)
  }
}]);


/*
* 列表样式B lj-list-i
* author:yanglijun
* date:2017-02-28
*/
ctrls.controller('listICtrl',['$scope','$routeParams',function($scope,$routeParams){
  //使用状态数组
  $scope.statusArr = {
    status1:'未发放',
    status2:'已发放',
    status3:'已使用',
    status4:'已作废',
    status5:'已过期'
  };
  //表头内容
  $scope.titleArr = {
  th1:{name:'券面额（元）',width:'10%'},
  th2:{name:'领取人手机号',width:'14%'},
  th3:{name:'使用码',width:'14%'},
  th4:{name:'券状态',width:'10%'},
  th5:{name:'使用人手机号',width:'14%'},
  th6:{name:'合同号',width:'14%'},
  th7:{name:'合同额（元）',width:'14%'},
  operation:{name:'操作',width:'10%'},
  }
  //列表内容 从数据库获取数据然后转换
  $scope.listArr = [
  {id:'1',td1:'500',td2:'',td3:'',td4:'1',td5:'',td6:'',td7:''},
  {id:'2',td1:'500',td2:'15010052065',td3:'1720003500001',td4:'2',td5:'',td6:'',td7:''},
  {id:'3',td1:'500',td2:'15010052065',td3:'1720003500001',td4:'3',td5:'',td6:'',td7:''},
  {id:'4',td1:'500',td2:'15010052065',td3:'1720003500001',td4:'5',td5:'',td6:'',td7:''},
  {id:'5',td1:'500',td2:'',td3:'',td4:'4',td5:'',td6:'',td7:''},
  ]; 

  //操作显示内容
  $scope.operations = {
    fun1Name:'显示使用信息',
    // fun2Name:'基本属性设置',
    // fun3Name:'黑名单设置',
    // fun4Name:"删除"
  };
  //点击基本属性设置触发
  $scope.fun1 = function(fs)
  {
    fs.td5="13240737533";
    fs.td6="1512500987";
    fs.td7="5000.00 ";
    //alert('券查看操作,id为:'+fs.id);
  }
  //点击黑名单设置触发
  $scope.fun2 = function(fs)
  {
    alert('基本属性设置操作,id为:'+fs.id)
  }
  //点击黑名单设置 fun3触发
  $scope.fun3 = function(fs)
  {
    alert('黑名单设置操作,id为:'+fs.id);
  }
  //点击删除操作 fun4触发
  $scope.fun4 = function(fs)
  {
    alert('点击删除操作,id为:'+fs.id);
  }
  /* --- 测试数据  end ---------------*/ 
}])
