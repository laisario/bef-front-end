import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import Accordion from '@mui/material/Accordion';
import Link from '@mui/material/Link';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import PlaceIcon from '@mui/icons-material/Place';
import SouthIcon from '@mui/icons-material/South';
import { Link as LinkRouter } from 'react-router-dom';

import InfoCard from './cards/InfoCard';
import CalibracaoCard from './cards/CalibracaoCard';
import ObservacaoCard from './cards/ObservacaoCard';
import Card from './Card';

export default function InstrumentsList({ instrumentos }) {
  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  return instrumentos?.map((instrumento) => (
    <Grid
      key={instrumento.tag}
      sx={{ mb: 3 }}
      container
      justifyContent="center"
    >
      <Grid item xs={12} md={6}>
        <Paper
          sx={{
            border: '1px solid #e8e0db',
            boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
          }}
        >
          <Grid
            container
            p={2}
            alignItems="center"
            justifyContent="space-between"
          >
            <Grid item>
              <Link
                component={LinkRouter}
                to={`/instrumento/${instrumento.id}`}
              >
                <Typography variant="h5" sx={{ color: '#e26443' }}>
                  {capitalizeFirstLetter(instrumento.descricao)}
                </Typography>
              </Link>
            </Grid>
            <Grid item>
              <Chip
                label={instrumento.status.nome}
                color={instrumento.status.cor}
              />
            </Grid>
          </Grid>
          <Grid
            container
            px={2}
            pb={2}
            alignItems="center"
            justifyContent="space-between"
          >
            <Grid item>
              <Typography variant="h6" color="text.secondary">
                {capitalizeFirstLetter(instrumento.tag)}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2" color="text.secondary">
                <Grid container alignItems="center">
                  {instrumento.laboratorio}
                  <PlaceIcon sx={{ ml: 0.5 }} fontSize="small" />
                </Grid>
              </Typography>
            </Grid>
          </Grid>

          <Card
            instrumento={instrumento}
            title="Informações"
            fields={[
              'fabricante',
              'modelo',
              'numero_de_serie',
              'resolucao',
              'unidade',
              'faixa_nominal',
              'data_proxima_checagem',
            ]}
            specialCases={{
              numero_de_serie: 'Número de série',
              resolucao: 'Resolução',
              data_proxima_checagem: 'Data da próxima checagem',
            }}
          />
          <Accordion disableGutters>
            <AccordionSummary
              sx={{ backgroundColor: '#e8e0db' }}
              expandIcon={
                <SouthIcon fontSize="small" sx={{ color: '#e16542' }} />
              }
            >
              <Typography
                variant="subtitle1"
                sx={{ color: '#e16542', fontWeight: '500' }}
              >
                Última calibração
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <CalibracaoCard instrumento={instrumento} />
            </AccordionDetails>
          </Accordion>
          {instrumento.observacoes && (
            <Accordion disableGutters>
              <AccordionSummary
                sx={{ backgroundColor: '#e8e0db' }}
                expandIcon={
                  <SouthIcon fontSize="small" sx={{ color: '#e16542' }} />
                }
              >
                <Typography
                  variant="subtitle1"
                  sx={{ color: '#e16542', fontWeight: '500' }}
                >
                  Observações Adicionais
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography paragraph variant="body2">
                  {instrumento.observacoes}
                </Typography>
              </AccordionDetails>
            </Accordion>
          )}
        </Paper>
      </Grid>
    </Grid>
  ));
}
