import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';

export default function CalibracaoCard({ instrumento }) {
    const calibracao = instrumento.calibracoes[0];
    return (
        <Grid
            container
            key={calibracao.id}
            direction="column"
            justifyContent="space-around"
        >
            <Grid container justifyContent="space-between" sx={{ my: 1 }}>
                <Typography variant="body2">
                    Valor:
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: '500' }}>
                    R$ {calibracao.ordem_de_servico?.valor}
                </Typography>
            </Grid>
            <Divider />
            <Grid container justifyContent="space-between" sx={{ my: 1 }}>
                <Typography variant="body2">
                    Erro:
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: '500' }}>
                    {calibracao.resultado.erro}
                </Typography>
            </Grid>
            <Divider />
            <Grid container justifyContent="space-between" sx={{ my: 1 }}>
                <Typography variant="body2">
                    Resultado:
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: '500' }}>
                    {calibracao.resultado.status.nome}
                </Typography>
            </Grid>
            <Divider />
            <Grid container justifyContent="space-between" sx={{ my: 1 }}>
                <Typography variant="body2">
                    Laborátorio:
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: '500' }}>
                    {calibracao.laboratorio.nome}
                </Typography>
            </Grid>
            <Divider />
            <Grid container justifyContent="space-between" sx={{ my: 1 }}>
                <Typography variant="body2">
                    Certificado:
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: '500' }}>
                    {calibracao.certificado.numero}
                </Typography>
            </Grid>
            <Divider />
            <Grid container justifyContent="space-between" sx={{ my: 1 }}>
                <Typography variant="body2">
                    Critério:
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: '500' }}>
                    {calibracao.criterio.nome}
                </Typography>
            </Grid>
            <Divider />
            <Grid container justifyContent="space-between" sx={{ my: 1 }}>
                <Typography variant="body2">
                    Referência do critério:
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: '500' }}>
                    {calibracao.criterio.referencia.nome}
                </Typography>
            </Grid>
            <Divider />
            <Grid container justifyContent="space-between" sx={{ my: 1 }}>
                <Typography variant="body2">
                    Ordem de serviço:
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: '500' }}>
                    {calibracao.ordem_de_servico?.nome}
                </Typography>
            </Grid>
            <Divider />
            <Grid container justifyContent="space-between" sx={{ my: 1 }}>
                <Typography variant="body2">
                    Próxima checagem:{' '}
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: '500' }}>
                    {calibracao.data_proxima_checagem}
                </Typography>
            </Grid>
            <Divider />
            <Grid container justifyContent="space-between" sx={{ my: 1 }}>
                <Typography variant="body2">
                    Próxima calibração:{' '}
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: '500' }}>
                    {calibracao.data_proxima_calibracao}
                </Typography>
            </Grid>
            {
                instrumento.calibracoes.length > 1
                && <Link style={{ textDecoration: 'none', color: '#e26443' }}>
                    Veja mais
                </Link>
            }
        </Grid>
    );
}
