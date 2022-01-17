//Importar componentes de Material Design
import { Button, Container, Grid, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";
//Importar objeto JSON con los estilos
import style from "../tool/Style";
//Importar action para registrar usuario usando los servicios web .NET Core
import { registrarUsuario } from "../../actions/UsuarioAction";

//Declaración de función
const RegistrarUsuario = () => {
    //Crear variable de estado para datos del formulario
    const [usuario, setUsuario] = useState({
        NombreCompleto: "",
        Email: "",
        Username: "",
        Password: "",
        ConfirmarPassword: "",
    });

    //Declaración de función para almacenar valores del formulario
    const ingresarValoresMemoria = (e) => {
        //Capturar los atributos name y value de la caja de texto
        const { name, value } = e.target;
        //Llamar a la función de la variable de estado a fin de almacenar el valor
        setUsuario((anterior) => ({
            //Se conservan todos los valores de la variable
            ...anterior,
            //Se modifica únicamente el valor de la propiedad que corresponde con la caja de texto
            [name]: value,
        }));
    };

    //Declaración de función para guardar el usuario
    const registrarUsuarioBoton = (e) => {
        //Para evitar que la página se refresque
        e.preventDefault();
        //Llamar action para registrar usuario
        registrarUsuario(usuario).then(response => {
            console.log("Se registro exitosamente el usuario", response);
            //Almacenar token obtenido para el usuario en el localStorage del navegador
            window.localStorage.setItem("token_seguridad", response.data);
        });
    };

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
        Registro de Usuarios { " " } <
        /Typography>{" "} <
        form style = { style.form } > { " " } { /* Componente grid de Material Design (Padre) */ } { " " } <
        Grid container spacing = { 2 } > { " " } {
            /* Componente grid de Material Design (Hijo)
                                                                xs={12} => Significa que si el dispositivo es un móvil va a ocupar toda la pantalla
                                                                md={6} => Significa que si el dispositivo es una tablet o superior 
                                                                va a ocupar la mitad de la pantalla */
        } { " " } <
        Grid item xs = { 12 }
        md = { 12 } > { " " } { /* Componente para caja de texto de Material Design */ } { " " } <
        TextField name = "NombreCompleto"
        value = { usuario.NombreCompleto }
        onChange = { ingresarValoresMemoria }
        variant = "outlined"
        fullWidth label = "Ingrese nombre y apellidos" /
        >
        <
        /Grid>{" "} {
            /* Componente grid de Material Design (Hijo)
                                                                xs={12} => Significa que si el dispositivo es un móvil va a ocupar toda la pantalla
                                                                md={6} => Significa que si el dispositivo es una tablet o superior 
                                                                va a ocupar la mitad de la pantalla */
        } { " " } <
        Grid item xs = { 12 }
        md = { 6 } >
        <
        TextField name = "Email"
        value = { usuario.Email }
        onChange = { ingresarValoresMemoria }
        variant = "outlined"
        fullWidth label = "Ingrese email" /
        >
        <
        /Grid>{" "} <
        Grid item xs = { 12 }
        md = { 6 } >
        <
        TextField name = "Username"
        value = { usuario.Username }
        onChange = { ingresarValoresMemoria }
        variant = "outlined"
        fullWidth label = "Ingrese username" /
        >
        <
        /Grid>{" "} <
        Grid item xs = { 12 }
        md = { 6 } >
        <
        TextField name = "Password"
        value = { usuario.Password }
        onChange = { ingresarValoresMemoria }
        type = "password"
        variant = "outlined"
        fullWidth label = "Ingrese password" /
        >
        <
        /Grid>{" "} <
        Grid item xs = { 12 }
        md = { 6 } >
        <
        TextField name = "ConfirmarPassword"
        value = { usuario.ConfirmarPassword }
        onChange = { ingresarValoresMemoria }
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
        onClick = { registrarUsuarioBoton }
        fullWidth variant = "contained"
        color = "primary"
        size = "large"
        style = { style.submit } >
        Enviar { " " } <
        /Button>{" "} <
        /Grid>{" "} <
        /Grid>{" "} <
        /form>{" "} <
        /div>{" "} <
        /Container>
    );
};

export default RegistrarUsuario;