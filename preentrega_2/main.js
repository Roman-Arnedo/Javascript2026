const usuarioCorrecto = "roman";
const claveCorrecta = "coder";
let accesoPermitido = false
let ingresoCancelado = false;
let intentos = 3;

while (intentos > 0 && !accesoPermitido && !ingresoCancelado) {

    let usuarioIngresado = prompt("Ingresá tu usuario: ");
    let claveIngresada = prompt("Ingresá tu clave: ");

    if (usuarioIngresado === null || claveIngresada === null) {
        
        ingresoCancelado = true
    } else if (usuarioIngresado.toLowerCase().trim() === usuarioCorrecto && claveIngresada.toLowerCase().trim() === claveCorrecta) {

        accesoPermitido = true

    } else if (usuarioIngresado.trim() === "" || claveIngresada.trim() === "") {
        console.log("No podes dejar campos vacios. Intentos restantes: " + intentos)

    } else {
        intentos--;
        console.log("Datos incorrectos, te quedan: " + intentos + " intentos");

        
    }
}

if (intentos === 0) {
    console.log("te quedaste sin intentos")
} else if (ingresoCancelado === true){
    console.log("El ingreso fue cancelado")
} else if (accesoPermitido === true){
    console.log("Acceso autorizado")
}


