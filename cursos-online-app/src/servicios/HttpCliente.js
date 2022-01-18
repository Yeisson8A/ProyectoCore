//Importar libreria para usar axios y consumir servicios web
import axios from 'axios';

//Indicar URL base de los servicios web
axios.defaults.baseURL = "http://localhost:5000/api";

//Crear un interceptor para añadir al header el token del usuario
axios.interceptors.request.use((config) => {
    //Obtener token de seguridad almacenado en el localstorage del navegador
    const token_seguridad = window.localStorage.getItem("token_seguridad");

    //Validar si existe el token de seguridad
    if (token_seguridad) {
        //Agregar token de seguridad al header parámetro Authorization
        config.headers.Authorization = `Bearer ` + token_seguridad;
        return config;
    }
}, error => {
    //En caso de error
    return Promise.reject(error);
});

//Crear objeto generico para el request del servicio web
const requestGenerico = {
    //Método GET
    get: (url) => axios.get(url),
    //Método POST
    post: (url, body) => axios.post(url, body),
    //Método PUT
    put: (url, body) => axios.put(url, body),
    //Método DELETE
    delete: (url) => axios.delete(url)
};

export default requestGenerico;