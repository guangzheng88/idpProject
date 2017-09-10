var ctrls = angular.module('ctrls', ['treeControl','ljHelper','ui.bootstrap','ng.ueditor','ngAnimate','ngSanitize']);
/**
 * 分类
 */
ctrls.controller('classifyCtrl',['$scope','$http','$routeParams',function($scope,$http,$routeParams){
  $scope.nvalue = '';
  $scope.limit = 10;
  $scope.offset = 0;
  $scope.count = 0;
  $scope.saveId = '';
  $scope.svalue = '';

//添加
  $scope.addFun = function(){
    if ($scope.nvalue) {
      $http({
          method: 'POST',
          url: "/index.php/category/addCate", 
          data:{
              'title':$scope.nvalue
          }
      }).success(function(response, status, headers, config) {
          if(response.status == '1')
          {
            alert('添加成功!');
            window.location.reload();
          }else{
            alert('添加失败!');
          }
      });
    } else {
        alert('不可为空!');
    }
  }
  // 修改
  $scope.saveFun = function(){
    if ($scope.svalue) {
      $(".libmodal").hide();
      $http({
          method: 'POST',
          url: "/index.php/category/updateCate", 
          data:{
              'title':$scope.svalue,
              'id':$scope.saveId
          }
      }).success(function(response, status, headers, config) {
          if(response.status == '1')
          {
            alert('修改成功!');
            window.location.reload();
          }else{
            alert('修改失败!');
          }
      });
    } else {
      alert('不可为空!');
    }
  }
$scope.secFun = function(){
  $(".libmodal").hide();
}
 //表头内容
  $scope.titleArr = {
  th1:{name:'ID编号',width:'20%'},
  th2:{name:'栏目名称',width:'40%'},
  operation:{name:'操作',width:'40%'},
  }
  $scope.listArr = [];   
    
  //操作显示内容
  $scope.operations = {
    fun1Name:'修改',
    fun2Name:'删除',
  };
  //点击基本属性设置触发
  $scope.fun1 = function(fs)
  {
    $scope.saveId = fs.id;
    $(".libmodal").show();
    
  }
  //点击删除操作
  $scope.fun2 = function(fs)
  {
        var r=confirm("确定要删除吗?")
        if (r==true)
        {
          $http({
                method: 'POST',
                url: "/index.php/category/delCate", 
                data:{
                    'id':fs.id
                }
            }).success(function(response, status, headers, config) {
                if(response.status == '1')
                {
                  alert('删除成功!');
                  window.location.reload();
                }else{
                  alert('删除失败!');
                }
            });
        }
  }
 $scope.main = function(){
           var p =  $http({
              method: 'POST',
              url: "/index.php/category/getList", 
              data:{
                  'name':$scope.nvalue,'limit':$scope.limit,'offset':$scope.offset,
              }
          });
           p.success(function(response, status, headers, config) {
            if (response.isLogin == 0){
                alert('登录状态丢失');
                top.window.location.href="/index.php/login";
            }

              if(response.status == '1')
              {
                for (var i = 0; i < response.list.length; i++) {
                  response.list[i].td1 = response.list[i].id;
                  response.list[i].td2 = response.list[i].title;
                }
                $scope.listArr = response.list;
                $scope.count = response.count;
              }else{
                $scope.listArr = [];
                $scope.count = 0;
              }
              
          });
 }
$scope.goPage = function(offset){
   $scope.offset = offset;
   $scope.main();
}
$scope.main();
}])
/**
 * booksAddCtrl
 */
ctrls.controller('booksAddCtrl',['$scope','$http','$routeParams',function($scope,$http,$routeParams){
 // 图书编号 vNum
// 图书名称 vNanme
// 图书分类 selected
// 进价 vJin
// 售价 price
// 作者  vAuthor
// 出版社 vChu
// 数量 vCon
      $scope.isHas = 0;
      $scope.vNum = '';
      $scope.vNanme = '';
      $scope.selected="0";
      $scope.vJin = '';
      $scope.vAuthor = '';
      $scope.vChu = '';
      $scope.vCon = '';
      $scope.bookId = '';
      $scope.price = '';

 

//添加
  $scope.addFun = function(){


    if ($scope.vNum) {
      $http({
          method: 'POST',
          url: "/index.php/book/addBook", 
          data:{
              'name':$scope.vNanme,
              'cate_id':$scope.selected,
              'author':$scope.vAuthor,
              'pur_price':$scope.vJin,
              'number':$scope.vCon,
              'isHas':$scope.isHas,
              'serial_number':$scope.vNum,
              'book_id':$scope.bookId,
              'publish_club':$scope.vChu,
              'price':$scope.price,
          }

      }).success(function(response, status, headers, config) {
          if(response.status == '1')
          {
            alert('添加成功!');
            window.location.reload();
          }else{
            alert('添加失败!');
          }
      });
    } else {
        alert('不可为空!');
    }
  }
  
    //设置默认值
    $scope.selectArr =[{id: "0",name: "请选择"}];
    //显示错误标示
    $scope.errorShow = false;
    //错误提示语
    $scope.errorText = '不可为空';
    //选中值更换，处理
    $scope.ljfun = function(id)
    {
        console.log('选中的是：'+id);
        $scope.selected=id;
    }       


 $scope.main = function(){
           var p =  $http({
              method: 'POST',
              url: "/index.php/category/getList", 
              data:{
                  'limit':100,'offset':0,
              }
          });
           p.success(function(response, status, headers, config) {
            if (response.isLogin == 0){
                alert('登录状态丢失');
                top.window.location.href="/index.php/login";
            }
              if(response.status == '1')
              {
                var newData = [];
                for (var i = 0; i < response.list.length; i++) {
                  response.list[i].name = response.list[i].title;
                }
                $scope.selectArr = $scope.selectArr.concat(response.list);
              }else{
                $scope.selectArr =[{id: "0",name: "请选择"}];
              }
              
          });
 }
$scope.main();

$scope.getDel = function(){
  var get =  $http({
              method: 'POST',
              url: "/index.php/book/findBook", 
              data:{
                  'serial_number':$scope.vNum
              }
          });
          get.success(function(response, status, headers, config) {
              if (response.isLogin == 0){
                  alert('登录状态丢失');
                  top.window.location.href="/index.php/login";
              }
              console.log(response);

              if(response.status == '1')
              {
                 
                  $scope.isHas = 1;
                  $scope.bookId = response.data.id;
                  $scope.vNanme = response.data.name;
                  $scope.selected= response.data.cate_id;
                  $scope.vJin = response.data.pur_price;
                  $scope.vAuthor = response.data.author;
                  $scope.vChu = response.data.publish_club;
                  $scope.vCon = response.data.number;
                  $scope.price = response.data.price;
              }       
          });

}
}])

/**
 * booksAuditingCtrl
 */
ctrls.controller('booksAuditingCtrl',['$scope','$http','$routeParams',function($scope,$http,$routeParams){
  $scope.name= '';
  $scope.cate= '';

  $scope.limit = 10;
  $scope.offset = 0;
  $scope.count = 0;

   var datas =  [
                                {id: "1",name: "已审核"},
                                {id: "2",name: "未审核"}
                            ];
    //设置默认值
    $scope.selectArrm =[{id: "0",name: "请选择"}];
    //对应默认设置id
    $scope.status="0";
    //追加选项
    $scope.selectArrm = $scope.selectArrm.concat(datas);

  //搜索
  $scope.addFun = function(){
    $scope.main();
  }
 //表头内容
 $scope.titleArr = {
th1:{name:'ID',width:'8%'},
th2:{name:'图书编号',width:'8%'},
th3:{name:'图书名称',width:'8%'},
th4:{name:'分类',width:'8%'},
th5:{name:'售价',width:'8%'},
th6:{name:'进价',width:'8%'},
th7:{name:'作者',width:'8%'},
th8:{name:'出版社',width:'8%'},
th9:{name:'入库数量',width:'8%'},
th10:{name:'剩余库存',width:'8%'},
th11:{name:'审核状态',width:'8%'},

  operation:{name:'操作',width:'12%'},
  }
  $scope.listArr = [];   
    
  //操作显示内容
  $scope.operations = {
    fun1Name:'审核'
  };

//操作审核
$scope.fun1 = function(fs)
{
      var status = fs.status;
      if (status == 1)
      {
        alert('已经审核!');
        return false;
      } 
        var r=confirm("确定吗?")
        if (r==true)
        {
              var r_id = fs.r_id;
              var num = fs.number;
                $http({
                      method: 'POST',
                      url: "/index.php/book/checkBook", 
                      data:{
                          'id':r_id,
                          'num':num
                      }
                  }).success(function(response, status, headers, config) {
                    console.log(response);
                      if(response.status == '1')
                      {
                        alert('审核成功!');
                        window.location.reload();
                      }else{
                        alert('审核失败!');
                      }
                  });
        }
  }
 $scope.main = function(){
           var p =  $http({
              method: 'POST',
              url: "/index.php/book/getList", 
              data:{
                  'name':$scope.name,
                  'cate':$scope.cate,
                  'status':$scope.status,
                  'limit':$scope.limit,
                  'offset':$scope.offset,
              }
          });
           p.success(function(response, status, headers, config) {

            if (response.isLogin == 0){
                alert('登录状态丢失');
                top.window.location.href="/index.php/login";
            }
              if(response.status == '1')
              {
                for (var i = 0; i < response.list.length; i++) {
                    response.list[i].td1 = response.list[i].r_id;
                    response.list[i].td2 = response.list[i].serial_number;
                    response.list[i].td3 = response.list[i].name;
                    response.list[i].td4 = response.list[i].title;
                    response.list[i].td5 = response.list[i].price;
                    response.list[i].td6 = response.list[i].pur_price;
                    response.list[i].td7 = response.list[i].author;
                    response.list[i].td8 = response.list[i].publish_club;
                    response.list[i].td9 = response.list[i].number;
                    response.list[i].td10 = response.list[i].num;
                    if(response.list[i].status == 0){
                      response.list[i].td11 = '未审核';
                    }else{
                       response.list[i].td11  = '已审核';
                    }

                }
                $scope.listArr = response.list;
                $scope.count = response.count;
                console.log($scope.listArr);
              }else{
                $scope.listArr = [];
                $scope.count = 0;
              }
              
          });
 }
$scope.goPage = function(offset){
   $scope.offset = offset;
   $scope.main();
}
$scope.main();
}])




/**
 * booksListCtrl
 */
ctrls.controller('booksListCtrl',['$scope','$http','$routeParams',function($scope,$http,$routeParams){
  $scope.name= '';
  $scope.cate= '';
  $scope.limit = 10;
  $scope.offset = 0;
  $scope.count = 0;


$scope.svalue = '';
$scope.seller_price = '';
$scope.seller_id = '';
$scope.max_num = '';
   var datas =  [
                                {id: "1",name: "已审核"},
                                {id: "2",name: "未审核"}
                            ];
    //设置默认值
    $scope.selectArrm =[{id: "0",name: "请选择"}];
    //对应默认设置id
    $scope.status="0";
    //追加选项
    $scope.selectArrm = $scope.selectArrm.concat(datas);

  //搜索
  $scope.addFun = function(){
    $scope.main();
  }
 
 //表头内容
  $scope.titleArr = {
      th1:{name:'ID',width:'9%'},
      th2:{name:'图书编号',width:'9%'},
      th3:{name:'图书名称',width:'10%'},
      th4:{name:'分类',width:'9%'},
      th5:{name:'售价',width:'9%'},
      th6:{name:'进价',width:'9%'},
      th7:{name:'作者',width:'9%'},
      th9:{name:'出版社',width:'9%'},
      th9:{name:'剩余库存',width:'9%'},
      th10:{name:'出版社',width:'9%'},
      operation:{name:'操作',width:'12%'}
  }
  $scope.listArr = [];   
    
//操作显示内容
    $scope.operations = {
      fun1Name:'出售'
    };
//点击  出售操作  触发
$scope.fun1 = function(fs)
{
      //alert('出售操作，id为:'+fs.id);
      console.log(fs);
      $scope.seller_price = fs.price;
      $scope.seller_id = fs.id;
      $scope.max_num  = fs.num;
      $(".libmodal").show();
}
$scope.secFun = function(){
  $(".libmodal").hide();
}
 // 售出确定
  $scope.saveFun = function(){
    $(".libmodal").hide();
    if ($scope.max_num < $scope.svalue) {
          alert('库存不足!');
    }else
    {
            if ($scope.svalue) {
                  $http({
                      method: 'POST',
                      url: "/index.php/sell/addSell", 
                      data:{
                          'num':$scope.svalue,
                          'book_id':$scope.seller_id,
                          'price':$scope.seller_price
                      }
                  }).success(function(response, status, headers, config) {
                      if(response.status == '1')
                      {
                        alert('售出成功!');
                        window.location.reload();
                      }else{
                        alert('售出失败!');
                      }
              });
        } else
        {
              alert('不可为空!');
        }
    }
  }


 $scope.main = function(){
           var p =  $http({
              method: 'POST',
              url: "/index.php/book/index", 
              data:{
                  'name':$scope.name,
                  'cate':$scope.cate,
                  'status':$scope.status,
                  'limit':$scope.limit,
                  'offset':$scope.offset,
              }
          });
           p.success(function(response, status, headers, config) {

            if (response.isLogin == 0){
                alert('登录状态丢失');
                top.window.location.href="/index.php/login";
            }
              if(response.status == '1')
              {
                for (var i = 0; i < response.list.length; i++) {
                    response.list[i].td1 = response.list[i].id;
                    response.list[i].td2 = response.list[i].serial_number;
                    response.list[i].td3 = response.list[i].name;
                    response.list[i].td4 = response.list[i].title;

                    response.list[i].td5 = response.list[i].price;
                    response.list[i].td6 = response.list[i].pur_price;
                    response.list[i].td7 = response.list[i].author;
                    response.list[i].td8 = response.list[i].num;
                    response.list[i].td9 = response.list[i].publish_club;
                }
                $scope.listArr = response.list;
                $scope.count = response.count;
              }else{
                $scope.listArr = [];
                $scope.count = 0;
              }
              
          });
 }
$scope.goPage = function(offset){
   $scope.offset = offset;
   $scope.main();
}
$scope.main();
}])



/**
 * userListCtrl
 */
ctrls.controller('userListCtrl',['$scope','$http','$routeParams',function($scope,$http,$routeParams){
  $scope.limit = 10;
  $scope.offset = 0;
  $scope.count = 0;
  $scope.role = [];
  //表头内容
  $scope.titleArr = {
      th1:{name:'ID',width:'14%'},
      th2:{name:'用户名',width:'14%'},
      th3:{name:'角色',width:'14%'},
      th4:{name:'状态',width:'14%'},
      th5:{name:'注册时间',width:'24%'},
      operation:{name:'操作',width:'16%'}
  }
  $scope.listArr = [];   
    
//操作显示内容
    $scope.operations = {
      fun1Name:'审核',
      fun2Name:'修改角色',
    };
// $scope.radios = [
//       {id:1,value:'r1',name:'选项1(禁用)',isd:false,isc:false},
//       {id:2,value:'r2',name:'选项2',isd:false,isc:true},//此数据为默认选中
//       {id:3,value:'r3',name:'选项3',isd:false,isc:false},
//       {id:4,value:'r4',name:'选项4',isd:false,isc:false},
//       {id:5,value:'r5',name:'选项5',isd:false,isc:false},
//     ]
  $scope.checkValue='r2';//默认选中值 如果没有 $scope.checkValue='';
  //myClick 方法获取 选中数据
  $scope.myClick = function(){
      alert('你选中的是:'+$scope.checkValue);
      console.log('你选中的是:'+$scope.checkValue);
  }

    //点击  出售操作  触发
    $scope.fun1 = function(fs)
    {
          //alert('出售操作，id为:'+fs.id);
          var sign = '';
          var msg = '';
          if (fs.status == 1) {
            msg = '确定禁用管理员吗?';
            sign = 0;
          } else {
            msg = '确定审核通过吗?';
            sign = 1;
          }
        var r=confirm(msg)
        if (r==true)
        {
          $http({
                method: 'POST',
                url: "/index.php/admin/auditAdmin", 
                data:{
                    'status':sign,
                    'id':fs.id
                }
            }).success(function(response, status, headers, config) {
                if(response.status == '1')
                {
                  alert('操作成功!');
                  window.location.reload();
                }else{
                  alert('操作失败!');
                }
            });
        }
    }

    //点击  出售操作  触发
    $scope.fun2 = function(fs)
    {
          //alert('出售操作，id为:'+fs.id);
          $(".libmodal").show();
    }

    $scope.secFun = function(){
      $(".libmodal").hide();
    }
     // 售出确定
      $scope.saveFun = function(){
        $(".libmodal").hide();
      }


     $scope.main = function(){
               var p =  $http({
                  method: 'POST',
                  url: "/index.php/admin/getList", 
                  data:{
                      'limit':$scope.limit,
                      'offset':$scope.offset,
                  }
              });
               p.success(function(response, status, headers, config) {
                console.log(response);
                if (response.isLogin == 0){
                    alert('登录状态丢失');
                    top.window.location.href="/index.php/login";
                }
                  if(response.status == '1')
                  {
                    for (var i = 0; i < response.list.length; i++) {
                        response.list[i].td1 = response.list[i].id;
                        response.list[i].td2 = response.list[i].username;
                        response.list[i].td3 = response.list[i].title;
                        response.list[i].td5 = response.list[i].create_time;
                        
                        if (response.list[i].status == 1) {
                          response.list[i].td4 = '已审核';
                        } else {
                          response.list[i].td4 = '未审核';
                        }
                        
                    }
                    $scope.listArr = response.list;
                    $scope.count = response.count;
                    $scope.role = response.role;

                  }else{
                    $scope.listArr = [];
                    $scope.count = 0;
                  }
              });
     }
    $scope.goPage = function(offset){
       $scope.offset = offset;
       $scope.main();
    }
    $scope.main();
}])


/**
 * roleListCtrl  角色
 */
ctrls.controller('roleListCtrl',['$scope','$http','$routeParams',function($scope,$http,$routeParams){
  $scope.limit = 10;
  $scope.offset = 0;
  $scope.count = 0;
  $scope.role = [];
  $scope.saveId = '';
  //表头内容
  $scope.titleArr = {
      th1:{name:'ID',width:'14%'},
      th2:{name:'角色名称',width:'14%'},
      th3:{name:'权限',width:'14%'},
      th5:{name:'添加时间',width:'24%'},
      operation:{name:'操作',width:'16%'}
  }
  $scope.listArr = [];   
    
//操作显示内容
    $scope.operations = {
      fun1Name:'修改权限'
    };
    $scope.checks = [];
    // $scope.checks = [
    //   {id:1,name:'管理员',isDisabled:'',done:false},
    //   {id:2,name:'店员',isDisabled:'',done:false},
    //   {id:3,name:'其他1',isDisabled:'',done:false},
    //   {id:4,name:'其他2',isDisabled:'',done:false},
    //   {id:5,name:'其他3',isDisabled:'',done:false},
    // ]
    //myClick 方法获取 选中数据
    $scope.myClick = function(){
        angular.forEach($scope.checks, function (item) {
            if (item.done){
              console.log(item.id);
            }
        })
    }
    //点击确定
    $scope.fun1 = function(fs)
    {
          //alert('出售操作，id为:'+fs.id);
          $scope.saveId = fs.id;
          $(".libmodal").show();
   
    }
    $scope.secFun = function(){
      $(".libmodal").hide();
    }
     // 确定
    $scope.saveFun = function(){
      var ids = '';
      for (var i = 0; i < $scope.checks.length; i++) {
        if ($scope.checks[i].done == true) {
          ids +=$scope.checks[i].id + ',';
        }
      }
      $(".libmodal").hide();
        $http({
              method: 'POST',
              url: "/index.php/role/updateAuth", 
              data:{
                  'ids':ids,
                  'id':$scope.saveId
              }
          }).success(function(response, status, headers, config) {
              if(response.status == '1')
              {
                alert('操作成功!');
                window.location.reload();
              }else{
                alert('操作失败!');
              }
          });

      }


     $scope.main = function(){
               var p =  $http({
                  method: 'POST',
                  url: "/index.php/role/getList", 
                  data:{
                      'limit':$scope.limit,
                      'offset':$scope.offset,
                  }
              });
               p.success(function(response, status, headers, config) {
                console.log(response);
                if (response.isLogin == 0){
                    alert('登录状态丢失');
                    top.window.location.href="/index.php/login";
                }
                  if(response.status == '1')
                  {
                    var checks = [];
                    for (var i = 0; i < response.list.length; i++) {
                        response.list[i].td1 = response.list[i].id;
                        response.list[i].td2 = response.list[i].title;
                        response.list[i].td3 = response.list[i].auth;
                        response.list[i].td5 = response.list[i].create_time;
                    }
                    for (var i = 0; i < response.auth.length; i++) {
                        response.auth[i].name = response.auth[i].title;
                        response.auth[i].isDisabled = false;
                        response.auth[i].done = false;
                    }
                    $scope.checks = response.auth;
                    $scope.listArr = response.list;
                    

                  }else{
                    $scope.listArr = [];
                    $scope.count = 0;
                  }
              });
     }
    $scope.goPage = function(offset){
       $scope.offset = offset;
       $scope.main();
    }
    $scope.main();
    //添加juese
  $scope.nvalue = '';
  $scope.addFun = function(){
    if ($scope.nvalue) {
      $http({
          method: 'POST',
          url: "/index.php/role/addAuth", 
          data:{
              'title':$scope.nvalue
          }
      }).success(function(response, status, headers, config) {
          if(response.status == '1')
          {
            alert('添加成功!');
            window.location.reload();
          }else{
            alert('添加失败!');
          }
      });
    } else {
        alert('不可为空!');
    }
  }
}])

/**
 * left
 */
ctrls.controller('lCtrl',['$scope','$routeParams',function($scope,$routeParams){
  //alert('left');
}])
/**
 * right
 */
ctrls.controller('right',['$scope','$routeParams',function($scope,$routeParams){
  //alert('right');
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

