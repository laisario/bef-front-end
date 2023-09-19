/* eslint-disable react/prop-types */
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Chip,
  Grid,
  Paper,
} from '@mui/material';
import Typography from '@mui/material/Typography';
import capitalizeFirstLetter from '../../helpers/formatText';
import SouthIcon from '@mui/icons-material/South';
import CardInformation from './CardInformation';

const statusProposta = {
  null: 'Proposta em análise',
  false: 'Proposta negada',
  true: 'Proposta aprovada',
};

const colorStatusProposta = {
  null: 'primary',
  false: 'error',
  true: 'success',
};

function CardProposol({ proposta }) {
  console.log(proposta);
  return (
    <Paper
      sx={{
        marginTop: 2,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
      }}
    >
      <Grid
        container
        sx={{
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 2,
          minWidth: '45vw',
        }}
      >
        <Grid item>
          <Typography variant="h5">
            {capitalizeFirstLetter(proposta.identificacao_instrumento)}
          </Typography>
        </Grid>
        <Grid item>
          <Chip
            label={statusProposta[proposta.aprovacao]}
            color={colorStatusProposta[proposta.aprovacao]}
          />
        </Grid>
      </Grid>

      <Accordion disableGutters>
        <AccordionSummary
          sx={{ backgroundColor: '#e8e0db' }}
          expandIcon={<SouthIcon fontSize="small" sx={{ color: '#e16542' }} />}
        >
          <Typography
            variant="subtitle1"
            sx={{ color: '#e16542', fontWeight: '500' }}
          >
            Informações enviadas
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <CardInformation
            fields={['quantidade', 'faixa_medicao_max', 'faixa_medicao_min', 'informacoes_adicionais']}
            specialCases={{
              faixa_medicao_max: 'Faixa de medição máxima',
              faixa_medicao_min: 'Faixa de medição mínima',
              informacoes_adicionais: 'Informações adicionais'
            }}
            proposta={proposta}
            pontosDeCalibracao={proposta.pontos_de_calibracao}
          />
        </AccordionDetails>
      </Accordion>

      {(proposta.anexo || proposta.data_aprovacao) && (
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
              Informações recebidas
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
          <CardInformation
            fields={['anexo', 'data_aprovacao', 'preco', 'data_criacao', 'data_atualizacao']}
            specialCases={{
              data_aprovacao: 'Data resultado',
              preco: 'Preço',
              data_criacao: 'Proposta enviada',
              data_atualizacao: 'Última vez proposta atualizada'
            }}
            proposta={proposta}
            pontosDeCalibracao={[]}
          />
        </AccordionDetails>
        </Accordion>
      )}
    </Paper>
  );
}

export default CardProposol;
