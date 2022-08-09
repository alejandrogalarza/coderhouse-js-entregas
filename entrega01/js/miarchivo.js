let nombre = prompt("cual es tu nombre:")
let apellido = prompt("cual es tu apellido:")
let edad = parseInt( prompt("edad:") )

 
while(isNaN(edad) || (!isNaN(edad) && edad <= 0 )){
    edad = parseInt( prompt("la edad debe ser valida, edad :") )
}

alert(`Hola ${nombre} ${apellido}`)
const opciones = "\n1)ejemplor de for \n2)ejemplo de while \n3)ejemplo de operaciones matematicas\n4)\t Salir"
do{
    let seleccion = parseInt( prompt(opciones) )

    switch (seleccion){
        case 1:
            alert("se itera un for de 0 a 10 con el nombre \n concatena nombre 10 veces");
            let nombreRepetido=""
            for (let index = 0; index < 10; index++) {
                nombreRepetido +=` ${nombre}`
            }
            alert(`resultado: ${nombreRepetido}`)
            break;
        case 2:
            alert("se itera un while con el apellido hasta que aparezca 10 veces");
            let contador = 0
            while(true){
                if(contador<10){
                    alert(`${contador} - ${nombre}`)
                }else{
                    break;
                }
                contador++
            }
            break;        
        case 3:
            alert("operaciones matematicas simples, \nedad + 10\nedad por edad\n edad por 5\nedad dividido entre 2");
            let suma = edad + 10
            let multiplicacion = edad*edad
            let multiplicacionPor5 = edad * 5
            let entreDos = edad / 2.0
            alert(`sumade edad mas 10 : ${suma}\n multiplicacion de edad por si misma : ${multiplicacion}\n multiplicacion de edad por 5 : ${multiplicacionPor5}\nedad divido entre 2 : ${entreDos}`)
            break;
        case 4:
            alert("que tenga un buen dia ");
            break;
                            
        default:
            break;   
    }
 
}while(seleccion!=4)

alert("fin del programa")