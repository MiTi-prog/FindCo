-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Gostitelj: 127.0.0.1:3306
-- Čas nastanka: 30. dec 2021 ob 12.11
-- Različica strežnika: 10.3.12-MariaDB
-- Različica PHP: 7.2.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Zbirka podatkov: `findco`
--

DELIMITER $$
--
-- Funkcije
--
DROP FUNCTION IF EXISTS `BIN_TO_UUID`$$
CREATE DEFINER=`root`@`localhost` FUNCTION `BIN_TO_UUID` (`bin` BINARY(16)) RETURNS CHAR(36) CHARSET latin1 BEGIN
  DECLARE hex CHAR(32);
  SET hex = HEX(bin);
  RETURN LOWER(CONCAT(LEFT(hex, 8), '-', MID(hex, 9, 4), '-', MID(hex, 13, 4), '-', MID(hex, 17, 4), '-', RIGHT(hex, 12)));
END$$

DROP FUNCTION IF EXISTS `UUID_TO_BIN`$$
CREATE DEFINER=`root`@`localhost` FUNCTION `UUID_TO_BIN` (`idApplication_user` CHAR(36)) RETURNS BINARY(16) BEGIN
  RETURN UNHEX(CONCAT(REPLACE(idApplication_user, '-', '')));
END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Struktura tabele `application_user`
--

DROP TABLE IF EXISTS `application_user`;
CREATE TABLE IF NOT EXISTS `application_user` (
  `idApplication_user` binary(16) NOT NULL,
  `first_name` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` longtext NOT NULL,
  `date_birth` date NOT NULL,
  `phone` int(11) NOT NULL,
  `street_address` varchar(100) NOT NULL,
  `city` varchar(45) NOT NULL,
  `country` varchar(45) NOT NULL,
  `postal_code` int(11) NOT NULL,
  `role` enum('admin','contractor','user') NOT NULL,
  `api_key` varchar(45) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NULL DEFAULT '0000-00-00 00:00:00',
  `application_usercol` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idApplication_user`),
  UNIQUE KEY `email` (`email`,`phone`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Odloži podatke za tabelo `application_user`
--

INSERT INTO `application_user` (`idApplication_user`, `first_name`, `last_name`, `email`, `password`, `date_birth`, `phone`, `street_address`, `city`, `country`, `postal_code`, `role`, `api_key`, `created_at`, `updated_at`, `application_usercol`) VALUES
(0x48943a9d695911ecaba4e0699535855a, 'Test22', 'Lojze', 'test@noone.com', 'info@test.test', '2021-01-01', 31112779, 'Jurckova 215', 'Maribor', 'Slovenia', 1200, 'user', NULL, '2021-12-30 10:14:33', '2021-12-30 10:31:42', NULL),
(0xa05a3e4a695711ecaba4e0699535855a, 'Roman', 'Koman', 'info@romun.si', '$2a$10$POqhcNATlojLNwbaYxPbeu/RWef89X40XxrjpqxZu5eCoa70Bm2yu', '2021-01-02', 31112779, 'Jurckova 215', 'Maribor', 'Slovenia', 1200, 'contractor', NULL, '2021-12-30 10:02:41', '2021-12-30 10:39:40', NULL),
(0xa3c7691d695c11ecaba4e0699535855a, 'Miha', 'Podpecnik', 'info@test.test', 'geslo123', '2021-01-01', 31112400, 'Jurckova 215', 'Maribor', 'Slovenia', 1200, 'user', NULL, '2021-12-30 10:38:34', '2021-12-30 10:47:17', NULL),
(0xe04cfdc7696011ecaba4e0699535855a, 'Polde', 'Kovac', 'info@kovac.si', '$2a$10$Fwhxz0EIQ6ghA1abf0ZrJuLSp6mnm4ILLciFZp0iuWzASqfL3KdFi', '2021-01-02', 31112755, 'Jurckova 215', 'Maribor', 'Slovenia', 1200, 'contractor', NULL, '2021-12-30 11:08:54', '2021-12-30 11:08:54', NULL);

--
-- Sprožilci `application_user`
--
DROP TRIGGER IF EXISTS `generate_UUID_User`;
DELIMITER $$
CREATE TRIGGER `generate_UUID_User` BEFORE INSERT ON `application_user` FOR EACH ROW BEGIN 
    SET NEW.idApplication_user = UUID_TO_BIN(UUID()); 
END
$$
DELIMITER ;
DROP TRIGGER IF EXISTS `user_create`;
DELIMITER $$
CREATE TRIGGER `user_create` BEFORE INSERT ON `application_user` FOR EACH ROW SET NEW.created_at = NOW(), NEW.updated_at = NOW()
$$
DELIMITER ;
DROP TRIGGER IF EXISTS `user_update`;
DELIMITER $$
CREATE TRIGGER `user_update` BEFORE UPDATE ON `application_user` FOR EACH ROW SET NEW.updated_at = NOW(), NEW.created_at = OLD.created_at
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Struktura tabele `company`
--

DROP TABLE IF EXISTS `company`;
CREATE TABLE IF NOT EXISTS `company` (
  `idCompany` binary(16) NOT NULL,
  `company_name` varchar(45) NOT NULL,
  `tax_number` varchar(45) NOT NULL,
  `email` varchar(50) NOT NULL,
  `phone` int(11) NOT NULL,
  `street_address` varchar(45) NOT NULL,
  `city` varchar(45) NOT NULL,
  `country` varchar(45) NOT NULL,
  `postal_code` int(11) NOT NULL,
  `logo_image` varchar(80) NOT NULL,
  `region(location)` varchar(45) NOT NULL,
  `line_of_work` varchar(50) NOT NULL,
  `application_user_idApplication_user` binary(16) NOT NULL,
  PRIMARY KEY (`idCompany`,`application_user_idApplication_user`),
  UNIQUE KEY `tax_number` (`tax_number`),
  KEY `fk_company_application_user1_idx` (`application_user_idApplication_user`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Odloži podatke za tabelo `company`
--

INSERT INTO `company` (`idCompany`, `company_name`, `tax_number`, `email`, `phone`, `street_address`, `city`, `country`, `postal_code`, `logo_image`, `region(location)`, `line_of_work`, `application_user_idApplication_user`) VALUES
(0x0a026c80696111ecaba4e0699535855a, 'Senzorbit D.O.O', '011231123123', 'info@sensorbit.si', 31123123, 'Partizanska 9', 'Ljubljana', 'Slovenia', 10000, 'test.jpg', 'Osrednja Slovenija', 'test', 0xe04cfdc7696011ecaba4e0699535855a),
(0xdaa69439695711ecaba4e0699535855a, 'Petsrore D.O.2', '01123131231', 'info@test.si', 31123123, 'Partizanska 9', 'Ljubljana', 'Slovenia', 10000, 'test.jpg', 'Osrednja Slovenija', 'test', 0xa05a3e4a695711ecaba4e0699535855a);

--
-- Sprožilci `company`
--
DROP TRIGGER IF EXISTS `generate_UUID_Company`;
DELIMITER $$
CREATE TRIGGER `generate_UUID_Company` BEFORE INSERT ON `company` FOR EACH ROW BEGIN 
    SET NEW.idCompany = UUID_TO_BIN(UUID()); 
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Struktura tabele `contraction`
--

DROP TABLE IF EXISTS `contraction`;
CREATE TABLE IF NOT EXISTS `contraction` (
  `idContraction` int(11) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `company_idCompany` binary(16) NOT NULL,
  `application_user_idApplication_user` binary(16) NOT NULL,
  PRIMARY KEY (`idContraction`,`company_idCompany`,`application_user_idApplication_user`),
  KEY `fk_contraction_company1_idx` (`company_idCompany`),
  KEY `fk_contraction_application_user1_idx` (`application_user_idApplication_user`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Omejitve tabel za povzetek stanja
--

--
-- Omejitve za tabelo `company`
--
ALTER TABLE `company`
  ADD CONSTRAINT `fk_company_application_user1` FOREIGN KEY (`application_user_idApplication_user`) REFERENCES `application_user` (`idApplication_user`) ON DELETE CASCADE ON UPDATE NO ACTION;

--
-- Omejitve za tabelo `contraction`
--
ALTER TABLE `contraction`
  ADD CONSTRAINT `fk_contraction_application_user1` FOREIGN KEY (`application_user_idApplication_user`) REFERENCES `application_user` (`idApplication_user`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_contraction_company1` FOREIGN KEY (`company_idCompany`) REFERENCES `company` (`idCompany`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
