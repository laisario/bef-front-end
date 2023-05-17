import Typography from '@mui/material/Typography';

export default function ObservacaoCard({ instrumento }) {
    return <Typography paragraph variant="body2">{instrumento.observacoes}</Typography>;
}
