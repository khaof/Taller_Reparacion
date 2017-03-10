-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 27-02-2017 a las 15:27:53
-- Versión del servidor: 10.1.16-MariaDB
-- Versión de PHP: 7.0.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `taller`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE `clientes` (
  `dnicliente` varchar(9) NOT NULL,
  `nombre` varchar(15) NOT NULL,
  `direccion` varchar(40) NOT NULL,
  `email` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `componentes`
--

CREATE TABLE `componentes` (
  `idcomponente` varchar(4) NOT NULL,
  `preciocomponente` int(4) NOT NULL,
  `nombre` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `electrodomesticos`
--

CREATE TABLE `electrodomesticos` (
  `numref` varchar(4) NOT NULL,
  `dnicliente` varchar(9) NOT NULL,
  `nombre` varchar(10) NOT NULL,
  `marca` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empleados`
--

CREATE TABLE `empleados` (
  `dniempleado` varchar(9) NOT NULL,
  `nombre` varchar(15) NOT NULL,
  `apellidos` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `lineacomponentes`
--

CREATE TABLE `lineacomponentes` (
  `idlinea` varchar(4) NOT NULL,
  `idcomponente` varchar(4) NOT NULL,
  `preciocomponente` int(4) NOT NULL,
  `cantidad` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `partesaverias`
--

CREATE TABLE `partesaverias` (
  `idaveria` varchar(4) NOT NULL,
  `fecha` date NOT NULL,
  `idelectrodomestico` varchar(4) NOT NULL,
  `idempleado` varchar(9) NOT NULL,
  `idlineacomponente` varchar(4) NOT NULL,
  `descripcion` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`dnicliente`);

--
-- Indices de la tabla `componentes`
--
ALTER TABLE `componentes`
  ADD PRIMARY KEY (`idcomponente`,`preciocomponente`) USING BTREE;

--
-- Indices de la tabla `electrodomesticos`
--
ALTER TABLE `electrodomesticos`
  ADD PRIMARY KEY (`numref`,`dnicliente`) USING BTREE,
  ADD KEY `dnicliente` (`dnicliente`);

--
-- Indices de la tabla `empleados`
--
ALTER TABLE `empleados`
  ADD PRIMARY KEY (`dniempleado`);

--
-- Indices de la tabla `lineacomponentes`
--
ALTER TABLE `lineacomponentes`
  ADD PRIMARY KEY (`idlinea`,`idcomponente`,`preciocomponente`) USING BTREE,
  ADD KEY `comp` (`idcomponente`,`preciocomponente`);

--
-- Indices de la tabla `partesaverias`
--
ALTER TABLE `partesaverias`
  ADD PRIMARY KEY (`idaveria`,`idelectrodomestico`,`idempleado`,`idlineacomponente`),
  ADD KEY `idempleado` (`idempleado`),
  ADD KEY `idlineacomponente` (`idlineacomponente`),
  ADD KEY `idelectrodomestico` (`idelectrodomestico`);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `electrodomesticos`
--
ALTER TABLE `electrodomesticos`
  ADD CONSTRAINT `dnicliente` FOREIGN KEY (`dnicliente`) REFERENCES `clientes` (`dnicliente`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `lineacomponentes`
--
ALTER TABLE `lineacomponentes`
  ADD CONSTRAINT `comp` FOREIGN KEY (`idcomponente`,`preciocomponente`) REFERENCES `componentes` (`idcomponente`, `preciocomponente`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `partesaverias`
--
ALTER TABLE `partesaverias`
  ADD CONSTRAINT `partesaverias_ibfk_1` FOREIGN KEY (`idempleado`) REFERENCES `empleados` (`dniempleado`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `partesaverias_ibfk_2` FOREIGN KEY (`idlineacomponente`) REFERENCES `lineacomponentes` (`idlinea`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `partesaverias_ibfk_3` FOREIGN KEY (`idelectrodomestico`) REFERENCES `electrodomesticos` (`numref`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
