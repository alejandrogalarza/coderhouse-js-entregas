//DATOS INICIALES
const planesLista = [
    {id:1,descripcion:"plan Basico" , multiplicador : 1},
    {id:1,descripcion:"plan Medio", multiplicador : 2},
    {id:1,descripcion:"plan full", multiplicador : 3},
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
}
class Cliente{
    constructor(dni,nombre,apellido,edad){
        this.dni = dni;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

}
class Poliza{
    constructor(dniCliente,idPlan){
        this.dniCliente = dniCliente;
        this.idPlan = idPlan;        
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
    ObtenerCliente(dni){
        return this.clientes.find(cliente=>cliente.dni==dni);
    }

    ObtenerPoliza(dni,idPlan){
        return this.polizas.find(poliza=>poliza.dniCliente==dni && poliza.idPlan==idPlan);
    }

    crearPoliza(cliente,plan){
        if(this.ObtenerCliente(cliente.dni)!=undefined && this.obtenerPlan(plan.id)!=undefined){
            this.polizas.push(new Poliza(cliente.dni, plan.id));
            return true;
        }else{
            return false;
        }
    }

    bajaPoliza(poliza){
        this.polizas.splice(this.polizas.indexOf(poliza),1)
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
                        7)salir`;
        this.opcionesBuscarcliente = `Ingrese una opcion valida
                        1)buscar cliente por dni
                        2)listar a todos los clientes por consola`;
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
            opcion = parseInt( prompt(this.opcionesBuscarcliente))  
            
            if(opcion===1){
                const dni = obtenerNumeroValido("dni");

                const cliente = this.aseguradora.ObtenerCliente(dni);
    
                if(cliente != undefined){
                    alert(`se encontro al cliente
                            Nombre: ${cliente.nombre} apellido: ${cliente.apellido} dni: ${cliente.dni} edad: ${cliente.edad} `)
                }else{
                    alert("cliente no encontrado")
                }
     
            }else{
                for(const cliente of this.aseguradora.clientes){
                    console.log(`Nombre: ${cliente.nombre} apellido: ${cliente.apellido} dni: ${cliente.dni} edad: ${cliente.edad} `);
                }
            }

        }while(isNaN(opcion)|| 0 >= opcion || opcion>2)
    }
    opreaciones(){

        let opcion = 0;
        do {
            do{
                opcion = parseInt( prompt(this.opcionesOperaciones))
            }while(isNaN(opcion)|| 0 >= opcion || opcion>7)

            switch (opcion){
                case 1:
                    this.buscarCliente();
                    break;
                case 2:
                     
                    break;
                case 3:
                     
                    break;                        
                case 4:

                    break;
                case 5:

                    break;
                case 6:

                    break;
                case 7:

                    break;
                                        
                default:
                    break;   
                }
        } while (opcion !== 7 );



    }

}

//funciones utiles
const obtenerNumeroValido =  (descripcion)=>{

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

 
 

const programa = new Programa();
programa.opreaciones();

     
    
/*
const nombre = obtenerTextoValido("nombre");
const apellido = obtenerTextoValido("apellido");
const dni =  obtenerNumeroValido("documento");
const edad = obtenerNumeroValido("edad");
*/