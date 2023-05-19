import Logo from '../../assets/logo.png';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import LogoutIcon from '@mui/icons-material/Logout';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import { Link as LinkRouter } from 'react-router-dom'
import { useAuth } from '../../context/Auth';
import { Hidden, Typography } from '@mui/material';

export default function Header({ instrumento }) {
    const { logout, user } = useAuth()

    return (
        <AppBar position="fixed">
            <Toolbar
                sx={{
                    // display: 'flex',
                    // alignItems: 'center',
                    // justifyContent: 'space-between',
                    backgroundColor: '#fff',
                    boxShadow: '0px 0px 10px 2px rgba(0, 0, 0, 0.1)',
                    padding: '5px',

                }}
            >
                <Grid container justifyContent='space-between' alignItems='center'>
                    <Grid item xs={3}>
                        <img
                            src={Logo}
                            alt="Logo"
                            style={{ maxWidth: '75px', maxHeight: '50px' }}
                        />
                    </Grid>
                    <Grid item>
                        <Link component={LinkRouter} to="/">
                            <Typography variant='h6' color="grey.700">Meus instrumentos</Typography>
                        </Link>
                    </Grid>
                    <Grid item xs={3}>
                        <Grid container justifyContent='flex-end' alignItems='center'>
                            {user?.nome &&
                                <Hidden mdDown>
                                    <Typography variant='body2' style={{ color: '#000' }}>Olá {user?.nome}, seja bem vindo(a)!</Typography>
                                </Hidden>
                            }
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                sx={{ p: 0, ml: 2 }}
                                onClick={logout}
                            >
                                <LogoutIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}
