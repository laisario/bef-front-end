import React, { useState } from 'react';
import { format } from 'date-fns';
import ptLocale from 'date-fns/locale/pt-BR'
// @mui
import {
  Card,
  Table,
  Stack,
  Button,
  TableRow,
  TableBody,
  TableCell,
  Container,
  Typography,
  TableContainer,
  Modal,
  Box,
  Link,
  TableHead,
} from '@mui/material';
import { styled } from '@mui/system';

// components


// hooks

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: 'id', label: '', alignRight: false },
  { id: 'name', label: 'Instrumentos', alignRight: false },
  { id: 'data', label: 'Data', alignRight: false },
  { id: 'status', label: 'Status', alignRight: false },
];

// ----------------------------------------------------------------------

const FormBox = styled(Box)({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
});

function fDateTime(date, newFormat) {
  const fm = newFormat || "dd 'de' MMMM 'de' yyyy";

  return date ? format(new Date(date), fm, { locale: ptLocale }) : '';
}

export default function PropostaTable({ propostas, Form, setShowForm, showForm }) {
  const [open, setOpen] = useState(false);
  const [loading, setIsLoading] = useState(false);


  const statusProposta = {
    null: 'Proposta em análise',
    false: 'Proposta negada',
    true: 'Proposta aprovada',
  };

  const colorStatusProposta = {
    null: 'info',
    false: 'error',
    true: 'success',
  };
  return (
    <>
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={5}
        >
          <Typography variant="h5" gutterBottom>
            Meus pedidos
          </Typography>
          <Button
            variant="contained"
            onClick={ () => setShowForm(true)}
            // startIcon={<Iconify icon="eva:plus-fill" />}
          >
            Novo pedido
          </Button>
        </Stack>

        <Card>
          <TableContainer sx={{ minWidth: 800 }}>
            <Table>
              <TableHead>
                <TableRow>
                  {TABLE_HEAD.map((headCell) => (
                    <TableCell
                      sx={{
                        background: (theme) => `${theme.palette.grey[300]}`,
                        color: (theme) => `${theme.palette.grey[700]}`,
                      }}
                      key={headCell.id}
                      align={headCell.alignRight ? 'right' : 'left'}
                    >
                      {headCell.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {propostas?.map((row, index) => {
                  const {
                    id,
                    identificacao_instrumento: name,
                    data_criacao: dataCriacao,
                    aprovacao: status,
                  } = row;
                  const data = new Date(dataCriacao);

                  return (
                    <TableRow hover key={id} tabIndex={-1}>
                      <TableCell align="left">{index + 1}</TableCell>

                      <TableCell align="left">
                        <Link href={`#/proposta/${id}`} underline="none">
                          {name}
                        </Link>
                      </TableCell>

                      <TableCell align="left">{fDateTime(data)}</TableCell>

                      <TableCell align="left">
                        <Button color={colorStatusProposta[status]}>
                          {statusProposta[status]}
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Card>
        {/* <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <FormBox>
            <Form setOpen={setOpen} />
          </FormBox>
        </Modal> */}
      </Container>
    </>
  );
}
