var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];


function saludarEstudiante(estudiante) {
    console.log(`Hola, ${estudiante}`);
}

for (const estudiante of estudiantes) {
    saludarEstudiante(estudiante);
}




for (let index = 0; index < estudiantes.length; index++) {
    saludarEstudiante(estudiantes[index]);
}