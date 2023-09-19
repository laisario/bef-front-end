/* eslint-disable react/prop-types */
import { Divider, Grid, Typography } from '@mui/material';
import { titleCase } from '../../helpers/formatText';

const formatarLista = (lista) => {
  return `[${lista.map(({ nome }) => nome).join(', ')}]`;
};

function CardInformation({
  fields,
  proposta,
  specialCases,
  pontosDeCalibracao,
}) {
  return (
    <>
      <Grid container direction="column" justifyContent="space-around">
        {fields
          .filter((field) => !!proposta[field])
          .map((field) => (
            <>
              <Grid
                key={proposta.id}
                container
                justifyContent="space-between"
                sx={{ my: 1 }}
              >
                <Typography variant="body2">
                  {specialCases[field] || titleCase(field)}:
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: '500' }}>
                  {proposta[field]}
                </Typography>
              </Grid>
              <Divider />
            </>
          ))}
      </Grid>
      {!!pontosDeCalibracao.length && (
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          flexDirection="row"
          sx={{ my: 1 }}
        >
          <Typography variant="body2">Pontos de calibração:</Typography>
          {formatarLista(pontosDeCalibracao)}
        </Grid>
      )}
      <Divider />
    </>
  );
}

export default CardInformation;
