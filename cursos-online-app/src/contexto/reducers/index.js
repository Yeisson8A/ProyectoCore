//Importar Reducers creados
import sesionUsuarioReducer from "./sesionUsuarioReducer";
import openSnackbarReducer from "./openSnackbarReducer";

//Función para unificar los Reducers creados
export const mainReducer = ({sesionUsuario, openSnackbar}, action) => {
    return{
        sesionUsuario: sesionUsuarioReducer(sesionUsuario, action),
        openSnackbar: openSnackbarReducer(openSnackbar, action)
    }
}