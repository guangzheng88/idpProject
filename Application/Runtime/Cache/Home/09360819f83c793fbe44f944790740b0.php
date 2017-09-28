<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>无标题文档</title>
<link href="/Public/css/style.css" rel="stylesheet" type="text/css" />
<script language="JavaScript" src="/Public/js/jquery.js"></script>

<script type="text/javascript">
$(function(){   
    //导航切换
    $(".menuson li").click(function(){
        $(".menuson li.active").removeClass("active")
        $(this).addClass("active");
    });
    
    $('.title').click(function(){
        var $ul = $(this).next('ul');
        $('dd').find('ul').slideUp();
        if($ul.is(':visible')){
            $(this).next('ul').slideUp();
        }else{
            $(this).next('ul').slideDown();
        }
    });
})  
</script>


</head>

<body style="background:#f0f9fd;">
    <div class="lefttop"><span></span></div>
    
    <dl class="leftmenu">
        
    <dd>
    <div class="title">
    <span><img src="/Public/images/leftico01.png" /></span>分类管理
    </div>
        <ul class="menuson">
        <li class="active"><cite></cite><a href="/index.php/category/getList" target="rightFrame">分类列表</a><i></i></li>
        </ul>    
    </dd>
        
    
    <dd>
    <div class="title">
    <span><img src="/Public/images/leftico02.png" /></span>图书管理
    </div>
    <ul class="menuson">
        <li><cite></cite><a href="/index.php/book/addBook"  target="rightFrame">图书入库</a><i></i></li>
        <li><cite></cite><a href="/index.php/book"  target="rightFrame">图书列表</a><i></i></li>
        <li><cite></cite><a href="/index.php/book/getList"  target="rightFrame">图书审核</a><i></i></li>
        </ul>
    </dd>
    
    
    <dd><div class="title"><span><img src="/Public/images/leftico03.png" /></span>权限管理</div>
    <ul class="menuson">
        <li><cite></cite><a href="/index.php/admin/getList" target="rightFrame">用户列表</a><i></i></li>
        <li><cite></cite><a href="/index.php/role/getList" target="rightFrame">角色列表</a><i></i></li>
    </ul>    
    </dd>  
    
    
    <dd><div class="title"><span><img src="/Public/images/leftico04.png" /></span>销售管理</div>
    <ul class="menuson">
        <li><cite></cite><a href="/index.php/sell/index" target="rightFrame">销售列表</a><i></i></li>
    </ul>
    
    </dd>   
    
    </dl>
</body>
</html>