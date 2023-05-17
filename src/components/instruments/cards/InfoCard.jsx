import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';

import DescriptionCard from './DescriptionCard';

export default function InfoCard({ instrumento }) {
  return (
    <Grid container direction="column" justifyContent="space-around">
      <Grid>
        <Grid container justifyContent="space-between" sx={{my:1}}>
          <Typography variant="body2">
            Fabricante:
          </Typography>
          <Typography variant="body2" sx={{fontWeight: '500'}}>
            {instrumento.tipo.modelo.fabricante.nome}
          </Typography>
        </Grid>
        <Divider />
        <Grid container justifyContent="space-between" sx={{my:1}}>
          <Typography variant="body2">
            Modelo:
          </Typography>
          <Typography variant="body2" sx={{fontWeight: '500'}}>
            {instrumento.tipo.modelo.nome}
          </Typography>
        </Grid>
        <Divider />
        <Grid container justifyContent="space-between" sx={{my:1}}>
          <Typography variant="body2">
            Número de série:
          </Typography>
          <Typography variant="body2" sx={{fontWeight: '500'}}>
            {instrumento.tipo.numero_de_serie}
          </Typography>
        </Grid>
        <Divider />
        <Grid container justifyContent="space-between" sx={{my:1}}>
          <Typography variant="body2">
            Resolução:
          </Typography>
          <Typography variant="body2" sx={{fontWeight: '500'}}>
            {instrumento.tipo.resolucao}
          </Typography>
        </Grid>
        <Divider />
        <Grid container justifyContent="space-between" sx={{my:1}}>
          <Typography variant="body2">
            Unidade:
          </Typography>
          <Typography variant="body2" sx={{fontWeight: '500'}}>
            {instrumento.tipo.unidade}
          </Typography>
        </Grid>
        <Divider />
        <Grid container justifyContent="space-between" sx={{my:1}}>
          <Typography variant="body2">
            Faixa Nominal:
          </Typography>
          <Typography variant="body2" sx={{fontWeight: '500'}}>{instrumento.tipo.faixa_nominal}</Typography>
        </Grid>
        <Divider />
      </Grid>
      <Grid>
        <DescriptionCard instrumento={instrumento} />
      </Grid>
    </Grid>
  );
}
