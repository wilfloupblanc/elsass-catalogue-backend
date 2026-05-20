-- phpMyAdmin SQL Dump
-- version 5.2.3
-- https://www.phpmyadmin.net/
--
-- Hôte : db
-- Généré le : mer. 20 mai 2026 à 10:44
-- Version du serveur : 9.6.0
-- Version de PHP : 8.3.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `elsass_catalogue`
--

-- --------------------------------------------------------

--
-- Structure de la table `circuits`
--

CREATE TABLE `circuits` (
  `id` bigint NOT NULL,
  `name` varchar(150) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `difficulty` tinyint DEFAULT NULL,
  `photo_url` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `is_active` tinyint(1) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `length_m` int DEFAULT NULL,
  `country` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `country_code` varchar(2) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `fooditems`
--

CREATE TABLE `fooditems` (
  `id` bigint NOT NULL,
  `name` varchar(150) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `photo_url` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `category` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `price` float DEFAULT NULL,
  `is_active` tinyint(1) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `migrations`
--

CREATE TABLE `migrations` (
  `version` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `executed_at` datetime NOT NULL,
  `execution_time` int DEFAULT NULL,
  `batch` int NOT NULL,
  `squashed` tinyint(1) DEFAULT '0',
  `backup_path` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `migrations`
--

INSERT INTO `migrations` (`version`, `executed_at`, `execution_time`, `batch`, `squashed`, `backup_path`) VALUES
('1779110374170', '2026-05-18 13:19:43', 764, 1, 0, NULL),
('1779110522520', '2026-05-18 13:22:13', 524, 2, 0, '/home/wilf_loupblanc/Bureau/elsass-simracing/elsass_catalogue_back/backups/backup_1779110522520_1779110532989.sql.gz'),
('1779202982394', '2026-05-19 15:03:13', 3, 3, 0, NULL),
('1779203271632', '2026-05-19 15:07:56', 51, 4, 0, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `migration_lock`
--

CREATE TABLE `migration_lock` (
  `id` int NOT NULL,
  `locked_at` datetime NOT NULL,
  `hostname` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `process_id` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `resetpassword`
--

CREATE TABLE `resetpassword` (
  `id` bigint NOT NULL,
  `user` bigint DEFAULT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `requested_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `id` bigint NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `role` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `email`, `password`, `role`, `created_at`) VALUES
(1, 'tristangrandjean3@gmail.com', '$2b$10$1gjCU3m.sFEEO4BI5tviRO6.jVHeCAKqV0R17opfQ1xpq5VMUFHk.', 'ROLE_ADMIN', '2026-05-20 12:43:54');

-- --------------------------------------------------------

--
-- Structure de la table `vehiclecategories`
--

CREATE TABLE `vehiclecategories` (
  `id` bigint NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `vehiclecategories`
--

INSERT INTO `vehiclecategories` (`id`, `name`, `created_at`) VALUES
(1, 'GT2', '2026-05-20 12:43:54'),
(2, 'GT3', '2026-05-20 12:43:54'),
(3, 'GT4', '2026-05-20 12:43:54'),
(4, 'Hypercar', '2026-05-20 12:43:54'),
(5, 'DTM', '2026-05-20 12:43:54'),
(6, 'Cup', '2026-05-20 12:43:54'),
(7, 'Historique', '2026-05-20 12:43:54'),
(8, 'Autres', '2026-05-20 12:43:54'),
(9, 'Formula 1', '2026-05-20 12:43:54'),
(10, 'Formula 2', '2026-05-20 12:43:54'),
(11, 'Formula 4', '2026-05-20 12:43:54'),
(12, 'Super Formula', '2026-05-20 12:43:54'),
(13, 'IndyCar', '2026-05-20 12:43:54'),
(14, 'LMP2', '2026-05-20 12:43:54'),
(15, 'NASCAR', '2026-05-20 12:43:54'),
(16, 'Drift', '2026-05-20 12:43:54');

-- --------------------------------------------------------

--
-- Structure de la table `vehicles`
--

CREATE TABLE `vehicles` (
  `id` bigint NOT NULL,
  `category_id` bigint DEFAULT NULL,
  `name` varchar(150) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `photo_url` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `max_speed` int DEFAULT NULL,
  `horsepower` int DEFAULT NULL,
  `torque` int DEFAULT NULL,
  `power_to_weight` float DEFAULT NULL,
  `country` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `year` int DEFAULT NULL,
  `difficulty` tinyint DEFAULT NULL,
  `is_active` tinyint(1) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `country_code` varchar(2) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `circuits`
--
ALTER TABLE `circuits`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `fooditems`
--
ALTER TABLE `fooditems`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`version`),
  ADD KEY `idx_batch` (`batch`),
  ADD KEY `idx_squashed` (`squashed`);

--
-- Index pour la table `migration_lock`
--
ALTER TABLE `migration_lock`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `resetpassword`
--
ALTER TABLE `resetpassword`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `idx_resetpassword_user` (`user`),
  ADD UNIQUE KEY `idx_resetpassword_token` (`token`),
  ADD KEY `fk_resetpassword_user` (`user`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `idx_user_email` (`email`);

--
-- Index pour la table `vehiclecategories`
--
ALTER TABLE `vehiclecategories`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `idx_vehiclecategories_name` (`name`);

--
-- Index pour la table `vehicles`
--
ALTER TABLE `vehicles`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `circuits`
--
ALTER TABLE `circuits`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `fooditems`
--
ALTER TABLE `fooditems`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `migration_lock`
--
ALTER TABLE `migration_lock`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `resetpassword`
--
ALTER TABLE `resetpassword`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `vehiclecategories`
--
ALTER TABLE `vehiclecategories`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT pour la table `vehicles`
--
ALTER TABLE `vehicles`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `resetpassword`
--
ALTER TABLE `resetpassword`
  ADD CONSTRAINT `fk_resetpassword_user` FOREIGN KEY (`user`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
