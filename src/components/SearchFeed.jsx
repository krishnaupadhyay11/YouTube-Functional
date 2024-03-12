import { useState, useEffect } from "react"
import { Box, Typography } from "@mui/material"
import { useParams } from "react-router-dom"

import { fetchFromAPI } from "../utils/fetchFromAPI"
import { Videos } from './'

export default function SearchFeed(){
    const [videos, setVideos] = useState([]);
    const { searchTerm } = useParams();

    useEffect(()=>{
        fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
        .then((data) => setVideos(data.items))
    }, [searchTerm])

    return (
        <Box p={2} sx={{overflow: 'auto', minHeight: '90vh', margin: {md: '0 auto'}}}>
            <Typography variant="h4" fontWeight="bold" mb={2} sx={{color: 'white'}}>
                Search Results for: <span style={{color: '#f31503'}}>{searchTerm}</span>
            </Typography>
            <Videos videos={videos}/>
        </Box>
    )
}