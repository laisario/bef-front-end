import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../axios';
import Dashboard from '../components/common/Dashboard';
import PropostaDetails from '../components/proposol/PropostaDetails';

function Proposta() {
  const { id } = useParams();
  const [propostas, setPropostas] = useState({});
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(`/propostas/${id}`);
        setPropostas(response.data);
      } catch (e) {
        window.localStorage.removeItem('token');
      }
    })();
  }, []);

  return (
    <>
      <Dashboard>
        <PropostaDetails order={propostas} />
      </Dashboard>
    </>
  );
}

export default Proposta