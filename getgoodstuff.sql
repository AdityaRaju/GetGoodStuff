-- phpMyAdmin SQL Dump
-- version 3.5.2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Nov 17, 2013 at 05:12 PM
-- Server version: 5.5.25a
-- PHP Version: 5.4.4

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `getgoodstuff`
--

-- --------------------------------------------------------

--
-- Table structure for table `content`
--

CREATE TABLE IF NOT EXISTS `content` (
  `title` varchar(30) NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `url` varchar(100) NOT NULL,
  `description` varchar(500) NOT NULL,
  `keywords` varchar(200) NOT NULL,
  `categories` varchar(100) NOT NULL,
  `rating` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `content`
--

INSERT INTO `content` (`title`, `date`, `url`, `description`, `keywords`, `categories`, `rating`) VALUES
('Tutorial: Debugging - Google C', '2013-11-17 08:34:06', 'http://developer.chrome.com/extensions/tut_debugging.html', 'chrome extension', 'chrome', 'Education', 5),
('Learning to write effective we', '2013-11-17 09:24:46', 'http://www.slideshare.net/Scoopit/learning-to-write-effective-web-sentences', 'web sentences', 'sentences', 'Entertainment', 1);

-- --------------------------------------------------------

--
-- Table structure for table `members`
--

CREATE TABLE IF NOT EXISTS `members` (
  `uname` varchar(50) NOT NULL,
  `emailad` varchar(150) NOT NULL,
  `userpass` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `members`
--

INSERT INTO `members` (`uname`, `emailad`, `userpass`) VALUES
(' vthallam', 'venkateshthallam@gmail.com', 'cf114187ea788ee22f1b'),
('adityaraju', 'adityaraju1234@gmail.com', '8768942bfd213d626eeb');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
