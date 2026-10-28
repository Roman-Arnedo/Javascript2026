let nombre= prompt("Bienvenido a latalla! Como te llamas?")
let edad= prompt("Cuantos años tenes?")
let presupuesto = Number(prompt("¿Cuánto dinero tenés para comprar el perfume? Ingresá el valor sin puntos. Ejemplo: 30000 (ingrese un numero del 0 al 100000)"))

console.log("Tu presupuesto es de " + presupuesto)

const precio= 50000
const DineroRestante= presupuesto - precio

const saludo= "Hola " + nombre + ", tenés " + edad + " años."
console.log (saludo)

const compra= "El perfume cuesta $" + precio + " y al comprarlo te quedarían $" + DineroRestante
console.log(compra);

console.log("Si tu capital restante da negativor, esa es la cantidad de dinero que te falta para adquirir el perfume")
