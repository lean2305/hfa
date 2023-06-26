-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: banco
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `utilizador`
--

DROP TABLE IF EXISTS `utilizador`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `utilizador` (
  `idutilizador` int NOT NULL AUTO_INCREMENT,
  `email` varchar(45) NOT NULL,
  `password` varchar(200) NOT NULL,
  PRIMARY KEY (`idutilizador`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=cp1250;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `utilizador`
--

LOCK TABLES `utilizador` WRITE;
/*!40000 ALTER TABLE `utilizador` DISABLE KEYS */;
INSERT INTO `utilizador` VALUES (1,'lo0194953@gmail.com','$2b$10$KUx6RfvY90NLlwRfRnpsYOTnYMbVY0SZo1Si3SM9AQRH6jyW8jWqW'),(2,'minhocas@live.com.pt','$2b$10$Ilwb/gR1pcAhzJLB6Fuz1OhJFj9eDDeeIpLV7Lrva.1JlN6xsnGZO'),(3,'jorgeeweeww@gmail.com','$2b$10$/Q1O5rNtIWTTP1qA4pqHIe2UTTOwV.3qxj4JzOAdh77sbTmebGGES'),(4,'minhosscas@live.com.pt','$2b$10$wTQTPGG.XrBznJ24oo10weir/i/pf9iQ4V8HlZfyJ1vcMtaurbbpK'),(5,'gestortrwafego@gmail.com','$2b$10$rAcE/nA30kWAMMdffmP71eJsL63ThPrjkV6oyOxKuJd/fW2X92KLq'),(6,'gestortrafego@gmail.com','$2b$10$0y0oHgxvN9lSbcDioDkez.iZDw9mXZjFzkgu8ymETZfVS6G7J6sBK'),(7,'puta@puta.com','$2b$10$kzY40zmU.eXWR0ZDN7hQUuWpmXbqVnh6rlFY.ktyM9Yf5nl.ke7FC'),(8,'chanfra@chanfra.com','$2b$10$9hRH8docmymqpCS29p6XNuJ82AKj1xpakyygyG0oqx8UJ6xAkDDzi');
/*!40000 ALTER TABLE `utilizador` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-26  8:43:39
