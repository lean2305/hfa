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
-- Table structure for table `notev`
--

DROP TABLE IF EXISTS `notev`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `notev` (
  `idnotev` int NOT NULL AUTO_INCREMENT,
  `titulo_notev` varchar(70) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `descr_notev` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `categoria_notev` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `data_notev` date NOT NULL,
  `imagem_notev` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `view_notev` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`idnotev`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notev`
--

LOCK TABLES `notev` WRITE;
/*!40000 ALTER TABLE `notev` DISABLE KEYS */;
INSERT INTO `notev` VALUES (17,'HFA aposta na Educação e prepara futuro da empresa','Gabriel Costa, Tomás Pereira e Lucas Soares (ausente da cerimónia) são os três jovens que receberam, na quinta-feira, dia 27 de janeiro, as Bolsas de Estudo atribuídas, este ano, pela empresa aguedense HFA – Henrique, Fernando & Alves, que se dedica à assemblagem e teste de equipamentos eletrónicos.\r\n\r\nAs três bolsas de estudo, no valor total de 1.900 euros, visam ajudar jovens com poucos recursos económicos e que ingressam nos dois níveis de Ensino Superior (CTeS’P e licenciatura) em áreas relacionadas com a atividade desta empresa.\r\n\r\n','Noticia','2023-06-01','1685608661117.jpg',6),(18,'Universidade de Aveiro distingue empresário como novo embaixador','Carlos Alves, administrador da HFA - Henrique, Fernando & Alves, S.A, empresa de Águeda especializada na assemblagem e teste de equipamento eletrónico e de telecomunicações, foi nomeado embaixador da Universidade de AVeiro (UA). Engenheiro de Eletrónica e Telecomunicações pela UA, com especialização em Engenharia de Qualidade, há quase 30 anos, começou as suas atividades profissionais em 1986, em Águeda, e agora divide o seu tempo por várias empresas das quais é administrador.','Noticia','2023-06-01','1685608748440.jpg',21),(19,'Novo sistema quiosque na HFA','A Empresa HFA Avançada tem o prazer de anunciar a implementação de seu novo sistema de quiosque, desenvolvido com a ajuda de estagiários talentosos. Esse sistema revolucionário oferece uma experiência interativa e intuitiva para os funcionários, permitindo que eles acessem uma variedade de recursos importantes com facilidade.\r\n\r\nUma das principais funcionalidades do quiosque é a capacidade de chamar diferentes setores da empresa, como Recursos Humanos, de forma rápida e eficiente. Os funcionários podem simplesmente tocar na opção \"Recursos Humanos\" no menu principal e serem direcionados para uma tela de chamada, onde podem solicitar suporte ou agendar uma reunião diretamente no quiosque. Isso reduz a necessidade de esperar em filas ou fazer ligações telefônicas, tornando o processo mais conveniente e eficaz.\r\n\r\nAlém disso, o sistema de quiosque da HFA permite aos funcionários explorar uma ampla gama de recursos digitais. Com apenas alguns toques na tela, eles podem acessar vídeos informativos sobre os produtos e serviços da empresa, a história da HFA e os valores organizacionais. Essa funcionalidade é especialmente útil para novos funcionários, que podem aproveitar a oportunidade de se familiarizar rapidamente com a cultura e os valores da empresa.\r\n\r\nOutro destaque do sistema de quiosque é a biblioteca de vídeos, que oferece uma coleção abrangente de materiais de treinamento, tutoriais e palestras. Os funcionários podem escolher entre uma variedade de temas e aprimorar suas habilidades profissionais no seu próprio ritmo, diretamente no quiosque. Isso proporciona uma forma conveniente de aprendizado e desenvolvimento contínuo, garantindo que todos os colaboradores estejam atualizados com as melhores práticas e as últimas tendências da indústria.\r\n\r\nO novo sistema de quiosque na HFA foi um projeto colaborativo, liderado por estagiários altamente motivados e talentosos. Essa iniciativa não só proporcionou a eles uma valiosa experiência prática, mas também permitiu que contribuíssem com soluções inovadoras para a empresa. A HFA reconhece a importância do desenvolvimento de talentos e valoriza as contribuições dos estagiários.\r\n\r\nEm resumo, o novo sistema de quiosque da HFA representa um avanço significativo na experiência dos funcionários. Com recursos como chamadas para diferentes setores, acesso a vídeos informativos e uma biblioteca de aprendizado, o quiosque oferece uma maneira conveniente e eficiente para os funcionários acessarem informações e recursos importantes. A HFA está comprometida em fornecer um ambiente de trabalho moderno e eficaz, capacitando seus colaboradores por meio de soluções tecnológicas inovadoras.','Noticia','2023-06-01','1685608947577.jpg',46),(20,'Novo projeto quiosque','A Empresa HFA Avançada tem o prazer de anunciar a implementação de seu novo sistema de quiosque, desenvolvido com a ajuda de estagiários talentosos. Esse sistema revolucionário oferece uma experiência interativa e intuitiva para os funcionários, permitindo que eles acessem uma variedade de recursos importantes com facilidade.\r\n\r\nUma das principais funcionalidades do quiosque é a capacidade de chamar diferentes setores da empresa, como Recursos Humanos, de forma rápida e eficiente. Os funcionários podem simplesmente tocar na opção \"Recursos Humanos\" no menu principal e serem direcionados para uma tela de chamada, onde podem solicitar suporte ou agendar uma reunião diretamente no quiosque. Isso reduz a necessidade de esperar em filas ou fazer ligações telefônicas, tornando o processo mais conveniente e eficaz.\r\n\r\nAlém disso, o sistema de quiosque da HFA permite aos funcionários explorar uma ampla gama de recursos digitais. Com apenas alguns toques na tela, eles podem acessar vídeos informativos sobre os produtos e serviços da empresa, a história da HFA e os valores organizacionais. Essa funcionalidade é especialmente útil para novos funcionários, que podem aproveitar a oportunidade de se familiarizar rapidamente com a cultura e os valores da empresa.\r\n\r\nOutro destaque do sistema de quiosque é a biblioteca de vídeos, que oferece uma coleção abrangente de materiais de treinamento, tutoriais e palestras. Os funcionários podem escolher entre uma variedade de temas e aprimorar suas habilidades profissionais no seu próprio ritmo, diretamente no quiosque. Isso proporciona uma forma conveniente de aprendizado e desenvolvimento contínuo, garantindo que todos os colaboradores estejam atualizados com as melhores práticas e as últimas tendências da indústria.\r\n\r\nO novo sistema de quiosque na HFA foi um projeto colaborativo, liderado por estagiários altamente motivados e talentosos. Essa iniciativa não só proporcionou a eles uma valiosa experiência prática, mas também permitiu que contribuíssem com soluções inovadoras para a empresa. A HFA reconhece a importância do desenvolvimento de talentos e valoriza as contribuições dos estagiários.\r\n\r\nEm resumo, o novo sistema de quiosque da HFA representa um avanço significativo na experiência dos funcionários. Com recursos como chamadas para diferentes setores, acesso a vídeos informativos e uma biblioteca de aprendizado, o quiosque oferece uma maneira conveniente e eficiente para os funcionários acessarem informações e recursos importantes. A HFA está comprometida em fornecer um ambiente de trabalho moderno e eficaz, capacitando seus colaboradores por meio de soluções tecnológicas inovadoras.','Evento','2023-06-01','1685610040731.jpg',82),(21,'27th anniversary of HFA ','27th anniversary of HFA  27th anniversary of HFA  27th anniversary of HFA 27th anniversary of HFA 27th anniversary of HFA 27th anniversary of HFA 27th anniversary of HFA v27th anniversary of HFA 27th anniversary of HFA 27th anniversary of HFA 27th anniversary of HFA 27th anniversary of HFA 27th anniversary of HFA 27th anniversary of HFA 27th anniversary of HFA 27th anniversary of HFA 27th anniversary of HFA v27th anniversary of HFA 27th anniversary of HFA 27th anniversary of HFA ','Evento','2023-06-20','1687259520447.jpg',11);
/*!40000 ALTER TABLE `notev` ENABLE KEYS */;
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
