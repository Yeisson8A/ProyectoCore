//Importar componentes Material Design
import { Avatar, Button, Container, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";
//Importar objeto JSON con los estilos
import style from "../tool/Style";
//Importar icono de Material Design
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { loginUsuario } from "../../actions/UsuarioAction";

const Login = () => {
    //Crear variable de estado para datos del formulario
    const [usuario, setUsuario] = useState({
        Email: "",
        Password: ""
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

    //Declaración de función para realizar logueo usuario
    const loginUsuarioBoton = (e) => {
        //Para evitar que la página se refresque
        e.preventDefault();
        //Llamar action para realizar login del usuario
        loginUsuario(usuario).then(response => {
            console.log("Login exitoso", response);
            //Almacenar token obtenido para el usuario en el localStorage del navegador
            window.localStorage.setItem("token_seguridad", response.data.token);
        })
    }

    return (
        //Componente contenedor de Material Design
        <Container maxWidth = "xs">
            <div style = { style.paper } > { /* Componente para avatar de Material Design */ } 
                <Avatar style = { style.avatar } > { /* Usar componente de icono importado */ } 
                    <LockOutlinedIcon style = { style.icon }/> 
                </Avatar> { /* Componente para titulos de Material Design */ } 
                <Typography component = "h1" variant = "h5" >Login de Usuario </Typography> 
                <form style = { style.form } > { /* Componente caja de texto de Material Design */ } 
                    <TextField name = "Email"
                                value = { usuario.Email }
                                onChange = { ingresarValoresMemoria }
                                variant = "outlined"
                                label = "Ingrese su email"
                                fullWidth margin = "normal" />
                    <TextField name = "Password"
                                value = { usuario.Password }
                                onChange = { ingresarValoresMemoria }
                                type = "password"
                                variant = "outlined"
                                label = "Ingrese su password"
                                fullWidth margin = "normal" /> { /* Componente para botón de Material Design */ } 
                    <Button type = "submit"
                            onClick = { loginUsuarioBoton }
                            variant = "contained"
                            color = "primary"
                            style = { style.submit }
                            fullWidth >
                    Enviar </Button> 
                </form> 
            </div> 
        </Container>
    );
};

export default Login;