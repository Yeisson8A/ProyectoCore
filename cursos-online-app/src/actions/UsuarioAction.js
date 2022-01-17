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