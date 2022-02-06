import { Button, Container, Grid, TextField, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { actualizarUsuario, obtenerUsuarioActual } from "../../actions/UsuarioAction";
//Importar objeto JSON con los estilos
import style from "../tool/Style";

const PerfilUsuario = () => {
    //Crear variable de estado para almacenar los datos de perfil
    const [usuario, setUsuario] = useState({
        nombreCompleto: "",
        email: "",
        password: "",
        confirmarPassword: "",
        username: ""
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
    }

    //Usar método useEffect a fin de obtener datos del usuario al iniciar
    useEffect(() => {
        obtenerUsuarioActual().then(response => {
            //Se pasa el JSON con los datos obtenidos en el response para asignarlos a la variable de estado
            setUsuario(response.data);
        })
    }, [])

    //Declaración de función para guardar las modificaciones al usuario
    const guardarUsuario = (e) => {
        //Para evitar que la página se refresque
        e.preventDefault();
        //Llamar action para actualizar usuario
        actualizarUsuario(usuario).then(response => {
            console.log("Se actualizó exitosamente el usuario", response);
            //Almacenar token obtenido para el usuario en el localStorage del navegador
            window.localStorage.setItem("token_seguridad", response.data.token);
        })
    }

    return (
        //Componente contenedor de Material Design
        <Container component = "main" maxWidth = "md" justify = "center" >
            <div style = { style.paper } > { /* Componente para titulos de Material Design */ } 
                <Typography component = "h1" variant = "h5" >Perfil de Usuario </Typography> 
            </div> 
            <form style = { style.form } > { /* Componente grid de Material Design (Padre) */ } 
                <Grid container spacing = { 2 } > 
                {/* Componente grid de Material Design (Hijo)
                    xs={12} => Significa que si el dispositivo es un móvil va a ocupar toda la pantalla
                    md={6} => Significa que si el dispositivo es una tablet o superior 
                    va a ocupar la mitad de la pantalla */} 
                    <Grid item xs = { 12 } md = { 12 } > 
                    { /* Componente para caja de texto de Material Design */ } 
                        <TextField name = "nombreCompleto"
                                    value = { usuario.nombreCompleto }
                                    onChange = { ingresarValoresMemoria }
                                    variant = "outlined"
                                    fullWidth label = "Ingrese nombre y apellidos" />
                    </Grid> 
                    {/* Componente grid de Material Design (Hijo)
                        xs={12} => Significa que si el dispositivo es un móvil va a ocupar toda la pantalla
                        md={6} => Significa que si el dispositivo es una tablet o superior 
                        va a ocupar la mitad de la pantalla */} 
                    <Grid item xs = { 12 } md = { 6 } >
                        <TextField name = "username"
                                    value = { usuario.username }
                                    onChange = { ingresarValoresMemoria }
                                    variant = "outlined"
                                    fullWidth label = "Ingrese username" />
                    </Grid> 
                    <Grid item xs = { 12 } md = { 6 } >
                        <TextField name = "email"
                                    value = { usuario.email }
                                    onChange = { ingresarValoresMemoria }
                                    variant = "outlined"
                                    fullWidth label = "Ingrese email" />
                    </Grid> 
                    <Grid item xs = { 12 } md = { 6 } >
                        <TextField name = "password"
                                    value = { usuario.password }
                                    onChange = { ingresarValoresMemoria }
                                    type = "password"
                                    variant = "outlined"
                                    fullWidth label = "Ingrese password" />
                    </Grid> 
                    <Grid item xs = { 12 } md = { 6 } >
                        <TextField name = "confirmarPassword"
                                    value = { usuario.confirmarPassword }
                                    onChange = { ingresarValoresMemoria }
                                    type = "password"
                                    variant = "outlined"
                                    fullWidth label = "Confirme password" />
                    </Grid> 
                </Grid> 
                { /* Sección botones */ } 
                <Grid container justifyContent = "center" >
                    <Grid item xs = { 12 } md = { 6 } > 
                    { /* Componente para botón de Material Design */ } 
                        <Button type = "submit"
                                onClick = { guardarUsuario }
                                fullWidth variant = "contained"
                                color = "primary"
                                size = "large"
                                style = { style.submit } >
                        Guardar Datos </Button> 
                    </Grid> 
                </Grid> 
            </form> 
        </Container>
    );
};

export default PerfilUsuario;