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
export const obtenerUsuarioActual = (dispatch) => {
    //Crear promesa para esperar a finalización servicio web asincrono
    return new Promise((resolve, reject) => {
        //Usar método GET
        HttpCliente.get("/Usuario").then(response => {
            //Por medio del dispatch se invoca al Reducer
            dispatch({
                type: "INICIAR_SESION",
                sesion: response.data,
                autenticado: true
            });
            //Obtener respuesta del servicio web
            resolve(response);
        })
    })
}

//Función para actualizar datos del usuario actual conectado usando web services .NET Core
export const actualizarUsuario = (usuario) => {
    //Crear promesa para esperar a finalización servicio web asincrono
    return new Promise((resolve, reject) => {
        //Usar método PUT
        HttpCliente.put('/Usuario', usuario).then(response => {
            //Obtener respuesta del servicio web
            resolve(response);
        })
    })
}

//Función para realizar el logueo usando web services .NET Core
export const loginUsuario = (usuario) => {
    //Crear promesa para esperar a finalización servicio web asincrono
    return new Promise((resolve, reject) => {
        //Usar método POST
        HttpCliente.post('/Usuario/login', usuario).then(response => {
            //Obtener respuesta del servicio web
            resolve(response);
        })
    })
}