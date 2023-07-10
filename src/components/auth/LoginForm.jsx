import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import { Link } from "react-router-dom";

import { useAuth } from "../../context/Auth";

export default function SignIn() {  
    const navigate = useNavigate()
    const { login } = useAuth()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errMsg, setErrMsg] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        setErrMsg("");
    }, [email, password]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { error } = await login(email, password);
        if (error) setErrMsg(error)
        else navigate('/')
    };

    const handleClickShowPassword = () => setShowPassword((show) => !show);


    return (
        <Box component="form" onSubmit={handleSubmit} noValidate maxWidth={250}>
            <TextField
                margin="normal"
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                autoFocus
                error={errMsg}
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
                id="outlined-adornment-password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => {
                    setPassword(e.target.value);
                }}
                error={errMsg}
                placeholder="Senha"
                helperText={errMsg}
                type={showPassword ? 'text' : 'password'}
                InputProps={{
                    endAdornment: ( <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>)
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
