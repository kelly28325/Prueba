
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Tabla de Usuarios
CREATE TABLE IF NOT EXISTS usuarios (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  nombre VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  capital_disponible DECIMAL(10,2) NOT NULL DEFAULT 0,
  fecha_creacion TIMESTAMP DEFAULT now()
);

-- Tabla de Productos Financieros
CREATE TABLE IF NOT EXISTS productos_financieros (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  nombre VARCHAR(255) NOT NULL,
  descripcion TEXT,
  porcentaje DECIMAL(5,2) NOT NULL,
  costo DECIMAL(10,2) NOT NULL,
  retorno DECIMAL(5,2) NOT NULL,
  activo BOOLEAN DEFAULT TRUE,
  fecha_creacion TIMESTAMP DEFAULT now()
);

-- Tabla de Simulaciones
CREATE TABLE IF NOT EXISTS simulaciones (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  usuario_id UUID NOT NULL,
  fecha_simulacion TIMESTAMP NOT NULL,
  capital_disponible DECIMAL(10,2) NOT NULL,
  ganancia_total DECIMAL(10,2) NOT NULL DEFAULT 0,
  fecha_creacion TIMESTAMP DEFAULT now(),
  FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE
);

-- Tabla de relación muchos a muchos entre Simulaciones y Productos
CREATE TABLE IF NOT EXISTS simulaciones_productos (
  simulacion_id UUID NOT NULL,
  producto_id UUID NOT NULL,
  cantidad DECIMAL(10,2) NOT NULL,
  PRIMARY KEY (simulacion_id, producto_id),
  FOREIGN KEY (simulacion_id) REFERENCES simulaciones(id) ON DELETE CASCADE,
  FOREIGN KEY (producto_id) REFERENCES productos_financieros(id) ON DELETE CASCADE
);
