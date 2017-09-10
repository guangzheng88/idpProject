-- MySQL dump 10.13  Distrib 5.5.44, for Linux (x86_64)
--
-- Host: localhost    Database: library
-- ------------------------------------------------------
-- Server version	5.5.44-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `admin` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `username` varchar(50) NOT NULL DEFAULT '' COMMENT '用户名',
  `password` char(32) NOT NULL DEFAULT '' COMMENT '密码',
  `role_id` int(11) NOT NULL DEFAULT '0' COMMENT '关联角色表主键',
  `status` int(1) NOT NULL DEFAULT '0' COMMENT '审核状态:0未审核；1已审核；2未通过审核',
  `create_time` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '注册时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COMMENT='用户表';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES (1,'admin','21232f297a57a5a743894a0e4a801fc3',0,0,'2017-09-10 20:58:13'),(2,'张三','e10adc3949ba59abbe56e057f20f883e',3,1,'2017-09-10 21:19:10'),(3,'李四','e10adc3949ba59abbe56e057f20f883e',0,0,'2017-09-10 21:19:40');
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth`
--

DROP TABLE IF EXISTS `auth`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(50) NOT NULL DEFAULT '' COMMENT '权限名称',
  `class_name` varchar(50) NOT NULL DEFAULT '' COMMENT '权限节点，定义为类名',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COMMENT='权限表';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth`
--

LOCK TABLES `auth` WRITE;
/*!40000 ALTER TABLE `auth` DISABLE KEYS */;
INSERT INTO `auth` VALUES (1,'角色管理','Home\\Controller\\RoleController'),(2,'权限管理','Home\\Controller\\AdminController'),(3,'分类管理','Home\\Controller\\CategoryController'),(4,'图书管理','Home\\Controller\\BookController'),(5,'销售管理','Home\\Controller\\SellController');
/*!40000 ALTER TABLE `auth` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `book`
--

DROP TABLE IF EXISTS `book`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `book` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `serial_number` varchar(100) NOT NULL DEFAULT '' COMMENT '图书编号',
  `name` varchar(100) NOT NULL DEFAULT '' COMMENT '图书名称',
  `cate_id` int(11) NOT NULL DEFAULT '0' COMMENT '关联图书分类表id',
  `price` decimal(11,0) NOT NULL DEFAULT '0' COMMENT '价格',
  `author` varchar(50) NOT NULL DEFAULT '' COMMENT '作者',
  `publish_club` varchar(100) NOT NULL DEFAULT '' COMMENT '出版社',
  `num` int(11) NOT NULL DEFAULT '0' COMMENT '实际剩余库存',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8 COMMENT='图书表';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `book`
--

LOCK TABLES `book` WRITE;
/*!40000 ALTER TABLE `book` DISABLE KEYS */;
INSERT INTO `book` VALUES (1,'H125-86','EQ情商',20,25,'佚名','光明时报出版社',20),(2,'H125-88','森林里的小矮人',7,26,'佚名','人民大学出版社',200),(3,'H194-10','脑筋急转弯',10,35,'王维','清华大学出版社',0),(4,'I287-116','格林童话',8,20,'丑小鸭','黄山书社',25),(5,'DXS2017001','读大学，究竟读什么',2,98,'张大学生','清华大学出版社',7),(6,'DXS2017002','求职，从大一开始',4,99,'王小丽','人民大学出版社',22),(7,'DXS2017003','上大学为了什么',16,88,'李小妹','天津科技翻译出版社',97),(8,'DXS2017004','老板要你在大学里学的10件事',8,98,'王老师','清华大学出版社',100),(9,'DXS2017005','不要等到毕业以后',11,58,'战国','清华大学出版社',25),(10,'DXS2017007','造就顶尖人士的51种品质',19,99,'王小美','吉林美术出版社',12),(11,'DXS20170010','杨澜推荐女人必看60本书',4,85,'杨澜','光明时报出版社',0);
/*!40000 ALTER TABLE `book` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(30) NOT NULL DEFAULT '' COMMENT '名称',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8 COMMENT='图书分类表';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'计算机'),(2,'外语'),(3,'文学'),(4,'艺术'),(5,'经管'),(6,'人文社科'),(7,'少儿'),(8,'生活'),(9,'古籍'),(10,'哲学'),(11,'旅游'),(12,'法律'),(13,'宗教'),(14,'历史'),(15,'地理'),(16,'政治'),(17,'教育'),(18,'医学'),(19,'音乐'),(20,'美食');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `repertory`
--

DROP TABLE IF EXISTS `repertory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `repertory` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `book_id` int(11) NOT NULL DEFAULT '0' COMMENT '关联图书表主键',
  `pur_price` decimal(11,0) NOT NULL DEFAULT '0' COMMENT '进价',
  `number` int(11) NOT NULL DEFAULT '0' COMMENT '数量',
  `status` int(1) NOT NULL DEFAULT '0' COMMENT '审核状态:0未审核；1已审核',
  `create_time` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '入库时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8 COMMENT='库存表';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `repertory`
--

LOCK TABLES `repertory` WRITE;
/*!40000 ALTER TABLE `repertory` DISABLE KEYS */;
INSERT INTO `repertory` VALUES (1,1,20,20,1,'2017-09-10 21:06:54'),(2,2,19,200,1,'2017-09-10 21:09:06'),(3,3,10,99,0,'2017-09-10 21:36:08'),(4,4,10,25,1,'2017-09-10 21:37:16'),(5,5,55,5,1,'2017-09-10 21:40:34'),(6,5,55,2,1,'2017-09-10 21:40:55'),(7,6,35,10,1,'2017-09-10 21:41:51'),(8,7,15,98,1,'2017-09-10 21:42:53'),(9,8,30,100,1,'2017-09-10 21:53:12'),(10,9,55,25,1,'2017-09-10 21:54:41'),(11,10,98,12,1,'2017-09-10 21:56:26'),(12,11,58,99,0,'2017-09-10 21:58:41'),(13,6,68,12,1,'2017-09-10 22:00:24');
/*!40000 ALTER TABLE `repertory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role`
--

DROP TABLE IF EXISTS `role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `role` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(50) NOT NULL DEFAULT '' COMMENT '角色名称',
  `auth_ids` varchar(255) NOT NULL DEFAULT '' COMMENT '关联权限表，以,分隔多个值',
  `create_time` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COMMENT='角色表';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role`
--

LOCK TABLES `role` WRITE;
/*!40000 ALTER TABLE `role` DISABLE KEYS */;
INSERT INTO `role` VALUES (1,'超级管理员','1,2,3,4','2017-09-10 21:16:01'),(2,'普通管理员','4','2017-09-10 21:16:26'),(3,'图书管理员','3,4','2017-09-10 21:17:33'),(4,'管理员','1,2','2017-09-10 21:18:14');
/*!40000 ALTER TABLE `role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sell`
--

DROP TABLE IF EXISTS `sell`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sell` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `book_id` int(11) NOT NULL DEFAULT '0' COMMENT '关联图书表主键',
  `num` int(11) NOT NULL DEFAULT '0' COMMENT '销售数量',
  `price` decimal(11,0) NOT NULL DEFAULT '0' COMMENT '售价',
  `discount` decimal(11,0) NOT NULL DEFAULT '0' COMMENT '折扣',
  `actual_price` decimal(11,0) NOT NULL DEFAULT '0' COMMENT '实际支付金额',
  `create_time` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '售出时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COMMENT='销售表';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sell`
--

LOCK TABLES `sell` WRITE;
/*!40000 ALTER TABLE `sell` DISABLE KEYS */;
INSERT INTO `sell` VALUES (1,7,1,88,0,88,'2017-09-10 21:43:44');
/*!40000 ALTER TABLE `sell` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-09-10 22:01:48
