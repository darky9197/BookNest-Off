import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import searchresult from '../assets/data/searchresult';


export default function Searchbar() {
  return (
    <Autocomplete
      disablePortal
      options={searchresult}
      sx={{ width: 600 }}
      renderInput={(params) => <TextField {...params} label="Movie" />}
    />
  );
}
