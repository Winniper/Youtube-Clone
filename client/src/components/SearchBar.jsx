import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from "@mui/material/IconButton";
import { InputBase } from '@mui/material';

const SearchBar = () => {
  return (
    <Box sx={{borderStyle: 'solid',borderRadius:10,borderColor:'#2C2C2C',display: 'flex', alignItems: 'center'}} >
        <InputBase sx={{borderRight: 'solid #2C2C2C',width:'35vw',height:'5vh',input:{color:'#fff'},pl:1.5}} placeholder='Search'/>
        <Box>
        <IconButton type="submit" aria-label="search">
            <SearchIcon sx={{color: '#fff'}} />
        </IconButton>
        </Box>
    </Box>
  )
}

export default SearchBar