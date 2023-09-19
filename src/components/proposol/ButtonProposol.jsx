/* eslint-disable react/prop-types */
import { Button } from '@mui/material';

function ButtonProposol({setShowForm, showForm}) {
  return (
    <Button sx={{margin: 2}} variant="contained" onClick={() => setShowForm(!showForm)}>
      {showForm ? 'Ver propostas' : 'Criar nova proposta'}
    </Button>
  );
}

export default ButtonProposol;
