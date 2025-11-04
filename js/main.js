// Con promesas

/*
const contenedorDatos = document.querySelector(".datos");
const boton = document.querySelector(".btn");
const usuario = {
    id: 1,
  nombre: "Pepe",
  correo: "pepe@pepe.pepe",
};

boton.addEventListener("click", () => {
  ejecutar();
});

const ejecutar = () => {
  setTimeout(() => {
    obtenerDatos()
      .then((respuesta) => {
        pintarDatos(respuesta);
      })
      .catch((error) => {
        pintarDatos(error);
      });
  }, 2000);
};

const obtenerDatos = () => {
  const promise = new Promise((resolve, reject) => {
    if (true) {
      resolve(`Nombre: ${usuario.nombre} Correo: ${usuario.correo}`);
    } else {
      reject("no hay datos");
    }
  });

  return promise;
};

const pintarDatos = (mensaje) => {
  eleminarDatos();
  const parrafo = document.createElement("P");
  parrafo.classList.add("parrafo");
  parrafo.textContent = mensaje;
  contenedorDatos.append(parrafo);
};

const eleminarDatos = () => {
  contenedorDatos.innerHTML = "";
};
*/

// Con async
const contenedorDatos = document.querySelector(".datos");
const boton = document.querySelector(".btn");
const usuario = {
  id: 1,
  nombre: "Pepe",
  correo: "pepe@pepe.pepe",
};

boton.addEventListener("click", () => {
  ejecutar();
});

/**
 * @description Obtiene los datos del usuario
 * @returns {Promise<string>} Promesa con los datos del usuario
 */
const retrasarTiempo = async () => {
  try {
    let datos = await obtenerDatos();

    return datos;
  } catch (error) {
    throw error;
  }
};

const ejecutar = () => {
  setTimeout(() => {
    retrasarTiempo()
      .then((response) => pintarDatos(response))
      .catch((error) => pintarDatos(error));
  }, 2000);
};

/**
 * @description Obtiene los datos del usuario
 * @returns {Promise<string>} Promesa con los datos del usuario
 */
const obtenerDatos = async () => {
  if (true) return `Nombre: ${usuario.nombre} Correo: ${usuario.correo}`;
  else throw `No hay datos`;
};

/**
 * @description Pinta los datos en el contenedor
 * @param {string} mensaje Mensaje a pintar
 */
const pintarDatos = (mensaje) => {
  eliminarDatos();

  const parrafo = document.createElement("P");
  parrafo.classList.add("parrafo");
  parrafo.textContent = mensaje;
  contenedorDatos.append(parrafo);
};

/**
 * @description Elimina los datos del contenedor
 * @returns {void}
 */
const eliminarDatos = () => {
  contenedorDatos.innerHTML = "";
};
