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
-- Table structure for table `historia`
--

DROP TABLE IF EXISTS `historia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `historia` (
  `id_historia` int NOT NULL AUTO_INCREMENT,
  `imagem_titulo` text NOT NULL,
  `titulo` varchar(45) NOT NULL,
  `texto_1` text NOT NULL,
  `texto_2` text NOT NULL,
  `img_historia` text NOT NULL,
  `objetivo_01` varchar(45) NOT NULL,
  `objetivo_01_titulo` varchar(45) NOT NULL,
  `objetivo_01_texto` text NOT NULL,
  `objetivo_02` varchar(45) NOT NULL,
  `objetivo_02_titulo` varchar(45) NOT NULL,
  `objetivo_02_texto` text NOT NULL,
  `objetivo_03` varchar(45) NOT NULL,
  `objetivo_03_titulo` varchar(45) NOT NULL,
  `objetivo_03_texto` text NOT NULL,
  `objetivo_img` text NOT NULL,
  `compromisso1` text NOT NULL,
  `compromisso2` text NOT NULL,
  `compromisso3` text NOT NULL,
  `texto1_integrante` text NOT NULL,
  `texto2_integrante` text NOT NULL,
  `img_integrante` text NOT NULL,
  `certificado1` text NOT NULL,
  `certificado2` text NOT NULL,
  `certificado3` text NOT NULL,
  `certificado4` text NOT NULL,
  `certificado5` text NOT NULL,
  PRIMARY KEY (`id_historia`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `historia`
--

LOCK TABLES `historia` WRITE;
/*!40000 ALTER TABLE `historia` DISABLE KEYS */;
INSERT INTO `historia` VALUES (1,'HFA.jpg','RIGOR E EXCELÊNCIA DESDE 1995','A HFA-Henrique, Fernando & Alves, S.A. é uma PME, especializada na assemblagem e teste de equipamento eletrónico e de telecomunicações, em regime de subcontratação. Fundada em 1995, o crescimento contínuo da empresa demonstra o seu compromisso em providenciar serviços de elevado valor acrescentado.','Os produtos são assemblados e testados de acordo com os requisitos dos Clientes. O processo produtivo é facilmente adaptável às necessidades de cada um, permitindo entregar um produto totalmente customizado. A empresa recorre a equipamentos inovadores, a tecnologias de alta precisão e rapidez, a técnicos qualificados e aposta na formação e treino especializado e constante dos seus colaboradores.','banner_noticias.jpg','01','VISÃO','Fazer da HFA uma referência a nivel mundial no setor da produção e teste de produtos de eletrónica','02','MISSÃO','Realizarde formasustentada, e com elevados padrões de qualidade, os produtos de eletrónica solicitados, sempre na vanguarda da tecnlogia.','03','VALORES','Qualidade; Know-How; Inovação; Flexibilidade; Dedicação; Confiança / Confidencialidade','objetivobanner.jpg','“A HFA tem o seu sistema de gestão da Qualidade certificado pelos referenciais NP EN ISO 9001:2015 e IATF 16949:2016. O Sistema de gestão da qualidade da empresa é um dos pilares fundamentais para o sucesso da mesma”','A atual política de gestão integrada, definida pela administração, reflete a preocupação da empresa na definição e implementação de um conjunto de processos e metodologias, que asseguram elevando padrões de qualidade, eficiência e performance.','Neste sentido, todos assumem a responsabilidade de cumprir com o Sistema de Gestão da Qualidade, procurando permanentemente a otimização dos processos e recursos, enquanto fatores de melhoria contínua, e promover o desenvolvimento e a satisfação dos Colaboradores, levando em conta as diferentes aspirações sociais, económicas e ambientais.','Acreditamos, que juntos, Empresários, Funcionários, Clientes, Fornecedores (Critérios de Monitorização), Acionistas, Autoridades governamentais e Comunidade em geral, podemos colaborar com as exigências do mundo atual, dedicando especial atenção aos princípios e à ética nos negócios, às relações com os empregados, aos direitos humanos, â gestão ambiental, à relação com a comunidade e às condições gerais de trabalho, tanto dentro da HFA, como na relação com a da cadeia produtiva.','Temos a noção clara de que o desenvolvimento dos negócios nos dias de hoje deve pautar-se no respeito à integridade ecológica, na justiça social e económica, na democracia, na não-violência e na paz.','responsabilidade.jpg','CIT_IPCA610G_EN_2021.png','CIT_IPC771121C_EN_2021.png','HFAPGIpt.png','ISO_9001_IATF.png','ISO_9001_np.png');
/*!40000 ALTER TABLE `historia` ENABLE KEYS */;
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
