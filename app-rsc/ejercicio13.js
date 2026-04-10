const productos = [
{ nombre: "Teclado", precio: 120000 },
{ nombre: "Mouse", precio: 50000 },
{ nombre: "Monitor", precio: 800000 },
{ nombre: "USB", precio: 30000 }
];

const precio = productos.sort((a, b) => a.precio - b.precio);

console.log(precio);
