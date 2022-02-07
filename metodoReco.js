

articulos.forEach(function (element) {
    console.log(element.nombre);
})

var myval = articulos.find(function (element) {
    return element.costo > 3000;
})


var precio = articulos.map(function(element) {
    return element.costo;
})




var articulosfiltrados = articulos.filter(function(articulo) {
    return articulo.costo <= 500;
})