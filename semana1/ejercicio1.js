/*const num1=6, num2=10;
let suma = num1+num2;
console.log(`La suma entre ${num1} y ${num2} es ${suma}`);*/
/*funcion sumar */
const sum = (num1, num2) => {
    let suma = num1 + num2
    console.log(`La suma entre ${num1} y ${num2} es ${suma}`);
}
/*funcion resta */
const res = (num1, num2) => {
    let resta = num1 - num2
    console.log(`La resta entre ${num1} y ${num2} es ${resta}`);
}
/*funcion multiplicar */
const mult = (num1, num2) => {
    let multiplica = num1 * num2
    console.log(`La multiplicacion entre ${num1} y ${num2} es ${multiplica}`);
}
/*funcion division */
const div = (num1, num2) => {
    let dividir = num1 / num2
    console.log(`La division entre ${num1} y ${num2} es ${dividir}`);
}

/*funcion de potenciacion*/
const pot = (num1, num2) => {
    let potencia = Math.pow(num1, num2)
    console.log(`La potencia de ${num1} elevado a ${num2} es ${potencia}`);
}

/*funcion de radicacion*/
const rad = (num1) => {
    let radica = Math.sqrt(num1)
    console.log(`La raiz cuadrada de ${num1} es ${radica}`);
}
const operaciones = {}
    operaciones.suma = sum
    operaciones.resta = res
    operaciones.multiplicacion = mult
    operaciones.division = div
    operaciones.potencia = pot
    operaciones.radicacion = rad

    module.exports=operaciones