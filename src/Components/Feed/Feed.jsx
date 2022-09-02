import React,{useState, useEffect} from 'react'
import { Box } from "@mui/material"
import Sidebar from './Components/Sidebar'
import Video from './Components/Video'
import { YoutubeApi } from '../../utils/YoutubeApi'

const Feed = () => {
  const [selectedCategory, setselectedCategory] = useState('New');
  const [Videos, setVideos] = useState([]);
  useEffect(() => {
    YoutubeApi(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))
    }, [selectedCategory]);
  
  return (
    <div className='flex md:flex-row flex-col'>
      <Box className='md:h-[92vh] h-auto md:px-2 px-0 w-[200px]'>
        <Sidebar
          selectedCategory = {selectedCategory}
          setselectedCategory = {setselectedCategory}
        />
      </Box>

      <Box className='p-2 md:pl-5 overflow-y-auto min-h-[92vh] flex-1 bg-black'>
        <h1 className='text-[30px] font-bold mb-2 text-white capitalize font-poppins'>
          {selectedCategory} <span className='text-red'>Vidoes</span>
        </h1>
        <Video videos={Videos}/>
      </Box>
      
    </div>
  )
}

export default Feed