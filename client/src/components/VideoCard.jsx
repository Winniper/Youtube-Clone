import { Link } from "react-router-dom"
import { Box, Typography } from "@mui/material"

// thumbnail:item.snippet.thumbnails.high.url

const VideoCard = ({item}) => {
  console.log(item)
  return (
    <Link to={`/video/${item.id.videoID}`}>
    <Box sx={{width: '320px'}}>
      <img src={item.snippet.thumbnails.medium.url} alt="thumbnail" />
      <Typography mt={1} mb={0.8} sx={{color:'#fff',fontWeight: 550, fontSize: 15}}>
        {item.snippet.title <= 80 ? item.snippet.title : (item.snippet.title.substr(0,80)+"...")}
      </Typography>
      <Typography sx={{color:'#7F7F7F',fontWeight: 'light',fontSize: 15}}>
        {item.snippet.channelTitle}
      </Typography>
    </Box>
    </Link>
  )
}

export default VideoCard