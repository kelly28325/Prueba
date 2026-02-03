
function optimizar(capital, productos) {
  let mejor = { ganancia: 0, productos: [], costo: 0 };

  const n = productos.length;
  for (let i = 1; i < (1 << n); i++) {
    let costo = 0, ganancia = 0, seleccion = [];
    for (let j = 0; j < n; j++) {
      if (i & (1 << j)) {
        costo += productos[j].precio;
        ganancia += productos[j].precio * productos[j].porcentaje_ganancia / 100;
        seleccion.push(productos[j]);
      }
    }
    if (costo <= capital && ganancia > mejor.ganancia) {
      mejor = { ganancia, productos: seleccion, costo };
    }
  }
  return mejor;
}

module.exports = { optimizar };
