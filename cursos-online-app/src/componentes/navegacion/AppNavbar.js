import { AppBar } from '@material-ui/core';
import React from 'react';
import BarSesion from './bar/BarSesion';

const AppNavbar = () => {
    return (
        //Componente para barra de navegación
        <AppBar position='static'>
            {/* Componente toolbar para la barra de navegación */}
            <BarSesion/>
        </AppBar>
    );
};

export default AppNavbar;