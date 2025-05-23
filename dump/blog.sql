-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 23/05/2025 às 04:04
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `blog`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `artigo`
--

CREATE TABLE `artigo` (
  `id` int(11) NOT NULL,
  `titulo` varchar(191) NOT NULL,
  `conteudo` varchar(191) NOT NULL,
  `imagemDestacada` varchar(191) DEFAULT NULL,
  `publicadoEm` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `atualizadoEm` datetime(3) NOT NULL,
  `autorId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `artigo`
--

INSERT INTO `artigo` (`id`, `titulo`, `conteudo`, `imagemDestacada`, `publicadoEm`, `atualizadoEm`, `autorId`) VALUES
(1, 'Título atualizado para 1', 'Conteúdo atualizado para 1', NULL, '2025-05-21 01:32:29.465', '2025-05-21 02:04:02.672', 1),
(5, 'Título do artigo - Teste 1', 'Conteúdo do artigo - Teste 1', NULL, '2025-05-22 15:50:54.628', '2025-05-22 15:50:54.628', 4),
(6, 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ', 'https://cdn-icons-png.flaticon.com/512/616/616408.png', '2025-05-22 21:16:46.865', '2025-05-22 21:16:46.865', 7),
(7, 'Sunt in culpa qui officia', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \nUt enim ad minim veniam, quis nostrud exercitation ullamco laboris', 'imagem1', '2025-05-22 21:42:49.610', '2025-05-22 21:42:49.610', 7),
(8, 'Lorem Ipsum (editado)', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \nUt enim ad minim veniam, quis nostrud exercitation ullamco laboris', 'Lorem', '2025-05-22 22:38:11.099', '2025-05-23 01:24:28.422', 2),
(9, 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \nUt enim ad minim veniam, quis nostrud exercitation ullamco laboris', 'teste', '2025-05-23 01:22:00.239', '2025-05-23 01:22:00.239', 2);

-- --------------------------------------------------------

--
-- Estrutura para tabela `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `nome` varchar(191) NOT NULL,
  `email` varchar(191) NOT NULL,
  `senha` varchar(191) NOT NULL,
  `criadoEm` datetime(3) NOT NULL DEFAULT current_timestamp(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `user`
--

INSERT INTO `user` (`id`, `nome`, `email`, `senha`, `criadoEm`) VALUES
(1, 'Teste1', 'teste1@email.com', '$2b$10$P2GdA6HHL6j9yotAvLl0leMNbbFzmXRZnfatC0zEdz50/KNgFnY9C', '2025-05-21 00:44:41.346'),
(2, 'Teste Edit', 'teste@email.com', '$2b$10$owBJxqBW04rBTeFDIQ9M8ukuceyg7esnxAk1SixTAZSKIoZ4PI5ym', '2025-05-22 11:26:09.742'),
(3, 'daniel bertoloto', 'daniel@email.com', '$2b$10$wJmQK9j1NNOuU2Pw.XcOJ.M3bd4UrO.xqe266UIvaZ4drZDsreAm6', '2025-05-22 15:06:27.805'),
(4, 'Teste3', 'teste3@email.com', '$2b$10$6wMJzOTBRclVuFUF0.kLFO8O.ZR3bQLF1SM3sy2/XitNZHqnQb7U.', '2025-05-22 15:25:22.490'),
(5, 'Teste4', 'teste4@email.com', '$2b$10$cNL5an0jvOE/7hIUUAjE2.bzeCXXNvZ0GEiknE6L46K15Zb1DEGpG', '2025-05-22 17:49:04.597'),
(6, 'Teste Teste', 'teste.teste@email.com', '$2b$10$I2494za2FD1RCcN4ZLw2i.UCmzfciogK9zioPoTrD7f1tk/h8WLLe', '2025-05-22 19:30:50.577'),
(7, 'Teste5', 'teste5@email.com', '$2b$10$ZRz3WAyuzSXODdvz1s3FRO17gBGDsgsYFPtSI6EfSyxv8GZzMMiQ6', '2025-05-22 19:40:59.115'),
(8, 'Teste 6', 'email6@email.com', '$2b$10$/qmG5ARl9tqKao6qixJfDeF82s5HeuL.9h8d/iTJBjtKw1FvJjbJi', '2025-05-22 19:43:00.017');

-- --------------------------------------------------------

--
-- Estrutura para tabela `_prisma_migrations`
--

CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) NOT NULL,
  `checksum` varchar(64) NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) NOT NULL,
  `logs` text DEFAULT NULL,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `applied_steps_count` int(10) UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `_prisma_migrations`
--

INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES
('e6c9f297-4042-4a68-8bbc-f21ccbbb1a7f', '93ff84806acf14da95f969cd57e6eeaaaaf8b335f17e993af48cbe2e61b4564c', '2025-05-20 19:36:24.109', '20250520193624_init', NULL, NULL, '2025-05-20 19:36:24.059', 1);

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `artigo`
--
ALTER TABLE `artigo`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Artigo_autorId_fkey` (`autorId`);

--
-- Índices de tabela `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `User_email_key` (`email`);

--
-- Índices de tabela `_prisma_migrations`
--
ALTER TABLE `_prisma_migrations`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `artigo`
--
ALTER TABLE `artigo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de tabela `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Restrições para tabelas despejadas
--

--
-- Restrições para tabelas `artigo`
--
ALTER TABLE `artigo`
  ADD CONSTRAINT `Artigo_autorId_fkey` FOREIGN KEY (`autorId`) REFERENCES `user` (`id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
