import Logo from '../../assets/logo.png';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import LogoutIcon from '@mui/icons-material/Logout';
import Grid from '@mui/material/Grid';
import { useAuth } from '../../context/Auth';

export default function Header({ setIsSidebarOpen }) {
    const { logout } = useAuth()

    const handleSideBar = () => {
        setIsSidebarOpen(true);
    };

    return (
        <AppBar position="fixed">
            <Toolbar
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    backgroundColor: '#fff',
                    boxShadow: '0px 0px 10px 2px rgba(0, 0, 0, 0.1)',
                    padding: '5px',
                }}
            >
                <Grid item>
                    <img
                        src={Logo}
                        alt="Logo"
                        style={{ maxWidth: '100px', maxHeight: '50px' }}
                    />
                </Grid>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={logout}
                >
                    <LogoutIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}
