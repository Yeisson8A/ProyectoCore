import React, { useEffect, useState } from "react";
//Importar proveedor de Material Design
import { ThemeProvider } from "@material-ui/core/styles";
//Importar tema creado con definición de colores
import theme from "./theme/theme";
//Importar componente
import Login from "./componentes/seguridad/Login";
import RegistrarUsuario from "./componentes/seguridad/RegistrarUsuario";
import PerfilUsuario from "./componentes/seguridad/PerfilUsuario";
import AppNavbar from "./componentes/navegacion/AppNavbar";
//Libreria de react para la navegación
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Grid } from "@material-ui/core";
import { useStateValue } from "./contexto/store";
import { obtenerUsuarioActual } from "./actions/UsuarioAction";

function App() {
    //Referencia a la variable global sesionUsuario
    //dispatch es una representación del contexto
    const [{sesionUsuario}, dispatch] = useStateValue();
    //Variable local para validar el request hecho al servidor
    const [iniciaApp, setIniciaApp] = useState(false);

    //Usar useEffect para ejecutar lógica al cargarse el componente React,
    //usando como base la variable de estado local
    useEffect(() => {
        //Validar si la variable de estado local es falsa
        if (!iniciaApp) {
            //Llamar al action pasandole el dispatch
            obtenerUsuarioActual(dispatch).then(response => {
                //Cambiar el valor de la variable de estado local
                setIniciaApp(true);
            }).catch(error => {
                //Cambiar el valor de la variable de estado local
                setIniciaApp(true);
            })
        }
    }, [iniciaApp]);

    return ( 
        //Enrutador
        <Router>
            <ThemeProvider theme = { theme } > 
                {/* Usar componente para la barra de navegación */}
                <AppNavbar/>
                <Grid container>
                    <Routes>
                        {/* Se registra ruta por defecto */}
                        <Route exact path="/" element={<PerfilUsuario/>}/>
                        {/* Se registra ruta para acceder a componente Login */}
                        <Route exact path="/auth/login" element={<Login/>}/>
                        {/* Se registra ruta para acceder a componente Registrar Usuario */}
                        <Route exact path="/auth/registrar" element={<RegistrarUsuario/>}/>
                        {/* Se registra ruta para acceder a componente Perfil Usuario */}
                        <Route exact path="/auth/perfil" element={<PerfilUsuario/>}/>
                    </Routes>
                </Grid>
            </ThemeProvider>
        </Router>
    );
}

export default App;