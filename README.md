## 简介

项目部署：
PHP+Mysql+Apache

项目配置文件地址： /Application/Common/Conf/config.php

1.创建数据库 library
CREATE DATABASE `library` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;

2.导入数据库文件,文件地址 /idp.sql
 mysql -u root -p library < ./idp.sql

3./Application/Runtime 给777权限

4.默认账号:admin 密码:admin

5.请使用IE11以上版本或谷歌浏览器访问，使用360浏览器请使用急速模式