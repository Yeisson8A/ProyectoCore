//Importar request generico para consumo de servicios web con axios
import HttpCliente from '../servicios/HttpCliente';

//Función para registrar usuario usando web services .NET Core
export const registrarUsuario = (usuario) => {
    //Crear promesa para esperar a finalización servicio web asincrono
    return new Promise((resolve, reject) => {
        //Usar método POST
        HttpCliente.post("/Usuario/registrar", usuario).then(response => {
            //Obtener respuesta del servicio web
            resolve(response);
        })
    })
}

//Función para obtener datos del usuario actual conectado usando web services .NET Core
export const obtenerUsuarioActual = () => {
    //Crear promesa para esperar a finalización servicio web asincrono
    return new Promise((resolve, reject) => {
        //Usar método GET
        HttpCliente.get("/Usuario").then(response => {
            //Obtener respuesta del servicio web
            resolve(response);
        })
    })
}

//Función para actualizar datos del usuario actual conectado usando web services .NET Core
export const actualizarUsuario = (usuario) => {
    return new Promise((resolve, reject) => {
        //Usar método PUT
        HttpCliente.put('/Usuario', usuario).then(response => {
            //Obtener respuesta del servicio web
            resolve(response);
        })
    })
}