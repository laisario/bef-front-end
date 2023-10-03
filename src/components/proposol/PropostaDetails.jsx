import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import { format } from 'date-fns';
import ptLocale from 'date-fns/locale/pt-BR';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

function fDateTime(date, newFormat) {
  const fm = newFormat || "dd 'de' MMMM 'de' yyyy";

  return date ? format(new Date(date), fm, { locale: ptLocale }) : '';
}
function CFL(str) {
  return str?.charAt(0).toUpperCase() + str?.slice(1);
}
const formaPagamento = {
  CD: 'Débito',
  CC: 'Crédito',
  P: 'Pix',
  D: 'Dinheiro',
};

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
function TitleCard({ title }) {
  return (
    <Grid sx={{ padding: 2 }} md={2} item>
      <Typography variant="h6">{title}</Typography>
    </Grid>
  );
}

function CardInformation({ title, content, colorText = 'grey' }) {
  console.log(colorText);
  return (
    <Grid item sx={{ padding: 2 }} md={2}>
      <Card sx={{ padding: 2 }}>
        <Typography
          sx={{ paddingBottom: 2 }}
          fontWeight="400"
          color={'grey'}
          variant="body2"
        >
          {title}
        </Typography>
        <Typography
          color={colorText}
          fontWeight={colorText !== 'grey' ? null : '900'}
        >
          {content}
        </Typography>
      </Card>
    </Grid>
  );
}

function OrderDetails({ order }) {
  console.log(order);

  return (
    <>
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={5}
        >
          <Typography variant="h4" gutterBottom>
            {CFL(order?.identificacao_instrumento)}
          </Typography>
          <Box>
            <Button color="info">
              <DeleteIcon />
            </Button>
            <Button color="info">
              <ModeEditIcon />
            </Button>
            <Button variant="contained">Aprovar pedido</Button>
          </Box>
        </Stack>
        <Card color={'grey'} sx={{ padding: 2 }}>
          <Box>
            <Grid container>
              <TitleCard title="Calibração" />
              <Grid container>
                <CardInformation
                  title="Faixa de medição"
                  content={`${order?.faixa_medicao_min} - ${order?.faixa_medicao_max} `}
                />
                <CardInformation
                  title="Pontos de calibração"
                  content={order.pontos_de_calibracao?.map(({ nome }) => nome)
                    .join(', ')}
                />
                <CardInformation
                  title="Quantidade"
                  content={order?.quantidade}
                />
                <CardInformation
                  title="Tipo de serviço"
                  content={CFL(order?.tipo_de_servico)}
                />
                <CardInformation
                  title="Validade"
                  content={fDateTime(order?.validade)}
                />
                <CardInformation
                  title="Observações"
                  content={CFL(order?.informacoes_adicionais)}
                />
              </Grid>
            </Grid>
          </Box>
          <Box>
            <Grid container>
              <TitleCard title="Pedido" />
              <Grid container>
                <CardInformation
                  title="Data do pedido:"
                  content={fDateTime(order?.data_criacao)}
                />
                <CardInformation title="Local" content={CFL(order?.local)} />
                {/* Arrumar campos de endereço pois retornam o numero do endereço da tabela de endereço */}
                <CardInformation
                  title="Endereço de entrega"
                  content={'Rua Batutinha de Lala, Centro - Barra Mansa'}
                />
                <CardInformation
                  title="Endereço de faturamento"
                  content={'Rua Batutinha de Lala, Centro - Barra Mansa'}
                />
                <CardInformation
                  title="Transporte"
                  content={CFL(order?.transporte)}
                />
                <CardInformation
                  title="Status"
                  color={colorStatusProposta[order?.aprovacao]}
                  content={statusProposta[order?.aprovacao]}
                />
              </Grid>
            </Grid>
          </Box>
          <Box>
            <Grid container>
              <TitleCard title="Pagamento" />
              <Grid container>
                <CardInformation
                  title="Forma de pagamento:"
                  content={formaPagamento[order?.condicao_de_pagamento]}
                />
                <CardInformation
                  title="Preço:"
                  content={`R$ ${Number(order?.preco)}`}
                />
                <CardInformation
                  title="Total:"
                  content={`R$ ${Number(order?.total)}`}
                />
              </Grid>
            </Grid>
          </Box>
        </Card>
      </Container>
    </>
  );
}

export default OrderDetails;
