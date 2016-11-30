/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50540
Source Host           : localhost:3306
Source Database       : qknow

Target Server Type    : MYSQL
Target Server Version : 50540
File Encoding         : 65001

Date: 2016-11-30 09:40:27
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for backend_access_log
-- ----------------------------
DROP TABLE IF EXISTS `backend_access_log`;
CREATE TABLE `backend_access_log` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(10) unsigned NOT NULL,
  `ip_address` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of backend_access_log
-- ----------------------------

-- ----------------------------
-- Table structure for backend_users
-- ----------------------------
DROP TABLE IF EXISTS `backend_users`;
CREATE TABLE `backend_users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `last_name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `login` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `activation_code` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `persist_code` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `reset_password_code` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `permissions` text COLLATE utf8_unicode_ci,
  `is_activated` tinyint(1) NOT NULL DEFAULT '0',
  `activated_at` timestamp NULL DEFAULT NULL,
  `last_login` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `login_unique` (`login`),
  UNIQUE KEY `email_unique` (`email`),
  KEY `act_code_index` (`activation_code`),
  KEY `reset_code_index` (`reset_password_code`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of backend_users
-- ----------------------------
INSERT INTO `backend_users` VALUES ('1', 'Admin', 'Person', 'admin', 'admin@domain.tld', '$2y$10$uGQHHhEk6ZPypgsT3NAL8OyqQNHpuv4Sib520PJhuo7yv.KE1tsdC', null, null, null, '', '1', null, null, '2016-09-03 15:58:10', '2016-09-03 15:58:10', '1');

-- ----------------------------
-- Table structure for backend_users_groups
-- ----------------------------
DROP TABLE IF EXISTS `backend_users_groups`;
CREATE TABLE `backend_users_groups` (
  `user_id` int(10) unsigned NOT NULL,
  `user_group_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`user_id`,`user_group_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of backend_users_groups
-- ----------------------------
INSERT INTO `backend_users_groups` VALUES ('1', '1');

-- ----------------------------
-- Table structure for backend_user_groups
-- ----------------------------
DROP TABLE IF EXISTS `backend_user_groups`;
CREATE TABLE `backend_user_groups` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `permissions` text COLLATE utf8_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `code` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `description` text COLLATE utf8_unicode_ci,
  `is_new_user_default` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `name_unique` (`name`),
  KEY `code_index` (`code`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of backend_user_groups
-- ----------------------------
INSERT INTO `backend_user_groups` VALUES ('1', 'Owners', null, '2016-09-03 15:58:10', '2016-09-03 15:58:10', 'owners', 'Default group for website owners.', '0');

-- ----------------------------
-- Table structure for backend_user_preferences
-- ----------------------------
DROP TABLE IF EXISTS `backend_user_preferences`;
CREATE TABLE `backend_user_preferences` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(10) unsigned NOT NULL,
  `namespace` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `group` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `item` varchar(150) COLLATE utf8_unicode_ci NOT NULL,
  `value` text COLLATE utf8_unicode_ci,
  PRIMARY KEY (`id`),
  KEY `user_item_index` (`user_id`,`namespace`,`group`,`item`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of backend_user_preferences
-- ----------------------------

-- ----------------------------
-- Table structure for backend_user_throttle
-- ----------------------------
DROP TABLE IF EXISTS `backend_user_throttle`;
CREATE TABLE `backend_user_throttle` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(10) unsigned DEFAULT NULL,
  `ip_address` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `attempts` int(11) NOT NULL DEFAULT '0',
  `last_attempt_at` timestamp NULL DEFAULT NULL,
  `is_suspended` tinyint(1) NOT NULL DEFAULT '0',
  `suspended_at` timestamp NULL DEFAULT NULL,
  `is_banned` tinyint(1) NOT NULL DEFAULT '0',
  `banned_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `backend_user_throttle_user_id_index` (`user_id`),
  KEY `backend_user_throttle_ip_address_index` (`ip_address`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of backend_user_throttle
-- ----------------------------

-- ----------------------------
-- Table structure for cache
-- ----------------------------
DROP TABLE IF EXISTS `cache`;
CREATE TABLE `cache` (
  `key` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `value` text COLLATE utf8_unicode_ci NOT NULL,
  `expiration` int(11) NOT NULL,
  UNIQUE KEY `cache_key_unique` (`key`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of cache
-- ----------------------------

-- ----------------------------
-- Table structure for cms_theme_data
-- ----------------------------
DROP TABLE IF EXISTS `cms_theme_data`;
CREATE TABLE `cms_theme_data` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `theme` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `data` mediumtext COLLATE utf8_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `cms_theme_data_theme_index` (`theme`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of cms_theme_data
-- ----------------------------

-- ----------------------------
-- Table structure for deferred_bindings
-- ----------------------------
DROP TABLE IF EXISTS `deferred_bindings`;
CREATE TABLE `deferred_bindings` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `master_type` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `master_field` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `slave_type` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `slave_id` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `session_key` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `is_bind` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `deferred_bindings_master_type_index` (`master_type`),
  KEY `deferred_bindings_master_field_index` (`master_field`),
  KEY `deferred_bindings_slave_type_index` (`slave_type`),
  KEY `deferred_bindings_slave_id_index` (`slave_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of deferred_bindings
-- ----------------------------

-- ----------------------------
-- Table structure for failed_jobs
-- ----------------------------
DROP TABLE IF EXISTS `failed_jobs`;
CREATE TABLE `failed_jobs` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `connection` text COLLATE utf8_unicode_ci NOT NULL,
  `queue` text COLLATE utf8_unicode_ci NOT NULL,
  `payload` text COLLATE utf8_unicode_ci NOT NULL,
  `failed_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of failed_jobs
-- ----------------------------

-- ----------------------------
-- Table structure for jobs
-- ----------------------------
DROP TABLE IF EXISTS `jobs`;
CREATE TABLE `jobs` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `queue` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `payload` text COLLATE utf8_unicode_ci NOT NULL,
  `attempts` tinyint(3) unsigned NOT NULL,
  `reserved` tinyint(3) unsigned NOT NULL,
  `reserved_at` int(10) unsigned DEFAULT NULL,
  `available_at` int(10) unsigned NOT NULL,
  `created_at` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of jobs
-- ----------------------------

-- ----------------------------
-- Table structure for migrations
-- ----------------------------
DROP TABLE IF EXISTS `migrations`;
CREATE TABLE `migrations` (
  `migration` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of migrations
-- ----------------------------
INSERT INTO `migrations` VALUES ('2013_10_01_000001_Db_Deferred_Bindings', '1');
INSERT INTO `migrations` VALUES ('2013_10_01_000002_Db_System_Files', '1');
INSERT INTO `migrations` VALUES ('2013_10_01_000003_Db_System_Plugin_Versions', '1');
INSERT INTO `migrations` VALUES ('2013_10_01_000004_Db_System_Plugin_History', '1');
INSERT INTO `migrations` VALUES ('2013_10_01_000005_Db_System_Settings', '1');
INSERT INTO `migrations` VALUES ('2013_10_01_000006_Db_System_Parameters', '1');
INSERT INTO `migrations` VALUES ('2013_10_01_000007_Db_System_Add_Disabled_Flag', '1');
INSERT INTO `migrations` VALUES ('2013_10_01_000008_Db_System_Mail_Templates', '1');
INSERT INTO `migrations` VALUES ('2013_10_01_000009_Db_System_Mail_Layouts', '1');
INSERT INTO `migrations` VALUES ('2014_10_01_000010_Db_Jobs', '1');
INSERT INTO `migrations` VALUES ('2014_10_01_000011_Db_System_Event_Logs', '1');
INSERT INTO `migrations` VALUES ('2014_10_01_000012_Db_System_Request_Logs', '1');
INSERT INTO `migrations` VALUES ('2014_10_01_000013_Db_System_Sessions', '1');
INSERT INTO `migrations` VALUES ('2015_10_01_000014_Db_System_Mail_Layout_Rename', '1');
INSERT INTO `migrations` VALUES ('2015_10_01_000015_Db_System_Add_Frozen_Flag', '1');
INSERT INTO `migrations` VALUES ('2015_10_01_000016_Db_Cache', '1');
INSERT INTO `migrations` VALUES ('2015_10_01_000017_Db_System_Revisions', '1');
INSERT INTO `migrations` VALUES ('2015_10_01_000018_Db_FailedJobs', '1');
INSERT INTO `migrations` VALUES ('2016_10_01_000019_Db_System_Plugin_History_Detail_Text', '1');
INSERT INTO `migrations` VALUES ('2016_10_01_000020_Db_System_Timestamp_Fix', '1');
INSERT INTO `migrations` VALUES ('2013_10_01_000001_Db_Backend_Users', '2');
INSERT INTO `migrations` VALUES ('2013_10_01_000002_Db_Backend_User_Groups', '2');
INSERT INTO `migrations` VALUES ('2013_10_01_000003_Db_Backend_Users_Groups', '2');
INSERT INTO `migrations` VALUES ('2013_10_01_000004_Db_Backend_User_Throttle', '2');
INSERT INTO `migrations` VALUES ('2014_01_04_000005_Db_Backend_User_Preferences', '2');
INSERT INTO `migrations` VALUES ('2014_10_01_000006_Db_Backend_Access_Log', '2');
INSERT INTO `migrations` VALUES ('2014_10_01_000007_Db_Backend_Add_Description_Field', '2');
INSERT INTO `migrations` VALUES ('2015_10_01_000008_Db_Backend_Add_Superuser_Flag', '2');
INSERT INTO `migrations` VALUES ('2016_10_01_000009_Db_Backend_Timestamp_Fix', '2');
INSERT INTO `migrations` VALUES ('2014_10_01_000001_Db_Cms_Theme_Data', '3');
INSERT INTO `migrations` VALUES ('2016_10_01_000002_Db_Cms_Timestamp_Fix', '3');

-- ----------------------------
-- Table structure for qknow_chapters
-- ----------------------------
DROP TABLE IF EXISTS `qknow_chapters`;
CREATE TABLE `qknow_chapters` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `parent_id` int(10) unsigned NOT NULL,
  `course_id` int(10) unsigned NOT NULL,
  `video_id` int(10) unsigned NOT NULL,
  `title` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `sub_title` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `image` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `time_length` smallint(6) NOT NULL,
  `list_order` smallint(6) DEFAULT NULL,
  `display` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of qknow_chapters
-- ----------------------------
INSERT INTO `qknow_chapters` VALUES ('1', '0', '1', '0', '第一章', null, null, '10', '1', '1', null, null);
INSERT INTO `qknow_chapters` VALUES ('2', '0', '1', '0', '第二章', null, null, '10', '2', '1', null, null);
INSERT INTO `qknow_chapters` VALUES ('3', '1', '1', '1', '安装1', '安装1', null, '10', '1', '1', null, null);
INSERT INTO `qknow_chapters` VALUES ('4', '1', '1', '1', '测试1', '安装1', null, '10', '2', '1', null, null);
INSERT INTO `qknow_chapters` VALUES ('5', '2', '1', '1', '安装2', '安装1', null, '10', '1', '1', null, null);
INSERT INTO `qknow_chapters` VALUES ('6', '2', '1', '1', '测试2', '安装1', null, '10', '2', '1', null, null);

-- ----------------------------
-- Table structure for qknow_courses
-- ----------------------------
DROP TABLE IF EXISTS `qknow_courses`;
CREATE TABLE `qknow_courses` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `course_type_id` int(10) unsigned NOT NULL,
  `lecturer_id` int(10) unsigned NOT NULL,
  `statistice_id` int(10) unsigned NOT NULL,
  `title` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `sub_title` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `image` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `chapter_count` smallint(6) NOT NULL,
  `time_length` smallint(6) NOT NULL,
  `difficulty` enum('初级','中级','高级') COLLATE utf8_unicode_ci NOT NULL,
  `list_order` smallint(6) DEFAULT NULL,
  `display` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of qknow_courses
-- ----------------------------
INSERT INTO `qknow_courses` VALUES ('1', '1', '1', '1', 'chrome开发者完全指南', 'chrome调试技巧', 'http://qknow.oss-cn-shanghai.aliyuncs.com/images/test03.jpg', '10', '50', '初级', '1', '1', null, null);
INSERT INTO `qknow_courses` VALUES ('2', '2', '1', '1', 'chrome开发者完全指南2', 'chrome调试技巧2', 'http://qknow.oss-cn-shanghai.aliyuncs.com/images/test03.jpg', '10', '50', '初级', '2', '1', null, null);

-- ----------------------------
-- Table structure for qknow_course_types
-- ----------------------------
DROP TABLE IF EXISTS `qknow_course_types`;
CREATE TABLE `qknow_course_types` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `course_type_name` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `image` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `list_order` smallint(6) DEFAULT NULL,
  `display` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of qknow_course_types
-- ----------------------------
INSERT INTO `qknow_course_types` VALUES ('1', 'HTML+CSS+CSS', '../images/web.jpg', '1', '1', null, null);
INSERT INTO `qknow_course_types` VALUES ('2', 'PHP', '../images/php7.jpg', '2', '1', null, null);
INSERT INTO `qknow_course_types` VALUES ('3', 'NODE', '../images/node.jpg', '3', '1', null, null);
INSERT INTO `qknow_course_types` VALUES ('4', 'WECHAT', '../images/webchat.png', '4', '1', null, null);
INSERT INTO `qknow_course_types` VALUES ('5', 'LINUX', '../images/linux.jpg', '5', '1', null, null);
INSERT INTO `qknow_course_types` VALUES ('6', 'TOOLS', '../images/tool.jpg', '6', '1', null, null);

-- ----------------------------
-- Table structure for qknow_lecturers
-- ----------------------------
DROP TABLE IF EXISTS `qknow_lecturers`;
CREATE TABLE `qknow_lecturers` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `good_id` int(10) unsigned NOT NULL,
  `nickname` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `sex` tinyint(1) NOT NULL,
  `company` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `introduction` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `list_order` smallint(6) DEFAULT NULL,
  `display` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of qknow_lecturers
-- ----------------------------

-- ----------------------------
-- Table structure for qknow_properties
-- ----------------------------
DROP TABLE IF EXISTS `qknow_properties`;
CREATE TABLE `qknow_properties` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `list_order` smallint(6) DEFAULT NULL,
  `display` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of qknow_properties
-- ----------------------------

-- ----------------------------
-- Table structure for qknow_property_details
-- ----------------------------
DROP TABLE IF EXISTS `qknow_property_details`;
CREATE TABLE `qknow_property_details` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `property_id` int(10) unsigned NOT NULL,
  `name` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `list_order` smallint(6) DEFAULT NULL,
  `display` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of qknow_property_details
-- ----------------------------

-- ----------------------------
-- Table structure for qknow_statistics
-- ----------------------------
DROP TABLE IF EXISTS `qknow_statistics`;
CREATE TABLE `qknow_statistics` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `score` decimal(8,2) NOT NULL,
  `sum` int(10) unsigned NOT NULL,
  `list_order` smallint(6) DEFAULT NULL,
  `display` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of qknow_statistics
-- ----------------------------
INSERT INTO `qknow_statistics` VALUES ('1', '10.00', '10000', null, '0', null, null);

-- ----------------------------
-- Table structure for qknow_videos
-- ----------------------------
DROP TABLE IF EXISTS `qknow_videos`;
CREATE TABLE `qknow_videos` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `parent_id` int(10) unsigned NOT NULL,
  `URL` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `image` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `list_order` smallint(6) DEFAULT NULL,
  `display` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of qknow_videos
-- ----------------------------
INSERT INTO `qknow_videos` VALUES ('1', '0', 'http://qknow1.oss-cn-shanghai.aliyuncs.com/chrome_01_2016-08-29_222508.mp4', '', null, '1', null, null);
INSERT INTO `qknow_videos` VALUES ('2', '0', 'http://qknow1.oss-cn-shanghai.aliyuncs.com/chrome_01_2016-08-29_222508.mp4', '', null, '1', null, null);

-- ----------------------------
-- Table structure for sessions
-- ----------------------------
DROP TABLE IF EXISTS `sessions`;
CREATE TABLE `sessions` (
  `id` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `payload` text COLLATE utf8_unicode_ci,
  `last_activity` int(11) DEFAULT NULL,
  UNIQUE KEY `sessions_id_unique` (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of sessions
-- ----------------------------

-- ----------------------------
-- Table structure for system_event_logs
-- ----------------------------
DROP TABLE IF EXISTS `system_event_logs`;
CREATE TABLE `system_event_logs` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `level` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `message` text COLLATE utf8_unicode_ci,
  `details` mediumtext COLLATE utf8_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `system_event_logs_level_index` (`level`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of system_event_logs
-- ----------------------------
INSERT INTO `system_event_logs` VALUES ('1', 'error', 'exception \'PDOException\' with message \'SQLSTATE[42S22]: Column not found: 1054 Unknown column \'chapter_id\' in \'where clause\'\' in H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Database\\Connection.php:319\nStack trace:\n#0 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Database\\Connection.php(319): PDO->prepare(\'select `id`, `U...\')\n#1 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Database\\Connection.php(655): Illuminate\\Database\\Connection->Illuminate\\Database\\{closure}(Object(Illuminate\\Database\\MySqlConnection), \'select `id`, `U...\', Array)\n#2 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Database\\Connection.php(618): Illuminate\\Database\\Connection->runQueryCallback(\'select `id`, `U...\', Array, Object(Closure))\n#3 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Database\\Connection.php(324): Illuminate\\Database\\Connection->run(\'select `id`, `U...\', Array, Object(Closure))\n#4 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Database\\Query\\Builder.php(1431): Illuminate\\Database\\Connection->select(\'select `id`, `U...\', Array, true)\n#5 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Database\\Query\\Builder.php(1408): Illuminate\\Database\\Query\\Builder->runSelect()\n#6 H:\\Project\\qknow.com\\src\\server\\plugins\\qknow\\api\\models\\Video.php(46): Illuminate\\Database\\Query\\Builder->get()\n#7 H:\\Project\\qknow.com\\src\\server\\plugins\\qknow\\api\\controllers\\Videos.php(20): Qknow\\Api\\Models\\Video::getVideoById(\'1\')\n#8 [internal function]: Qknow\\Api\\Controllers\\Videos->show(\'1\')\n#9 H:\\Project\\qknow.com\\src\\server\\plugins\\mohsin\\rest\\behaviors\\RestController.php(94): call_user_func_array(Array, Array)\n#10 [internal function]: Mohsin\\Rest\\Behaviors\\RestController->callAction(\'show\', Array)\n#11 H:\\Project\\qknow.com\\src\\server\\vendor\\october\\rain\\src\\Extension\\ExtendableTrait.php(366): call_user_func_array(Array, Array)\n#12 H:\\Project\\qknow.com\\src\\server\\vendor\\october\\rain\\src\\Extension\\Extendable.php(42): October\\Rain\\Extension\\Extendable->extendableCall(\'callAction\', Array)\n#13 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\ControllerDispatcher.php(164): October\\Rain\\Extension\\Extendable->__call(\'callAction\', Array)\n#14 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\ControllerDispatcher.php(164): Qknow\\Api\\Controllers\\Videos->callAction(\'show\', Array)\n#15 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\ControllerDispatcher.php(112): Illuminate\\Routing\\ControllerDispatcher->call(Object(Qknow\\Api\\Controllers\\Videos), Object(Illuminate\\Routing\\Route), \'show\')\n#16 [internal function]: Illuminate\\Routing\\ControllerDispatcher->Illuminate\\Routing\\{closure}(Object(Illuminate\\Http\\Request))\n#17 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php(139): call_user_func(Object(Closure), Object(Illuminate\\Http\\Request))\n#18 [internal function]: Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#19 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php(103): call_user_func(Object(Closure), Object(Illuminate\\Http\\Request))\n#20 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\ControllerDispatcher.php(114): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#21 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\ControllerDispatcher.php(69): Illuminate\\Routing\\ControllerDispatcher->callWithinStack(Object(Qknow\\Api\\Controllers\\Videos), Object(Illuminate\\Routing\\Route), Object(Illuminate\\Http\\Request), \'show\')\n#22 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Route.php(203): Illuminate\\Routing\\ControllerDispatcher->dispatch(Object(Illuminate\\Routing\\Route), Object(Illuminate\\Http\\Request), \'Qknow\\\\Api\\\\Contr...\', \'show\')\n#23 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Route.php(134): Illuminate\\Routing\\Route->runWithCustomDispatcher(Object(Illuminate\\Http\\Request))\n#24 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Router.php(708): Illuminate\\Routing\\Route->run(Object(Illuminate\\Http\\Request))\n#25 [internal function]: Illuminate\\Routing\\Router->Illuminate\\Routing\\{closure}(Object(Illuminate\\Http\\Request))\n#26 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php(139): call_user_func(Object(Closure), Object(Illuminate\\Http\\Request))\n#27 [internal function]: Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#28 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php(103): call_user_func(Object(Closure), Object(Illuminate\\Http\\Request))\n#29 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Router.php(710): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#30 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Router.php(675): Illuminate\\Routing\\Router->runRouteWithinStack(Object(Illuminate\\Routing\\Route), Object(Illuminate\\Http\\Request))\n#31 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Router.php(635): Illuminate\\Routing\\Router->dispatchToRoute(Object(Illuminate\\Http\\Request))\n#32 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Foundation\\Http\\Kernel.php(236): Illuminate\\Routing\\Router->dispatch(Object(Illuminate\\Http\\Request))\n#33 [internal function]: Illuminate\\Foundation\\Http\\Kernel->Illuminate\\Foundation\\Http\\{closure}(Object(Illuminate\\Http\\Request))\n#34 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php(139): call_user_func(Object(Closure), Object(Illuminate\\Http\\Request))\n#35 H:\\Project\\qknow.com\\src\\server\\plugins\\qknow\\api\\middleware\\CorsMiddleware.php(23): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#36 [internal function]: Qknow\\Api\\Middleware\\CorsMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#37 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php(124): call_user_func_array(Array, Array)\n#38 H:\\Project\\qknow.com\\src\\server\\plugins\\qknow\\api\\middleware\\BeforeAnyDbQueryMiddleware.php(22): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#39 [internal function]: Qknow\\Api\\Middleware\\BeforeAnyDbQueryMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#40 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php(124): call_user_func_array(Array, Array)\n#41 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\View\\Middleware\\ShareErrorsFromSession.php(49): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#42 [internal function]: Illuminate\\View\\Middleware\\ShareErrorsFromSession->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#43 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php(124): call_user_func_array(Array, Array)\n#44 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Session\\Middleware\\StartSession.php(62): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#45 [internal function]: Illuminate\\Session\\Middleware\\StartSession->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#46 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php(124): call_user_func_array(Array, Array)\n#47 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Cookie\\Middleware\\AddQueuedCookiesToResponse.php(37): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#48 [internal function]: Illuminate\\Cookie\\Middleware\\AddQueuedCookiesToResponse->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#49 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php(124): call_user_func_array(Array, Array)\n#50 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Cookie\\Middleware\\EncryptCookies.php(59): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#51 [internal function]: Illuminate\\Cookie\\Middleware\\EncryptCookies->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#52 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php(124): call_user_func_array(Array, Array)\n#53 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Foundation\\Http\\Middleware\\CheckForMaintenanceMode.php(44): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#54 [internal function]: Illuminate\\Foundation\\Http\\Middleware\\CheckForMaintenanceMode->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#55 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php(124): call_user_func_array(Array, Array)\n#56 [internal function]: Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#57 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php(103): call_user_func(Object(Closure), Object(Illuminate\\Http\\Request))\n#58 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Foundation\\Http\\Kernel.php(122): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#59 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Foundation\\Http\\Kernel.php(87): Illuminate\\Foundation\\Http\\Kernel->sendRequestThroughRouter(Object(Illuminate\\Http\\Request))\n#60 H:\\Project\\qknow.com\\src\\server\\index.php(44): Illuminate\\Foundation\\Http\\Kernel->handle(Object(Illuminate\\Http\\Request))\n#61 H:\\Project\\qknow.com\\src\\server\\server.php(18): require_once(\'H:\\\\Project\\\\qkno...\')\n#62 {main}\n\nNext exception \'Illuminate\\Database\\QueryException\' with message \'SQLSTATE[42S22]: Column not found: 1054 Unknown column \'chapter_id\' in \'where clause\' (SQL: select `id`, `URL` from `qknow_videos` where `chapter_id` = 1 and `display` = 1)\' in H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Database\\Connection.php:662\nStack trace:\n#0 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Database\\Connection.php(618): Illuminate\\Database\\Connection->runQueryCallback(\'select `id`, `U...\', Array, Object(Closure))\n#1 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Database\\Connection.php(324): Illuminate\\Database\\Connection->run(\'select `id`, `U...\', Array, Object(Closure))\n#2 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Database\\Query\\Builder.php(1431): Illuminate\\Database\\Connection->select(\'select `id`, `U...\', Array, true)\n#3 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Database\\Query\\Builder.php(1408): Illuminate\\Database\\Query\\Builder->runSelect()\n#4 H:\\Project\\qknow.com\\src\\server\\plugins\\qknow\\api\\models\\Video.php(46): Illuminate\\Database\\Query\\Builder->get()\n#5 H:\\Project\\qknow.com\\src\\server\\plugins\\qknow\\api\\controllers\\Videos.php(20): Qknow\\Api\\Models\\Video::getVideoById(\'1\')\n#6 [internal function]: Qknow\\Api\\Controllers\\Videos->show(\'1\')\n#7 H:\\Project\\qknow.com\\src\\server\\plugins\\mohsin\\rest\\behaviors\\RestController.php(94): call_user_func_array(Array, Array)\n#8 [internal function]: Mohsin\\Rest\\Behaviors\\RestController->callAction(\'show\', Array)\n#9 H:\\Project\\qknow.com\\src\\server\\vendor\\october\\rain\\src\\Extension\\ExtendableTrait.php(366): call_user_func_array(Array, Array)\n#10 H:\\Project\\qknow.com\\src\\server\\vendor\\october\\rain\\src\\Extension\\Extendable.php(42): October\\Rain\\Extension\\Extendable->extendableCall(\'callAction\', Array)\n#11 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\ControllerDispatcher.php(164): October\\Rain\\Extension\\Extendable->__call(\'callAction\', Array)\n#12 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\ControllerDispatcher.php(164): Qknow\\Api\\Controllers\\Videos->callAction(\'show\', Array)\n#13 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\ControllerDispatcher.php(112): Illuminate\\Routing\\ControllerDispatcher->call(Object(Qknow\\Api\\Controllers\\Videos), Object(Illuminate\\Routing\\Route), \'show\')\n#14 [internal function]: Illuminate\\Routing\\ControllerDispatcher->Illuminate\\Routing\\{closure}(Object(Illuminate\\Http\\Request))\n#15 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php(139): call_user_func(Object(Closure), Object(Illuminate\\Http\\Request))\n#16 [internal function]: Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#17 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php(103): call_user_func(Object(Closure), Object(Illuminate\\Http\\Request))\n#18 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\ControllerDispatcher.php(114): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#19 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\ControllerDispatcher.php(69): Illuminate\\Routing\\ControllerDispatcher->callWithinStack(Object(Qknow\\Api\\Controllers\\Videos), Object(Illuminate\\Routing\\Route), Object(Illuminate\\Http\\Request), \'show\')\n#20 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Route.php(203): Illuminate\\Routing\\ControllerDispatcher->dispatch(Object(Illuminate\\Routing\\Route), Object(Illuminate\\Http\\Request), \'Qknow\\\\Api\\\\Contr...\', \'show\')\n#21 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Route.php(134): Illuminate\\Routing\\Route->runWithCustomDispatcher(Object(Illuminate\\Http\\Request))\n#22 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Router.php(708): Illuminate\\Routing\\Route->run(Object(Illuminate\\Http\\Request))\n#23 [internal function]: Illuminate\\Routing\\Router->Illuminate\\Routing\\{closure}(Object(Illuminate\\Http\\Request))\n#24 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php(139): call_user_func(Object(Closure), Object(Illuminate\\Http\\Request))\n#25 [internal function]: Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#26 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php(103): call_user_func(Object(Closure), Object(Illuminate\\Http\\Request))\n#27 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Router.php(710): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#28 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Router.php(675): Illuminate\\Routing\\Router->runRouteWithinStack(Object(Illuminate\\Routing\\Route), Object(Illuminate\\Http\\Request))\n#29 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Router.php(635): Illuminate\\Routing\\Router->dispatchToRoute(Object(Illuminate\\Http\\Request))\n#30 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Foundation\\Http\\Kernel.php(236): Illuminate\\Routing\\Router->dispatch(Object(Illuminate\\Http\\Request))\n#31 [internal function]: Illuminate\\Foundation\\Http\\Kernel->Illuminate\\Foundation\\Http\\{closure}(Object(Illuminate\\Http\\Request))\n#32 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php(139): call_user_func(Object(Closure), Object(Illuminate\\Http\\Request))\n#33 H:\\Project\\qknow.com\\src\\server\\plugins\\qknow\\api\\middleware\\CorsMiddleware.php(23): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#34 [internal function]: Qknow\\Api\\Middleware\\CorsMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#35 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php(124): call_user_func_array(Array, Array)\n#36 H:\\Project\\qknow.com\\src\\server\\plugins\\qknow\\api\\middleware\\BeforeAnyDbQueryMiddleware.php(22): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#37 [internal function]: Qknow\\Api\\Middleware\\BeforeAnyDbQueryMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#38 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php(124): call_user_func_array(Array, Array)\n#39 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\View\\Middleware\\ShareErrorsFromSession.php(49): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#40 [internal function]: Illuminate\\View\\Middleware\\ShareErrorsFromSession->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#41 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php(124): call_user_func_array(Array, Array)\n#42 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Session\\Middleware\\StartSession.php(62): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#43 [internal function]: Illuminate\\Session\\Middleware\\StartSession->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#44 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php(124): call_user_func_array(Array, Array)\n#45 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Cookie\\Middleware\\AddQueuedCookiesToResponse.php(37): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#46 [internal function]: Illuminate\\Cookie\\Middleware\\AddQueuedCookiesToResponse->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#47 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php(124): call_user_func_array(Array, Array)\n#48 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Cookie\\Middleware\\EncryptCookies.php(59): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#49 [internal function]: Illuminate\\Cookie\\Middleware\\EncryptCookies->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#50 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php(124): call_user_func_array(Array, Array)\n#51 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Foundation\\Http\\Middleware\\CheckForMaintenanceMode.php(44): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#52 [internal function]: Illuminate\\Foundation\\Http\\Middleware\\CheckForMaintenanceMode->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#53 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php(124): call_user_func_array(Array, Array)\n#54 [internal function]: Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#55 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php(103): call_user_func(Object(Closure), Object(Illuminate\\Http\\Request))\n#56 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Foundation\\Http\\Kernel.php(122): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#57 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Foundation\\Http\\Kernel.php(87): Illuminate\\Foundation\\Http\\Kernel->sendRequestThroughRouter(Object(Illuminate\\Http\\Request))\n#58 H:\\Project\\qknow.com\\src\\server\\index.php(44): Illuminate\\Foundation\\Http\\Kernel->handle(Object(Illuminate\\Http\\Request))\n#59 H:\\Project\\qknow.com\\src\\server\\server.php(18): require_once(\'H:\\\\Project\\\\qkno...\')\n#60 {main}', null, '2016-09-03 16:03:51', '2016-09-03 16:03:51');
INSERT INTO `system_event_logs` VALUES ('2', 'error', 'exception \'PDOException\' with message \'SQLSTATE[23000]: Integrity constraint violation: 1052 Column \'id\' in where clause is ambiguous\' in H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Database\\Connection.php:319\nStack trace:\n#0 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Database\\Connection.php(319): PDO->prepare(\'select `qknow_v...\')\n#1 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Database\\Connection.php(655): Illuminate\\Database\\Connection->Illuminate\\Database\\{closure}(Object(Illuminate\\Database\\MySqlConnection), \'select `qknow_v...\', Array)\n#2 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Database\\Connection.php(618): Illuminate\\Database\\Connection->runQueryCallback(\'select `qknow_v...\', Array, Object(Closure))\n#3 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Database\\Connection.php(324): Illuminate\\Database\\Connection->run(\'select `qknow_v...\', Array, Object(Closure))\n#4 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Database\\Query\\Builder.php(1431): Illuminate\\Database\\Connection->select(\'select `qknow_v...\', Array, true)\n#5 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Database\\Query\\Builder.php(1408): Illuminate\\Database\\Query\\Builder->runSelect()\n#6 H:\\Project\\qknow.com\\src\\server\\plugins\\qknow\\api\\models\\Video.php(47): Illuminate\\Database\\Query\\Builder->get()\n#7 H:\\Project\\qknow.com\\src\\server\\plugins\\qknow\\api\\controllers\\Videos.php(20): Qknow\\Api\\Models\\Video::getVideoById(\'1\')\n#8 [internal function]: Qknow\\Api\\Controllers\\Videos->show(\'1\')\n#9 H:\\Project\\qknow.com\\src\\server\\plugins\\mohsin\\rest\\behaviors\\RestController.php(94): call_user_func_array(Array, Array)\n#10 [internal function]: Mohsin\\Rest\\Behaviors\\RestController->callAction(\'show\', Array)\n#11 H:\\Project\\qknow.com\\src\\server\\vendor\\october\\rain\\src\\Extension\\ExtendableTrait.php(366): call_user_func_array(Array, Array)\n#12 H:\\Project\\qknow.com\\src\\server\\vendor\\october\\rain\\src\\Extension\\Extendable.php(42): October\\Rain\\Extension\\Extendable->extendableCall(\'callAction\', Array)\n#13 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\ControllerDispatcher.php(164): October\\Rain\\Extension\\Extendable->__call(\'callAction\', Array)\n#14 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\ControllerDispatcher.php(164): Qknow\\Api\\Controllers\\Videos->callAction(\'show\', Array)\n#15 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\ControllerDispatcher.php(112): Illuminate\\Routing\\ControllerDispatcher->call(Object(Qknow\\Api\\Controllers\\Videos), Object(Illuminate\\Routing\\Route), \'show\')\n#16 [internal function]: Illuminate\\Routing\\ControllerDispatcher->Illuminate\\Routing\\{closure}(Object(Illuminate\\Http\\Request))\n#17 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php(139): call_user_func(Object(Closure), Object(Illuminate\\Http\\Request))\n#18 [internal function]: Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#19 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php(103): call_user_func(Object(Closure), Object(Illuminate\\Http\\Request))\n#20 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\ControllerDispatcher.php(114): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#21 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\ControllerDispatcher.php(69): Illuminate\\Routing\\ControllerDispatcher->callWithinStack(Object(Qknow\\Api\\Controllers\\Videos), Object(Illuminate\\Routing\\Route), Object(Illuminate\\Http\\Request), \'show\')\n#22 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Route.php(203): Illuminate\\Routing\\ControllerDispatcher->dispatch(Object(Illuminate\\Routing\\Route), Object(Illuminate\\Http\\Request), \'Qknow\\\\Api\\\\Contr...\', \'show\')\n#23 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Route.php(134): Illuminate\\Routing\\Route->runWithCustomDispatcher(Object(Illuminate\\Http\\Request))\n#24 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Router.php(708): Illuminate\\Routing\\Route->run(Object(Illuminate\\Http\\Request))\n#25 [internal function]: Illuminate\\Routing\\Router->Illuminate\\Routing\\{closure}(Object(Illuminate\\Http\\Request))\n#26 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php(139): call_user_func(Object(Closure), Object(Illuminate\\Http\\Request))\n#27 [internal function]: Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#28 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php(103): call_user_func(Object(Closure), Object(Illuminate\\Http\\Request))\n#29 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Router.php(710): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#30 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Router.php(675): Illuminate\\Routing\\Router->runRouteWithinStack(Object(Illuminate\\Routing\\Route), Object(Illuminate\\Http\\Request))\n#31 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Router.php(635): Illuminate\\Routing\\Router->dispatchToRoute(Object(Illuminate\\Http\\Request))\n#32 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Foundation\\Http\\Kernel.php(236): Illuminate\\Routing\\Router->dispatch(Object(Illuminate\\Http\\Request))\n#33 [internal function]: Illuminate\\Foundation\\Http\\Kernel->Illuminate\\Foundation\\Http\\{closure}(Object(Illuminate\\Http\\Request))\n#34 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php(139): call_user_func(Object(Closure), Object(Illuminate\\Http\\Request))\n#35 H:\\Project\\qknow.com\\src\\server\\plugins\\qknow\\api\\middleware\\CorsMiddleware.php(23): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#36 [internal function]: Qknow\\Api\\Middleware\\CorsMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#37 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php(124): call_user_func_array(Array, Array)\n#38 H:\\Project\\qknow.com\\src\\server\\plugins\\qknow\\api\\middleware\\BeforeAnyDbQueryMiddleware.php(22): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#39 [internal function]: Qknow\\Api\\Middleware\\BeforeAnyDbQueryMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#40 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php(124): call_user_func_array(Array, Array)\n#41 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\View\\Middleware\\ShareErrorsFromSession.php(49): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#42 [internal function]: Illuminate\\View\\Middleware\\ShareErrorsFromSession->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#43 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php(124): call_user_func_array(Array, Array)\n#44 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Session\\Middleware\\StartSession.php(62): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#45 [internal function]: Illuminate\\Session\\Middleware\\StartSession->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#46 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php(124): call_user_func_array(Array, Array)\n#47 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Cookie\\Middleware\\AddQueuedCookiesToResponse.php(37): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#48 [internal function]: Illuminate\\Cookie\\Middleware\\AddQueuedCookiesToResponse->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#49 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php(124): call_user_func_array(Array, Array)\n#50 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Cookie\\Middleware\\EncryptCookies.php(59): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#51 [internal function]: Illuminate\\Cookie\\Middleware\\EncryptCookies->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#52 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php(124): call_user_func_array(Array, Array)\n#53 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Foundation\\Http\\Middleware\\CheckForMaintenanceMode.php(44): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#54 [internal function]: Illuminate\\Foundation\\Http\\Middleware\\CheckForMaintenanceMode->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#55 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php(124): call_user_func_array(Array, Array)\n#56 [internal function]: Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#57 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php(103): call_user_func(Object(Closure), Object(Illuminate\\Http\\Request))\n#58 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Foundation\\Http\\Kernel.php(122): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#59 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Foundation\\Http\\Kernel.php(87): Illuminate\\Foundation\\Http\\Kernel->sendRequestThroughRouter(Object(Illuminate\\Http\\Request))\n#60 H:\\Project\\qknow.com\\src\\server\\index.php(44): Illuminate\\Foundation\\Http\\Kernel->handle(Object(Illuminate\\Http\\Request))\n#61 H:\\Project\\qknow.com\\src\\server\\server.php(18): require_once(\'H:\\\\Project\\\\qkno...\')\n#62 {main}\n\nNext exception \'Illuminate\\Database\\QueryException\' with message \'SQLSTATE[23000]: Integrity constraint violation: 1052 Column \'id\' in where clause is ambiguous (SQL: select `qknow_videos`.`id`, `qknow_chapters`.`title`, `URL` from `qknow_videos` inner join `qknow_chapters` on `qknow_videos`.`id` = `qknow_chapters`.`id` where `id` = 1 and `display` = 1)\' in H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Database\\Connection.php:662\nStack trace:\n#0 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Database\\Connection.php(618): Illuminate\\Database\\Connection->runQueryCallback(\'select `qknow_v...\', Array, Object(Closure))\n#1 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Database\\Connection.php(324): Illuminate\\Database\\Connection->run(\'select `qknow_v...\', Array, Object(Closure))\n#2 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Database\\Query\\Builder.php(1431): Illuminate\\Database\\Connection->select(\'select `qknow_v...\', Array, true)\n#3 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Database\\Query\\Builder.php(1408): Illuminate\\Database\\Query\\Builder->runSelect()\n#4 H:\\Project\\qknow.com\\src\\server\\plugins\\qknow\\api\\models\\Video.php(47): Illuminate\\Database\\Query\\Builder->get()\n#5 H:\\Project\\qknow.com\\src\\server\\plugins\\qknow\\api\\controllers\\Videos.php(20): Qknow\\Api\\Models\\Video::getVideoById(\'1\')\n#6 [internal function]: Qknow\\Api\\Controllers\\Videos->show(\'1\')\n#7 H:\\Project\\qknow.com\\src\\server\\plugins\\mohsin\\rest\\behaviors\\RestController.php(94): call_user_func_array(Array, Array)\n#8 [internal function]: Mohsin\\Rest\\Behaviors\\RestController->callAction(\'show\', Array)\n#9 H:\\Project\\qknow.com\\src\\server\\vendor\\october\\rain\\src\\Extension\\ExtendableTrait.php(366): call_user_func_array(Array, Array)\n#10 H:\\Project\\qknow.com\\src\\server\\vendor\\october\\rain\\src\\Extension\\Extendable.php(42): October\\Rain\\Extension\\Extendable->extendableCall(\'callAction\', Array)\n#11 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\ControllerDispatcher.php(164): October\\Rain\\Extension\\Extendable->__call(\'callAction\', Array)\n#12 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\ControllerDispatcher.php(164): Qknow\\Api\\Controllers\\Videos->callAction(\'show\', Array)\n#13 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\ControllerDispatcher.php(112): Illuminate\\Routing\\ControllerDispatcher->call(Object(Qknow\\Api\\Controllers\\Videos), Object(Illuminate\\Routing\\Route), \'show\')\n#14 [internal function]: Illuminate\\Routing\\ControllerDispatcher->Illuminate\\Routing\\{closure}(Object(Illuminate\\Http\\Request))\n#15 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php(139): call_user_func(Object(Closure), Object(Illuminate\\Http\\Request))\n#16 [internal function]: Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#17 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php(103): call_user_func(Object(Closure), Object(Illuminate\\Http\\Request))\n#18 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\ControllerDispatcher.php(114): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#19 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\ControllerDispatcher.php(69): Illuminate\\Routing\\ControllerDispatcher->callWithinStack(Object(Qknow\\Api\\Controllers\\Videos), Object(Illuminate\\Routing\\Route), Object(Illuminate\\Http\\Request), \'show\')\n#20 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Route.php(203): Illuminate\\Routing\\ControllerDispatcher->dispatch(Object(Illuminate\\Routing\\Route), Object(Illuminate\\Http\\Request), \'Qknow\\\\Api\\\\Contr...\', \'show\')\n#21 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Route.php(134): Illuminate\\Routing\\Route->runWithCustomDispatcher(Object(Illuminate\\Http\\Request))\n#22 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Router.php(708): Illuminate\\Routing\\Route->run(Object(Illuminate\\Http\\Request))\n#23 [internal function]: Illuminate\\Routing\\Router->Illuminate\\Routing\\{closure}(Object(Illuminate\\Http\\Request))\n#24 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php(139): call_user_func(Object(Closure), Object(Illuminate\\Http\\Request))\n#25 [internal function]: Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#26 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php(103): call_user_func(Object(Closure), Object(Illuminate\\Http\\Request))\n#27 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Router.php(710): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#28 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Router.php(675): Illuminate\\Routing\\Router->runRouteWithinStack(Object(Illuminate\\Routing\\Route), Object(Illuminate\\Http\\Request))\n#29 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Router.php(635): Illuminate\\Routing\\Router->dispatchToRoute(Object(Illuminate\\Http\\Request))\n#30 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Foundation\\Http\\Kernel.php(236): Illuminate\\Routing\\Router->dispatch(Object(Illuminate\\Http\\Request))\n#31 [internal function]: Illuminate\\Foundation\\Http\\Kernel->Illuminate\\Foundation\\Http\\{closure}(Object(Illuminate\\Http\\Request))\n#32 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php(139): call_user_func(Object(Closure), Object(Illuminate\\Http\\Request))\n#33 H:\\Project\\qknow.com\\src\\server\\plugins\\qknow\\api\\middleware\\CorsMiddleware.php(23): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#34 [internal function]: Qknow\\Api\\Middleware\\CorsMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#35 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php(124): call_user_func_array(Array, Array)\n#36 H:\\Project\\qknow.com\\src\\server\\plugins\\qknow\\api\\middleware\\BeforeAnyDbQueryMiddleware.php(22): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#37 [internal function]: Qknow\\Api\\Middleware\\BeforeAnyDbQueryMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#38 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php(124): call_user_func_array(Array, Array)\n#39 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\View\\Middleware\\ShareErrorsFromSession.php(49): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#40 [internal function]: Illuminate\\View\\Middleware\\ShareErrorsFromSession->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#41 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php(124): call_user_func_array(Array, Array)\n#42 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Session\\Middleware\\StartSession.php(62): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#43 [internal function]: Illuminate\\Session\\Middleware\\StartSession->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#44 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php(124): call_user_func_array(Array, Array)\n#45 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Cookie\\Middleware\\AddQueuedCookiesToResponse.php(37): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#46 [internal function]: Illuminate\\Cookie\\Middleware\\AddQueuedCookiesToResponse->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#47 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php(124): call_user_func_array(Array, Array)\n#48 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Cookie\\Middleware\\EncryptCookies.php(59): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#49 [internal function]: Illuminate\\Cookie\\Middleware\\EncryptCookies->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#50 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php(124): call_user_func_array(Array, Array)\n#51 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Foundation\\Http\\Middleware\\CheckForMaintenanceMode.php(44): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#52 [internal function]: Illuminate\\Foundation\\Http\\Middleware\\CheckForMaintenanceMode->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#53 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php(124): call_user_func_array(Array, Array)\n#54 [internal function]: Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#55 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php(103): call_user_func(Object(Closure), Object(Illuminate\\Http\\Request))\n#56 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Foundation\\Http\\Kernel.php(122): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#57 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Foundation\\Http\\Kernel.php(87): Illuminate\\Foundation\\Http\\Kernel->sendRequestThroughRouter(Object(Illuminate\\Http\\Request))\n#58 H:\\Project\\qknow.com\\src\\server\\index.php(44): Illuminate\\Foundation\\Http\\Kernel->handle(Object(Illuminate\\Http\\Request))\n#59 H:\\Project\\qknow.com\\src\\server\\server.php(18): require_once(\'H:\\\\Project\\\\qkno...\')\n#60 {main}', null, '2016-09-03 16:05:55', '2016-09-03 16:05:55');
INSERT INTO `system_event_logs` VALUES ('3', 'error', 'exception \'PDOException\' with message \'SQLSTATE[23000]: Integrity constraint violation: 1052 Column \'display\' in where clause is ambiguous\' in H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Database\\Connection.php:319\nStack trace:\n#0 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Database\\Connection.php(319): PDO->prepare(\'select `qknow_v...\')\n#1 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Database\\Connection.php(655): Illuminate\\Database\\Connection->Illuminate\\Database\\{closure}(Object(Illuminate\\Database\\MySqlConnection), \'select `qknow_v...\', Array)\n#2 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Database\\Connection.php(618): Illuminate\\Database\\Connection->runQueryCallback(\'select `qknow_v...\', Array, Object(Closure))\n#3 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Database\\Connection.php(324): Illuminate\\Database\\Connection->run(\'select `qknow_v...\', Array, Object(Closure))\n#4 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Database\\Query\\Builder.php(1431): Illuminate\\Database\\Connection->select(\'select `qknow_v...\', Array, true)\n#5 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Database\\Query\\Builder.php(1408): Illuminate\\Database\\Query\\Builder->runSelect()\n#6 H:\\Project\\qknow.com\\src\\server\\plugins\\qknow\\api\\models\\Video.php(47): Illuminate\\Database\\Query\\Builder->get()\n#7 H:\\Project\\qknow.com\\src\\server\\plugins\\qknow\\api\\controllers\\Videos.php(20): Qknow\\Api\\Models\\Video::getVideoById(\'1\')\n#8 [internal function]: Qknow\\Api\\Controllers\\Videos->show(\'1\')\n#9 H:\\Project\\qknow.com\\src\\server\\plugins\\mohsin\\rest\\behaviors\\RestController.php(94): call_user_func_array(Array, Array)\n#10 [internal function]: Mohsin\\Rest\\Behaviors\\RestController->callAction(\'show\', Array)\n#11 H:\\Project\\qknow.com\\src\\server\\vendor\\october\\rain\\src\\Extension\\ExtendableTrait.php(366): call_user_func_array(Array, Array)\n#12 H:\\Project\\qknow.com\\src\\server\\vendor\\october\\rain\\src\\Extension\\Extendable.php(42): October\\Rain\\Extension\\Extendable->extendableCall(\'callAction\', Array)\n#13 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\ControllerDispatcher.php(164): October\\Rain\\Extension\\Extendable->__call(\'callAction\', Array)\n#14 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\ControllerDispatcher.php(164): Qknow\\Api\\Controllers\\Videos->callAction(\'show\', Array)\n#15 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\ControllerDispatcher.php(112): Illuminate\\Routing\\ControllerDispatcher->call(Object(Qknow\\Api\\Controllers\\Videos), Object(Illuminate\\Routing\\Route), \'show\')\n#16 [internal function]: Illuminate\\Routing\\ControllerDispatcher->Illuminate\\Routing\\{closure}(Object(Illuminate\\Http\\Request))\n#17 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php(139): call_user_func(Object(Closure), Object(Illuminate\\Http\\Request))\n#18 [internal function]: Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#19 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php(103): call_user_func(Object(Closure), Object(Illuminate\\Http\\Request))\n#20 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\ControllerDispatcher.php(114): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#21 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\ControllerDispatcher.php(69): Illuminate\\Routing\\ControllerDispatcher->callWithinStack(Object(Qknow\\Api\\Controllers\\Videos), Object(Illuminate\\Routing\\Route), Object(Illuminate\\Http\\Request), \'show\')\n#22 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Route.php(203): Illuminate\\Routing\\ControllerDispatcher->dispatch(Object(Illuminate\\Routing\\Route), Object(Illuminate\\Http\\Request), \'Qknow\\\\Api\\\\Contr...\', \'show\')\n#23 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Route.php(134): Illuminate\\Routing\\Route->runWithCustomDispatcher(Object(Illuminate\\Http\\Request))\n#24 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Router.php(708): Illuminate\\Routing\\Route->run(Object(Illuminate\\Http\\Request))\n#25 [internal function]: Illuminate\\Routing\\Router->Illuminate\\Routing\\{closure}(Object(Illuminate\\Http\\Request))\n#26 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php(139): call_user_func(Object(Closure), Object(Illuminate\\Http\\Request))\n#27 [internal function]: Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#28 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php(103): call_user_func(Object(Closure), Object(Illuminate\\Http\\Request))\n#29 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Router.php(710): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#30 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Router.php(675): Illuminate\\Routing\\Router->runRouteWithinStack(Object(Illuminate\\Routing\\Route), Object(Illuminate\\Http\\Request))\n#31 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Router.php(635): Illuminate\\Routing\\Router->dispatchToRoute(Object(Illuminate\\Http\\Request))\n#32 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Foundation\\Http\\Kernel.php(236): Illuminate\\Routing\\Router->dispatch(Object(Illuminate\\Http\\Request))\n#33 [internal function]: Illuminate\\Foundation\\Http\\Kernel->Illuminate\\Foundation\\Http\\{closure}(Object(Illuminate\\Http\\Request))\n#34 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php(139): call_user_func(Object(Closure), Object(Illuminate\\Http\\Request))\n#35 H:\\Project\\qknow.com\\src\\server\\plugins\\qknow\\api\\middleware\\CorsMiddleware.php(23): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#36 [internal function]: Qknow\\Api\\Middleware\\CorsMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#37 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php(124): call_user_func_array(Array, Array)\n#38 H:\\Project\\qknow.com\\src\\server\\plugins\\qknow\\api\\middleware\\BeforeAnyDbQueryMiddleware.php(22): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#39 [internal function]: Qknow\\Api\\Middleware\\BeforeAnyDbQueryMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#40 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php(124): call_user_func_array(Array, Array)\n#41 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\View\\Middleware\\ShareErrorsFromSession.php(49): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#42 [internal function]: Illuminate\\View\\Middleware\\ShareErrorsFromSession->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#43 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php(124): call_user_func_array(Array, Array)\n#44 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Session\\Middleware\\StartSession.php(62): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#45 [internal function]: Illuminate\\Session\\Middleware\\StartSession->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#46 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php(124): call_user_func_array(Array, Array)\n#47 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Cookie\\Middleware\\AddQueuedCookiesToResponse.php(37): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#48 [internal function]: Illuminate\\Cookie\\Middleware\\AddQueuedCookiesToResponse->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#49 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php(124): call_user_func_array(Array, Array)\n#50 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Cookie\\Middleware\\EncryptCookies.php(59): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#51 [internal function]: Illuminate\\Cookie\\Middleware\\EncryptCookies->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#52 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php(124): call_user_func_array(Array, Array)\n#53 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Foundation\\Http\\Middleware\\CheckForMaintenanceMode.php(44): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#54 [internal function]: Illuminate\\Foundation\\Http\\Middleware\\CheckForMaintenanceMode->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#55 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php(124): call_user_func_array(Array, Array)\n#56 [internal function]: Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#57 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php(103): call_user_func(Object(Closure), Object(Illuminate\\Http\\Request))\n#58 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Foundation\\Http\\Kernel.php(122): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#59 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Foundation\\Http\\Kernel.php(87): Illuminate\\Foundation\\Http\\Kernel->sendRequestThroughRouter(Object(Illuminate\\Http\\Request))\n#60 H:\\Project\\qknow.com\\src\\server\\index.php(44): Illuminate\\Foundation\\Http\\Kernel->handle(Object(Illuminate\\Http\\Request))\n#61 H:\\Project\\qknow.com\\src\\server\\server.php(18): require_once(\'H:\\\\Project\\\\qkno...\')\n#62 {main}\n\nNext exception \'Illuminate\\Database\\QueryException\' with message \'SQLSTATE[23000]: Integrity constraint violation: 1052 Column \'display\' in where clause is ambiguous (SQL: select `qknow_videos`.`id`, `qknow_chapters`.`title`, `URL` from `qknow_videos` inner join `qknow_chapters` on `qknow_videos`.`id` = `qknow_chapters`.`id` where `qknow_chapters`.`id` = 1 and `display` = 1)\' in H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Database\\Connection.php:662\nStack trace:\n#0 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Database\\Connection.php(618): Illuminate\\Database\\Connection->runQueryCallback(\'select `qknow_v...\', Array, Object(Closure))\n#1 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Database\\Connection.php(324): Illuminate\\Database\\Connection->run(\'select `qknow_v...\', Array, Object(Closure))\n#2 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Database\\Query\\Builder.php(1431): Illuminate\\Database\\Connection->select(\'select `qknow_v...\', Array, true)\n#3 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Database\\Query\\Builder.php(1408): Illuminate\\Database\\Query\\Builder->runSelect()\n#4 H:\\Project\\qknow.com\\src\\server\\plugins\\qknow\\api\\models\\Video.php(47): Illuminate\\Database\\Query\\Builder->get()\n#5 H:\\Project\\qknow.com\\src\\server\\plugins\\qknow\\api\\controllers\\Videos.php(20): Qknow\\Api\\Models\\Video::getVideoById(\'1\')\n#6 [internal function]: Qknow\\Api\\Controllers\\Videos->show(\'1\')\n#7 H:\\Project\\qknow.com\\src\\server\\plugins\\mohsin\\rest\\behaviors\\RestController.php(94): call_user_func_array(Array, Array)\n#8 [internal function]: Mohsin\\Rest\\Behaviors\\RestController->callAction(\'show\', Array)\n#9 H:\\Project\\qknow.com\\src\\server\\vendor\\october\\rain\\src\\Extension\\ExtendableTrait.php(366): call_user_func_array(Array, Array)\n#10 H:\\Project\\qknow.com\\src\\server\\vendor\\october\\rain\\src\\Extension\\Extendable.php(42): October\\Rain\\Extension\\Extendable->extendableCall(\'callAction\', Array)\n#11 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\ControllerDispatcher.php(164): October\\Rain\\Extension\\Extendable->__call(\'callAction\', Array)\n#12 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\ControllerDispatcher.php(164): Qknow\\Api\\Controllers\\Videos->callAction(\'show\', Array)\n#13 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\ControllerDispatcher.php(112): Illuminate\\Routing\\ControllerDispatcher->call(Object(Qknow\\Api\\Controllers\\Videos), Object(Illuminate\\Routing\\Route), \'show\')\n#14 [internal function]: Illuminate\\Routing\\ControllerDispatcher->Illuminate\\Routing\\{closure}(Object(Illuminate\\Http\\Request))\n#15 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php(139): call_user_func(Object(Closure), Object(Illuminate\\Http\\Request))\n#16 [internal function]: Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#17 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php(103): call_user_func(Object(Closure), Object(Illuminate\\Http\\Request))\n#18 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\ControllerDispatcher.php(114): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#19 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\ControllerDispatcher.php(69): Illuminate\\Routing\\ControllerDispatcher->callWithinStack(Object(Qknow\\Api\\Controllers\\Videos), Object(Illuminate\\Routing\\Route), Object(Illuminate\\Http\\Request), \'show\')\n#20 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Route.php(203): Illuminate\\Routing\\ControllerDispatcher->dispatch(Object(Illuminate\\Routing\\Route), Object(Illuminate\\Http\\Request), \'Qknow\\\\Api\\\\Contr...\', \'show\')\n#21 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Route.php(134): Illuminate\\Routing\\Route->runWithCustomDispatcher(Object(Illuminate\\Http\\Request))\n#22 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Router.php(708): Illuminate\\Routing\\Route->run(Object(Illuminate\\Http\\Request))\n#23 [internal function]: Illuminate\\Routing\\Router->Illuminate\\Routing\\{closure}(Object(Illuminate\\Http\\Request))\n#24 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php(139): call_user_func(Object(Closure), Object(Illuminate\\Http\\Request))\n#25 [internal function]: Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#26 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php(103): call_user_func(Object(Closure), Object(Illuminate\\Http\\Request))\n#27 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Router.php(710): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#28 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Router.php(675): Illuminate\\Routing\\Router->runRouteWithinStack(Object(Illuminate\\Routing\\Route), Object(Illuminate\\Http\\Request))\n#29 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Router.php(635): Illuminate\\Routing\\Router->dispatchToRoute(Object(Illuminate\\Http\\Request))\n#30 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Foundation\\Http\\Kernel.php(236): Illuminate\\Routing\\Router->dispatch(Object(Illuminate\\Http\\Request))\n#31 [internal function]: Illuminate\\Foundation\\Http\\Kernel->Illuminate\\Foundation\\Http\\{closure}(Object(Illuminate\\Http\\Request))\n#32 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php(139): call_user_func(Object(Closure), Object(Illuminate\\Http\\Request))\n#33 H:\\Project\\qknow.com\\src\\server\\plugins\\qknow\\api\\middleware\\CorsMiddleware.php(23): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#34 [internal function]: Qknow\\Api\\Middleware\\CorsMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#35 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php(124): call_user_func_array(Array, Array)\n#36 H:\\Project\\qknow.com\\src\\server\\plugins\\qknow\\api\\middleware\\BeforeAnyDbQueryMiddleware.php(22): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#37 [internal function]: Qknow\\Api\\Middleware\\BeforeAnyDbQueryMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#38 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php(124): call_user_func_array(Array, Array)\n#39 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\View\\Middleware\\ShareErrorsFromSession.php(49): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#40 [internal function]: Illuminate\\View\\Middleware\\ShareErrorsFromSession->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#41 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php(124): call_user_func_array(Array, Array)\n#42 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Session\\Middleware\\StartSession.php(62): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#43 [internal function]: Illuminate\\Session\\Middleware\\StartSession->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#44 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php(124): call_user_func_array(Array, Array)\n#45 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Cookie\\Middleware\\AddQueuedCookiesToResponse.php(37): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#46 [internal function]: Illuminate\\Cookie\\Middleware\\AddQueuedCookiesToResponse->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#47 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php(124): call_user_func_array(Array, Array)\n#48 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Cookie\\Middleware\\EncryptCookies.php(59): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#49 [internal function]: Illuminate\\Cookie\\Middleware\\EncryptCookies->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#50 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php(124): call_user_func_array(Array, Array)\n#51 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Foundation\\Http\\Middleware\\CheckForMaintenanceMode.php(44): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#52 [internal function]: Illuminate\\Foundation\\Http\\Middleware\\CheckForMaintenanceMode->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#53 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php(124): call_user_func_array(Array, Array)\n#54 [internal function]: Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#55 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php(103): call_user_func(Object(Closure), Object(Illuminate\\Http\\Request))\n#56 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Foundation\\Http\\Kernel.php(122): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#57 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Foundation\\Http\\Kernel.php(87): Illuminate\\Foundation\\Http\\Kernel->sendRequestThroughRouter(Object(Illuminate\\Http\\Request))\n#58 H:\\Project\\qknow.com\\src\\server\\index.php(44): Illuminate\\Foundation\\Http\\Kernel->handle(Object(Illuminate\\Http\\Request))\n#59 H:\\Project\\qknow.com\\src\\server\\server.php(18): require_once(\'H:\\\\Project\\\\qkno...\')\n#60 {main}', null, '2016-09-03 16:06:19', '2016-09-03 16:06:19');
INSERT INTO `system_event_logs` VALUES ('4', 'error', 'exception \'PDOException\' with message \'SQLSTATE[42S22]: Column not found: 1054 Unknown column \'qknow_videos.sub_title\' in \'field list\'\' in H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Database\\Connection.php:319\nStack trace:\n#0 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Database\\Connection.php(319): PDO->prepare(\'select `qknow_v...\')\n#1 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Database\\Connection.php(655): Illuminate\\Database\\Connection->Illuminate\\Database\\{closure}(Object(Illuminate\\Database\\MySqlConnection), \'select `qknow_v...\', Array)\n#2 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Database\\Connection.php(618): Illuminate\\Database\\Connection->runQueryCallback(\'select `qknow_v...\', Array, Object(Closure))\n#3 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Database\\Connection.php(324): Illuminate\\Database\\Connection->run(\'select `qknow_v...\', Array, Object(Closure))\n#4 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Database\\Query\\Builder.php(1431): Illuminate\\Database\\Connection->select(\'select `qknow_v...\', Array, true)\n#5 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Database\\Query\\Builder.php(1408): Illuminate\\Database\\Query\\Builder->runSelect()\n#6 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Database\\Query\\Builder.php(1391): Illuminate\\Database\\Query\\Builder->get(Array)\n#7 H:\\Project\\qknow.com\\src\\server\\plugins\\qknow\\api\\models\\Video.php(46): Illuminate\\Database\\Query\\Builder->first()\n#8 H:\\Project\\qknow.com\\src\\server\\plugins\\qknow\\api\\controllers\\Videos.php(20): Qknow\\Api\\Models\\Video::getVideoById(\'3\')\n#9 [internal function]: Qknow\\Api\\Controllers\\Videos->show(\'3\')\n#10 H:\\Project\\qknow.com\\src\\server\\plugins\\mohsin\\rest\\behaviors\\RestController.php(94): call_user_func_array(Array, Array)\n#11 [internal function]: Mohsin\\Rest\\Behaviors\\RestController->callAction(\'show\', Array)\n#12 H:\\Project\\qknow.com\\src\\server\\vendor\\october\\rain\\src\\Extension\\ExtendableTrait.php(366): call_user_func_array(Array, Array)\n#13 H:\\Project\\qknow.com\\src\\server\\vendor\\october\\rain\\src\\Extension\\Extendable.php(42): October\\Rain\\Extension\\Extendable->extendableCall(\'callAction\', Array)\n#14 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\ControllerDispatcher.php(164): October\\Rain\\Extension\\Extendable->__call(\'callAction\', Array)\n#15 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\ControllerDispatcher.php(164): Qknow\\Api\\Controllers\\Videos->callAction(\'show\', Array)\n#16 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\ControllerDispatcher.php(112): Illuminate\\Routing\\ControllerDispatcher->call(Object(Qknow\\Api\\Controllers\\Videos), Object(Illuminate\\Routing\\Route), \'show\')\n#17 [internal function]: Illuminate\\Routing\\ControllerDispatcher->Illuminate\\Routing\\{closure}(Object(Illuminate\\Http\\Request))\n#18 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php(139): call_user_func(Object(Closure), Object(Illuminate\\Http\\Request))\n#19 [internal function]: Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#20 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php(103): call_user_func(Object(Closure), Object(Illuminate\\Http\\Request))\n#21 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\ControllerDispatcher.php(114): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#22 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\ControllerDispatcher.php(69): Illuminate\\Routing\\ControllerDispatcher->callWithinStack(Object(Qknow\\Api\\Controllers\\Videos), Object(Illuminate\\Routing\\Route), Object(Illuminate\\Http\\Request), \'show\')\n#23 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Route.php(203): Illuminate\\Routing\\ControllerDispatcher->dispatch(Object(Illuminate\\Routing\\Route), Object(Illuminate\\Http\\Request), \'Qknow\\\\Api\\\\Contr...\', \'show\')\n#24 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Route.php(134): Illuminate\\Routing\\Route->runWithCustomDispatcher(Object(Illuminate\\Http\\Request))\n#25 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Router.php(708): Illuminate\\Routing\\Route->run(Object(Illuminate\\Http\\Request))\n#26 [internal function]: Illuminate\\Routing\\Router->Illuminate\\Routing\\{closure}(Object(Illuminate\\Http\\Request))\n#27 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php(139): call_user_func(Object(Closure), Object(Illuminate\\Http\\Request))\n#28 [internal function]: Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#29 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php(103): call_user_func(Object(Closure), Object(Illuminate\\Http\\Request))\n#30 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Router.php(710): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#31 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Router.php(675): Illuminate\\Routing\\Router->runRouteWithinStack(Object(Illuminate\\Routing\\Route), Object(Illuminate\\Http\\Request))\n#32 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Router.php(635): Illuminate\\Routing\\Router->dispatchToRoute(Object(Illuminate\\Http\\Request))\n#33 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Foundation\\Http\\Kernel.php(236): Illuminate\\Routing\\Router->dispatch(Object(Illuminate\\Http\\Request))\n#34 [internal function]: Illuminate\\Foundation\\Http\\Kernel->Illuminate\\Foundation\\Http\\{closure}(Object(Illuminate\\Http\\Request))\n#35 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php(139): call_user_func(Object(Closure), Object(Illuminate\\Http\\Request))\n#36 H:\\Project\\qknow.com\\src\\server\\plugins\\qknow\\api\\middleware\\CorsMiddleware.php(23): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#37 [internal function]: Qknow\\Api\\Middleware\\CorsMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#38 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php(124): call_user_func_array(Array, Array)\n#39 H:\\Project\\qknow.com\\src\\server\\plugins\\qknow\\api\\middleware\\BeforeAnyDbQueryMiddleware.php(22): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#40 [internal function]: Qknow\\Api\\Middleware\\BeforeAnyDbQueryMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#41 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php(124): call_user_func_array(Array, Array)\n#42 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\View\\Middleware\\ShareErrorsFromSession.php(49): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#43 [internal function]: Illuminate\\View\\Middleware\\ShareErrorsFromSession->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#44 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php(124): call_user_func_array(Array, Array)\n#45 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Session\\Middleware\\StartSession.php(62): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#46 [internal function]: Illuminate\\Session\\Middleware\\StartSession->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#47 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php(124): call_user_func_array(Array, Array)\n#48 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Cookie\\Middleware\\AddQueuedCookiesToResponse.php(37): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#49 [internal function]: Illuminate\\Cookie\\Middleware\\AddQueuedCookiesToResponse->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#50 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php(124): call_user_func_array(Array, Array)\n#51 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Cookie\\Middleware\\EncryptCookies.php(59): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#52 [internal function]: Illuminate\\Cookie\\Middleware\\EncryptCookies->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#53 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php(124): call_user_func_array(Array, Array)\n#54 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Foundation\\Http\\Middleware\\CheckForMaintenanceMode.php(44): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#55 [internal function]: Illuminate\\Foundation\\Http\\Middleware\\CheckForMaintenanceMode->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#56 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php(124): call_user_func_array(Array, Array)\n#57 [internal function]: Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#58 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php(103): call_user_func(Object(Closure), Object(Illuminate\\Http\\Request))\n#59 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Foundation\\Http\\Kernel.php(122): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#60 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Foundation\\Http\\Kernel.php(87): Illuminate\\Foundation\\Http\\Kernel->sendRequestThroughRouter(Object(Illuminate\\Http\\Request))\n#61 H:\\Project\\qknow.com\\src\\server\\index.php(44): Illuminate\\Foundation\\Http\\Kernel->handle(Object(Illuminate\\Http\\Request))\n#62 H:\\Project\\qknow.com\\src\\server\\server.php(18): require_once(\'H:\\\\Project\\\\qkno...\')\n#63 {main}\n\nNext exception \'Illuminate\\Database\\QueryException\' with message \'SQLSTATE[42S22]: Column not found: 1054 Unknown column \'qknow_videos.sub_title\' in \'field list\' (SQL: select `qknow_videos`.`id`, `qknow_chapters`.`title`, `qknow_videos`.`URL`, `qknow_videos`.`sub_title` from `qknow_chapters` inner join `qknow_videos` on `qknow_videos`.`id` = `qknow_chapters`.`video_id` where `qknow_chapters`.`id` = 3 limit 1)\' in H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Database\\Connection.php:662\nStack trace:\n#0 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Database\\Connection.php(618): Illuminate\\Database\\Connection->runQueryCallback(\'select `qknow_v...\', Array, Object(Closure))\n#1 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Database\\Connection.php(324): Illuminate\\Database\\Connection->run(\'select `qknow_v...\', Array, Object(Closure))\n#2 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Database\\Query\\Builder.php(1431): Illuminate\\Database\\Connection->select(\'select `qknow_v...\', Array, true)\n#3 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Database\\Query\\Builder.php(1408): Illuminate\\Database\\Query\\Builder->runSelect()\n#4 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Database\\Query\\Builder.php(1391): Illuminate\\Database\\Query\\Builder->get(Array)\n#5 H:\\Project\\qknow.com\\src\\server\\plugins\\qknow\\api\\models\\Video.php(46): Illuminate\\Database\\Query\\Builder->first()\n#6 H:\\Project\\qknow.com\\src\\server\\plugins\\qknow\\api\\controllers\\Videos.php(20): Qknow\\Api\\Models\\Video::getVideoById(\'3\')\n#7 [internal function]: Qknow\\Api\\Controllers\\Videos->show(\'3\')\n#8 H:\\Project\\qknow.com\\src\\server\\plugins\\mohsin\\rest\\behaviors\\RestController.php(94): call_user_func_array(Array, Array)\n#9 [internal function]: Mohsin\\Rest\\Behaviors\\RestController->callAction(\'show\', Array)\n#10 H:\\Project\\qknow.com\\src\\server\\vendor\\october\\rain\\src\\Extension\\ExtendableTrait.php(366): call_user_func_array(Array, Array)\n#11 H:\\Project\\qknow.com\\src\\server\\vendor\\october\\rain\\src\\Extension\\Extendable.php(42): October\\Rain\\Extension\\Extendable->extendableCall(\'callAction\', Array)\n#12 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\ControllerDispatcher.php(164): October\\Rain\\Extension\\Extendable->__call(\'callAction\', Array)\n#13 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\ControllerDispatcher.php(164): Qknow\\Api\\Controllers\\Videos->callAction(\'show\', Array)\n#14 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\ControllerDispatcher.php(112): Illuminate\\Routing\\ControllerDispatcher->call(Object(Qknow\\Api\\Controllers\\Videos), Object(Illuminate\\Routing\\Route), \'show\')\n#15 [internal function]: Illuminate\\Routing\\ControllerDispatcher->Illuminate\\Routing\\{closure}(Object(Illuminate\\Http\\Request))\n#16 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php(139): call_user_func(Object(Closure), Object(Illuminate\\Http\\Request))\n#17 [internal function]: Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#18 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php(103): call_user_func(Object(Closure), Object(Illuminate\\Http\\Request))\n#19 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\ControllerDispatcher.php(114): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#20 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\ControllerDispatcher.php(69): Illuminate\\Routing\\ControllerDispatcher->callWithinStack(Object(Qknow\\Api\\Controllers\\Videos), Object(Illuminate\\Routing\\Route), Object(Illuminate\\Http\\Request), \'show\')\n#21 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Route.php(203): Illuminate\\Routing\\ControllerDispatcher->dispatch(Object(Illuminate\\Routing\\Route), Object(Illuminate\\Http\\Request), \'Qknow\\\\Api\\\\Contr...\', \'show\')\n#22 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Route.php(134): Illuminate\\Routing\\Route->runWithCustomDispatcher(Object(Illuminate\\Http\\Request))\n#23 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Router.php(708): Illuminate\\Routing\\Route->run(Object(Illuminate\\Http\\Request))\n#24 [internal function]: Illuminate\\Routing\\Router->Illuminate\\Routing\\{closure}(Object(Illuminate\\Http\\Request))\n#25 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php(139): call_user_func(Object(Closure), Object(Illuminate\\Http\\Request))\n#26 [internal function]: Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#27 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php(103): call_user_func(Object(Closure), Object(Illuminate\\Http\\Request))\n#28 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Router.php(710): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#29 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Router.php(675): Illuminate\\Routing\\Router->runRouteWithinStack(Object(Illuminate\\Routing\\Route), Object(Illuminate\\Http\\Request))\n#30 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Router.php(635): Illuminate\\Routing\\Router->dispatchToRoute(Object(Illuminate\\Http\\Request))\n#31 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Foundation\\Http\\Kernel.php(236): Illuminate\\Routing\\Router->dispatch(Object(Illuminate\\Http\\Request))\n#32 [internal function]: Illuminate\\Foundation\\Http\\Kernel->Illuminate\\Foundation\\Http\\{closure}(Object(Illuminate\\Http\\Request))\n#33 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php(139): call_user_func(Object(Closure), Object(Illuminate\\Http\\Request))\n#34 H:\\Project\\qknow.com\\src\\server\\plugins\\qknow\\api\\middleware\\CorsMiddleware.php(23): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#35 [internal function]: Qknow\\Api\\Middleware\\CorsMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#36 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php(124): call_user_func_array(Array, Array)\n#37 H:\\Project\\qknow.com\\src\\server\\plugins\\qknow\\api\\middleware\\BeforeAnyDbQueryMiddleware.php(22): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#38 [internal function]: Qknow\\Api\\Middleware\\BeforeAnyDbQueryMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#39 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php(124): call_user_func_array(Array, Array)\n#40 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\View\\Middleware\\ShareErrorsFromSession.php(49): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#41 [internal function]: Illuminate\\View\\Middleware\\ShareErrorsFromSession->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#42 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php(124): call_user_func_array(Array, Array)\n#43 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Session\\Middleware\\StartSession.php(62): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#44 [internal function]: Illuminate\\Session\\Middleware\\StartSession->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#45 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php(124): call_user_func_array(Array, Array)\n#46 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Cookie\\Middleware\\AddQueuedCookiesToResponse.php(37): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#47 [internal function]: Illuminate\\Cookie\\Middleware\\AddQueuedCookiesToResponse->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#48 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php(124): call_user_func_array(Array, Array)\n#49 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Cookie\\Middleware\\EncryptCookies.php(59): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#50 [internal function]: Illuminate\\Cookie\\Middleware\\EncryptCookies->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#51 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php(124): call_user_func_array(Array, Array)\n#52 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Foundation\\Http\\Middleware\\CheckForMaintenanceMode.php(44): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#53 [internal function]: Illuminate\\Foundation\\Http\\Middleware\\CheckForMaintenanceMode->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#54 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php(124): call_user_func_array(Array, Array)\n#55 [internal function]: Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#56 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php(103): call_user_func(Object(Closure), Object(Illuminate\\Http\\Request))\n#57 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Foundation\\Http\\Kernel.php(122): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#58 H:\\Project\\qknow.com\\src\\server\\vendor\\laravel\\framework\\src\\Illuminate\\Foundation\\Http\\Kernel.php(87): Illuminate\\Foundation\\Http\\Kernel->sendRequestThroughRouter(Object(Illuminate\\Http\\Request))\n#59 H:\\Project\\qknow.com\\src\\server\\index.php(44): Illuminate\\Foundation\\Http\\Kernel->handle(Object(Illuminate\\Http\\Request))\n#60 H:\\Project\\qknow.com\\src\\server\\server.php(18): require_once(\'H:\\\\Project\\\\qkno...\')\n#61 {main}', null, '2016-09-03 17:29:53', '2016-09-03 17:29:53');

-- ----------------------------
-- Table structure for system_files
-- ----------------------------
DROP TABLE IF EXISTS `system_files`;
CREATE TABLE `system_files` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `disk_name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `file_name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `file_size` int(11) NOT NULL,
  `content_type` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `title` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `description` text COLLATE utf8_unicode_ci,
  `field` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `attachment_id` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `attachment_type` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `is_public` tinyint(1) NOT NULL DEFAULT '1',
  `sort_order` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `system_files_field_index` (`field`),
  KEY `system_files_attachment_id_index` (`attachment_id`),
  KEY `system_files_attachment_type_index` (`attachment_type`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of system_files
-- ----------------------------

-- ----------------------------
-- Table structure for system_mail_layouts
-- ----------------------------
DROP TABLE IF EXISTS `system_mail_layouts`;
CREATE TABLE `system_mail_layouts` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `code` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `content_html` text COLLATE utf8_unicode_ci,
  `content_text` text COLLATE utf8_unicode_ci,
  `content_css` text COLLATE utf8_unicode_ci,
  `is_locked` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of system_mail_layouts
-- ----------------------------
INSERT INTO `system_mail_layouts` VALUES ('1', 'Default', 'default', '<html>\n    <head>\n        <style type=\"text/css\" media=\"screen\">\n            {{ css|raw }}\n        </style>\n    </head>\n    <body>\n        {{ content|raw }}\n    </body>\n</html>', '{{ content|raw }}', 'a, a:hover {\n    text-decoration: none;\n    color: #0862A2;\n    font-weight: bold;\n}\n\ntd, tr, th, table {\n    padding: 0px;\n    margin: 0px;\n}\n\np {\n    margin: 10px 0;\n}', '1', '2016-09-03 15:58:09', '2016-09-03 15:58:09');
INSERT INTO `system_mail_layouts` VALUES ('2', 'System', 'system', '<html>\n    <head>\n        <style type=\"text/css\" media=\"screen\">\n            {{ css|raw }}\n        </style>\n    </head>\n    <body>\n        {{ content|raw }}\n        <hr />\n        <p>This is an automatic message. Please do not reply to it.</p>\n    </body>\n</html>', '{{ content|raw }}\n\n\n---\nThis is an automatic message. Please do not reply to it.', 'a, a:hover {\n    text-decoration: none;\n    color: #0862A2;\n    font-weight: bold;\n}\n\ntd, tr, th, table {\n    padding: 0px;\n    margin: 0px;\n}\n\np {\n    margin: 10px 0;\n}', '1', '2016-09-03 15:58:10', '2016-09-03 15:58:10');

-- ----------------------------
-- Table structure for system_mail_templates
-- ----------------------------
DROP TABLE IF EXISTS `system_mail_templates`;
CREATE TABLE `system_mail_templates` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `code` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `subject` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `description` text COLLATE utf8_unicode_ci,
  `content_html` text COLLATE utf8_unicode_ci,
  `content_text` text COLLATE utf8_unicode_ci,
  `layout_id` int(11) DEFAULT NULL,
  `is_custom` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `system_mail_templates_layout_id_index` (`layout_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of system_mail_templates
-- ----------------------------

-- ----------------------------
-- Table structure for system_parameters
-- ----------------------------
DROP TABLE IF EXISTS `system_parameters`;
CREATE TABLE `system_parameters` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `namespace` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `group` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `item` varchar(150) COLLATE utf8_unicode_ci NOT NULL,
  `value` text COLLATE utf8_unicode_ci,
  PRIMARY KEY (`id`),
  KEY `item_index` (`namespace`,`group`,`item`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of system_parameters
-- ----------------------------
INSERT INTO `system_parameters` VALUES ('1', 'system', 'update', 'count', '0');

-- ----------------------------
-- Table structure for system_plugin_history
-- ----------------------------
DROP TABLE IF EXISTS `system_plugin_history`;
CREATE TABLE `system_plugin_history` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `code` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `type` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `version` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `detail` text COLLATE utf8_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `system_plugin_history_code_index` (`code`),
  KEY `system_plugin_history_type_index` (`type`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of system_plugin_history
-- ----------------------------
INSERT INTO `system_plugin_history` VALUES ('1', 'Mohsin.Rest', 'comment', '1.0.1', 'First version of RESTful', '2016-09-03 15:58:07');
INSERT INTO `system_plugin_history` VALUES ('2', 'October.Demo', 'comment', '1.0.1', 'First version of Demo', '2016-09-03 15:58:07');
INSERT INTO `system_plugin_history` VALUES ('3', 'Qknow.Api', 'script', '1.0.2', 'create_videos_table.php', '2016-09-03 15:58:07');
INSERT INTO `system_plugin_history` VALUES ('4', 'Qknow.Api', 'script', '1.0.2', 'create_lecturers_table.php', '2016-09-03 15:58:08');
INSERT INTO `system_plugin_history` VALUES ('5', 'Qknow.Api', 'script', '1.0.2', 'create_properties_table.php', '2016-09-03 15:58:08');
INSERT INTO `system_plugin_history` VALUES ('6', 'Qknow.Api', 'script', '1.0.2', 'create_property_details_table.php', '2016-09-03 15:58:08');
INSERT INTO `system_plugin_history` VALUES ('7', 'Qknow.Api', 'script', '1.0.2', 'create_courses_table.php', '2016-09-03 15:58:08');
INSERT INTO `system_plugin_history` VALUES ('8', 'Qknow.Api', 'script', '1.0.2', 'create_chapters_table.php', '2016-09-03 15:58:08');
INSERT INTO `system_plugin_history` VALUES ('9', 'Qknow.Api', 'script', '1.0.2', 'create_course_types_table.php', '2016-09-03 15:58:09');
INSERT INTO `system_plugin_history` VALUES ('10', 'Qknow.Api', 'script', '1.0.2', 'create_statistics_table.php', '2016-09-03 15:58:09');
INSERT INTO `system_plugin_history` VALUES ('11', 'Qknow.Api', 'script', '1.0.2', 'seed_all_tables.php', '2016-09-03 15:58:09');
INSERT INTO `system_plugin_history` VALUES ('12', 'Qknow.Api', 'comment', '1.0.2', 'First version of qknow.api', '2016-09-03 15:58:09');

-- ----------------------------
-- Table structure for system_plugin_versions
-- ----------------------------
DROP TABLE IF EXISTS `system_plugin_versions`;
CREATE TABLE `system_plugin_versions` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `code` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `version` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `is_disabled` tinyint(1) NOT NULL DEFAULT '0',
  `is_frozen` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `system_plugin_versions_code_index` (`code`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of system_plugin_versions
-- ----------------------------
INSERT INTO `system_plugin_versions` VALUES ('1', 'Mohsin.Rest', '1.0.1', '2016-09-03 15:58:07', '0', '0');
INSERT INTO `system_plugin_versions` VALUES ('2', 'October.Demo', '1.0.1', '2016-09-03 15:58:07', '0', '0');
INSERT INTO `system_plugin_versions` VALUES ('3', 'Qknow.Api', '1.0.2', '2016-09-03 15:58:09', '0', '0');

-- ----------------------------
-- Table structure for system_request_logs
-- ----------------------------
DROP TABLE IF EXISTS `system_request_logs`;
CREATE TABLE `system_request_logs` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `status_code` int(11) DEFAULT NULL,
  `url` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `referer` text COLLATE utf8_unicode_ci,
  `count` int(11) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of system_request_logs
-- ----------------------------
INSERT INTO `system_request_logs` VALUES ('1', '404', 'http://localhost:8000/api/v1/video/1', null, '1', '2016-09-03 16:03:46', '2016-09-03 16:03:46');

-- ----------------------------
-- Table structure for system_revisions
-- ----------------------------
DROP TABLE IF EXISTS `system_revisions`;
CREATE TABLE `system_revisions` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(10) unsigned DEFAULT NULL,
  `field` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `cast` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `old_value` text COLLATE utf8_unicode_ci,
  `new_value` text COLLATE utf8_unicode_ci,
  `revisionable_type` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `revisionable_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `system_revisions_revisionable_id_revisionable_type_index` (`revisionable_id`,`revisionable_type`),
  KEY `system_revisions_user_id_index` (`user_id`),
  KEY `system_revisions_field_index` (`field`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of system_revisions
-- ----------------------------

-- ----------------------------
-- Table structure for system_settings
-- ----------------------------
DROP TABLE IF EXISTS `system_settings`;
CREATE TABLE `system_settings` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `item` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `value` mediumtext COLLATE utf8_unicode_ci,
  PRIMARY KEY (`id`),
  KEY `system_settings_item_index` (`item`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of system_settings
-- ----------------------------
