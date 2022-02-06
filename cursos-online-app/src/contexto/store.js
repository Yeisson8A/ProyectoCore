//Librerias para setear y obtener valores de las variables de estado globales
import React, {createContext, useContext, useReducer} from "react";

//Crear contexto
export const StateContext = createContext();

//Suscribir a todos los componentes react hooks del proyecto por medio de un provider,
//de tal forma que estos puedan tener acceso a las variables de estado globales
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//Se usa el useContext para tener acceso desde los componentes a las variables global de estado
//que se encuentran en el contexto
export const useStateValue = () => useContext(StateContext);