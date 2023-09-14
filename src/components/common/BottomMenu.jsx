import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import { Hidden } from '@mui/material';
import Paper from '@mui/material/Paper';
import { Link, useLocation} from 'react-router-dom';


export default function SimpleBottomNavigation() {
  const { pathname } = useLocation();

  return (
    <Hidden mdUp>
      <Paper
        sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation showLabels fixed value={pathname}>
          <BottomNavigationAction
            label="Página Inicial"
            icon={<HomeIcon />}
            component={Link}
            to="/"
            value="/"
          />
          <BottomNavigationAction
            label="Propostas"
            icon={<NoteAddIcon />}
            component={Link}
            to="/propostas"
            value="/propostas"
          />
        </BottomNavigation>
      </Paper>
    </Hidden>
  );
}
