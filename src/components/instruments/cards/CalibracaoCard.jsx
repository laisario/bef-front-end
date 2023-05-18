/* eslint-disable react/prop-types */
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Chip } from '@mui/material';

export default function CalibracaoCard({ instrumento }) {
    const calibracao = instrumento.calibracoes[0];
    console.log(calibracao)
    return (
        <Grid
            container
            key={calibracao.id}
            direction="column"
            justifyContent="space-around"
        >
            <Divider>Última calibração {!!calibracao?.data && `(${calibracao?.data})`}</Divider>
            <Grid container justifyContent="space-between" sx={{ mb: 1 }}>
                <Typography variant="body2">Valor:</Typography>
                <Typography variant="body2" sx={{ fontWeight: '500' }}>
                    R$ {calibracao.ordem_de_servico?.valor}
                </Typography>
            </Grid>
            <Divider />
            <Grid container justifyContent="space-between" sx={{ my: 1 }}>
                <Typography variant="body2">Erro:</Typography>
                <Typography variant="body2" sx={{ fontWeight: '500' }}>
                    {calibracao.resultado.erro}
                </Typography>
            </Grid>
            <Divider />
            <Grid container justifyContent="space-between" sx={{ my: 1 }}>
                <Typography variant="body2">Resultado:</Typography>
                <Typography variant="body2" sx={{ fontWeight: '500' }}>
                    {calibracao.resultado.status.nome}
                </Typography>
            </Grid>
            <Divider />
            <Grid container justifyContent="space-between" sx={{ my: 1 }}>
                <Typography variant="body2">Laborátorio:</Typography>
                <Typography variant="body2" sx={{ fontWeight: '500' }}>
                    {calibracao.laboratorio.nome}
                </Typography>
            </Grid>
            <Divider />
            <Grid container justifyContent="space-between" sx={{ my: 1 }}>
                <Typography variant="body2">Certificado:</Typography>
                <Typography variant="body1" sx={{ fontWeight: '500' }}>
                    {calibracao.certificado.numero}
                </Typography>
            </Grid>
            <Divider />
            <Grid container justifyContent="space-between" sx={{ my: 1 }}>
                <Typography variant="body2">Critério:</Typography>
                <Typography variant="body2" sx={{ fontWeight: '500' }}>
                    {calibracao.criterio.nome}
                </Typography>
            </Grid>
            <Divider />
            <Grid container justifyContent="space-between" sx={{ my: 1 }}>
                <Typography variant="body2">Referência do critério:</Typography>
                <Typography variant="body2" sx={{ fontWeight: '500' }}>
                    {calibracao.criterio.referencia.nome}
                </Typography>
            </Grid>
            <Divider />
            <Grid container justifyContent="space-between" sx={{ my: 1 }}>
                <Typography variant="body2">Ordem de serviço:</Typography>
                <Typography variant="body2" sx={{ fontWeight: '500' }}>
                    {calibracao.ordem_de_servico?.nome}
                </Typography>
            </Grid>
            <Divider />
            <Grid container justifyContent="space-between" sx={{ my: 1 }}>
                <Typography variant="body2">Próxima checagem: </Typography>
                <Typography variant="body2" sx={{ fontWeight: '500' }}>
                    {calibracao.data_proxima_checagem}
                </Typography>
            </Grid>
            <Divider />
            <Grid container justifyContent="space-between" sx={{ mt: 1 }}>
                <Typography variant="body2">Próxima calibração: </Typography>
                <Typography variant="body2" sx={{ fontWeight: '500' }}>
                    {calibracao.data_proxima_calibracao}
                </Typography>
            </Grid>
            {instrumento.calibracoes.length > 1 && (
                <Divider sx={{
                    "&::before, &::after": {
                        borderColor: "#e26443",
                    },
                }}>
                    <Link component={RouterLink} to={`/instrumento/${instrumento.id}`} style={{ fontWeight: 600, textDecoration: 'none', color: '#e26443' }}>
                        Ver mais calibrações
                    </Link>
                </Divider>
            )}
        </Grid>
    );
}
