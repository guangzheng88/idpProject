<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>分类列表</title>
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
</script>


</head>


<body>

    <div class="place">
    <span>位置：</span>
    <ul class="placeul">
    <li><a href="javascript:;" onclick="top.window.location.href='/'">首页</a></li>
    <li><a href="javascript:;">分类列表</a></li>
    </ul>
    </div>
    
    <div class="rightinfo">
    
    <div class="tools">
    
        <ul class="toolbar">
        <li onclick="window.location.href='/index.php/Category/addCate';"><span><img src="/Public/images/t01.png" /></span>添加</li>
        <!-- <li class="click"><span><img src="/Public/images/t02.png" /></span>修改</li>
        <li><span><img src="/Public/images/t03.png" /></span>删除</li>
        <li><span><img src="/Public/images/t04.png" /></span>统计</li> -->
        </ul>
        
        
        <ul class="toolbar1">
        <li><span><img src="/Public/images/t05.png" /></span>设置</li>
        </ul>
    
    </div>
    
    
    <table class="tablelist">
        <thead>
            <tr>
                <!-- <th><input name="" type="checkbox" value="" checked="checked"/></th> -->
                <th>编号<i class="sort"><img src="/Public/images/px.gif" /></i></th>
                <th>栏目名称</th>
                <th>操作</th>
            </tr>
        </thead>
        <tbody>
            <?php if(is_array($data)): foreach($data as $key=>$val): ?><tr>
                    <!-- <td><input name="" type="checkbox" value="" /></td> -->
                    <td><?php echo ($val["id"]); ?></td>
                    <td><?php echo ($val["title"]); ?></td>
                    <td><a href="/index.php/Category/updateCate/id/<?php echo ($val["id"]); ?>" class="tablelink">修改</a>   |  <a href="/index.php/Category/delCate/id/<?php echo ($val["id"]); ?>" class="tablelink"> 删除</a></td>
                </tr><?php endforeach; endif; ?>
        </tbody>
    </table>
    <div class="Pagination">
        <?php echo ($page); ?>
    </div>
    <div class="tip">
        <div class="tiptop"><span>提示信息</span><a></a></div>
      <div class="tipinfo">
        <span><img src="/Public/images/ticon.png" /></span>
        <div class="tipright">
        <p>是否确认对信息的修改 ？</p>
        <cite>如果是请点击确定按钮 ，否则请点取消。</cite>
        </div>
        </div>
        
        <div class="tipbtn">
        <input name="" type="button"  class="sure" value="确定" />&nbsp;
        <input name="" type="button"  class="cancel" value="取消" />
        </div>
    
    </div>
    
    
    
    
    </div>
    
    <script type="text/javascript">
    $('.tablelist tbody tr:odd').addClass('odd');
    </script>
</body>
</html>