import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';

const titleCase = (s) =>
  s.replace (/^[-_]*(.)/, (_, c) => c.toUpperCase())       // Initial char (after -/_)
   .replace (/[-_]+(.)/g, (_, c) => ' ' + c.toUpperCase()) // First char after each -/_

export default function InfoCard({ instrumento }) {
  const fields = ['fabricante', 'modelo', 'numero_de_serie', 'resolucao', 'unidade', 'faixa_nominal', 'data_proxima_checagem']

  const specialCases = {
    numero_de_serie: 'Número de série',
    resolucao: 'Resolução',
    data_proxima_checagem: 'Data da próxima checagem'
  }

  return (
    <Grid container direction="column" justifyContent="space-around">
      {fields
        .filter((field) => !!instrumento[field])
        .map((field) => (
          <>
            <Grid container justifyContent="space-between" sx={{ my: 1 }}>
              <Typography variant="body2">{specialCases[field] || titleCase(field)}:</Typography>
              <Typography variant="body2" sx={{ fontWeight: '500' }}>
                {instrumento[field]}
              </Typography>
            </Grid>
            <Divider />
          </>
        ))}
    </Grid>
  );
}
