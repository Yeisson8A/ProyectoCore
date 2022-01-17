//Importar libreria de Material Design
import { createTheme } from '@material-ui/core/styles';

//Crear función que representa los colores del tema
const theme = createTheme({
    palette: {
        primary: {
            light: "#63a4fff",
            main: "#1976d2",
            dark: "#004ba0",
            contrastText: "#ecfad8"
        }
    }
});

export default theme;