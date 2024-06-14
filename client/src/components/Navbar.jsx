import { Box, IconButton, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

import MenuIcon from '@mui/icons-material/Menu';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const Navbar = ({setView}) => {
  return (
    <Box sx={{bgcolor : '#0F0F0F', display: 'flex', alignItems: 'center', justifyContent:'space-between', height:'10vh',position:'fixed',width:'100%'}}>
        <Box sx={{display:'flex', pl:1.5}}>
        <IconButton sx={{'&:hover':{bgcolor:'#2F2F2F'}}} onClick={() => setView(prev => !prev)}>
            <MenuIcon sx={{color:'#fff'}}/>
        </IconButton>
        <Link to={'/'} style={{ textDecoration: 'none' }}>
        <Box sx={{display : 'flex', alignItems: 'center',pl: 2}}>
                <img src="https://icons.iconarchive.com/icons/dakirby309/simply-styled/48/YouTube-icon.png" width="35" height="35"/>
            <Typography sx={{color:'#fff', fontWeight: 'bold', pl:0.2, letterSpacing: -1.3,fontSize:20}}>ViewTube</Typography>
        </Box>
        </Link>
        </Box>
        <SearchBar/>
        <Box sx={{display: 'flex', alignItems: 'center', gap: 2, pr:2}}>
        <IconButton sx={{'&:hover':{bgcolor:'#2F2F2F'}}}>
            <VideoCallOutlinedIcon sx={{color:'#fff', fontSize: 30}}/>
        </IconButton>
        <IconButton sx={{'&:hover':{bgcolor:'#2F2F2F'}}}>
            <NotificationsNoneOutlinedIcon sx={{color:'#fff',fontSize: 30}}/>
        </IconButton>
        <IconButton sx={{'&:hover':{bgcolor:'#2F2F2F'}}}>
            <AccountCircleOutlinedIcon sx={{color:'#fff',fontSize: 30}}/>
        </IconButton>
        </Box>
    </Box>
  )
}

export default Navbar