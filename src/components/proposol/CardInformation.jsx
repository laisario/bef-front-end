/* eslint-disable react/prop-types */
import { Divider, Grid, Typography } from '@mui/material';
import { titleCase, formatDate } from '../../helpers/formatText';
import { Link } from 'react-router-dom';

const formatarLista = (lista) => {
  return `${lista.map(({ nome }) => nome).join(', ')}`;
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
              {field === 'anexo' ? (
                <Grid
                  container
                  justifyContent="space-between"
                  alignItems="center"
                  flexDirection="row"
                  sx={{ my: 1 }}
                >
                  <Link
                    style={{
                      textDecoration: 'none',
                      color: '#e26443',
                      fontFamily: 'roboto',
                      fontSize: 14,
                    }}
                    to={proposta[field]}
                  >
                    Anexo
                  </Link>
                </Grid>
              ) : (
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
                    {field.includes('data')
                      ? formatDate(proposta[field])
                      : proposta[field]}
                  </Typography>
                </Grid>
              )}
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
    </>
  );
}

export default CardInformation;
