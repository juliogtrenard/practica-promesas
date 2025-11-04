const contenedorDatos = document.querySelector('.datos');
const boton  = document.querySelector('.btn');
const usuario = {
    nombre: "Pepe" ,
    correo: "pepe@pepe.pepe"
}

boton.addEventListener('click', ()=>{
    obtenerDatos()
    .then((respuesta)=>{
        pintarDatos(respuesta);
    })
    .catch((error)=>{
        pintarDatos(error);
    })
})

const obtenerDatos = () =>{
    const promise = new Promise ((resolve, reject) =>{
        if(true){
            resolve(`Nombre: ${usuario.nombre} Correo: ${usuario.correo}`)
        }else{
            reject('no hay datos')
        }
    });

    return promise;
};

const pintarDatos = (mensaje) =>{
    eleminarDatos();
    const parrafo = document.createElement('P');
    parrafo.classList.add("parrafo");
    parrafo.textContent = mensaje;
    contenedorDatos.append(parrafo);

};

const eleminarDatos =() =>{
    contenedorDatos.innerHTML = "";
};