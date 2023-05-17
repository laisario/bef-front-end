import { useState, useEffect } from "react";
import { redirect } from "react-router-dom"
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { Link } from "react-router-dom";

import axios from "../../axios";
import { useAuth } from "../../context/Auth";

export default function SignIn() {  
    const { login } = useAuth()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errMsg, setErrMsg] = useState("");

    useEffect(() => {
        setErrMsg("");
    }, [email, password]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { error } = await login(email, password);
        if (error) setErrMsg(error)
    };

    return (
        <Box component="form" onSubmit={handleSubmit} noValidate maxWidth={250}>
            <Typography sx={{ color: "red" }} align="center">
                {errMsg}
            </Typography>
            <TextField
                margin="normal"
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value);
                }}
            />
            <TextField
                margin="normal"
                fullWidth
                name="password"
                label="Senha"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => {
                    setPassword(e.target.value);
                }}
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                color="primary"
                style={{ backgroundColor: '#e26443' }}
            >
                Entrar
            </Button>
            <Grid container>
                <Grid item sx={{ mt: 8 }}>
                    <Link to="/register" style={{textDecoration: 'none', color: '#e26443'}}>
                        Não tem conta? Inscreva-se!
                    </Link>
                </Grid>
            </Grid>
        </Box>
    );
}
