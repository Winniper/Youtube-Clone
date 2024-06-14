import { useEffect, useState } from "react"
import APIdata from "../assets/APIdata"
import Videos from "./Videos"
import Sidebar from "./Sidebar";
import { Box } from "@mui/material";
import Loading from "./Loading";

const Feed = ({view}) => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([])

  useEffect(() => {
    APIdata(`search?part=snippet&q=${selectedCategory}`)
    .then((data) => {
      setVideos(data.items)
    })
  }, [selectedCategory])

  return videos.length === 0 ? (<><Loading/></>):(
    <Box sx={{display:'flex',paddingTop:'10vh'}}>
      <Sidebar view={view} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} sx={{position:'fixed'}}/>
      <Videos videos={videos} view={view}/>
    </Box>
  )
}

export default Feed

//AIzaSyAUtijK8BHATw3o6xk_9nhCVroDxOvUeJQ