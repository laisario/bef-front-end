import Accordion from '@mui/material/Accordion';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import SouthIcon from '@mui/icons-material/South';

const titleCase = (s) =>
  s
    .replace(/^[-_]*(.)/, (_, c) => c.toUpperCase())
    .replace(/[-_]+(.)/g, (_, c) => ' ' + c.toUpperCase());

function Card({ title, fields, specialCases, instrumento }) {
  return (
    <Accordion disableGutters>
      <AccordionSummary
        sx={{ backgroundColor: '#e8e0db' }}
        expandIcon={<SouthIcon fontSize="small" sx={{ color: '#e16542' }} />}
      >
        <Typography
          variant="subtitle1"
          sx={{ color: '#e16542', fontWeight: '500' }}
        >
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container direction="column" justifyContent="space-around">
          {fields
            .filter((field) => !!instrumento[field])
            .map((field) => (
              <>
                <Grid container justifyContent="space-between" sx={{ my: 1 }}>
                  <Typography variant="body2">
                    {specialCases[field] || titleCase(field)}:
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: '500' }}>
                    {instrumento[field]}
                  </Typography>
                </Grid>
                <Divider />
              </>
            ))}
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
}

export default Card;
