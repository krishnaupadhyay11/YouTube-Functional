import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { Box, Typography, Stack } from "@mui/material"
import { CheckCircle } from "@mui/icons-material"
import ReactPlayer from 'react-player'

import { fetchFromAPI } from "../utils/fetchFromAPI"
import { Videos } from './'

export default function VideoDetail(){
    const { id } = useParams();
    const [videoDetail, setVideoDetail] = useState(null)

    useEffect(()=>{
        fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
        .then((data) => setVideoDetail(data.items[0]))
    }, [id])

    const {snippet: {title, channelId, channelTitle, description, publishedAt}, statistics: {viewCount, likeCount, dislikeCount}} = videoDetail;

    return (
        <Box minHeight="95vh" p={2} sx={{overflow: 'auto'}}>
            <Stack direction={{xs: 'column', md: 'row'}}>
                <Box flex={1}>
                    <Box sx={{width: '100%', position: 'sticky', top: '86px'}}>
                        <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls/>
                        <Typography variant="h5" fontWeight="bold" p={2} sx={{color: 'white'}}>
                            {title}
                        </Typography>
                    </Box>
                </Box>
            </Stack>
        </Box>
    )
}