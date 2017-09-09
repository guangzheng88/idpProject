/*
Navicat MySQL Data Transfer
创建数据库语句：
CREATE DATABASE `library` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;

Source Server         : 本地连接
Source Server Version : 50532
Source Host           : localhost:3306
Source Database       : library

Target Server Type    : MYSQL
Target Server Version : 50532
File Encoding         : 65001

Date: 2017-09-07 23:50:37
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `admin`
-- ----------------------------
DROP TABLE IF EXISTS `admin`;
CREATE TABLE `admin` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `username` varchar(50) NOT NULL DEFAULT '' COMMENT '用户名',
  `password` char(32) NOT NULL DEFAULT '' COMMENT '密码',
  `role_id` int(11) NOT NULL DEFAULT '0' COMMENT '关联角色表主键',
  `status` int(1) NOT NULL DEFAULT '0' COMMENT '审核状态:0未审核；1已审核；2未通过审核',
  `create_time` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '注册时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='用户表';

-- ----------------------------
-- Records of admin
-- ----------------------------

-- ----------------------------
-- Table structure for `auth`
-- ----------------------------
DROP TABLE IF EXISTS `auth`;
CREATE TABLE `auth` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(50) NOT NULL DEFAULT '' COMMENT '权限名称',
  `class_name` varchar(50) NOT NULL DEFAULT '' COMMENT '权限节点，定义为类名',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='权限表';

-- ----------------------------
-- Records of auth
-- ----------------------------

-- ----------------------------
-- Table structure for `book`
-- ----------------------------
DROP TABLE IF EXISTS `book`;
CREATE TABLE `book` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `serial_number` varchar(100) NOT NULL DEFAULT '' COMMENT '图书编号',
  `name` varchar(100) NOT NULL DEFAULT '' COMMENT '图书名称',
  `cate_id` int(11) NOT NULL DEFAULT '0' COMMENT '关联图书分类表id',
  `price` decimal(2,0) NOT NULL DEFAULT '0' COMMENT '价格',
  `author` varchar(50) NOT NULL DEFAULT '' COMMENT '作者',
  `publish_club` varchar(100) NOT NULL DEFAULT '' COMMENT '出版社',
  `num` int(11) NOT NULL DEFAULT '0' COMMENT '实际剩余库存',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='图书表';

-- ----------------------------
-- Records of book
-- ----------------------------

-- ----------------------------
-- Table structure for `category`
-- ----------------------------
DROP TABLE IF EXISTS `category`;
CREATE TABLE `category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(30) NOT NULL DEFAULT '' COMMENT '名称',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='图书分类表';

-- ----------------------------
-- Records of category
-- ----------------------------

-- ----------------------------
-- Table structure for `repertory`
-- ----------------------------
DROP TABLE IF EXISTS `repertory`;
CREATE TABLE `repertory` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `book_id` int(11) NOT NULL DEFAULT '0' COMMENT '关联图书表主键',
  `pur_price` decimal(2,0) NOT NULL DEFAULT '0' COMMENT '进价',
  `number` int(11) NOT NULL DEFAULT '0' COMMENT '数量',
  `status` int(1) NOT NULL DEFAULT '0' COMMENT '审核状态:0未审核；1已审核',
  `create_time` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '入库时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='库存表';

-- ----------------------------
-- Records of repertory
-- ----------------------------

-- ----------------------------
-- Table structure for `role`
-- ----------------------------
DROP TABLE IF EXISTS `role`;
CREATE TABLE `role` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(50) NOT NULL DEFAULT '' COMMENT '角色名称',
  `auth_ids` varchar(255) NOT NULL DEFAULT '' COMMENT '关联权限表，以,分隔多个值',
  `create_time` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='角色表';

-- ----------------------------
-- Records of role
-- ----------------------------

-- ----------------------------
-- Table structure for `sell`
-- ----------------------------
DROP TABLE IF EXISTS `sell`;
CREATE TABLE `sell` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `book_id` int(11) NOT NULL DEFAULT '0' COMMENT '关联图书表主键',
  `num` int(11) NOT NULL DEFAULT '0' COMMENT '销售数量',
  `price` decimal(2,0) NOT NULL DEFAULT '0' COMMENT '售价',
  `discount` decimal(2,0) NOT NULL DEFAULT '0' COMMENT '折扣',
  `actual_price` decimal(2,0) NOT NULL DEFAULT '0' COMMENT '实际支付金额',
  `create_time` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '售出时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='销售表';

-- ----------------------------
-- Records of sell
-- ----------------------------
