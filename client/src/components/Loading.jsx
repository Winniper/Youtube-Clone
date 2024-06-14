import { Box } from '@mui/material';
import ReactLoading from 'react-loading';

const Loading = () => {
  return (
    <Box sx={{bgcolor:'#0F0F0F', height:'100vh', display:'flex',justifyContent:'center',alignItems:'center'}}>
        <ReactLoading type="spinningBubbles" color="#ffffff" height={'3%'} width={'3%'}/>
    </Box>
  )
}

export default Loading