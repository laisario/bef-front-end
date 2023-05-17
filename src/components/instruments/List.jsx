import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SouthIcon from '@mui/icons-material/South';

import InfoCard from './cards/InfoCard';
import CalibracaoCard from './cards/CalibracaoCard';
import ObservacaoCard from './cards/ObservacaoCard';

export default function InstrumentsList({ instrumentos }) {
    function capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    return instrumentos?.map((instrumento) => (
        <Grid key={instrumento.tag} sx={{mb: 3}} container justifyContent="center">
            <Grid item xs={12} md={6}>
                <Paper sx={{border:'1px solid #e8e0db', boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'}}>
                    <Grid sx={{p:2}}>
                        <Typography variant="h4" sx={{color: '#e26443'}}>
                            {capitalizeFirstLetter(instrumento.tag)}
                        </Typography>
                        <Typography variant="h5" color="text.secondary">
                            {capitalizeFirstLetter(instrumento.descricao)}
                        </Typography>
                    </Grid>
                    <Grid sx={{p:2}} container direction="column" justifyContent="space-between">
                        <Accordion disableGutters>
                            <AccordionSummary sx={{backgroundColor: '#e8e0db'}} expandIcon={<SouthIcon fontSize='small' sx={{color:'#e16542'}} />}>
                                <Typography variant="subtitle1" sx={{color: '#e16542', fontWeight: '700'}}>
                                    Informações
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <InfoCard instrumento={instrumento} />
                            </AccordionDetails>
                        </Accordion>
                        <Accordion disableGutters>
                            <AccordionSummary sx={{backgroundColor: '#e8e0db'}} expandIcon={<SouthIcon fontSize='small' sx={{color:'#e16542'}} />}>
                                <Typography variant="subtitle1" sx={{color: '#e16542', fontWeight: '700'}}>
                                    Calibrações
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <CalibracaoCard instrumento={instrumento} />
                            </AccordionDetails>
                        </Accordion>
                        {instrumento.observacoes && <Accordion disableGutters>
                            <AccordionSummary sx={{backgroundColor: '#e8e0db'}} expandIcon={<SouthIcon fontSize='small' sx={{color:'#e16542'}} />}>
                                <Typography variant="subtitle1" sx={{color: '#e16542', fontWeight: '700'}}>
                                    Observações Adicionais
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <ObservacaoCard instrumento={instrumento} />
                            </AccordionDetails>
                        </Accordion>}
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    ));
}
