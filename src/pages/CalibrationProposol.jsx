import { useEffect, useState } from 'react';
import Dashboard from '../components/common/Dashboard';
import {
  Grid,
  Button,
  Typography,
  CircularProgress,
} from '@mui/material';
import Form from '../components/proposol/Form';
import axios from '../axios';

function CalibrationProposol() {
  const [formValues, setFormValues] = useState({
    instrumentoName: '',
    faixaDeMedicaoMax: null,
    faixaDeMedicaoMin: null,
    quantidade: null,
    informacoesAdicionais: '',
    pontosCalibracao: [],
  });
  const [showForm, setShowForm] = useState(false);
  const [loading, setIsLoading] = useState(false);
  const [propostas, setPropostas] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(`/propostas/`);
        setPropostas(response.data);
        setIsLoading(false);
      } catch (e) {
        setIsLoading(false);
      }
    })();
  }, []);
  return (
    <Dashboard>
      <Grid
        container
        flexDirection="row"
        justifyContent="space-around"
        alignItems="center"
        textAlign="center"
        borderRadius={8}
        marginBottom={8}
        paddingTop={2}
      >
        {loading ? (
          <CircularProgress />
        ) : (
          <>
            <Grid>
              {propostas.length ? (
                <Grid>
                  {propostas.map((proposta, index) => (
                    <p key={index}>{proposta.identificacao_instrumento}</p>
                  ))}
                  <Button onClick={() => setShowForm(!showForm)}>
                    {showForm ? 'Fechar fomulário' : 'Criar nova proposta'}
                  </Button>
                </Grid>
              ) : (
                <Grid>
                  <Typography>Você não tem novas propostas</Typography>
                  <Button onClick={() => setShowForm(!showForm)}>
                    {showForm ? 'Fechar fomulário' : 'Criar nova proposta'}
                  </Button>
                </Grid>
              )}
            </Grid>
            {showForm && (
              <Form
                formValues={formValues}
                setFormValues={setFormValues}
                setShowForm={setShowForm}
              />
            )}
          </>
        )}
      </Grid>
    </Dashboard>
  );
}

export default CalibrationProposol;
