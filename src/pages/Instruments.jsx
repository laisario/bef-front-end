import { useEffect, useState } from 'react';
import InstrumentsList from '../components/instruments/List';
import axios from '../axios';
import SearchBar from '../components/instruments/SearchBar';
import { Box, CircularProgress, Typography } from '@mui/material';
import Dashboard from '../components/common/Dashboard';

export default function Instruments() {
  const [instrumentos, setInstrumentos] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setIsLoading] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(`/instrumentos?search=${search}`);
        setInstrumentos(response.data);
        setIsLoading(false);
      } catch (e) {
        window.localStorage.removeItem('token');
      }
    })();
  }, [search]);

  return (
    <>
      <Dashboard>
        <Box
          container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '20px'
          }}
        >
          <SearchBar setSearch={setSearch} search={search} />
          {!!instrumentos.length === 0 && search.length && (
            <Typography>Nenhum instrumento encontrado</Typography>
          )}
          {loading ? (
            <CircularProgress />
          ) : (
            <InstrumentsList instrumentos={instrumentos} />
          )}
        </Box>
      </Dashboard>
    </>
  );
}
