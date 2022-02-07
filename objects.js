function auto(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}



for (let index = 0; index < 30; index++) {
    const miauto = new auto(`Marca ${index}`, `Modelo ${index}`, `Anio ${index}`);
    console.log(miauto);
}
