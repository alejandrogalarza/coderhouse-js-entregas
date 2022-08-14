//DATOS INICIALES
const planesLista = [
    {id:1,descripcion:"plan Basico" , multiplicador : 1 , img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm9o1wR7j6hLq2GtroWQgekhBhaVFRbhrRwP-ojD62wBeBwecPUgDgxO_7hECzdyhNuvw&usqp=CAU"},
    {id:2,descripcion:"plan Medio", multiplicador : 2,img:"https://bgseguros.chubb.com/assets/img/quote-bgs/celula.png"},
    {id:3,descripcion:"plan full", multiplicador : 3,img:"https://bgseguros.chubb.com/assets/img/quote-bgs/celula.png"},
    {id:4,descripcion:"plan premium 1", multiplicador : 4,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_R7S_DwrFq7B2LNzQOZp_df0Yo0yKluSGOyVtrGK7JWSRFEUPOpdd7DGT0nECAJ81FlU&usqp=CAU"},
    {id:5,descripcion:"plan premium 2", multiplicador : 5,img:"data:image/jpeg;base64,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"},
    {id:6,descripcion:"plan premium 3", multiplicador : 6,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_R7S_DwrFq7B2LNzQOZp_df0Yo0yKluSGOyVtrGK7JWSRFEUPOpdd7DGT0nECAJ81FlU&usqp=CAU"},

    
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
    constructor(id,descripcion,multiplicador,img){
        this.baseSumaAsegurada = 1000;
        this.basePremio = 0.1;
        this.id = id;
        this.descripcion = descripcion;
        this.img = img;
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
             this.planes.push(new Plan(element.id, element.descripcion, element.multiplicador, element.img));
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
    obtenerPoliza(dni,idPlan){
        return this.polizas.find(poliza=>poliza.dniCliente==dni && poliza.idPlan==idPlan);
    }

    crearPoliza(cliente,plan){
        if(this.obtenerCliente(cliente.dni)!=undefined && this.obtenerPlan(plan.id)!=undefined && this.obtenerPoliza(cliente.dni, plan.id)==undefined){
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
        const poliza = this.obtenerPoliza(dni,plan);
        if(poliza != undefined){
            poliza.cuotaRestante = poliza.cuotaRestante-1;
            if(poliza.cuotaRestante>0){
                return `poliza vigente , cuotas restantes ${poliza.cuotaRestante} pago restante : ${this.pagoRestante(poliza)}`;
            }else{
                this.bajaPoliza(poliza)
                return "ultima cuota paga, finalizando poliza";
            }             
        }else{
            return "poliza no encontrada"
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
                const dni = this.obtenerNumeroValido("dni");

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
                const idPlan = this.obtenerNumeroValido("codigo de plan");

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
                const dni = this.obtenerNumeroValido("dni");

                const polizas = this.aseguradora.obtenerPolizasDni(dni);
    
                if(polizas.length != 0){
                    polizas.forEach(poliza => {
                        alert(`se encontro poliza ${poliza.detalle()}`)
                    });
                   
                }else{
                    alert("poliza no encontrado")
                }

            }if(opcion===2){
                const idPlan = this.obtenerNumeroValido("codigo de plan");

                const polizas = this.aseguradora.obtenerPolizasPlan(idPlan);
    
                if(polizas.length != 0){
                    polizas.forEach(poliza => {
                        alert(`se encontro poliza ${poliza.detalle()}`)
                    });
                }else{
                    alert("plan no encontrado")
                }
     
            }if(opcion===3){
                const idPlan = this.obtenerNumeroValido("codigo de plan");
                const dni = this.obtenerNumeroValido("dni");

                const polizas = this.aseguradora.obtenerPoliza(dni,idPlan);
    
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
        const dni =  this.obtenerNumeroValido("documento");
        if(this.aseguradora.obtenerCliente(dni) == undefined){
            const nombre = this.obtenerTextoValido("nombre");
            const apellido = this.obtenerTextoValido("apellido");
            const edad = this.obtenerNumeroValido("edad");
            this.aseguradora.clientes.push(new Cliente(dni, nombre, apellido,edad))
        }else{
           alert("el cliente con este dni ya existe");
        }
    }

    crearPoliza(){
        const dni =  this.obtenerNumeroValido("documento");
        const idPlan =  this.obtenerNumeroValido("plan id");
        const cliente = this.aseguradora.obtenerCliente(dni);
        const plan = this.aseguradora.obtenerPlan(idPlan);

        if(cliente != undefined){
            if(plan != undefined){
                if(this.aseguradora.crearPoliza(cliente, plan)){
                    alert("carga de poliza exitosa");
                }else{
                    alert("fallo carga de poliza");
                }
            }else{
                alert("el plan con este id no existe");
            }
        }else{
           alert("el cliente con este dni no existe");
        }
    }
    eliminarPoliza(){
        const dni =  this.obtenerNumeroValido("documento");
        const idPlan =  this.obtenerNumeroValido("plan id");
        const poliza = this.aseguradora.obtenerPoliza(dni,idPlan);
        if(poliza!=undefined){
            this.aseguradora.bajaPoliza(poliza);
            alert("Poliza eliminada");
        }else{
            alert("Poliza no encontrada");
        }
    }

    pagarCuota(){
        const dni =  this.obtenerNumeroValido("documento");
        const idPlan =  this.obtenerNumeroValido("plan id");
        alert(this.aseguradora.pagoDeCuota(dni,idPlan));
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
class LocalStorageDara{
    constructor(reset){
        this.reset(reset);
        this.inicializarDB();
    }
    reset(reset){
        if(reset){
             localStorage.clear(); 
        }
    }

    sesionIniciada(){
        return localStorage.hasOwnProperty("user")
    }

    eliminarUserLogin(){
        localStorage.removeItem("user");
    }
    
    setUserLogin(user){
        localStorage.setItem("user",JSON.stringify(user));
    }
    getUserLogin(){
       return  JSON.parse(localStorage.setItem("user"));
    }
    addBDUser(user){
        const users = this.getBDUser();
        users.push(user);
        localStorage.setItem("users",JSON.stringify(users));
    }
    getBDUser(){
        return  JSON.parse(localStorage.setItem("users"));
    }
    inicializarDB(){
        localStorage.setItem("users",JSON.stringify([]));
    }
}
class ProgramaDom{
    constructor(reset){
        this.aseguradora = new Aseguradora();
    }

// controles
    controlCerrarSesion(){
        const btnCerrarSesion = document.getElementById("btnCerrarSesion");
        btnCerrarSesion.click = ()=>{
            lsData.cerrarSesion();
            programaDom.cargarPagina("login");
        }
        
    }
    controlIniciarSesion(){

    }
// navegar secciones    
    cargarLogin(){
        console.log("mostrar login");
        const contenedor =  document.getElementById("contenedor");
        contenedor.innerHTML = `
        <section id="iniciarsesion" class="w3-row-padding w w3-center w3-light-grey" style="border:1px solid #ccc;">
        <article class="" style="background-color: black; color: white; border: 2px solid;">
          <h1>Iniciar sesion</h1>
          <hr>
          <div>
            <label for="email"><b>Email</b></label>
            <input id="emailLogin" type="text" placeholder="ingrese Email" name="email" required>
          </div>
          <div>
          
            <label for="psw"><b>Password</b></label>
            <input id="pwdLogin" type="password" placeholder="ingrese Password" name="psw" required>
          </div>
    
          <div class="clearfix">
            <button type="submit" class="signupbtn" id="btnIniciarSesion">iniciar sesion</button>
          </div>
        </article>
      </section>`;
      const btnIniciarSesion = document.getElementById("btnIniciarSesion");
      btnIniciarSesion.onclick  = this.iniciarSesionUsuario;
    }
    cargarRegistro(){
        console.log("mostrar registro");
        const contenedor =  document.getElementById("contenedor");
        contenedor.innerHTML = `
        
        <section id="registrarusuario" class="w3-row-padding w w3-center w3-light-grey" style="border:1px solid #ccc ;">
        <article class="" style="background-color: black; color: white; border: 2px solid;">
            <h1>Registrarse</h1>
            <hr>
            <div>
            <label for="email"><b>Email</b></label>
            <input type="text" placeholder="ingrese Email" name="email" required>
            </div>
            <div>

            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="ingrese Password" name="psw" required>
            </div>
            <div>

            <label for="psw-repeat"><b>repetir Password</b></label>
            <input type="password" placeholder="repetir Password" name="psw-repeat" required>
            </div>
            <div class="clearfix">
            <button type="submit" class="signupbtn" id="btnRegistrarse">Registrarse</button>
            </div>
        </article>
        </section>
        `;

        const btnRegistrarse = document.getElementById("btnRegistrarse");
        btnRegistrarse.onclick  = this.registrarUsuario;

      
    }
    registrarUsuario(){
        //buscar datos del html y grabarlo en el localstorage en una lista con key users
    }
    iniciarSesionUsuario(){
        //buscar datos del html y grabarlo en el localstorage con key user        
        const emailLogin = document.getElementById("emailLogin");
        const pwdLogin = document.getElementById("pwdLogin");
        const usuario = { email:emailLogin,pwd :pwdLogin };
        lsData.setUserLogin(usuario);
        programaDom.cargarPagina("planes");
        }    
    cargarPlanes(){
        console.log("mostrar planes");
        const contenedor =  document.getElementById("contenedor");
        let planes = '';

        this.aseguradora.planes.forEach((plan)=>{
        let planhtml =`
                <article id=${plan.id} class="w3-third" style="background-color: black; color: white; border: 2px solid;">
                <p>${plan.descripcion}</p>
                <img class="imgPlan" src="${plan.img}" alt="Random Name">
                <p>monto asegurado $${plan.sumaAsegurada}</p>
                <p>pago mensual $${plan.premio}</p>
                <button planId="${plan.id}" class="button comprarPlan">comprar Plan</button>
                </article>
                `;
            planes +=planhtml;
        })
        
        contenedor.innerHTML  =  `
        <section id="planes" class="w3-row-padding w3-center w3-light-grey" style="">
            <section class="w3-container w3-center w3-content" style="max-width:600px">
            <h2 class="w3-wide">Planes</h2>
            <p class="w3-opacity"><i>aseguremos tu Celular</i></p>
            <p class="w3-justify">Estos planes te sirven por si sufris un robo o rotura de pantalla, contamos con coberturas que
                se adaptan a tus necesidades</p>
            </section>
            ${planes}
        </section>
        `;
        
        const btnsComprar = document.querySelectorAll(".comprarPlan");
        btnsComprar.forEach(btn=>{
            btn.onclick = (event)=>{
                event.preventDefault();
                const planId = event.target.getAttribute("planId");
                alert(`compraremos el plan id ${planId}`);

            }
        })
    }
    cargarSeguros(){
        console.log("mostrar mis seguros");
        const contenedor =  document.getElementById("contenedor");
        contenedor.innerHTML = `
        
        <section id="seguros" class="w3-row-padding w3-center w3-light-grey" style="">
            <section class="w3-container w3-center w3-content" style="max-width:600px">
            <h2 class="w3-wide">Mis seguros</h2>
            <p class="w3-opacity"><i>aseguremos tu Celular</i></p>
            <p class="w3-justify">Estos planes te sirven por si sufris un robo o rotura de pantalla, contamos con coberturas que
                se adaptan a tus necesidades</p>
            </section>
            <article class="w3-third" style="background-color: black; color: white; border: 2px solid;">
            <p>Plan 1</p>
            <img class="imgPlan" src="https://bgseguros.chubb.com/assets/img/quote-bgs/celula.png" alt="Random Name">
            <p>monto asegurado $50000</p>
            <p>pago mensual $500</p>
            <button class="button">dar de baja</button>
            </article>
        
        </section>
        `
    }

    cargarEventosMenu(){
       const menu =  [
            {
                hashName :"menusalir", accionesprevias : ()=>{lsData.eliminarUserLogin()}, accionessiguientes : ()=>{programaDom.cargarPagina("login");}
            },
            {
                hashName :"menuregistrarse", accionesprevias : ()=>{lsData.eliminarUserLogin()}, accionessiguientes : ()=>{programaDom.cargarPagina("registrarse");}
            },
            {
                hashName :"menuiniciarsesion", accionesprevias : ()=>{}, accionessiguientes : ()=>{this.cargarPagina("login");}
            },
            {
                hashName :"menuplanes", accionesprevias : ()=>{}, accionessiguientes : ()=>{this.cargarPagina("planes");}
            },
            {
                hashName :"menuseguros", accionesprevias : ()=>{}, accionessiguientes : ()=>{this.cargarPagina("seguros");}
            },
        ];
        
        const menuEventos = (hashName,accionesprevias,accionessiguientes)=>{
            const hashComponente = document.getElementById(hashName);
            hashComponente.onclick = ()=>{
                                        accionesprevias();
                                        accionessiguientes();
                                    }
        }
        menu.forEach((item)=>menuEventos(item.hashName,item.accionesprevias,item.accionessiguientes));
        
    }
    // main  
    cargarPagina(hashParam){
        if(hashParam){
            window.location.hash=hashParam;
        }
        // si no hay un usuario cargado se cargar el login
        if(!lsData.sesionIniciada()){
            if(!(window.location.hash==="#registrarse")){
                window.location.hash="login"
            }
        }
        //se toma el hash #mensaje
        let hash = window.location.hash;
        switch(hash){
            case "#login":
                this.cargarLogin();
                break;
            case "#registrarse":
                this.cargarRegistro();
                break;
            case "#planes":
                this.cargarPlanes();
                break;
            case "#seguros":
                this.cargarSeguros();
                break;
            default:
                //si no se reconoce el hash se vueve a ejecutar envandolo a los planes
                this.cargarPagina("planes");
                break;
        }

    }
}

//instancia
const lsData = new LocalStorageDara(false);   

const programaDom = new ProgramaDom();
programaDom.cargarEventosMenu();
programaDom.cargarPagina();

     
   