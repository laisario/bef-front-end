import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';

export default function InfoCard({ instrumento }) {
    return (
        <Grid container direction="column" justifyContent="space-around">
            {!!instrumento?.tipo?.modelo?.fabricante?.nome &&
                <>
                    <Grid container justifyContent="space-between" sx={{ my: 1 }}>
                        <Typography variant="body2">
                            Fabricante:
                        </Typography>
                        <Typography variant="body2" sx={{ fontWeight: '500' }}>
                            {instrumento.tipo.modelo.fabricante.nome}
                        </Typography>
                    </Grid>
                    <Divider />
                </>}

            {!!instrumento?.tipo?.modelo?.nome &&
                <>
                    <Grid container justifyContent="space-between" sx={{ my: 1 }}>
                        <Typography variant="body2">
                            Modelo:
                        </Typography>
                        <Typography variant="body2" sx={{ fontWeight: '500' }}>
                            {instrumento.tipo.modelo.nome}
                        </Typography>
                    </Grid>
                    <Divider />
                </>}

            {!!instrumento?.tipo?.numero_de_serie &&
                <>
                    <Grid container justifyContent="space-between" sx={{ my: 1 }}>
                        <Typography variant="body2">
                            Número de série:
                        </Typography>
                        <Typography variant="body2" sx={{ fontWeight: '500' }}>
                            {instrumento.tipo.numero_de_serie}
                        </Typography>
                    </Grid>
                    <Divider />
                </>}

            {!!instrumento?.tipo?.resolucao &&
                <>
                    <Grid container justifyContent="space-between" sx={{ my: 1 }}>
                        <Typography variant="body2">
                            Resolução:
                        </Typography>
                        <Typography variant="body2" sx={{ fontWeight: '500' }}>
                            {instrumento.tipo.resolucao}
                        </Typography>
                    </Grid>
                    <Divider />
                </>}

            {!!instrumento?.tipo?.unidade &&
                <>
                    <Grid container justifyContent="space-between" sx={{ my: 1 }}>
                        <Typography variant="body2">
                            Unidade:
                        </Typography>
                        <Typography variant="body2" sx={{ fontWeight: '500' }}>
                            {instrumento.tipo.unidade}
                        </Typography>
                    </Grid>
                    <Divider />
                </>}
            {!!instrumento.tipo.faixa_nominal &&
                <>
                    <Grid container justifyContent="space-between" sx={{ my: 1 }}>
                        <Typography variant="body2">
                            Faixa Nominal:
                        </Typography>
                        <Typography variant="body2" sx={{ fontWeight: '500' }}>
                            {instrumento.tipo.faixa_nominal}
                        </Typography>
                    </Grid>
                    <Divider />
                </>}
            {instrumento?.ordem_de_compra?.data &&
                <>
                    <Grid container justifyContent="space-between" sx={{ my: 1 }}>
                        <Typography variant="body2">
                            Data da compra:{' '}
                        </Typography>
                        <Typography variant="body2" sx={{ fontWeight: '500' }}>
                            {instrumento.ordem_de_compra?.data}
                        </Typography>
                    </Grid>
                    <Divider />
                </>
            }
            {instrumento?.ordem_de_compra?.numero &&
                <>
                    <Grid container justifyContent="space-between" sx={{ my: 1 }}>
                        <Typography variant="body2">
                            Ordem de compra:{' '}
                        </Typography>
                        <Typography variant="body2" sx={{ fontWeight: '500' }}>
                            {instrumento.ordem_de_compra.numero}
                        </Typography>
                    </Grid>
                    <Divider />
                </>
            }
        </Grid>
    );
}
