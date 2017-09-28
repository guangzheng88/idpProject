<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>无标题文档</title>
<link href="/Public/css/style.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="/Public/js/jquery.js"></script>

</head>


<body>

    <div class="place">
    <span>位置：</span>
    <ul class="placeul">
    <li><a href="javascript:;">首页</a></li>
    </ul>
    </div>
    
    <div class="mainindex">
    
    
    <div class="welinfo">
    <span><img src="/Public/images/sun.png" alt="天气" /></span>
    <b><?php echo ($userinfo["username"]); ?> <?php echo ($hell); ?>，欢迎使用IDP教育集团图书仓库管理系统</b>
    <a href="javascript:;">帐号设置</a>
    </div>
    
    <div class="welinfo">
    <span><img src="/Public/images/time.png" alt="时间" /></span>
    <i>您上次登录的时间：<?php echo ($sys_info['date']); ?></i> （不是您登录的？<a href="javascript:;">请点这里</a>）
    </div>
    
    <div class="xline"></div>
    
    <ul class="iconlist">
    
    <li><img src="/Public/images/ico01.png" /><p><a href="/index.php/admin/getList">用户列表</a></p></li>
    <li><img src="/Public/images/ico02.png" /><p><a href="/index.php/book/addBook">添加图书</a></p></li>
    <li><img src="/Public/images/ico03.png" /><p><a href="/index.php/sell/index">销售列表</a></p></li>
    <li><img src="/Public/images/ico04.png" /><p><a href="/index.php/book">图书列表</a></p></li>
    <li><img src="/Public/images/ico05.png" /><p><a href="/index.php/role/getList">角色列表</a></p></li>
    <!-- <li><img src="/Public/images/ico06.png" /><p><a href="javascript:;">查询</a></p></li>  -->
            
    </ul>
    
    <div class="ibox"><a class="ibtn"><img src="/Public/images/iadd.png" />添加新的快捷功能</a></div>
    
    <div class="xline"></div>
    <div class="box"></div>
    
    <div class="welinfo">
    <span><img src="/Public/images/dp.png" alt="提醒" /></span>
    <b>IDP教育集团图书仓库管理系统使用指南</b>
    </div>
    
    <ul class="infolist">
    <li><span>您可以快速进行图书发布管理操作</span><a class="ibtn" href="/index.php/book/addBook">发布或管理图书</a></li>
    <li><span>您可以快速管理用户</span><a class="ibtn" href="/index.php/admin/getList">审核用户</a></li>
    <li><span>您可以快速查看图书销售情况</span><a class="ibtn" href="/index.php/sell/index">查看销售情况</a></li>
    </ul>
    
    <div class="xline"></div>

    
    <ul class="umlist">
    <li><a href="/index.php/book/addBook">如何发布图书</a></li>
    <li><a href="/index.php/book/getList">如何审核图书</a></li>
    <li><a href="/index.php/role/getList">如何创建角色</a></li>
    <li><a href="/index.php/admin/getList">后台用户设置(权限)</a></li>
    <li><a href="/index.php/admin/getList">如何审核用户</a></li>
    <li><a href="/index.php/book">如何出售图书</a></li>
    </ul>
    
    
    </div>
</body>
</html>