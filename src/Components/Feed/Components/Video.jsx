import React from 'react'
import { Stack, Box } from '@mui/system'
import VideoCard from './VideoCard'

const Video = ({ videos, direction }) => {
    console.log(videos);
    return (
        <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" alignItems="start" gap={2}>
        {videos.map((item, idx) => (
          <Box key={idx}>
            {item.id.videoId && <VideoCard video={item} /> }
          </Box>
        ))}
      </Stack>
  )
}

export default Video
