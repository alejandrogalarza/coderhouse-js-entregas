

class Seguros{
    constructor(){
        this.planes = `Seguros de Robo:
        1) plan basico
        2) plan medio
        3) plan full
        seleccione plan`;
    
        this.opciones = `Ingrese una opcion valida
        1)registrar cliente
        2)ofrecer planes
        3)dar de baja plan
        4)ver cliente y plan
        5)salir`;
        this.planSeleccionado = undefined;

    }

    detallePlan(multiplicador){
        const sumaAsegurada = 1000*multiplicador;
        const premio = sumaAsegurada*0.1;
        const plan = `plan ${(multiplicador==1?"basico":multiplicador==2?"medio":"full")}
                    * premio a pagar $${premio}
                    * suma asegurada $${sumaAsegurada}`
        return plan;
    }

    darDeBajaPlan(){
        if(this.planSeleccionado != undefined){
            this.planSeleccionado = undefined;
            alert("se desvinculo el plan")
        }else{
            alert("el cliente no tiene seguro contratado")
        }
}
}
class Cliente{
    constructor(){
        this.nombre;
        this.apellido;
        this.documento;
        this.edad;
    }

    registrarCliente(){
        this.nombre = this.obtenerTextoValido("nombre");
        this.apellido = this.obtenerTextoValido("apellido");
        this.documento =  this.obtenerNumeroValido("documento");
        this.edad = this.obtenerNumeroValido("edad");
    }

    obtenerNumeroValido  (descripcion){

        let numero = parseInt( prompt(`${descripcion}:`).trim() )
        while(isNaN(numero) || (!isNaN(numero) && numero <= 0 )){
            numero = parseInt( prompt(`campo ${descripcion} es invalido, ingrese nuevamente :`) )
        }
        return numero;
    }
    
    obtenerTextoValido (descripcion){
    
        let texto =  prompt(`${descripcion}:`).trim()
        while(texto.length == 0){
            texto =  prompt(`campo ${descripcion} es invalido, ingrese nuevamente :`) 
        }
        return texto;
    }
}
class Cotizador{
   
    constructor(){

        //datos del cliente 
        this.cliente = new Cliente();
        // plan seleccionado
        this.seguros = new Seguros();
    }


    obtenerOpcionValida(){

        let seleccion = 0;
        do{
            seleccion = parseInt( prompt(this.seguros.opciones))
        }while(isNaN(seleccion)|| 0 >= seleccion || seleccion>5)
    
        return seleccion;
    }

 
    comprarPlan(comprarPlanCodigo){
        if(this.cliente.nombre != undefined && this.cliente.apellido != undefined){
            if(this.seguros.planSeleccionado == undefined){
                if(confirm("comprar el plan previamente visto ?")){
                    this.seguros.planSeleccionado = comprarPlanCodigo;
                    alert("se compro el plan :" + this.seguros.detallePlan(comprarPlanCodigo))
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
    
    ofrecerPlanes(){

        let seleccion = parseInt( prompt(this.seguros.planes))
        switch (seleccion){
             case 1:
                 alert(this.seguros.detallePlan(1));
                 this.comprarPlan(1)
                 break;
             case 2:
                 alert(this.seguros.detallePlan(2))
                 this.comprarPlan(2)
                 break;
             case 3:
                 alert(this.seguros.detallePlan(3))
                 this.comprarPlan(3)
                 break;
             default:
                 alert("opcion incorrecta");
                 break;   
             }
         }
    

    verClienteYPlan(){
            let detalle="";
            if(this.cliente.nombre != undefined && this.cliente.apellido != undefined){
                detalle = `${this.cliente.nombre} ${this.cliente.apellido} `
            }else{
                detalle = `no hay cliente registrado`
            }
            if(this.seguros.planSeleccionado != undefined){
                detalle = `${detalle}, ${this.seguros.detallePlan(this.seguros.planSeleccionado)}`
            }else{
                detalle = `${detalle}, no tiene plan contratado`
            }
            alert(detalle);
    }
    operacion (){
        let opcion = 0;
        do {
            opcion =  this.obtenerOpcionValida();
            switch (opcion){
                case 1:
                    this.cliente = new Cliente();
                    this.seguros = new Seguros();
                    this.cliente.registrarCliente();
                    
                    break;
                case 2:
                    this.ofrecerPlanes();
                    break;
                case 3:
                    this.seguros.darDeBajaPlan();
                    break;                        
                case 4:
                    this.verClienteYPlan();
                    break;   
                default:
                    break;   
                }
        } while (opcion !== 5 );
    }
}

const cotizador = new Cotizador();
cotizador.operacion();