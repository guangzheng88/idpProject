<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>角色列表</title>
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
    $('.price').val(price);
    $(".updateRole").fadeIn(200);
}
function addRole()
{
    $(".addRole").fadeIn(200);
}
</script>


</head>


<body>

    <div class="place">
    <span>位置：</span>
    <ul class="placeul">
    <li><a href="javascript:;" onclick="top.window.location.href='/'">首页</a></li>
    <li><a href="javascript:;">角色列表</a></li>
    </ul>
    </div>
    
    <div class="rightinfo">
    
    <div class="tools">
    
        <ul class="toolbar">
        <li onclick="addRole()"><span><img src="/Public/images/t01.png" /></span>添加</li>
        <!-- <li class="click"><span><img src="/Public/images/t02.png" /></span>修改</li>
        <li><span><img src="/Public/images/t03.png" /></span>删除</li>
        <li><span><img src="/Public/images/t04.png" /></span>统计</li> -->
        </ul>
        
        
        <ul class="toolbar1">
        <!-- <li><span><img src="/Public/images/t05.png" /></span>设置</li> -->
        </ul>
    
    </div>
    
    
    <table class="tablelist">
        <thead>
            <tr>
                <!-- <th><input name="" type="checkbox" value="" checked="checked"/></th> -->
                <th>编号<i class="sort"><img src="/Public/images/px.gif" /></i></th>
                <th>角色名称</th>
                <th>权限</th>
                <th>添加时间</th>
                <th>操作</th>
            </tr>
        </thead>
        <tbody>
            <?php if(is_array($data)): foreach($data as $key=>$val): ?><tr>
                    <!-- <td><input name="" type="checkbox" value="" /></td> -->
                    <td><?php echo ($val["id"]); ?></td>
                    <td><?php echo ($val["title"]); ?></td>
                    <td><?php echo ($val["auth"]); ?></td>
                    <td><?php echo ($val["create_time"]); ?></td>
                    <td><a href="javascript:;" class="tablelink" onclick="addSell(<?php echo ($val["id"]); ?>,<?php echo ($val["id"]); ?>)">修改权限</a>
                </tr><?php endforeach; endif; ?>
        </tbody>
    </table>
    <div class="Pagination">
        <?php echo ($page); ?>
    </div>
    <div class="tip updateRole">
    <form action="/index.php/Role/updateAuth" method="post">
        <div class="tiptop"><span>提示信息</span><a></a></div>
      <div class="tipinfo">
        <span><img src="/Public/images/ticon.png" /></span>
        <div class="tipright">
        <p style="line-height:20px;">
        <?php if(is_array($auth)): foreach($auth as $key=>$val): if($key%3 == 0): ?><br><?php endif; ?>
            <input type="checkbox" name="authId[]" value="<?php echo ($val["id"]); ?>"><?php echo ($val["title"]); ?>&nbsp;&nbsp;&nbsp;&nbsp;<?php endforeach; endif; ?>
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
    
    <div class="tip addRole">
    <form action="/index.php/Role/addAuth" method="post">
        <div class="tiptop"><span>添加角色</span><a></a></div>
      <div class="tipinfo">
        <span><img src="/Public/images/ticon.png" /></span>
        <div class="tipright">
        <p style="line-height:20px;">
        角色名称：<input type="text" name="title" style="border: 1px solid #999;height: 24px;" >
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