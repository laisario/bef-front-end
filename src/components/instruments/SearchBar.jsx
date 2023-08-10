/* eslint-disable react/prop-types */
import { Search } from '@mui/icons-material';
import { Grid, InputAdornment, TextField } from '@mui/material';

function SearchBar({ search, setSearch }) {
  return (
    <Grid sx={{ mb: 3}} container xs={12} md={6}>
      <TextField
        fullWidth
        name="search"
        value={search}
        size="small"
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Nome ou indentificação do instrumento"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
        }}
      />
    </Grid>
  );
}

export default SearchBar;
