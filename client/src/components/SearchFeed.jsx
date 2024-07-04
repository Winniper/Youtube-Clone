
import { useEffect, useState } from "react"
import APIdata from "../assets/APIdata"
import Videos from "./Videos"
import { Box } from "@mui/material";
import Loading from "./Loading";
import { useParams } from "react-router-dom";

const SearchFeed = ({view}) => {
  const [videos, setVideos] = useState([])

  const {searchTerm} = useParams()

  useEffect(() => {
    APIdata(`search?part=snippet&q=${searchTerm}`)
    .then((data) => {
      setVideos(data.items)
    })
  }, [searchTerm])

  return videos.length === 0 ? (<><Loading/></>):(
    <Box sx={{display:'flex',paddingTop:'10vh'}}>
      <Videos videos={videos} view={view}/>
    </Box>
  )
}

export default SearchFeed