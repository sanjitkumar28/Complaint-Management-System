-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jan 30, 2021 at 03:06 PM
-- Server version: 5.7.19
-- PHP Version: 5.6.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `complaintmanagement`
--

DELIMITER $$
--
-- Procedures
--
DROP PROCEDURE IF EXISTS `getAllReceipts`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `getAllReceipts` (IN `done` BOOLEAN)  BEGIN
    SELECT * FROM receipt;
END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
CREATE TABLE IF NOT EXISTS `admin` (
  `ADMIN_ID` int(11) NOT NULL AUTO_INCREMENT,
  `ADMIN_EMAIL` varchar(30) NOT NULL,
  `ADMIN_NAME` varchar(30) NOT NULL,
  `ADMIN_PHONE` varchar(10) NOT NULL,
  `ADMIN_ADDRESS` varchar(40) DEFAULT NULL,
  `ADMIN_PASSWORD` varchar(50) NOT NULL,
  PRIMARY KEY (`ADMIN_ID`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`ADMIN_ID`, `ADMIN_EMAIL`, `ADMIN_NAME`, `ADMIN_PHONE`, `ADMIN_ADDRESS`, `ADMIN_PASSWORD`) VALUES
(2, 'shubham@gmail.com', 'Shubham Mishra', '7355003216', 'Gorakhpur', '3b6beb51e76816e632a40d440eab0097'),
(3, 'sm@gmail.com', 'Subbhashit', '7845129856', 'Varanasi', '3b6beb51e76816e632a40d440eab0097'),
(4, 'a@gmail.com', 'Sanjit Kumar', '7845123265', 'Bangalore', '3b6beb51e76816e632a40d440eab0097'),
(5, 'rd@gmail.com', 'rd', '8956324512', 'BLR', '3b6beb51e76816e632a40d440eab0097');

-- --------------------------------------------------------

--
-- Table structure for table `complaints`
--

DROP TABLE IF EXISTS `complaints`;
CREATE TABLE IF NOT EXISTS `complaints` (
  `COMPLAINT_ID` int(11) NOT NULL AUTO_INCREMENT,
  `USER_ID` int(11) DEFAULT NULL,
  `USER_NAME` varchar(30) DEFAULT NULL,
  `USER_PHONE` varchar(10) DEFAULT NULL,
  `USER_EMAIL` varchar(50) DEFAULT NULL,
  `ADMIN_NAME` varchar(30) DEFAULT NULL,
  `COMPLAINT_STATUS` varchar(15) DEFAULT NULL,
  `CATEGORY` varchar(25) DEFAULT NULL,
  `SUBJECT` varchar(100) DEFAULT NULL,
  `COMPLAINT_DATE` date DEFAULT NULL,
  `ADMIN_ID` int(11) DEFAULT NULL,
  PRIMARY KEY (`COMPLAINT_ID`),
  UNIQUE KEY `COMPLAINT_ID` (`COMPLAINT_ID`)
) ENGINE=MyISAM AUTO_INCREMENT=26 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `complaints`
--

INSERT INTO `complaints` (`COMPLAINT_ID`, `USER_ID`, `USER_NAME`, `USER_PHONE`, `USER_EMAIL`, `ADMIN_NAME`, `COMPLAINT_STATUS`, `CATEGORY`, `SUBJECT`, `COMPLAINT_DATE`, `ADMIN_ID`) VALUES
(25, 8, 'Sanjit', '7355003226', 'sanjit@gmail.com', 'Shubham Mishra', 'Done', 'IT', 'Software crash', '2021-01-19', 2),
(24, 10, 'Sb', '8956237845', 'sb@gmail.com', 'rd', 'Done', 'Plumber', 'Broken Tap', '2021-01-19', 5),
(23, 9, 'Shubham Mishra', '7845128956', 's@gmail.com', 'Sanjit Kumar', 'Done', 'Tech', 'Software Malfunction', '2021-01-19', 4),
(22, 8, 'Sanjit', '7355003226', 'sanjit@gmail.com', 'Subbhashit', 'Done', 'IT', 'System Updates', '2021-01-11', 3),
(21, 8, 'Sanjit', '7355003226', 'sanjit@gmail.com', 'Shubham Mishra', 'Done', 'IT', 'Software Crashes', '2021-01-10', 2);

-- --------------------------------------------------------

--
-- Table structure for table `feedback`
--

DROP TABLE IF EXISTS `feedback`;
CREATE TABLE IF NOT EXISTS `feedback` (
  `FEEDBACK_ID` int(11) NOT NULL AUTO_INCREMENT,
  `COMPLAINT_ID` int(11) DEFAULT NULL,
  `FEEDBACK` varchar(100) DEFAULT NULL,
  `FEEDBACK_DATE` date DEFAULT NULL,
  PRIMARY KEY (`FEEDBACK_ID`)
) ENGINE=MyISAM AUTO_INCREMENT=38 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `feedback`
--

INSERT INTO `feedback` (`FEEDBACK_ID`, `COMPLAINT_ID`, `FEEDBACK`, `FEEDBACK_DATE`) VALUES
(37, 22, 'Poor', '2021-01-19'),
(36, 24, 'Good', '2021-01-19'),
(35, 23, 'Poor', '2021-01-19'),
(34, 21, 'Good', '2021-01-10'),
(26, 14, 'Good', '2021-01-10'),
(27, 15, 'Satisfactory', '2021-01-10'),
(28, 16, 'Satisfactory', '2021-01-10'),
(29, 17, 'Satisfactory', '2021-01-10'),
(30, 18, 'Satisfactory', '2021-01-10'),
(31, 19, 'Poor', '2021-01-10'),
(32, 19, 'Poor', '2021-01-10'),
(33, 20, 'Poor', '2021-01-10');

-- --------------------------------------------------------

--
-- Table structure for table `receipt`
--

DROP TABLE IF EXISTS `receipt`;
CREATE TABLE IF NOT EXISTS `receipt` (
  `RECEIPT_ID` int(11) NOT NULL AUTO_INCREMENT,
  `COMPLAINT_ID` int(11) DEFAULT NULL,
  `USER_ID` int(11) DEFAULT NULL,
  `ADMIN_ID` int(11) DEFAULT NULL,
  `FEEDBACK_ID` int(11) DEFAULT NULL,
  `RECEIPT_DATE` date DEFAULT NULL,
  `USER_NAME` varchar(30) DEFAULT NULL,
  `FEEDBACK_VALUE` varchar(100) DEFAULT NULL,
  `ADMIN_NAME` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`RECEIPT_ID`)
) ENGINE=MyISAM AUTO_INCREMENT=19 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `receipt`
--

INSERT INTO `receipt` (`RECEIPT_ID`, `COMPLAINT_ID`, `USER_ID`, `ADMIN_ID`, `FEEDBACK_ID`, `RECEIPT_DATE`, `USER_NAME`, `FEEDBACK_VALUE`, `ADMIN_NAME`) VALUES
(18, 22, 8, 3, 37, '2021-01-19', 'Sanjit', 'Poor', 'Subbhashit'),
(17, 24, 10, 5, 36, '2021-01-19', 'Sb', 'Good', 'rd'),
(16, 23, 9, 4, 35, '2021-01-19', 'Shubham Mishra', 'Poor', 'Sanjit Kumar'),
(15, 21, 8, 2, 34, '2021-01-10', 'Sanjit', 'Good', 'Shubham Mishra');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `USER_EMAIL` varchar(50) NOT NULL,
  `USER_NAME` varchar(30) NOT NULL,
  `USER_PHONE` varchar(10) NOT NULL,
  `USER_ADDRESS` varchar(40) DEFAULT NULL,
  `USER_PASSWORD` varchar(50) NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `unique_prop` (`USER_EMAIL`,`USER_PHONE`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `USER_EMAIL`, `USER_NAME`, `USER_PHONE`, `USER_ADDRESS`, `USER_PASSWORD`) VALUES
(8, 'sanjit@gmail.com', 'Sanjit', '7355003226', 'Bangalore', '3b6beb51e76816e632a40d440eab0097'),
(9, 's@gmail.com', 'Shubham Mishra', '7845128956', 'GKP', '3b6beb51e76816e632a40d440eab0097'),
(10, 'sb@gmail.com', 'Sb', '8956237845', 'BLR', '3b6beb51e76816e632a40d440eab0097');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
