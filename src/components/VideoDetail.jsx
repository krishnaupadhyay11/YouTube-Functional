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
    const [relatedVideos, setRelatedVideos] = useState(null)

    useEffect(()=>{
        fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
        .then((data) => setVideoDetail(data.items[0]))

        fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
        .then((data) => setRelatedVideos(data.items))
    }, [id])

    if (!videoDetail?.snippet) return 'Loading...';

    const {snippet: {title, channelId, channelTitle, description, publishedAt}, statistics: {viewCount, likeCount, dislikeCount}} = videoDetail;

    return (
        <Box minHeight="95vh" p={2} sx={{overflow: 'auto'}}>
            <Stack direction={{xs: 'column', md: 'row'}}>
                <Box flex={1}>
                    <Box sx={{width: '100%', position: 'sticky', top: '0', pt: 2}}>
                        <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls style={{borderRadius: '16px'}}/>
                        <Typography variant="h5" fontWeight="bold" p={2} sx={{color: 'white'}}>
                            {title}
                        </Typography>
                        <Stack direction="row" justifyContent="space-between" sx={{color: '#fff', py: 1, px: 2}}>
                            <Link to={`/channel/${channelId}`}>
                                <Typography variant="subtitle1" fontWeight="bold" color="#fff" display='flex' alignItems="center">
                                    {channelTitle}
                                    <CheckCircle style={{fontSize: 15, color: 'gray', marginLeft: 5}} />
                                </Typography>
                            </Link>
                            <Stack direction="row" gap="16px">
                                <Typography variant="body1" sx={{opacity: '0.8'}}>
                                    {parseInt(viewCount).toLocaleString()} views
                                </Typography>
                                <Typography variant="body1" sx={{opacity: '0.8'}}>
                                    {parseInt(likeCount).toLocaleString()} likes
                                </Typography>
                            </Stack>
                        </Stack>
                    </Box>
                </Box>
                <Box px={2} py={{md: 1, xs: 5}} justifyContent="center" alignItems="center">
                    <Videos videos={relatedVideos} direction="column" />
                </Box>
            </Stack>
        </Box>
    )
}