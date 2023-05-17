import Grid from "@mui/material/Grid";

import Logo from "../assets/logo.png";
import LoginForm from "../components/auth/LoginForm";

export default function Login() {
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
            <Grid
                item
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    backgroundColor: "#fff",
                    boxShadow: "0px 0px 10px 2px rgba(0, 0, 0, 0.3)",
                    borderRadius: "4px",
                    padding: "25px",
                }}
            >
                <LoginForm />
            </Grid>
        </Grid>
    );
}
