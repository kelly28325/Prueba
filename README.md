
# AndesFin – Microservicio de Simulación de Inversiones

Backend desarrollado para la Evaluación Conjunta de Arquitectura de Software.

## Tecnologías
- Node.js + Express
- PostgreSQL
- Sequelize ORM
- Docker & Docker Compose

## Ejecución
```bash
docker-compose up --build
```

Backend disponible en: http://localhost:3000

## Endpoints
- GET /usuarios
- GET /productos
- POST /simulaciones
- GET /simulaciones/:usuarioId
