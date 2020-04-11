-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Apr 11, 2020 at 08:43 AM
-- Server version: 5.7.26
-- PHP Version: 7.3.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_rokuflash`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_category`
--

CREATE TABLE `tbl_category` (
  `category_id` int(11) NOT NULL,
  `category_name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_category`
--

INSERT INTO `tbl_category` (`category_id`, `category_name`) VALUES
(1, 'movie'),
(2, 'music'),
(3, 'tvshow');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_media`
--

CREATE TABLE `tbl_media` (
  `media_id` int(11) NOT NULL,
  `media_cover` varchar(250) NOT NULL,
  `media_title` varchar(250) NOT NULL,
  `media_trailer` varchar(250) NOT NULL,
  `media_release` varchar(250) NOT NULL,
  `media_premission` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_media`
--

INSERT INTO `tbl_media` (`media_id`, `media_cover`, `media_title`, `media_trailer`, `media_release`, `media_premission`) VALUES
(1, '1959.png\r\n', 'North by Northwest', 'Northwest.mp4', '1959', 0),
(2, '1956.png', 'Elvis Presley - Don\'t Be Crue', 'Cruel.mp3', '1956', 0),
(3, '1952.png', 'Adventures of Superman', 'Superman.mp4', '1952', 0),
(4, '1952_kid.png', 'Mighty Mouse', 'Mouse.mp4', '1952', 1),
(5, '1950_kid.png', 'baby bus', 'babybus.mp3', '1950', 1),
(6, '1958_kid.png', 'The Huckleberry Hound Show', 'Huckleberry.mp4', '1958', 1),
(7, '1960.png', 'Psycho', 'Psycho.mp4', '1960', 0),
(8, '1965.png', 'Percy Faith - Theme From A Summer Place', 'Summer.mp3', '1965', 0),
(9, 'Island.png', 'Gilligan\'s Island', 'Island.mp4', '1964', 0),
(10, '1960_kid.png', 'the heckle and jeckle show', 'heckle.mp4', '1960', 1),
(11, '1963_kid.png', 'one penny', 'penny.mp3', '1963', 1),
(12, '1962_kid.png', 'Top Cat', 'Cat.mp4', '1962', 1),
(13, '1975.png', 'Jaws', 'Jaws.mp4', '1975', 0),
(14, '1979.png', 'Michael Jackson - Rock With You', 'Michael.mp3', '1979', 0),
(15, '1972.png', 'M*A*S*H', 'MASH.mp4', '1972', 0),
(16, '1977_kid.png', 'Wizards', 'Wizards.mp4', '1977', 1),
(17, '1970_kid.png', 'Harry Nilsson Think About Your Troubles ', 'Harry.mp3', '1970', 1),
(18, '1970_kid_tv.png', 'The Perils of Penelope Pitstop', 'Pitstop.mp4', '1970', 0),
(19, '1985.png', 'The Breakfast Club', 'Breakfast.mp4', '1985', 0),
(20, '1984.png', 'Do they Know it s Christmas _ Band Aid ', 'Christmas.mp3', '1984', 0),
(21, '1986.png', 'ALF', 'ALF.mp4', '1986', 0),
(22, '1989_kid.png', 'The Little Mermaid', 'Mermaid.mp4', '1989', 1),
(23, '1982_kid.png', 'Sesame Street - Sing After Me', 'Sesame.mp3', '1982', 1),
(24, '1985_kid.png', 'Thundercats opening', 'Thundercats.mp4', '1985', 1),
(25, '1994.png', 'Pulp Fiction', 'Pulp.mp4', '1994', 0),
(26, '1991.png', 'Roxette - Joyride', 'Roxette.mp3', '1991', 0),
(27, '1990.png', 'fresh prince of bel air', 'air.mp4', '1990', 0),
(28, '1992_kid.png', 'Aladdin', 'Aladdin.mp4', '1992', 1),
(29, '1997_kid.png', 'Hanson - MMMBop', 'Hanson.mp3', '1997', 1),
(30, '1995_kid.png', 'Dexter\'s Laboratory', 'Laboratory.mp4', '1995', 1);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_media_category`
--

CREATE TABLE `tbl_media_category` (
  `id_media_category` int(11) NOT NULL,
  `media_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_media_category`
--

INSERT INTO `tbl_media_category` (`id_media_category`, `media_id`, `category_id`) VALUES
(1, 1, 1),
(2, 2, 2),
(3, 3, 3),
(4, 4, 1),
(5, 5, 2),
(6, 6, 3),
(7, 7, 1),
(8, 8, 2),
(9, 9, 3),
(10, 10, 1),
(11, 11, 2),
(12, 12, 3),
(13, 13, 1),
(14, 14, 2),
(15, 15, 3),
(16, 16, 1),
(17, 17, 2),
(18, 18, 3),
(19, 19, 1),
(20, 20, 2),
(21, 21, 3),
(22, 22, 1),
(23, 23, 2),
(24, 24, 3),
(25, 25, 1),
(26, 26, 2),
(27, 27, 3),
(28, 28, 1),
(29, 29, 2),
(30, 30, 3);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_media_detail`
--

CREATE TABLE `tbl_media_detail` (
  `detail_id` int(11) NOT NULL,
  `media_id` int(11) NOT NULL,
  `time_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_media_detail`
--

INSERT INTO `tbl_media_detail` (`detail_id`, `media_id`, `time_id`, `category_id`) VALUES
(1, 1, 1, 1),
(2, 2, 1, 2),
(3, 3, 1, 3),
(4, 4, 1, 1),
(5, 5, 1, 2),
(6, 6, 1, 3),
(7, 7, 2, 1),
(8, 8, 2, 2),
(9, 9, 2, 3),
(10, 10, 2, 1),
(11, 11, 2, 2),
(12, 12, 2, 3),
(13, 13, 3, 1),
(14, 14, 3, 2),
(15, 15, 3, 3),
(16, 16, 3, 1),
(17, 17, 3, 2),
(18, 18, 3, 3),
(19, 19, 4, 1),
(20, 20, 4, 2),
(21, 21, 4, 3),
(22, 22, 4, 1),
(23, 23, 4, 2),
(24, 24, 4, 3),
(25, 25, 5, 1),
(26, 26, 5, 2),
(27, 27, 5, 3),
(28, 28, 5, 1),
(29, 29, 5, 2),
(30, 30, 5, 3);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_media_time`
--

CREATE TABLE `tbl_media_time` (
  `id_media_time` int(11) NOT NULL,
  `media_id` int(11) NOT NULL,
  `time_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_media_time`
--

INSERT INTO `tbl_media_time` (`id_media_time`, `media_id`, `time_id`) VALUES
(1, 1, 1),
(2, 2, 1),
(3, 3, 1),
(4, 4, 1),
(5, 5, 1),
(6, 6, 1),
(7, 7, 2),
(8, 8, 2),
(9, 9, 2),
(10, 10, 2),
(11, 11, 2),
(12, 12, 2),
(13, 13, 3),
(14, 14, 3),
(15, 15, 3),
(16, 16, 3),
(17, 17, 3),
(18, 18, 3),
(19, 19, 4),
(20, 20, 4),
(21, 21, 4),
(22, 22, 4),
(23, 23, 4),
(24, 24, 4),
(25, 25, 5),
(26, 26, 5),
(27, 27, 5),
(28, 28, 5),
(29, 29, 5),
(30, 30, 5);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_time`
--

CREATE TABLE `tbl_time` (
  `time_id` int(11) NOT NULL,
  `time` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_time`
--

INSERT INTO `tbl_time` (`time_id`, `time`) VALUES
(1, '50s'),
(2, '60s'),
(3, '70s'),
(4, '80s'),
(5, '90s');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_user`
--

CREATE TABLE `tbl_user` (
  `id` int(11) NOT NULL,
  `username` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  `email` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_user`
--

INSERT INTO `tbl_user` (`id`, `username`, `password`, `email`) VALUES
(1, 'admin', '123456', '123@gamil.com');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_category`
--
ALTER TABLE `tbl_category`
  ADD PRIMARY KEY (`category_id`);

--
-- Indexes for table `tbl_media`
--
ALTER TABLE `tbl_media`
  ADD PRIMARY KEY (`media_id`);

--
-- Indexes for table `tbl_media_category`
--
ALTER TABLE `tbl_media_category`
  ADD PRIMARY KEY (`id_media_category`);

--
-- Indexes for table `tbl_media_detail`
--
ALTER TABLE `tbl_media_detail`
  ADD PRIMARY KEY (`detail_id`);

--
-- Indexes for table `tbl_media_time`
--
ALTER TABLE `tbl_media_time`
  ADD PRIMARY KEY (`id_media_time`);

--
-- Indexes for table `tbl_time`
--
ALTER TABLE `tbl_time`
  ADD PRIMARY KEY (`time_id`);

--
-- Indexes for table `tbl_user`
--
ALTER TABLE `tbl_user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_category`
--
ALTER TABLE `tbl_category`
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `tbl_media`
--
ALTER TABLE `tbl_media`
  MODIFY `media_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `tbl_media_category`
--
ALTER TABLE `tbl_media_category`
  MODIFY `id_media_category` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `tbl_media_detail`
--
ALTER TABLE `tbl_media_detail`
  MODIFY `detail_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `tbl_media_time`
--
ALTER TABLE `tbl_media_time`
  MODIFY `id_media_time` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `tbl_time`
--
ALTER TABLE `tbl_time`
  MODIFY `time_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `tbl_user`
--
ALTER TABLE `tbl_user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
