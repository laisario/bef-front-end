import Logo from '../../assets/logo.png';
import IconButton from '@mui/material/IconButton';
import LogoutIcon from '@mui/icons-material/Logout';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import { Link as LinkRouter } from 'react-router-dom';
import { useAuth } from '../../context/Auth';
import { Hidden, Typography } from '@mui/material';

export default function Header({ title }) {
  const { logout, user } = useAuth();
  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item xs={0}>
        <img
          src={Logo}
          alt="Logo"
          style={{ maxWidth: '75px', maxHeight: '40px', paddingTop: '4px' }}
        />
      </Grid>
      <Grid item>
        <Link component={LinkRouter} to="/">
          <Typography variant="h6" color="grey.700">
            {title}
          </Typography>
        </Link>
      </Grid>
      <Grid item xs={0}>
        <Grid container justifyContent="flex-end" alignItems="center">
          {user?.nome && (
            <Hidden mdDown>
              <Typography variant="body2" style={{ color: '#000' }}>
                Olá {user?.nome}, seja bem vindo(a)!
              </Typography>
            </Hidden>
          )}
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
  );
}
