import Header from '../components/common/Header';
import CalibracaoCard from '../components/instruments/cards/CalibracaoCard';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from '../axios';

export default function InstrumentCategories() {
  const [instrumento, setInstrumento] = useState([]);
  const { id } = useParams();
  console.log('a')
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(`/instrumentos/:${id}`);
        setInstrumento(response.data);
      } catch (e) {
        window.localStorage.removeItem('token')
      }
    })();
  }, []);

  return (
    <>
      <Header />
      <CalibracaoCard instrumento={instrumento} />
    </>
  );
}
