const planes = `Seguros de Robo:
1) plan basico
2) plan medio
3) plan full
seleccione plan`;

const opciones = `Ingrese una opcion valida
1)registrar cliente
2)ofrecer planes
3)dar de baja plan
4)ver cliente y plan
5)salir`;

//datos del cliente 
let nombre;
let apellido;
let documento;
let edad;
// plan seleccionado
let planSeleccionado;

const obtenerNumeroValido = (descripcion)=>{

    let numero = parseInt( prompt(`${descripcion}:`).trim() )
    while(isNaN(numero) || (!isNaN(numero) && numero <= 0 )){
        numero = parseInt( prompt(`campo ${descripcion} es invalido, ingrese nuevamente :`) )
    }
    return numero;
}

const obtenerTextoValido = (descripcion)=>{

    let texto =  prompt(`${descripcion}:`).trim()
    while(texto.length == 0){
        texto =  prompt(`campo ${descripcion} es invalido, ingrese nuevamente :`) 
    }
    return texto;
}

const obtenerOpcionValida = ()=>{

    let seleccion = 0;
    do{
        seleccion = parseInt( prompt(opciones))
    }while(isNaN(seleccion)|| 0 >= seleccion || seleccion>5)

    return seleccion;
}
const registrarCliente=()=>{
    nombre = obtenerTextoValido("nombre");
    apellido = obtenerTextoValido("apellido");
    documento =  obtenerNumeroValido("documento");
    edad = obtenerNumeroValido("edad");
}



const detallePlan=(multiplicador)=>{
    const sumaAsegurada = 1000*multiplicador;
    const premio = sumaAsegurada*0.1;
    const plan = `plan ${(multiplicador==1?"basico":multiplicador==2?"medio":"full")}
                * premio a pagar $${premio}
                * suma asegurada $${sumaAsegurada}`
    return plan;
}


const comprarPlan=(comprarPlanCodigo)=>{
    if(nombre != undefined && apellido != undefined){
        if(planSeleccionado == undefined){
            if(confirm("comprar el plan previamente visto ?")){
                planSeleccionado = comprarPlanCodigo;
                alert("se compro el plan :" + detallePlan(comprarPlanCodigo))
            }else{
                alert("no se compro el plan");
            }

        }else{
            alert("error, ya tienes un seguro")
        }
    }else{
        alert("error, registre un cliente para comprar un plan")
    }

}

const ofrecerPlanes=()=>{

   let seleccion = 0;
   seleccion = parseInt( prompt(planes))
   switch (seleccion){
        case 1:
            alert(detallePlan(1));
            comprarPlan(1)
            break;
        case 2:
            alert(detallePlan(2))
            comprarPlan(2)
            break;
        case 3:
            alert(detallePlan(3))
            comprarPlan(3)
            break;
        default:
            alert("opcion incorrecta");
            break;   
        }
    }
 
const darDeBajaPlan=()=>{
    if(planSeleccionado != undefined){
        planSeleccionado = undefined;
        alert("se desvinculo el plan")
    }else{
        alert("el cliente no tiene seguro contratado")
    }

}
const verClienteYPlan=()=>{
    let detalle="";
    if(nombre != undefined && apellido != undefined){
        detalle = `${nombre} ${apellido} `
    }else{
        detalle = `no hay cliente registrado`
    }
    if(planSeleccionado != undefined){
        detalle = `${detalle}, ${detallePlan(planSeleccionado)}`
    }else{
        detalle = `${detalle}, no tiene plan contratado`
    }
    alert(detalle);
}


const operacion = ()=>{
    let opcion = 0;
    do {
        opcion =  obtenerOpcionValida();
        switch (opcion){
            case 1:
                registrarCliente();
                break;
            case 2:
                ofrecerPlanes();
                break;
            case 3:
                darDeBajaPlan();
                break;                        
            case 4:
                verClienteYPlan();
                break;   
            default:
                break;   
            }
    } while (opcion !== 5 );
}


operacion();