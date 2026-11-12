/* FUNCIONES -------------

palabra reservada function

function saludar(){ // aca declaramos la funcion sin parametros 
    return
}

function saludar(nombre){
    console.log("Hola "+ nombre)
}

saludar() // aca la llamamos con el parentesis la ejecutamos 

se puede tambien hacer 

saludar(prompt("ingrese su nombre:"))


FUNCIONES ANONIMAS------------

no llevan nombre de funcion

const saludar = function(){
    console.log("hola a todos!")
}

saludar()



FUNCIONES FLECHA ------------

no se usa la palabra function, se reemplaza por =>

const saludar= () => {
    console.log("Hola")
}

saludar();

const saludar (nombre, apellido) => {
    return "Hola " + nombre + " " + apellido;
}

let resultado = saludar(Roman, arnedo) // Aca le pasamos los valores y 
los guardamos en una variable

console.log(resultado) // imprimimos la variable que contiene la funcion y sus
valores

*/
