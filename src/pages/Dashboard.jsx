import { useEffect, useState } from 'react';
import Header from '../components/common/Header';
import InstrumentsList from '../components/instruments/List';
import axios from "../axios";

export default function Dashboard() {
  const [instrumentos, setInstrumentos] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get('/instrumentos/');
        setInstrumentos(response.data);
      } catch (e) {
        window.localStorage.removeItem('token')
      }
    })();
  }, []);

  return (
    <>
      <Header/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <InstrumentsList instrumentos={instrumentos}/>
    </>
  );
}