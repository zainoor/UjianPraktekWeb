  -- phpMyAdmin SQL Dump
  -- version 5.2.1
  -- https://www.phpmyadmin.net/
  --
  -- Host: 127.0.0.1
  -- Generation Time: Jan 16, 2025 at 09:09 AM
  -- Server version: 10.4.32-MariaDB
  -- PHP Version: 8.0.30

  SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
  START TRANSACTION;
  SET time_zone = "+00:00";


  /*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
  /*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
  /*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
  /*!40101 SET NAMES utf8mb4 */;

  --
  -- Database: `perpustakaan`
  --

  -- --------------------------------------------------------

  --
  -- Table structure for table `buku`
  --

  CREATE TABLE `buku` (
    `id` int(11) NOT NULL,
    `judul` varchar(255) NOT NULL,
    `pengarang` varchar(255) NOT NULL,
    `tahun_terbit` year(4) NOT NULL,
    `genre` varchar(100) DEFAULT NULL
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

  --
  -- Dumping data for table `buku`
  --

  INSERT INTO `buku` (`id`, `judul`, `pengarang`, `tahun_terbit`, `genre`) VALUES
  (1, 'Laskar Pelangi', 'Andrea Hirata', '2005', 'Novel'),
  (2, 'Bumi Manusia', 'Pramoedya Ananta Toer', '1980', 'Sejarah'),
  (3, 'Harry Potter and the Sorcerer\'s Stone', 'J.K. Rowling', '1997', 'Fantasi');

  --
  -- Indexes for dumped tables
  --

  --
  -- Indexes for table `buku`
  --
  ALTER TABLE `buku`
    ADD PRIMARY KEY (`id`);

  --
  -- AUTO_INCREMENT for dumped tables
  --

  --
  -- AUTO_INCREMENT for table `buku`
  --
  ALTER TABLE `buku`
    MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
  COMMIT;

  /*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
  /*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
  /*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
