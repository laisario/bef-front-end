import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';

export default function CalibracaoCard({ instrumento, isDetail }) {
    const calibracoes = isDetail ? instrumento.calibracoes : [instrumento.calibracoes[0]]

    return (
        <Grid
            container
            direction="column"
            justifyContent="space-around"
            id="calibracao"
        >
            {calibracoes.map((calibracao, index) => <>
                {isDetail ? <Divider sx={{ mt: index > 0 ? 3 : 0 }}>Calibração {index + 1} {!!calibracao?.data && `(${calibracao?.data})`}</Divider> : <Divider>Última calibração {!!calibracao?.data && `(${calibracao?.data})`}</Divider>}
                {calibracao?.ordem_de_servico?.valor && <>
                    <Grid container justifyContent="space-between" sx={{ mb: 1 }}>
                        <Typography variant="body2">Valor:</Typography>
                        <Typography variant="body2" sx={{ fontWeight: '500' }}>
                            R$ {calibracao.ordem_de_servico?.valor}
                        </Typography>
                    </Grid>
                    <Divider />
                </>}
                {calibracao?.resultado?.erro && <>
                    <Grid container justifyContent="space-between" sx={{ my: 1 }}>
                        <Typography variant="body2">Erro:</Typography>
                        <Typography variant="body2" sx={{ fontWeight: '500' }}>
                            {calibracao.resultado.erro}
                        </Typography>
                    </Grid>
                    <Divider />
                </>}
                {calibracao?.resultado?.status?.nome && <>
                    <Grid container justifyContent="space-between" sx={{ my: 1 }}>
                        <Typography variant="body2">Resultado:</Typography>
                        <Typography variant="body2" sx={{ fontWeight: '500' }}>
                            {calibracao.resultado.status.nome}
                        </Typography>
                    </Grid>
                    <Divider />
                </>}
                {calibracao?.laboratorio?.nome && <>
                    <Grid container justifyContent="space-between" sx={{ my: 1 }}>
                        <Typography variant="body2">Laborátorio:</Typography>
                        <Typography variant="body2" sx={{ fontWeight: '500' }}>
                            {calibracao.laboratorio.nome}
                        </Typography>
                    </Grid>
                    <Divider />
                </>}
                {calibracao?.certificado?.numero && <>
                    <Grid container justifyContent="space-between" sx={{ my: 1 }}>
                        <Typography variant="body2">Certificado:</Typography>
                        <Typography variant="body1" sx={{ fontWeight: '500' }}>
                            {calibracao.certificado.numero}
                        </Typography>
                    </Grid>
                    <Divider />
                </>}
                {calibracao?.criterio?.nome && <>
                    <Grid container justifyContent="space-between" sx={{ my: 1 }}>
                        <Typography variant="body2">Critério:</Typography>
                        <Typography variant="body2" sx={{ fontWeight: '500' }}>
                            {calibracao.criterio.nome}
                        </Typography>
                    </Grid>
                    <Divider />
                </>}
                {calibracao?.criterio?.referencia?.nome && <>
                    <Grid container justifyContent="space-between" sx={{ my: 1 }}>
                        <Typography variant="body2">Referência do critério:</Typography>
                        <Typography variant="body2" sx={{ fontWeight: '500' }}>
                            {calibracao.criterio.referencia.nome}
                        </Typography>
                    </Grid>
                    <Divider />
                </>}
                {calibracao?.ordem_de_servico?.nome && <>
                    <Grid container justifyContent="space-between" sx={{ my: 1 }}>
                        <Typography variant="body2">Ordem de serviço:</Typography>
                        <Typography variant="body2" sx={{ fontWeight: '500' }}>
                            {calibracao.ordem_de_servico?.nome}
                        </Typography>
                    </Grid>
                    <Divider />
                </>}
                {calibracao?.data_proxima_checagem && <>
                    <Grid container justifyContent="space-between" sx={{ my: 1 }}>
                        <Typography variant="body2">Próxima checagem: </Typography>
                        <Typography variant="body2" sx={{ fontWeight: '500' }}>
                            {calibracao.data_proxima_checagem}
                        </Typography>
                    </Grid>
                    <Divider />
                </>}
                {calibracao?.data_proxima_calibracao && <>
                    <Grid container justifyContent="space-between" sx={{ mt: 1 }}>
                        <Typography variant="body2">Próxima calibração: </Typography>
                        <Typography variant="body2" sx={{ fontWeight: '500' }}>
                            {calibracao.data_proxima_calibracao}
                        </Typography>
                    </Grid>
                </>}
            </>)}

            {!isDetail && instrumento.calibracoes.length > 1 && (
                <Divider sx={{
                    "&::before, &::after": {
                        borderColor: "#e26443",
                    },
                }}>
                    <Link component={RouterLink} to={`/instrumento/${instrumento.id}#calibracao`} style={{ fontWeight: 600, textDecoration: 'none', color: '#e26443' }}>
                        Ver mais calibrações
                    </Link>
                </Divider>
            )}
        </Grid>
    );
}
