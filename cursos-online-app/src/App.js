import React from "react";
//Importar proveedor de Material Design
import { ThemeProvider } from "@material-ui/core/styles";
//Importar tema creado con definición de colores
import theme from "./theme/theme";
//Importar componente
import RegistrarUsuario from "./componentes/seguridad/RegistrarUsuario";

function App() {
    return ( <
        ThemeProvider theme = { theme } > { /* Usar componente */ } <
        RegistrarUsuario > < /RegistrarUsuario> <
        /ThemeProvider>
    );
}

export default App;