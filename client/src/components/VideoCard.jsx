import { Link } from "react-router-dom"
import { Box, Typography } from "@mui/material"

// thumbnail:item.snippet.thumbnails.high.url

const VideoCard = ({item}) => {
  console.log(item)
  return (
    <Box sx={{width:'320px'}}>
      <Typography>
        
      </Typography>
      <img src={item.snippet.thumbnails.medium.url} alt="thumbnail" />
    </Box>
  )
}

export default VideoCard