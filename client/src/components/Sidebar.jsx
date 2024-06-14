import { Box, Typography } from "@mui/material"
import HomeIcon from '@mui/icons-material/Home';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import SportsCricketIcon from '@mui/icons-material/SportsCricket';


const Sidebar = ({view,setSelectedCategory}) => {
  return (
    <Box sx={{bgcolor:'#0F0F0F', height:'90vh', display: 'flex', flexDirection:'column', alignItems:'center',justifyContent: 'space-between',width:view === true?'12vw':'5vw',paddingTop:'0.5rem',position:'fixed'}}>
        <Box sx={{width: '100%', display:'flex', flexDirection:'column', rowGap:'1.2rem'}}>
            <Box sx={{width:'100%',display:'flex',alignItems:'center',justifyContent:'flex-start', '&:hover':{bgcolor:'#3F3F3F'}, borderRadius: '0.7rem',gap:'2rem',paddingLeft:'2rem'}} onClick={() => setSelectedCategory("New")}>
                <HomeIcon sx={{color:'#fff'}} fontSize="large"/>
                <Typography sx={{color:'#fff',cursor:'default',display:view === false?'none':''}}>Home</Typography>
            </Box>
            <Box sx={{width:'100%',display:'flex',alignItems:'center',justifyContent:'flex-start', '&:hover':{bgcolor:'#3F3F3F'}, borderRadius: '0.7rem',gap:'2rem',paddingLeft:'2rem'}} onClick={() => setSelectedCategory("Music")}>
                <MusicNoteIcon sx={{color:'#fff'}} fontSize="large"/>
                <Typography sx={{color:'#fff',cursor:'default',display:view === false?'none':''}}>Music</Typography>
            </Box>
            <Box sx={{width:'100%',display:'flex',alignItems:'center',justifyContent:'flex-start', '&:hover':{bgcolor:'#3F3F3F'}, borderRadius: '0.7rem',gap:'2rem',paddingLeft:'2rem'}} onClick={() => setSelectedCategory("Gaming")}>
                <SportsEsportsIcon sx={{color:'#fff'}} fontSize="large"/>
                <Typography sx={{color:'#fff',cursor:'default',display:view === false?'none':''}}>Gaming</Typography>
            </Box>
            <Box sx={{width:'100%',display:'flex',alignItems:'center',justifyContent:'flex-start', '&:hover':{bgcolor:'#3F3F3F'}, borderRadius: '0.7rem',gap:'2rem',paddingLeft:'2rem'}} onClick={() => setSelectedCategory("Sports")}>
                <SportsCricketIcon sx={{color:'#fff'}} fontSize="large"/>
                <Typography sx={{color:'#fff',cursor:'default',display:view === false?'none':''}}>Sports</Typography>
            </Box>
        </Box>
    </Box>
  )
}

export default Sidebar