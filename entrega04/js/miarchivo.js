//DATOS INICIALES
const planesLista = [
    {id:1,descripcion:"plan Basico" , multiplicador : 1},
    {id:2,descripcion:"plan Medio", multiplicador : 2},
    {id:3,descripcion:"plan full", multiplicador : 3},
]

const clientesLista = [
    {dni:35987001,nombre:"alejandro" , apellido : "galarza" ,edad:20},
    {dni:35987002,nombre:"damian", apellido : "fernandez",edad:25},
    {dni:35987003,nombre:"gabriela", apellido : "gomez", edad:30},
]
const polizaLista = [
    {dniCliente:35987001,idPlan:1},
    {dniCliente:35987001,idPlan:2},
    {dniCliente:35987002,idPlan:3},
    {dniCliente:35987003,idPlan:1},
    {dniCliente:35987003,idPlan:3},
]
//CLASES
class Plan{
    constructor(id,descripcion,multiplicador){
        this.baseSumaAsegurada = 1000;
        this.basePremio = 0.1;
        this.id = id;
        this.descripcion = descripcion;
        this.sumaAsegurada = this.baseSumaAsegurada * multiplicador;
        this.premio = this.sumaAsegurada/this.basePremio;
        
    }
    detalle(){
        return `id:${this.id} 
        descripcion:${this.descripcion} 
        suma Asegurada ${this.sumaAsegurada} 
        premio a pagar ${this.premio}`;
    }
}
class Cliente{
    constructor(dni,nombre,apellido,edad){
        this.dni = dni;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    detalle(){
        return `Nombre: ${this.nombre} 
        apellido: ${this.apellido}
        dni: ${this.dni}
        edad: ${this.edad}`;
    }

}
class Poliza{
    constructor(dniCliente,idPlan){
        this.dniCliente = dniCliente;
        this.idPlan = idPlan;
        this.cuotaRestante = 12;
    }

    detalle(){
        return `dni: ${this.dniCliente} 
        plan: ${this.idPlan}`;
    }
}
class Aseguradora{
    constructor(){
        this.clientes = []
        this.polizas = []
        this.planes = []
        
        this.cargarClientes(clientesLista);
        this.cargarPlanes(planesLista);
        this.cargarPolizas(polizaLista);
    }
    cargarPlanes(lista){
        for(const element of lista) {
             this.planes.push(new Plan(element.id, element.descripcion, element.multiplicador));
          }
      }
    cargarClientes(lista){
        for(const element of lista) {
                this.clientes.push(new Cliente(element.dni, element.nombre, element.apellido,element.edad));
            }
        }

    cargarPolizas(lista){
        for(const element of lista) {
                this.polizas.push(new Poliza(element.dniCliente, element.idPlan));
            }
        }
    obtenerPlan(id){
        return this.planes.find(plan=>plan.id==id);

    }
    obtenerCliente(dni){
        return this.clientes.find(cliente=>cliente.dni==dni);
    }

    obtenerPolizasDni(dni){
        return this.polizas.filter(poliza=>poliza.dniCliente==dni);
    }
    obtenerPolizasPlan(idPlan){
        return this.polizas.filter(poliza=>poliza.idPlan==idPlan);
    }
    obtenerPolizas(dni,idPlan){
        return this.polizas.find(poliza=>poliza.dniCliente==dni && poliza.idPlan==idPlan);
    }

    crearPoliza(cliente,plan){
        if(this.obtenerCliente(cliente.dni)!=undefined && this.obtenerPlan(plan.id)!=undefined){
            this.polizas.push(new Poliza(cliente.dni, plan.id));
            return true;
        }else{
            return false;
        }
    }

    bajaPoliza(poliza){
        this.polizas.splice(this.polizas.indexOf(poliza),1)
    }
    pagoRestante(poliza){
        const plan = this.obtenerPlan(poliza.idPlan);
        return plan.premio * poliza.cuotaRestante
    }

    pagoDeCuota(dni,plan){
        const poliza = this.obtenerPolizas(dni,plan);
        if(poliza.cuotaRestante>0){
            poliza.cuotaRestante = poliza.cuotaRestante-1;
            alert(`poliza vigente , cuotas restantes ${poliza.cuotaRestante} pago restante : ${this.pagoRestante(poliza)}`);
        }else{
            this.bajaPoliza(poliza)
            alert("poliza vencida");
        }

    }

}

class Programa{
    constructor(){
        this.aseguradora = new Aseguradora();
        this.opcionesOperaciones = `Ingrese una opcion valida
            1)buscar cliente
            2)buscar planes
            3)buscar polizas
            4)crear cliente
            5)crear poliza
            6)baja poliza 
            7)pago de cuota 
            8)salir`;
        this.opcionesBuscarCliente = `Ingrese una opcion valida
            1)buscar cliente por dni
            2)listar a todos los clientes`;
        this.opcionesBuscarPlanes = `Ingrese una opcion valida
            1)buscar plan por id
            2)listar a todos los planes`;
        this.opcionesBuscarPoliza = `Ingrese una opcion valida
            1)buscar poliza por dni
            2)buscar poliza por plan
            3)buscar poliza por plan y dni
            4)listar a todos los planes`;
    
    }

    buscarCliente(){
        let opcion = 0;
        do{
            opcion = parseInt( prompt(this.opcionesBuscarCliente))  
            
            if(opcion===1){
                const dni = obtenerNumeroValido("dni");

                const cliente = this.aseguradora.obtenerCliente(dni);
    
                if(cliente != undefined){
                    alert(`se encontro al cliente ${cliente.detalle()} `)
                }else{
                    alert("cliente no encontrado")
                }
     
            } 
            if(opcion===2){
                for(const cliente of this.aseguradora.clientes){
                    alert(cliente.detalle());
                }
            }

        }while(isNaN(opcion)|| 0 >= opcion || opcion>2)
    }
    buscarPlan(){
        let opcion = 0;
        do{
            opcion = parseInt( prompt(this.opcionesBuscarPlanes))  
            
            if(opcion===1){
                const idPlan = obtenerNumeroValido("codigo de plan");

                const plan = this.aseguradora.obtenerPlan(idPlan);
    
                if(plan != undefined){
                    alert(`se encontro el plan ${plan.detalle()}`)
                }else{
                    alert("plan no encontrado")
                }
     
            }
            if(opcion===2){
                for(const plan of this.aseguradora.planes){
                    alert(plan.detalle());
                }
            }

        }while(isNaN(opcion)|| 0 >= opcion || opcion>2)
    }



    buscarPoliza(){
        let opcion = 0;
        do{
            opcion = parseInt( prompt(this.opcionesBuscarPoliza))  
            
            if(opcion===1){
                const dni = obtenerNumeroValido("dni");

                const polizas = this.aseguradora.obtenerPolizasDni(dni);
    
                if(polizas.length != 0){
                    polizas.forEach(poliza => {
                        alert(`se encontro poliza ${poliza.detalle()}`)
                    });
                   
                }else{
                    alert("poliza no encontrado")
                }

            }if(opcion===2){
                const idPlan = obtenerNumeroValido("codigo de plan");

                const polizas = this.aseguradora.obtenerPolizasPlan(idPlan);
    
                if(polizas.length != 0){
                    polizas.forEach(poliza => {
                        alert(`se encontro poliza ${poliza.detalle()}`)
                    });
                }else{
                    alert("plan no encontrado")
                }
     
            }if(opcion===3){
                const idPlan = obtenerNumeroValido("codigo de plan");
                const dni = obtenerNumeroValido("dni");

                const polizas = this.aseguradora.obtenerPolizas(dni,idPlan);
    
                if(polizas.length != 0){
                    polizas.forEach(poliza => {
                        alert(`se encontro poliza 
                        ${poliza.detalle()}`)
                    });
                }else{
                    alert("plan no encontrado")
                }
     
            }if(opcion===4){
                for(const poliza of this.aseguradora.polizas){
                    alert(poliza.detalle());
                }
            }

        }while(isNaN(opcion)|| 0 >= opcion || opcion>4)
    }
    crearCliente(){
        const dni =  obtenerNumeroValido("documento");
        if(this.aseguradora.obtenerCliente(dni) == undefined){
            const nombre = obtenerTextoValido("nombre");
            const apellido = obtenerTextoValido("apellido");
            const edad = obtenerNumeroValido("edad");
            this.aseguradora.clientes.push(new Cliente(dni, nombre, apellido,edad))
        }else{
           alert("el cliente con este dni ya existe");
        }
    }

    crearPoliza(){
        const dni =  obtenerNumeroValido("documento");
        const idPlan =  obtenerNumeroValido("plan id");
        if(this.aseguradora.obtenerCliente(dni) != undefined){
            if(this.aseguradora.obtenerPlan(idPlan) != undefined){
                this.aseguradora.polizas.push(new Poliza(dni, idPlan))
            }else{
                alert("el plan con este id no existe");
            }
        }else{
           alert("el cliente con este dni no existe");
        }
    }
    eliminarPoliza(){
        const dni =  obtenerNumeroValido("documento");
        const idPlan =  obtenerNumeroValido("plan id");
        const poliza = this.aseguradora.obtenerPolizas(dni,idPlan);
        if(poliza!=undefined){
            this.aseguradora.bajaPoliza(poliza);
            alert("Poliza eliminada");
        }else{
            alert("Poliza no encontrada");
        }
    }

    pagarCuota(){
        const dni =  obtenerNumeroValido("documento");
        const idPlan =  obtenerNumeroValido("plan id");
        const poliza = this.aseguradora.obtenerPolizas(dni,idPlan);
        if(poliza!=undefined){
            this.aseguradora.pagoDeCuota(poliza);
            alert("Poliza eliminada");
        }else{
            alert("Poliza no encontrada");
        }
    }

    obtenerNumeroValido(descripcion){

        let numero = parseInt( prompt(`${descripcion}:`).trim() )
        while(isNaN(numero) || (!isNaN(numero) && numero <= 0 )){
            numero = parseInt( prompt(`campo ${descripcion} es invalido, ingrese nuevamente :`) )
        }
        return numero;
    }
    
    obtenerTextoValido(descripcion){
    
        let texto =  prompt(`${descripcion}:`).trim()
        while(texto.length == 0){
            texto =  prompt(`campo ${descripcion} es invalido, ingrese nuevamente :`) 
        }
        return texto;
    }
    
    opreaciones(){
        let opcion = 0;
        do {
            do{
                opcion = parseInt( prompt(this.opcionesOperaciones))
            }while(isNaN(opcion)|| 0 >= opcion || opcion>8)

            switch (opcion){
                case 1:
                    this.buscarCliente();
                    break;
                case 2:
                    this.buscarPlan();
                    break;
                case 3:
                    this.buscarPoliza();
                    break;                        
                case 4:
                    this.crearCliente();
                    break;
                case 5:
                    this.crearPoliza();
                    break;
                case 6:
                    this.eliminarPoliza();
                    break;
                case 7:
                    this.pagarCuota();
                    break;
                default:
                    break;   
                }
        } while (opcion !== 8 );
    }
}

const programa = new Programa();
programa.opreaciones();

     
   