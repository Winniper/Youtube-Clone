import { Box } from "@mui/material"
import VideoCard from "./VideoCard"

const Videos = ({videos,view}) => {
  return(
    <Box pl={view === true? '13vw' : '6vw'} sx={{display:'flex',flexWrap:'wrap',gap:view === true? '0.6rem' : '2rem',rowGap:'2rem',bgcolor:'#0F0F0F'}}>
      {videos.map((item,idx) => {
        return(
        <VideoCard item={item} key={idx} />
        )
      })}
    </Box>
  )
}

export default Videos