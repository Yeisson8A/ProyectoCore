//Datos que quiero almacenar por medio del Reducer
export const initialState = {
    open: false,
    mensaje: ""
}

//Función para manejar las operaciones del Reducer
const openSnackbarReducer = (state = initialState, action) => {
    switch (action.type) {
        case "OPEN_SNACKBAR":
            return {
                ...state,
                open: action.openMensaje.open,
                mensaje: action.openMensaje.mensaje
            };
        default:
            return state;
    }
};

//Exportar función para las operaciones del Reducer
export default openSnackbarReducer;