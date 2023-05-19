import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Accordion from '@mui/material/Accordion';
import Link from '@mui/material/Link';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import PlaceIcon from '@mui/icons-material/Place';
import SouthIcon from '@mui/icons-material/South';
import { Link as LinkRouter } from 'react-router-dom'

import InfoCard from './cards/InfoCard';
import CalibracaoCard from './cards/CalibracaoCard';
import ObservacaoCard from './cards/ObservacaoCard';

export default function InstrumentsDetails({ instrumento }) {
    function capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    if (!instrumento?.id) return null

    return (<Grid key={instrumento.tag} sx={{ mb: 3 }} container justifyContent="center">
        <Grid item xs={12} md={6}>
            <Paper sx={{ border: '1px solid #e8e0db', boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px' }}>
                <Grid container p={2} alignItems="center" justifyContent="space-between">
                    <Grid item>
                        <Typography variant="h5" sx={{ color: '#e26443' }}>
                            {capitalizeFirstLetter(instrumento.descricao)}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Chip label={instrumento.status.nome} color={instrumento.status.cor} />
                    </Grid>
                </Grid>
                <Grid container px={2} pb={2} alignItems="center" justifyContent="space-between">
                    <Grid item>
                        <Typography variant="h6" color="text.secondary">
                            {capitalizeFirstLetter(instrumento.tag)}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body2" color="text.secondary">
                            <Grid container alignItems="center">
                                {instrumento.localizacao.nome}
                                <PlaceIcon sx={{ ml: 0.5 }} fontSize='small' />
                            </Grid>
                        </Typography>
                    </Grid>
                </Grid>

                <Card>
                    <CardHeader titleTypographyProps={{ variant: 'subtitle1', sx: { color: '#e16542', fontWeight: '500' } }} title="Informações" sx={{ backgroundColor: '#e8e0db' }} />
                    <CardContent>
                        <InfoCard instrumento={instrumento} />
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader titleTypographyProps={{ variant: 'subtitle1', sx: { color: '#e16542', fontWeight: '500' } }} title="Calibrações" sx={{ backgroundColor: '#e8e0db' }} />
                    <CardContent>
                        <CalibracaoCard instrumento={instrumento} isDetail />
                    </CardContent>
                </Card>
                {instrumento.observacoes && <Card>
                    <CardHeader titleTypographyProps={{ variant: 'subtitle1', sx: { color: '#e16542', fontWeight: '500' } }} title="Observações Adicionais" sx={{ backgroundColor: '#e8e0db' }} />
                    <CardContent>
                        <ObservacaoCard instrumento={instrumento} />
                    </CardContent>
                </Card>}
            </Paper>
        </Grid>
    </Grid>)
}
