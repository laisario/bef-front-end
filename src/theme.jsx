import { createTheme } from '@mui/material/styles'

const palette = {
    primary: { main: '#e26443' },
}

const theme = createTheme({
    palette,
    components: {
        MuiLink: {
            defaultProps: {
                underline: 'none'
            }
        },
        MuiCard: {
             styleOverrides: {
                root: {
                    borderRadius: 0
                }
             }
        }
    }
})

export default theme;