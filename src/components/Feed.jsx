import { useState, useEffect } from "react"
import { Box, Stack, Typography } from "@mui/material"
import { Sidebar, Videos } from './'
import { fetchFromAPI  } from "../utils/fetchFromAPI"

export default function Feed(){
    const [selectedCategory, setSelectedCategory] = useState('New')
    const [videos, setVideos] = useState([])

    useEffect(()=>{
        fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
        .then((data) => setVideos(data.items))
    }, [selectedCategory])

    return (
        <Stack sx={{flexDirection: { sx: 'column', md: 'row'}}}>
            <Box sx={{minHeight: { sx: 'auto', md: '92vh'}, borderRight: '1px solid #3d3d3d', px: { sx: 0, md: 2}, mb: {md: 2}}}>
                <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
            </Box>
            <Box p={2} sx={{overflow: 'auto', minHeight: '90vh', maxWidth: {md: '80vw'}, flex: 2, margin: {md: '0 auto'}}}>
                <Typography variant="h4" fontWeight="bold" mb={2} sx={{color: 'white'}}>
                    {selectedCategory} <span style={{color: '#f31503'}}>
                        Videos
                    </span>
                </Typography>
                <Videos videos={videos}/>
            </Box>
        </Stack>
    )
}