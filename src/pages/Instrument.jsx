import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/common/Header';
import InstrumentsDetails from '../components/instruments/Details';
import axios from '../axios'

export default function Instrument() {
  const { id } = useParams()
  const [instrumento, setInstrumento] = useState({});
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(`/instrumentos/${id}`);
        setInstrumento(response.data);
      } catch (e) {
        window.localStorage.removeItem('token')
      }
    })();
  }, []);

  return (
    <>
      <Header />
      <br />
      <br />
      <br />
      <br />
      <br />
      <InstrumentsDetails instrumento={instrumento} />
    </>
  );
}
