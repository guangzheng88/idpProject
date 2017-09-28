<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>审核列表</title>
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
    $(".tip").fadeIn(200);
}
</script>


</head>


<body>

    <div class="place">
    <span>位置：</span>
    <ul class="placeul">
    <li><a href="javascript:;" onclick="top.window.location.href='/'">首页</a></li>
    <li><a href="javascript:;">审核列表</a></li>
    </ul>
    </div>
    
    <div class="rightinfo">
    
    <div class="tools">
    <form>
        <ul class="toolbar">
        <li><label>图书名称</label><input name="name" type="text" class="dfinput" value="<?php echo ($param["name"]); ?>" /><i></i></li>
        <li><label>图书分类</label><input name="cate" type="text" class="dfinput" value="<?php echo ($param["cate"]); ?>" /><i></i></li>
        <li><label>&nbsp;</label><input name="" type="submit" class="btn" value="搜索"/></li>
        <!-- <li class="click"><span><img src="/Public/images/t02.png" /></span>修改</li>
        <li><span><img src="/Public/images/t03.png" /></span>删除</li>
        <li><span><img src="/Public/images/t04.png" /></span>统计</li> -->
        </ul>
        </form>
        
        <ul class="toolbar1">
        <!-- <li><span><img src="/Public/images/t05.png" /></span>设置</li> -->
        </ul>
    
    </div>
    
    
    <table class="tablelist">
        <thead>
            <tr>
                <!-- <th><input name="" type="checkbox" value="" checked="checked"/></th> -->
                <th>编号<i class="sort"><img src="/Public/images/px.gif" /></i></th>
                <th>图书编号</th>
                <th>图书名称</th>
                <th>分类</th>
                <th>售价</th>
                <th>进价</th>
                <th>作者</th>
                <th>出版社</th>
                <th>入库数量</th>
                <th>剩余库存</th>
                <th>审核状态</th>
                <th>操作</th>
            </tr>
        </thead>
        <tbody>
            <?php if(is_array($data)): foreach($data as $key=>$val): ?><tr>
                    <!-- <td><input name="" type="checkbox" value="" /></td> -->
                    <td><?php echo ($val["r_id"]); ?></td>
                    <td><?php echo ($val["serial_number"]); ?></td>
                    <td><?php echo ($val["name"]); ?></td>
                    <td><?php echo ($val["title"]); ?></td>
                    <td><?php echo ($val["price"]); ?></td>
                    <td><?php echo ($val["pur_price"]); ?></td>
                    <td><?php echo ($val["author"]); ?></td>
                    <td><?php echo ($val["publish_club"]); ?></td>
                    <td><?php echo ($val["number"]); ?></td>
                    <td><?php echo ($val["num"]); ?></td>
                    <td><?php if($val['status'] == 1): ?>已审核<?php else: ?>未审核<?php endif; ?></td>
                    <td><a href="javascript:;" onclick="addSell(<?php echo ($val["r_id"]); ?>,<?php echo ($val["number"]); ?>)" style="color: blue;cursor: pointer;">审核</a>
                </tr><?php endforeach; endif; ?>
        </tbody>
    </table>
    <div class="Pagination">
        <?php echo ($page); ?>
    </div>
    <div class="tip">
    <form action="/index.php/Book/checkBook" method="get">
        <div class="tiptop"><span>审核图书</span><a></a></div>
      <div class="tipinfo">
        <span><img src="/Public/images/ticon.png" /></span>
        <div class="tipright">
        <p>确定审核吗？</p>
        <cite>如果是请点击确定按钮 ，否则请点取消。</cite>
        </div>
        </div>
        <input type="hidden" name="id" value="" class="book_id">
        <input type="hidden" name="num" value="" class="price">
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