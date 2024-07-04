import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from "@mui/material/IconButton";
import { InputBase } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [searchTerm , setSearchTerm] = useState('')
  const navigate = useNavigate()

  const handleSubmit = () => {
    navigate(`/search/${searchTerm}`)
  }

  return (
    <Box sx={{borderStyle: 'solid',borderRadius:10,borderColor:'#2C2C2C',display: 'flex', alignItems: 'center'}} onSubmit={handleSubmit} >
        <InputBase sx={{borderRight: 'solid #2C2C2C',width:'35vw',height:'5vh',input:{color:'#fff'},pl:1.5}} onChange={(e) => setSearchTerm(e.target.value)} placeholder='Search' />
        <IconButton type="submit" aria-label="search" onClick={handleSubmit}>
            <SearchIcon sx={{color: '#fff'}} />
        </IconButton>
    </Box>
  )
}

export default SearchBar