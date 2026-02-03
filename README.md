# AndesFin – Microservicio de Simulación de Inversiones

Backend desarrollado para la **Evaluación Conjunta del Segundo Parcial – Arquitectura de Software (ESPE)**

---

## 📌 Descripción

**AndesFin** es una fintech ficticia que permite simular inversiones óptimas según el capital disponible del usuario, maximizando las ganancias y garantizando **trazabilidad, auditoría y repetibilidad** de cada simulación.

---

## 🛠️ Tecnologías Utilizadas

- Node.js  
- Express  
- PostgreSQL  
- Sequelize ORM  
- Docker / Docker Compose  

---

## 🚀 Ejecución del Proyecto

```bash
docker-compose up --build
```
Backend disponible en: http://localhost:3000


Endpoints Disponibles
GET /usuarios
GET /productos
POST /simulaciones
GET /simulaciones/{usuarioId}

## Ejemplo 1 – Simulación con Ganancias Óptimas

### Request Body

```json
{
  "usuario_id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "capital_disponible": 3000,
  "productos": [
    {
      "nombre": "ETF Global",
      "precio": 1500,
      "porcentaje_ganancia": 12
    },
    {
      "nombre": "Fondo Acciones Tech",
      "precio": 1000,
      "porcentaje_ganancia": 8.5
    },
    {
      "nombre": "Bonos Corporativos AAA",
      "precio": 500,
      "porcentaje_ganancia": 5.25
    },
    {
      "nombre": "Fondo de Dividendos",
      "precio": 800,
      "porcentaje_ganancia": 6.75
    }
  ]
}

| Producto               | Precio ($) | % Ganancia | Ganancia Estimada ($) |
| ---------------------- | ---------- | ---------- | --------------------- |
| ETF Global             | 1500       | 12.00%     | 180.00                |
| Fondo Acciones Tech    | 1000       | 8.50%      | 85.00                 |
| Fondo de Dividendos    | 800        | 6.75%      | 54.00                 |
| Bonos Corporativos AAA | 500        | 5.25%      | 26.25                 |


Tabla 2 – Combinaciones Evaluadas (Capital $3000)

| Combinación                        | Costo Total ($) | Ganancia Total ($) | Capital Restante ($) |
| ---------------------------------- | --------------- | ------------------ | -------------------- |
| ETF + Acciones Tech                | 2500            | 265.00             | 500                  |
| ETF + Dividendos                   | 2300            | 234.00             | 700                  |
| Acciones Tech + Dividendos + Bonos | 2300            | 165.25             | 700                  |


