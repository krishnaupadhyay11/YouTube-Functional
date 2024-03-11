import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Box } from "@mui/material"

import { Videos, ChannelCard } from './'
import { fetchFromAPI } from "../utils/fetchFromAPI"

export default function ChannelDetail(){
    const [channelDetail, setChannelDetail] = useState(null)
    const [videos, setVideos] = useState([])
    const {id} = useParams();

    useEffect(()=>{
        fetchFromAPI(`channels?part=snippet&id=${id}`)
        .then((data)=> setChannelDetail(data?.items[0]));
        fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
        .then((data)=> setVideos(data?.items));
    }, [id])

    console.log(channelDetail)
    return (
        <>
            <Box minHeight="95vh">
                <Box>
                    <div style={{background: 'linear-gradient(90deg, rgba(14,0,255,1) 0%, rgba(33,119,167,1) 35%, rgba(0,212,255,1) 100%)', zIndex: 10, height: '225px'}}/>
                    <ChannelCard channelDetail={channelDetail} marginTop="-93px"/>
                </Box>
                <Box display="flex" p={2}>
                    <Videos videos={videos}/>
                </Box>
            </Box>
        </>
    )
}