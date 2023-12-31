-- MySQL Script generated by MySQL Workbench
-- Sun Aug  6 16:04:13 2023
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`categoria_produto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`categoria_produto` (
  `id_categoria_produto` INT NOT NULL AUTO_INCREMENT,
  `descricao` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_categoria_produto`),
  UNIQUE INDEX `id_categoria_produto_UNIQUE` (`id_categoria_produto` ASC) VISIBLE,
  UNIQUE INDEX `descricao_UNIQUE` (`descricao` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`produto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`produto` (
  `id_produto` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `preco_unitario` FLOAT NOT NULL,
  `marca` VARCHAR(45) NULL DEFAULT NULL,
  `estoque` VARCHAR(45) NOT NULL,
  `id_categoria_produto` INT NULL DEFAULT NULL,
  PRIMARY KEY (`id_produto`),
  UNIQUE INDEX `idProduto_UNIQUE` (`id_produto` ASC) VISIBLE,
  INDEX `fk_produto_categoria_produto1_idx` (`id_categoria_produto` ASC) VISIBLE,
  CONSTRAINT `fk_produto_categoria_produto1`
    FOREIGN KEY (`id_categoria_produto`)
    REFERENCES `mydb`.`categoria_produto` (`id_categoria_produto`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`cargo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`cargo` (
  `id_cargo` INT NOT NULL AUTO_INCREMENT,
  `descricao` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_cargo`),
  UNIQUE INDEX `id_cargo_UNIQUE` (`id_cargo` ASC) VISIBLE,
  UNIQUE INDEX `descricao_UNIQUE` (`descricao` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`funcionario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`funcionario` (
  `id_funcionario` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(255) NOT NULL,
  `endereco` VARCHAR(255) NULL,
  `telefone` VARCHAR(11) NULL,
  `id_cargo` INT NOT NULL,
  PRIMARY KEY (`id_funcionario`),
  INDEX `fk_funcionario_cargos1_idx` (`id_cargo` ASC) VISIBLE,
  UNIQUE INDEX `id_funcionário_UNIQUE` (`id_funcionario` ASC) VISIBLE,
  CONSTRAINT `fk_funcionario_cargos1`
    FOREIGN KEY (`id_cargo`)
    REFERENCES `mydb`.`cargo` (`id_cargo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`cliente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`cliente` (
  `id_cliente` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(255) NOT NULL,
  `endereco` VARCHAR(255) NULL,
  `telefone` VARCHAR(11) NULL,
  PRIMARY KEY (`id_cliente`),
  UNIQUE INDEX `id_cliente_UNIQUE` (`id_cliente` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`metodo_pagamento`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`metodo_pagamento` (
  `id_metodo_pagamento` INT NOT NULL AUTO_INCREMENT,
  `descricao` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_metodo_pagamento`),
  UNIQUE INDEX `id_metodo_pagamento_UNIQUE` (`id_metodo_pagamento` ASC) VISIBLE,
  UNIQUE INDEX `descricao_UNIQUE` (`descricao` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`pedido`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`pedido` (
  `id_pedido` INT NOT NULL AUTO_INCREMENT,
  `data` DATETIME NULL DEFAULT NULL,
  `valor_total` FLOAT NOT NULL,
  `descricao` VARCHAR(255) NULL,
  `quantidade` INT NULL,
  `id_funcionario` INT NOT NULL,
  `id_cliente` INT NOT NULL,
  `id_produto` INT NOT NULL,
  `id_metodo_pagamento` INT NOT NULL,
  PRIMARY KEY (`id_pedido`),
  INDEX `fk_pedido_funcionario1_idx` (`id_funcionario` ASC) VISIBLE,
  INDEX `fk_pedido_cliente1_idx` (`id_cliente` ASC) VISIBLE,
  UNIQUE INDEX `id_pedido_UNIQUE` (`id_pedido` ASC) VISIBLE,
  INDEX `fk_pedido_metodo_pagamento1_idx` (`id_metodo_pagamento` ASC) VISIBLE,
  INDEX `fk_pedido_produto1_idx` (`id_produto` ASC) VISIBLE,
  CONSTRAINT `fk_pedido_funcionario1`
    FOREIGN KEY (`id_funcionario`)
    REFERENCES `mydb`.`funcionario` (`id_funcionario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_pedido_cliente1`
    FOREIGN KEY (`id_cliente`)
    REFERENCES `mydb`.`cliente` (`id_cliente`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_pedido_metodo_pagamento1`
    FOREIGN KEY (`id_metodo_pagamento`)
    REFERENCES `mydb`.`metodo_pagamento` (`id_metodo_pagamento`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_pedido_produto1`
    FOREIGN KEY (`id_produto`)
    REFERENCES `mydb`.`produto` (`id_produto`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
