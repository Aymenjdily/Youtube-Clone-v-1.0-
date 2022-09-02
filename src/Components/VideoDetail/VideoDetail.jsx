import React,{useState, useEffect} from 'react'
import { useParams } from "react-router-dom"
import ReactPlayer from 'react-player'
import { Box } from '@mui/material'
// import { CheckCircle } from '@mui/icons-material'
// import Video from '../Feed/Components/Video'
import { YoutubeApi } from '../../utils/YoutubeApi'

const VideoDetail = () => {
    const [VideoDetail, setVideoDetail] = useState(null)
    const { id } = useParams();


    useEffect(() => {
      YoutubeApi(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data.items[0]))
    }, [id])
    
    return (
        <Box className='min-h-[95vh]'>
            <div className='flex md:flex-row flex-col'>
                <Box flex={1}>
                    <Box className='w-[100%] sticky top-[86px]'>
                        {
                            VideoDetail ? <ReactPlayer url={`https:://www.youtube.com/watch?v=${id}`} className="react-player" controls/> :
                            <h1>No video</h1>
                        }
                    </Box>
                </Box>
            </div>
        </Box>
    )
}

export default VideoDetail