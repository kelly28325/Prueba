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

## Ejemplo de Simulación (Resumen)
Capital: $3000  
Productos seleccionados:
- ETF Global ($1500) → $180
- Fondo Acciones Tech ($1000) → $85

Ganancia total: $265  
Retorno total: 10.6%

## Cumplimiento
✔ ORM obligatorio  
✔ UUID  
✔ Patrones DTO / Service / Repository  
✔ Auditoría y persistencia  
✔ Dockerizado
