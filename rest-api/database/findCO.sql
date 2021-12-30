CREATE DATABASE findco;
use findco;
CREATE TABLE IF NOT EXISTS `findco`.`application_user` (
  `idApplication_user` BINARY(16) NOT NULL,
  `first_name` VARCHAR(45) NOT NULL,
  `last_name` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` LONGTEXT NOT NULL,
  `date_birth` DATE NOT NULL,
  `phone` INT NOT NULL,
  `street_address` VARCHAR(100) NOT NULL,
  `city` VARCHAR(45) NOT NULL,
  `country` VARCHAR(45) NOT NULL,
  `postal_code` INT NOT NULL,
  `role` ENUM('admin', 'contractor', 'user') NOT NULL,
  `api_key` VARCHAR(45) NULL DEFAULT NULL,
  `created_at` TIMESTAMP NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` TIMESTAMP NULL DEFAULT '0000-00-00 00:00:00',
  `application_usercol` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`idApplication_user`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;

CREATE TABLE IF NOT EXISTS `findco`.`company` (
  `idCompany` BINARY(16) NOT NULL,
  `company_name` VARCHAR(45) NOT NULL,
  `tax_number` VARCHAR(45) NOT NULL,
  `email` VARCHAR(50) NOT NULL,
  `phone` INT NOT NULL,
  `street_address` VARCHAR(45) NOT NULL,
  `city` VARCHAR(45) NOT NULL,
  `country` VARCHAR(45) NOT NULL,
  `postal_code` INT NOT NULL,
  `logo_image` VARCHAR(80) NOT NULL,
  `region(location)` VARCHAR(45) NOT NULL,
  `line_of_work` VARCHAR(50) NOT NULL,
  `application_user_idApplication_user` BINARY(16) NOT NULL,
  PRIMARY KEY (`idCompany`, `application_user_idApplication_user`),
  INDEX `fk_company_application_user1_idx` (`application_user_idApplication_user` ASC),
  CONSTRAINT `fk_company_application_user1`
    FOREIGN KEY (`application_user_idApplication_user`)
    REFERENCES `findco`.`application_user` (`idApplication_user`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;

CREATE TABLE IF NOT EXISTS `findco`.`contraction` (
  `idContraction` INT NOT NULL,
  `timestamp` TIMESTAMP NOT NULL,
  `company_idCompany` BINARY(16) NOT NULL,
  `application_user_idApplication_user` BINARY(16) NOT NULL,
  PRIMARY KEY (`idContraction`, `company_idCompany`, `application_user_idApplication_user`),
  INDEX `fk_contraction_company1_idx` (`company_idCompany` ASC),
  INDEX `fk_contraction_application_user1_idx` (`application_user_idApplication_user` ASC),
  CONSTRAINT `fk_contraction_company1`
    FOREIGN KEY (`company_idCompany`)
    REFERENCES `findco`.`company` (`idCompany`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_contraction_application_user1`
    FOREIGN KEY (`application_user_idApplication_user`)
    REFERENCES `findco`.`application_user` (`idApplication_user`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;

DELIMITER $$
CREATE  FUNCTION `UUID_TO_BIN`
(idApplication_user CHAR(36))
RETURNS BINARY(16)
Deterministic 
BEGIN
  RETURN UNHEX(CONCAT(REPLACE(idApplication_user, '-', '')));
END;
$$

CREATE  FUNCTION `BIN_TO_UUID`
(bin BINARY(16))
RETURNS CHAR(36)
Deterministic 
BEGIN
  DECLARE hex CHAR(32);
  SET hex = HEX(bin);
  RETURN LOWER(CONCAT(LEFT(hex, 8), '-', MID(hex, 9, 4), '-', MID(hex, 13, 4), '-', MID(hex, 17, 4), '-', RIGHT(hex, 12)));
END;
$$

DELIMITER $$
CREATE  TRIGGER `generate_UUID_User`
  BEFORE
  INSERT
  ON `application_user`
  FOR EACH ROW
  BEGIN 
    SET NEW.idApplication_user = UUID_TO_BIN(UUID()); 
END;
$$
DELIMITER ;

DELIMITER $$
CREATE  TRIGGER `generate_UUID_Company`
  BEFORE
  INSERT
  ON `company`
  FOR EACH ROW
  BEGIN 
    SET NEW.idCompany = UUID_TO_BIN(UUID()); 
END;
$$
DELIMITER ;

DELIMITER $$
CREATE TRIGGER `user_create`
    BEFORE INSERT ON `application_user` 
    FOR EACH ROW 
    SET NEW.created_at = NOW(), NEW.updated_at = NOW();
$$
DELIMITER ;

DELIMITER $$
CREATE TRIGGER user_update 
    BEFORE UPDATE ON `application_user`
    FOR EACH ROW 
    SET NEW.updated_at = NOW(), NEW.created_at = OLD.created_at;
$$
DELIMITER ;
