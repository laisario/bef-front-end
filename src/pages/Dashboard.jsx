import { useEffect, useState } from 'react';
import Header from '../components/common/Header';
import InstrumentsList from '../components/instruments/List';
import axios from '../axios';
import SearchBar from '../components/instruments/SearchBar';
import { Box, CircularProgress, Typography } from '@mui/material';

export default function Dashboard() {
  const [instrumentos, setInstrumentos] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setIsLoading] = useState(false);
  console.log(instrumentos);
  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true)
        const response = await axios.get(`/instrumentos?search=${search}`);
        setInstrumentos(response.data);
        setIsLoading(false)
      } catch (e) {
        window.localStorage.removeItem('token');
      }
    })();
  }, [search]);

  return (
    <>
      <Header />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Box
        container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <SearchBar setSearch={setSearch} search={search} />
        {!instrumentos.length && search.length && (
          <Typography>Nenhum instrumento encontrado</Typography>
        )}
        {loading ? <CircularProgress /> :  <InstrumentsList instrumentos={instrumentos} />}
      </Box>
    </>
  );
}
