
import Grid from "@mui/material/Grid";

import Logo from "../assets/logo.png";
import RegisterForm from "../components/auth/RegisterForm";

function Register() {
    return (
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
        >
            <Grid item>
                <img
                    src={Logo}
                    alt="Logo"
                    style={{ 
                        maxWidth: "200px", 
                        maxHeight: "200px",
                        marginTop: '40px',
                        marginBottom: '40px'
                    }}
                />
            </Grid>
            <Grid item>
                <RegisterForm />
            </Grid>
        </Grid>
    );
}

export default Register;
