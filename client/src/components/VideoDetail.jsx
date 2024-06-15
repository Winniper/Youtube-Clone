import { Box, Typography } from "@mui/material"
import APIdata from "../assets/APIdata"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import ReactPlayer from 'react-player/youtube'
import VideoCard from "./VideoCard"
import Loading from "./Loading"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';


const VideoDetail = () => {
  const [data , setData] = useState([])
  const [videos, setVideos] = useState([])
  const [like,setLike] = useState(false)
  const [dislike,setDislike] = useState(false)
  const {id} = useParams();

  useEffect(()=>{
    APIdata(`videos?part=snippet,statistics&id=${id}`)
    .then((data)=>{
      console.log(data.items[0].snippet.title)
      setData(data.items[0])
    })

    APIdata(`search?part=snippet&realatedToVideoId=${id}&type=video`)
    .then((data)=>{
      setVideos(data.items)
    })
  },[id])
  
  if (!data?.snippet) return (<Loading/>)

  const {snippet:{title,channelTitle},statistics :{viewCount,likeCount}} = data

  return (
    <Box pt={'10vh'} sx={{display:'flex',bgcolor:'#0F0F0F',height:'auto'}}>
      <Box sx={{width:'100%', height:'100vh',display:'flex',flexDirection:'column',marginLeft:'3.5rem'}}>
      <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} playing controls width={'90%'} height={'83%'}/>
      <Typography sx={{color:'#ffff',fontWeight: 550,marginTop:'1rem',fontSize:23}}>
        {title}
      </Typography>
      <Typography sx={{color:'#ffff',fontWeight: 550,fontSize:16}}>
        {parseInt(viewCount).toLocaleString()} views
      </Typography>
      <Box sx={{display:'flex',justifyContent:'space-between',width:'90%'}}>
        <Box sx={{display:'flex',marginTop:'1rem'}}>
          <Typography sx={{color:'#ffff',fontSize:18,fontWeight: 500}}>
            {channelTitle}
          </Typography>
          <CheckCircleIcon sx={{color:'#AAAAAA',marginLeft:'0.5rem','&:hover':{bgcolor:'#fff'}}}/>
        </Box>
        <Box sx={{display:'flex',bgcolor:'#232323', borderRadius: '2rem',gap:'1rem',width:'15%',justifyContent:'center',alignItems:'center'}} >
          <Box sx={{display:'flex'}}>
            {like?<ThumbUpIcon sx={{color:'#ffff'}} onClick={() => setLike(prev => !prev)}/>:<ThumbUpOutlinedIcon sx={{color:'#ffff'}} onClick={() => setLike(prev => !prev)}/>}
            <Typography sx={{color:'#ffff',borderRight:'solid #555555',paddingRight:'0.5rem',paddingLeft:'0.5rem'}}>{parseInt(likeCount).toString().substr(0,2)}K</Typography>
          </Box>
          {dislike?<ThumbDownIcon sx={{color:'#ffff'}} onClick={() => setDislike(prev => !prev)}/>:<ThumbDownOutlinedIcon sx={{color:'#ffff'}} onClick={() => setDislike(prev => !prev)}/>}
        </Box>
      </Box>
      </Box>

      <Box sx={{paddingRight:'6rem',width:'auto'}}>
      {videos.map((item,idx) => {
        return(
        <VideoCard item={item} key={idx} />
        )
      })}
      </Box>
    </Box>
  )
}

export default VideoDetail