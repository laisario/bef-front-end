import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import InstrumentsDetails from '../components/instruments/Details';
import axios from '../axios';
import Dashboard from '../components/common/Dashboard';

export default function Instrument() {
  const { id } = useParams();
  const [instrumento, setInstrumento] = useState({});
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(`/instrumentos/${id}`);
        setInstrumento(response.data);
      } catch (e) {
        window.localStorage.removeItem('token');
      }
    })();
  }, []);

  return (
    <>
      <Dashboard>
        <InstrumentsDetails instrumento={instrumento} />
      </Dashboard>
    </>
  );
}
