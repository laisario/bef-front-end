import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';

export default function DescriptionCard({ instrumento }) {
    console.log(instrumento)
    return (
        <Grid>
            <Grid container justifyContent="space-between" sx={{ my: 1 }}>
                <Typography variant="body2">
                    Data da compra:{' '}
                </Typography>
                <Typography variant="body2" sx={{fontWeight: '500'}}>
                {instrumento.ordem_de_compra?.data}
                </Typography>
            </Grid>
            <Divider />
            <Grid container justifyContent="space-between" sx={{ my: 1 }}>
                <Typography variant="body2">
                    Ordem de compra:{' '}
                </Typography>
                <Typography variant="body2" sx={{fontWeight: '500'}}>
                    {instrumento.ordem_de_compra}
                </Typography>
            </Grid>
        </Grid>
    );
}
