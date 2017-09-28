<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>无标题文档</title>
<link href="/Public/css/style.css" rel="stylesheet" type="text/css" />
</head>

<body>

    <div class="place">
    <span>位置：</span>
    <ul class="placeul">
    <li><a href="javascript:;" onclick="top.window.location.href='/'">首页</a></li>
    <li><a href="javascript:;">图书入库</a></li>
    </ul>
    </div>
    
    <div class="formbody">
    
    <div class="formtitle"><span>基本信息</span></div>
<form action="/index.php/book/addBook" method="post">
    <ul class="forminfo">
    <li><label>图书编号</label><input name="serial_number" type="text" class="dfinput" /><i></i></li>
    <li><label>图书名称</label><input name="name" type="text" class="dfinput" /><i></i></li>
    <li><label>图书分类</label>
    <select class="dfinput" name="cate_id">
        <?php if(is_array($data)): foreach($data as $key=>$val): ?><option value="<?php echo ($val["id"]); ?>"><?php echo ($val["title"]); ?></option><?php endforeach; endif; ?>
    </select>
    </li>
    <li><label>图书进价</label><input name="pur_price" type="text" class="dfinput" /><i></i></li>
    <li><label>图书售价</label><input name="price" type="text" class="dfinput" /><i></i></li>
    <li><label>图书作者</label><input name="author" type="text" class="dfinput" /><i></i></li>
    <li><label>出版社</label><input name="publish_club" type="text" class="dfinput" /><i></i></li>
    <li><label>进货数量</label><input name="number" type="text" class="dfinput" /><i></i></li>
    <li><label>&nbsp;</label><input name="" type="submit" class="btn" value="确认添加"/></li>
    </ul>
</form>

    </div>
</body>
</html>