-- Insertar Usuarios (mínimo 5)
INSERT INTO usuarios (nombre, email, capital_disponible) VALUES
('Juan García', 'juan.garcia@example.com', 50000.00),
('María López', 'maria.lopez@example.com', 75000.00),
('Carlos Rodríguez', 'carlos.rodriguez@example.com', 100000.00),
('Ana Martínez', 'ana.martinez@example.com', 60000.00),
('Pedro Sánchez', 'pedro.sanchez@example.com', 85000.00),
('Laura Fernández', 'laura.fernandez@example.com', 95000.00),
('David Torres', 'david.torres@example.com', 120000.00),
('Elena Gómez', 'elena.gomez@example.com', 70000.00)
ON CONFLICT (email) DO NOTHING;

-- Insertar Productos Financieros (mínimo 8)
INSERT INTO productos_financieros (nombre, descripcion, porcentaje, costo, retorno, activo) VALUES
('Fondo de Acciones USA', 'Inversión en empresas estadounidenses de gran capitalización', 15.50, 1000.00, 12.50, true),
('Bonos del Tesoro', 'Bonos de gobierno con bajo riesgo y retorno estable', 4.25, 500.00, 3.75, true),
('Fondos Emergentes', 'Inversión en mercados emergentes con alto potencial de crecimiento', 22.30, 2000.00, 18.75, true),
('ETF Tecnológico', 'Fondo cotizado en tecnología e innovación', 28.75, 1500.00, 24.50, true),
('Renta Fija Corporativa', 'Bonos corporativos de empresas con rating AAA', 6.80, 800.00, 5.50, true),
('Oro y Materiales Preciosos', 'Inversión en materiales preciosos y metales', 11.20, 3000.00, 9.80, true),
('Fondos Inmobiliarios', 'Inversión en propiedades y REITs', 9.50, 2500.00, 7.80, true),
('Criptomonedas Estables', 'Cartera diversificada de activos digitales', 35.45, 5000.00, 31.20, true)
ON CONFLICT (nombre) DO NOTHING;
