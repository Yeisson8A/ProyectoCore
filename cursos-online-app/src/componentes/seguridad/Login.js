//Importar componentes Material Design
import {
    Avatar,
    Button,
    Container,
    TextField,
    Typography,
} from "@material-ui/core";
import React from "react";
//Importar objeto JSON con los estilos
import style from "../tool/Style";
//Importar icono de Material Design
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

const Login = () => {
    return (
        //Componente contenedor de Material Design
        <
        Container maxWidth = "xs" >
        <
        div style = { style.paper } > { /* Componente para avatar de Material Design */ } <
        Avatar style = { style.avatar } > { /* Usar componente de icono importado */ } <
        LockOutlinedIcon style = { style.icon }
        /> <
        /Avatar> { /* Componente para titulos de Material Design */ } <
        Typography component = "h1"
        variant = "h5" >
        Login de Usuario <
        /Typography> <
        form style = { style.form } > { /* Componente caja de texto de Material Design */ } <
        TextField name = "username"
        variant = "outlined"
        label = "Ingrese su username"
        fullWidth margin = "normal" / >
        <
        TextField name = "password"
        type = "password"
        variant = "outlined"
        label = "Ingrese su password"
        fullWidth margin = "normal" / > { /* Componente para botón de Material Design */ } <
        Button type = "submit"
        variant = "contained"
        color = "primary"
        style = { style.submit }
        fullWidth >
        Enviar <
        /Button> <
        /form> <
        /div> <
        /Container>
    );
};

export default Login;