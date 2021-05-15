# Host: localhost  (Version: 5.7.26)
# Date: 2021-05-15 20:07:12
# Generator: MySQL-Front 5.3  (Build 4.234)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "admin_user"
#

DROP TABLE IF EXISTS `admin_user`;
CREATE TABLE `admin_user` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `userName` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "admin_user"
#

/*!40000 ALTER TABLE `admin_user` DISABLE KEYS */;
INSERT INTO `admin_user` VALUES (1,'yangyi','123');
/*!40000 ALTER TABLE `admin_user` ENABLE KEYS */;

#
# Structure for table "article"
#

DROP TABLE IF EXISTS `article`;
CREATE TABLE `article` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `type_id` varchar(255) DEFAULT NULL COMMENT '文章类型编号',
  `title` varchar(255) DEFAULT NULL COMMENT '文章标题',
  `article_content` varchar(255) DEFAULT NULL COMMENT '文章主体内容',
  `introduce` varchar(255) DEFAULT NULL COMMENT '文章简介',
  `addTime` varchar(255) DEFAULT NULL COMMENT '文章发布时间',
  `view_count` varchar(255) DEFAULT NULL COMMENT '浏览次数',
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

#
# Data for table "article"
#

/*!40000 ALTER TABLE `article` DISABLE KEYS */;
INSERT INTO `article` VALUES (1,'1','dgfdgggdgdg','# 由上图可以知道，在JS语言中，闭包的定义就是函数，包含两部分：\n\n **环境部分**  \n 1） 环境：函数的词法环境（执行上下文的一部分）  \n 2） 标识符列表：函数中用到的未声明的变量（这些变量来自于环境中）\n\n**表达式部分**\n 1）函数体\n \n <br>  ','ertetetreteteterte','666665555','1233'),(2,'请选择类型','测死1 ','啊啊达瓦','切切','1619971200','1059'),(3,'2','是舒服舒服色是','舒服舒服色是','舒服舒服','1620230400','1086'),(4,'2','是方式方法是1·1111111111111','舒服舒服色','爽肤水','1622131200','1093');
/*!40000 ALTER TABLE `article` ENABLE KEYS */;

#
# Structure for table "blog_content"
#

DROP TABLE IF EXISTS `blog_content`;
CREATE TABLE `blog_content` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `introduce` varchar(255) DEFAULT NULL,
  `content` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

#
# Data for table "blog_content"
#

/*!40000 ALTER TABLE `blog_content` DISABLE KEYS */;
INSERT INTO `blog_content` VALUES (1,'测试文章','视频','ssssssss','呜呜呜呜呜呜呜呜无呜呜呜呜呜呜呜呜无呜呜呜呜呜呜呜呜无呜呜呜呜呜呜呜呜无呜呜呜呜呜呜呜呜无呜呜呜呜呜呜呜呜无呜呜呜呜呜呜呜呜无呜呜呜呜呜呜呜呜无呜呜呜呜呜呜呜呜无呜呜呜呜呜呜呜呜无呜呜呜呜呜呜呜呜无呜呜呜呜呜呜呜呜无呜呜呜呜呜呜呜呜无呜呜');
/*!40000 ALTER TABLE `blog_content` ENABLE KEYS */;

#
# Structure for table "type"
#

DROP TABLE IF EXISTS `type`;
CREATE TABLE `type` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `typeName` varchar(255) DEFAULT NULL COMMENT '文章类型名',
  `orderNum` int(11) DEFAULT NULL COMMENT '类型排序编号',
  `icon` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

#
# Data for table "type"
#

/*!40000 ALTER TABLE `type` DISABLE KEYS */;
INSERT INTO `type` VALUES (1,'视频',NULL,'youtube'),(2,'生活',NULL,'smile');
/*!40000 ALTER TABLE `type` ENABLE KEYS */;
