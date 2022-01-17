//Importar libreria para usar axios y consumir servicios web
import axios from 'axios';

//Indicar URL base de los servicios web
axios.defaults.baseURL = "http://localhost:5000/api";

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