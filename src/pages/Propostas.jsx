import { useEffect, useState } from 'react';
import Dashboard from '../components/common/Dashboard';
import { Grid, Typography, CircularProgress, Button } from '@mui/material';
import Form from '../components/proposol/Form';
import axios from '../axios';
import CardProposol from '../components/proposol/Card';
import ButtonProposol from '../components/proposol/ButtonProposol';
import PropostaTable from '../components/proposol/propostasTable';

function Propostas() {
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
  console.log(showForm);
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
            {showForm ? (
              <Form
                formValues={formValues}
                setFormValues={setFormValues}
                setShowForm={setShowForm}
              />
            ) : (
              <Grid>
                {propostas.length ? (
                  <PropostaTable
                    propostas={propostas}
                    Form={Form}
                    setShowForm={setShowForm}
                    showForm={showForm}
                  />
                ) : (
                  <Grid>
                    <Typography>Você não tem novas propostas</Typography>
                  </Grid>
                )}
              </Grid>
            )}
          </>
        )}
      </Grid>
    </Dashboard>
  );
}

export default Propostas;
