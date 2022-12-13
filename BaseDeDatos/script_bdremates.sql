-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 12-12-2022 a las 21:34:56
-- Versión del servidor: 5.7.36
-- Versión de PHP: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bdremates`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `articulo`
--

DROP TABLE IF EXISTS `articulo`;
CREATE TABLE IF NOT EXISTS `articulo` (
  `idArticulo` int(11) NOT NULL AUTO_INCREMENT,
  `nobreArticulo` varchar(70) NOT NULL,
  `marcaArticulo` varchar(40) DEFAULT NULL,
  `descripcionArticulo` varchar(200) DEFAULT NULL,
  `valorArticulo` double DEFAULT NULL,
  `Foto` varchar(50) DEFAULT NULL,
  `idCategoria_fk` int(11) DEFAULT NULL,
  `idCliente_fk` int(11) DEFAULT NULL,
  PRIMARY KEY (`idArticulo`),
  KEY `idCategoria_fk` (`idCategoria_fk`),
  KEY `idCliente_fk` (`idCliente_fk`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoria`
--

DROP TABLE IF EXISTS `categoria`;
CREATE TABLE IF NOT EXISTS `categoria` (
  `idCategoria` int(11) NOT NULL,
  `nobreCategoria` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`idCategoria`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `categoria`
--

INSERT INTO `categoria` (`idCategoria`, `nobreCategoria`) VALUES
(1, 'Electrodoméstico'),
(2, 'Calzado'),
(3, 'Ropa'),
(4, 'Tecnología'),
(5, 'Mueble'),
(6, 'Decoración '),
(7, 'Implementos de cocina '),
(8, 'Herramientas '),
(9, 'Juguetes'),
(10, 'Vehículo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cliente`
--

DROP TABLE IF EXISTS `cliente`;
CREATE TABLE IF NOT EXISTS `cliente` (
  `idCliente` int(11) NOT NULL AUTO_INCREMENT,
  `nombreCliente` varchar(60) NOT NULL,
  `apellidoCliente` varchar(60) NOT NULL,
  `cedulaCliente` varchar(12) NOT NULL,
  `contrasenaCliente` varchar(20) NOT NULL,
  `nombreUsuario` varchar(40) NOT NULL,
  `nivelAcceso` tinyint(4) NOT NULL,
  PRIMARY KEY (`idCliente`),
  UNIQUE KEY `nombreUsuario` (`nombreUsuario`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `cliente`
--

INSERT INTO `cliente` (`idCliente`, `nombreCliente`, `apellidoCliente`, `cedulaCliente`, `contrasenaCliente`, `nombreUsuario`, `nivelAcceso`) VALUES
(1, 'Administrador', 'Admin', '123456', '123456', 'Admin@email.com', 1),
(3, 'carlos', 'Perez', '123456789', '147852', 'caperez@correo.com', 0),
(12, 'usuario', 'dos', '456', '123', '456@correo.com', 0),
(5, 'usuario', 'uno', '1245', '123456', '123@correo.com', 0),
(10, 'Luis', 'Ortiz', '4562147', '147', '1234@correo.com', 1),
(11, 'admin1', 'Uno', '963', '258', '258@correo.com', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pago`
--

DROP TABLE IF EXISTS `pago`;
CREATE TABLE IF NOT EXISTS `pago` (
  `idPago` int(11) NOT NULL AUTO_INCREMENT,
  `fechaPago` datetime NOT NULL,
  `valorPago` double NOT NULL,
  `idVenta_fk` int(11) DEFAULT NULL,
  PRIMARY KEY (`idPago`),
  KEY `idVenta_fk` (`idVenta_fk`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `puja`
--

DROP TABLE IF EXISTS `puja`;
CREATE TABLE IF NOT EXISTS `puja` (
  `idPuja` int(11) NOT NULL AUTO_INCREMENT,
  `valorMayor` double NOT NULL,
  `fechaOferta` datetime NOT NULL,
  `idRemate_fk` int(11) DEFAULT NULL,
  `idClienteOfertante_fk` int(11) DEFAULT NULL,
  PRIMARY KEY (`idPuja`),
  KEY `idRemate_fk` (`idRemate_fk`),
  KEY `idClienteOfertante_fk` (`idClienteOfertante_fk`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `remate`
--

DROP TABLE IF EXISTS `remate`;
CREATE TABLE IF NOT EXISTS `remate` (
  `idRemate` int(11) NOT NULL AUTO_INCREMENT,
  `fechaInicio` datetime DEFAULT NULL,
  `fechaCierre` datetime DEFAULT NULL,
  `valorInicial` double DEFAULT NULL,
  `idArticulo_fk` int(11) DEFAULT NULL,
  PRIMARY KEY (`idRemate`),
  KEY `idArticulo_fk` (`idArticulo_fk`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sancion`
--

DROP TABLE IF EXISTS `sancion`;
CREATE TABLE IF NOT EXISTS `sancion` (
  `idSancion` int(11) NOT NULL AUTO_INCREMENT,
  `fechaInicioSancion` datetime NOT NULL,
  `fechaFinSancion` datetime NOT NULL,
  `idCliente_fk` int(11) DEFAULT NULL,
  PRIMARY KEY (`idSancion`),
  KEY `idCliente_fk` (`idCliente_fk`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `venta`
--

DROP TABLE IF EXISTS `venta`;
CREATE TABLE IF NOT EXISTS `venta` (
  `idVenta` int(11) NOT NULL AUTO_INCREMENT,
  `valorVenta` double NOT NULL,
  `fechaVenta` datetime NOT NULL,
  `fechaLimite` datetime NOT NULL,
  `clienteComprador_fk` int(11) DEFAULT NULL,
  `clienteVendedor_fk` int(11) DEFAULT NULL,
  PRIMARY KEY (`idVenta`),
  KEY `clienteComprador_fk` (`clienteComprador_fk`),
  KEY `clienteVendedor_fk` (`clienteVendedor_fk`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;







