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
                  alert(response.error);
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
                if (response.error == '权限不足') {
                  alert(response.error);
                }
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
                  if (response.error == '权限不足') {
                      alert(response.error);
                    }
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

  //
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
      th8:{name:'剩余库存',width:'9%'},
      th9:{name:'出版社',width:'9%'},
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
                if (response.error == '权限不足') {
                      alert(response.error);
                    }
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
 * userListCtrl 用户
 */
ctrls.controller('userListCtrl',['$scope','$http','$routeParams',function($scope,$http,$routeParams){
  $scope.limit = 10;
  $scope.offset = 0;
  $scope.count = 0;
  $scope.role = [];
  $scope.adminId = 0;
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
  $scope.checkValue='';//默认选中值 如果没有 $scope.checkValue='';


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
          $scope.checkValue=fs.role_id;
          $scope.adminId=fs.id;
          $(".libmodal").show();
    }

    $scope.secFun = function(){
      $(".libmodal").hide();
    }
     // 确定
      $scope.saveFun = function(){
        $(".libmodal").hide();
         $http({
                method: 'POST',
                url: "/index.php/admin/addAdminRole", 
                data:{
                    'id':$scope.adminId,
                    'roleId':$scope.checkValue
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
                  url: "/index.php/admin/getList", 
                  data:{
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
                    //console.log(response.role);
                    for (var i = 0; i < response.role.length; i++) {
                      response.role[i].name = response.role[i].title;
                      response.role[i].value = response.role[i].id;
                    }
                    $scope.role = response.role;

                  }else{
                    if (response.error == '权限不足') {
                      alert(response.error);
                    }
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
           var idsArr =[];
           idsArr =fs.auth_ids.split(",");
          for (var i = 0; i < $scope.checks.length; i++) {
                $scope.checks[i].done = false;
                for (var k = 0; k < idsArr.length; k++) {
                  if (idsArr[k] == $scope.checks[i].id) {$scope.checks[i].done = true}
                }
          }
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
                    if (response.error == '权限不足') {
                      alert(response.error);
                    }
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
 * sellListCtrl 销售
 */
ctrls.controller('sellListCtrl',['$scope','$http','$routeParams',function($scope,$http,$routeParams){

  $scope.limit = 10;
  $scope.offset = 0;
  $scope.count = 0;

 //表头内容
  $scope.titleArr = {
      th1:{name:'ID',width:'15%'},
      th2:{name:'图书名称',width:'15%'},
      th3:{name:'售价',width:'15%'},
      th4:{name:'数量',width:'15%'},
      th5:{name:'总金额',width:'15%'},
      th6:{name:'出售时间',width:'25%'}
  }
  $scope.listArr = [];   
    
//操作显示内容
    $scope.operations = {};
//点击  出售操作  触发
$scope.fun1 = function(fs)
{
  
}

 $scope.main = function(){
           var p =  $http({
              method: 'POST',
              url: "/index.php/sell/index", 
              data:{
                  'name':$scope.name,
                  'cate':$scope.cate,
                  'status':$scope.status,
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
                    response.list[i].td2 = response.list[i].name;
                    response.list[i].td3 = response.list[i].price;
                    response.list[i].td4 = response.list[i].num;
                    response.list[i].td5 = response.list[i].actual_price;
                    response.list[i].td6 = response.list[i].create_time;
                }
                $scope.listArr = response.list;
                $scope.count = response.count;
              }else{
                if (response.error == '权限不足') {
                  alert(response.error);
                }
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
 * left
 */
ctrls.controller('lCtrl',['$scope','$routeParams',function($scope,$routeParams){
  //alert('left');
}])