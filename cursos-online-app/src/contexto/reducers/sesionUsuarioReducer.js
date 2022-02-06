//Datos que quiero almacenar por medio del Reducer
export const initialState = {
    usuario : {
        nombreCompleto: "",
        email: "",
        username: "",
        foto: ""
    },
    autenticado: false
}

//Función para manejar las operaciones del Reducer
const sesionUsuarioReducer = (state = initialState, action) => {
    switch (action.type) {
        case "INICIAR_SESION":
            return {
                ...state,
                usuario: action.sesion,
                autenticado: action.autenticado
            };
        case "SALIR_SESION":
            return {
                ...state,
                usuario: action.nuevoUsuario,
                autenticado: action.autenticado
            };
        case "ACTUALIZAR_USUARIO":
            return {
                ...state,
                usuario: action.nuevoUsuario,
                autenticado: action.autenticado
            };
        default:
            return state;
    }
};

//Exportar función para las operaciones del Reducer
export default sesionUsuarioReducer;