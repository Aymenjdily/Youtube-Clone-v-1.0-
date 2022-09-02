import React,{useState, useEffect} from 'react'
import { Box } from "@mui/material"
import Video from '../Feed/Components/Video'
import { YoutubeApi } from '../../utils/YoutubeApi'
import { useParams } from 'react-router-dom'

const SearchFeed = () => {
  const { searchTerm } = useParams();
  const [Videos, setVideos] = useState([]);
  useEffect(() => {
    YoutubeApi(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
    }, [searchTerm]);
  
  return (
    <Box className='p-2 md:pl-5 overflow-y-auto min-h-[92vh] flex-1 bg-[#444444]'>
        <h1 className='text-[30px] font-bold mb-2 text-white capitalize font-poppins'>
          Search Results for : <span className='text-red'>{searchTerm}</span> videos
        </h1>
        <Video videos={Videos}/>
    </Box>
  )
}

export default SearchFeed