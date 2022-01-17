import {
    Button,
    Container,
    Grid,
    TextField,
    Typography,
} from "@material-ui/core";
import React from "react";
//Importar objeto JSON con los estilos
import style from "../tool/Style";

const PerfilUsuario = () => {
    return (
        //Componente contenedor de Material Design
        <
        Container component = "main"
        maxWidth = "md"
        justify = "center" >
        <
        div style = { style.paper } > { " " } { /* Componente para titulos de Material Design */ } { " " } <
        Typography component = "h1"
        variant = "h5" >
        Perfil de Usuario { " " } <
        /Typography>{" "} <
        /div>{" "} <
        form style = { style.form } > { " " } { /* Componente grid de Material Design (Padre) */ } { " " } <
        Grid container spacing = { 2 } > { " " } {
            /* Componente grid de Material Design (Hijo)
                                                xs={12} => Significa que si el dispositivo es un móvil va a ocupar toda la pantalla
                                                md={6} => Significa que si el dispositivo es una tablet o superior 
                                                va a ocupar la mitad de la pantalla */
        } { " " } <
        Grid item xs = { 12 }
        md = { 6 } > { " " } { /* Componente para caja de texto de Material Design */ } { " " } <
        TextField name = "nombrecompleto"
        variant = "outlined"
        fullWidth label = "Ingrese nombre y apellidos" /
        >
        <
        /Grid>{" "} <
        Grid item xs = { 12 }
        md = { 6 } >
        <
        TextField name = "email"
        variant = "outlined"
        fullWidth label = "Ingrese email" /
        >
        <
        /Grid>{" "} <
        Grid item xs = { 12 }
        md = { 6 } >
        <
        TextField name = "password"
        type = "password"
        variant = "outlined"
        fullWidth label = "Ingrese password" /
        >
        <
        /Grid>{" "} <
        Grid item xs = { 12 }
        md = { 6 } >
        <
        TextField name = "confirmacionpassword"
        type = "password"
        variant = "outlined"
        fullWidth label = "Confirme password" /
        >
        <
        /Grid>{" "} <
        /Grid>{" "} { /* Sección botones */ } { " " } <
        Grid container justifyContent = "center" >
        <
        Grid item xs = { 12 }
        md = { 6 } > { " " } { /* Componente para botón de Material Design */ } { " " } <
        Button type = "submit"
        fullWidth variant = "contained"
        color = "primary"
        size = "large"
        style = { style.submit } >
        Guardar Datos { " " } <
        /Button>{" "} <
        /Grid>{" "} <
        /Grid>{" "} <
        /form>{" "} <
        /Container>
    );
};

export default PerfilUsuario;