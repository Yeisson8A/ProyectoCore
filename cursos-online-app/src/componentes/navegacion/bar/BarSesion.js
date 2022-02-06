import { Avatar, Button, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import { useStateValue } from '../../../contexto/store';
import FotoUsuarioTemp from "../../../logo.svg";

const useStyles = makeStyles((theme) => ({
    seccionDesktop : {
        display: "none",
        [theme.breakpoints.up("md")] : {
            display: "flex"
        }
    },
    seccionMobile : {
        display: "flex",
        [theme.breakpoints.up("md")] : {
            display: "none"
        }
    },
    grow : {
        flexGrow: 1
    },
    avatarSize : {
        width: 40,
        height: 40
    }
}))

const BarSesion = () => {
    //Usar constante con estilos
    const classes = useStyles();
    //Referencia a la variable global sesionUsuario
    //dispatch es una representación del contexto
    const [{sesionUsuario}, dispatch] = useStateValue();

    return (
        //Componente toolbar para la barra de navegación
        <Toolbar>
            {/* Componente de Material UI para iconos */}
            <IconButton color="inherit">
                <i className='material-icons'>menu</i>
            </IconButton>
            {/* Componente de Material UI para titulos */}
            <Typography variant='h6'>Cursos Online</Typography>
            <div className={classes.grow}></div>
            {/* Elementos a mostrar cuando el dispositivo es un desktop */}
            <div className={classes.seccionDesktop}>
                {/* Componente de Material UI para botones */}
                <Button color="inherit">Salir</Button>
                <Button color="inherit">
                    {/* Se evalua si la variable global existe, en cuyo caso se coloca el atributo nombreCompleto */}
                    {sesionUsuario ? sesionUsuario.usuario.nombreCompleto : ""}
                </Button>
                {/* Componente de Material UI para un avatar */}
                <Avatar src={FotoUsuarioTemp}></Avatar>
            </div>
            {/* Elementos a mostrar cuando el dispositivo es un móvil */}
            <div className={classes.seccionMobile}>

                <IconButton color="inherit">
                    <i className='material-icons'>more_vert</i>
                </IconButton>
            </div>
        </Toolbar>
    );
};

export default BarSesion;