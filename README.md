# AndesFin – Microservicio de Simulación de Inversiones

Backend desarrollado para la Evaluación Conjunta del Segundo Parcial – Arquitectura de Software (ESPE)

## Descripción
AndesFin es una fintech ficticia que permite simular inversiones óptimas según capital disponible, maximizando ganancias y garantizando trazabilidad.

## Tecnologías
- Node.js
- Express
- PostgreSQL
- Sequelize ORM
- Docker / Docker Compose

## Ejecución
docker-compose up --build

## Endpoints
GET /usuarios  
GET /productos  
POST /simulaciones  
GET /simulaciones/{usuarioId}


Ejemplo 1 – Simulación con Ganancias Óptimas
Request
{
  "usuario_id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "capital_disponible": 3000,
  "productos": [
    { "nombre": "ETF Global", "precio": 1500, "porcentaje_ganancia": 12 },
    { "nombre": "Fondo Acciones Tech", "precio": 1000, "porcentaje_ganancia": 8.5 },
    { "nombre": "Bonos Corporativos AAA", "precio": 500, "porcentaje_ganancia": 5.25 },
    { "nombre": "Fondo de Dividendos", "precio": 800, "porcentaje_ganancia": 6.75 }
  ]
}

🧮 Tabla 1 – Cálculo de Ganancia por Producto
Producto	Precio ($)	% Ganancia	Ganancia Estimada ($)
ETF Global	1500	12.00%	180.00
Fondo Acciones Tech	1000	8.50%	85.00
Fondo de Dividendos	800	6.75%	54.00
Bonos Corporativos AAA	500	5.25%	26.25
🧠 Tabla 2 – Combinaciones Evaluadas (Capital $3000)
Combinación	Costo Total ($)	Ganancia Total ($)	Capital Restante ($)
ETF + Acciones Tech	2500	265.00	500
ETF + Dividendos	2300	234.00	700
Acciones Tech + Dividendos + Bonos	2300	165.25	700
✅ Resultado
{
  "capital_disponible": 3000,
  "productos_seleccionados": [
    { "nombre": "ETF Global", "precio": 1500, "ganancia_esperada": 180 },
    { "nombre": "Fondo Acciones Tech", "precio": 1000, "ganancia_esperada": 85 }
  ],
  "costo_total": 2500,
  "capital_restante": 500,
  "ganancia_total": 265,
  "retorno_total_porcentaje": 10.6,
  "mensaje": "Simulación exitosa con ganancias óptimas"
}

📉 Ejemplo 2 – Simulación con Ganancias Mínimas
Tabla 3 – Opciones Viables (Capital $1000)
Producto	Precio ($)	% Ganancia	Ganancia ($)
Fondo Conservador	600	3.25%	19.50
Cuenta Ahorro	0	1.50%	0.00
Resultado
{
  "ganancia_total": 19.5,
  "mensaje": "Simulación con ganancias mínimas. Considere aumentar capital."
}


## Cumplimiento
✔ ORM obligatorio  
✔ UUID  
✔ Patrones DTO / Service / Repository  
✔ Auditoría y persistencia  
✔ Dockerizado
