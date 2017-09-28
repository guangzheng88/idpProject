<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>用户列表</title>
<link href="/Public/css/style.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="/Public/js/jquery.js"></script>

<script type="text/javascript">
$(document).ready(function(){
  $(".click").click(function(){

  $(".tip").fadeIn(200);
  });
  
  $(".tiptop a").click(function(){
  $(".tip").fadeOut(200);
});

  $(".sure").click(function(){
  $(".tip").fadeOut(100);
});

  $(".cancel").click(function(){
  $(".tip").fadeOut(100);
});

});
function addSell(id,price)
{
    $('.book_id').val(id);
    if(price == 1)
    {
        price = 0;
    }else
    {
        price = 1;
    }
    $('.price').val(price);
    $(".checkUser").fadeIn(200);
}
function addRole(id,price)
{
    $('.book_id').val(id);
    $('.price').val(price);
    $(".roleAdd").fadeIn(200);
}
</script>


</head>


<body>

    <div class="place">
    <span>位置：</span>
    <ul class="placeul">
    <li><a href="javascript:;" onclick="top.window.location.href='/'">首页</a></li>
    <li><a href="javascript:;">用户列表</a></li>
    </ul>
    </div>
    
    <div class="rightinfo">
    
    <div class="tools">
        <ul class="toolbar1">
        <!-- <li><span><img src="/Public/images/t05.png" /></span>设置</li> -->
        </ul>
    
    </div>
    
    
    <table class="tablelist">
        <thead>
            <tr>
                <!-- <th><input name="" type="checkbox" value="" checked="checked"/></th> -->
                <th>编号<i class="sort"><img src="/Public/images/px.gif" /></i></th>
                <th>用户名</th>
                <th>角色</th>
                <th>状态</th>
                <th>注册时间</th>
                <th>操作</th>
            </tr>
        </thead>
        <tbody>
            <?php if(is_array($data)): foreach($data as $key=>$val): ?><tr>
                    <!-- <td><input name="" type="checkbox" value="" /></td> -->
                    <td><?php echo ($val["id"]); ?></td>
                    <td><?php echo ($val["username"]); ?></td>
                    <td><?php echo ($val["title"]); ?></td>
                    <td><?php if($val['status'] == 1): ?>已审核<?php else: ?>未审核<?php endif; ?></td>
                    <td><?php echo ($val["create_time"]); ?></td>
                    <td><a href="javascript:;" onclick="addSell(<?php echo ($val["id"]); ?>,<?php echo ($val["status"]); ?>)" style="color: blue;cursor: pointer;"><?php if($val['status'] == 1): ?>禁用<?php else: ?>审核<?php endif; ?></a> | <a href="javascript:;" onclick="addRole(<?php echo ($val["id"]); ?>,<?php echo ($val["role_id"]); ?>)" style="color: blue;cursor: pointer;">修改角色</a>
                </tr><?php endforeach; endif; ?>
        </tbody>
    </table>
    <div class="Pagination">
        <?php echo ($page); ?>
    </div>
    <div class="tip checkUser">
    <form action="/index.php/Admin/auditAdmin" method="get">
        <div class="tiptop"><span>审核用户</span><a></a></div>
      <div class="tipinfo">
        <span><img src="/Public/images/ticon.png" /></span>
        <div class="tipright">
        <p>确定审核吗？</p>
        <cite>如果是请点击确定按钮 ，否则请点取消。</cite>
        </div>
        </div>
        <input type="hidden" name="id" value="" class="book_id">
        <input type="hidden" name="status" value="" class="price">
        <div class="tipbtn">
        <input name="" type="submit"  class="sure" value="确定" />&nbsp;
        <input name="" type="button"  class="cancel" value="取消" />
        </div>
    </form>
    </div>
    
    <div class="roleAdd tip">
    <form action="/index.php/Admin/addAdminRole" method="get">
        <div class="tiptop"><span>添加角色</span><a></a></div>
      <div class="tipinfo">
        <span><img src="/Public/images/ticon.png" /></span>
        <div class="tipright">
        <p style="line-height:15px;">
        <?php if(is_array($role)): foreach($role as $key=>$val): if($key%3 == 0): ?><br><?php endif; ?>
            <input type="radio" name="roleId" value="<?php echo ($val["id"]); ?>"><?php echo ($val["title"]); ?>&nbsp;&nbsp;&nbsp;&nbsp;<?php endforeach; endif; ?>
        </p>
        <!-- <cite>如果是请点击确定按钮 ，否则请点取消。</cite> -->
        </div>
        </div>
        <input type="hidden" name="id" value="" class="book_id">
        <input type="hidden" name="status" value="" class="price">
        <div class="tipbtn">
        <input name="" type="submit"  class="sure" value="确定" />&nbsp;
        <input name="" type="button"  class="cancel" value="取消" />
        </div>
    </form>
    </div>
    
    
    
    </div>
    
    <script type="text/javascript">
    $('.tablelist tbody tr:odd').addClass('odd');
    </script>
</body>
</html>