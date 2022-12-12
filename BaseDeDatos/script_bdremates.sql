CREATE DATABASE BDremates;
USE  BDremates;

CREATE TABLE cliente(
idCliente INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
nombreCliente VARCHAR(60) NOT NULL,
apellidoCliente VARCHAR(60) NOT NULL,
cedulaCliente VARCHAR(12) NOT NULL,
contrasenaCliente VARCHAR(20) NOT NULL,
nombreUsuario VARCHAR(40) NOT NULL UNIQUE
);

CREATE TABLE categoria(
idCategoria INT NOT NULL PRIMARY KEY,
nobreCategoria VARCHAR(30)
);

CREATE TABLE sancion(
idSancion INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
fechaInicioSancion DATETIME NOT NULL,
fechaFinSancion DATETIME NOT NULL,
idCliente_fk INT,
 FOREIGN KEY (idCliente_fk) REFERENCES cliente(idCliente)
);
CREATE TABLE articulo(
idArticulo INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
nobreArticulo VARCHAR(70) NOT NULL,
marcaArticulo VARCHAR(40),
descripcionArticulo VARCHAR(200),
valorArticulo DOUBLE,
idCategoria_fk INT,
idCliente_fk INT,
 FOREIGN KEY (idCategoria_fk) REFERENCES categoria(idCategoria),
FOREIGN KEY (idCliente_fk) REFERENCES cliente(idCliente)
);
CREATE TABLE remate(
idRemate INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
fechaInicio DATETIME,
fechaCierre DATETIME,
valorInicial DOUBLE,
idArticulo_fk INT,
FOREIGN KEY (idArticulo_fk) REFERENCES articulo(idArticulo)
);

CREATE TABLE puja(
idPuja INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
valorMayor DOUBLE NOT NULL,
fechaOferta DATETIME NOT NULL,
idRemate_fk INT, 
idClienteOfertante_fk INT, 
FOREIGN KEY (idRemate_fk) REFERENCES remate(idRemate),
FOREIGN KEY (idClienteOfertante_fk) REFERENCES  cliente(idCliente)
);

CREATE TABLE venta(
idVenta INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
valorVenta DOUBLE NOT NULL,
fechaVenta DATETIME NOT NULL,
fechaLimite DATETIME NOT NULL,
clienteComprador_fk INT,
clienteVendedor_fk INT, 
FOREIGN KEY (clienteComprador_fk) REFERENCES cliente(idCliente),
FOREIGN KEY (clienteVendedor_fk) REFERENCES cliente(idCliente)
);

CREATE TABLE pago(
idPago INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
fechaPago DATETIME NOT NULL,
valorPago DOUBLE NOT NULL,
idVenta_fk INT,
FOREIGN KEY (idVenta_fk) REFERENCES venta(idVenta) 
)






