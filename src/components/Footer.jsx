import { Box, Typography } from "@mui/material"

export default function Footer() {
  return (
    <Box>
        <Typography variant="subtitle1" color="white" fontFamily="Poppins, sans-serif" fontSize="1.1rem" textAlign="center" sx={{pb: {md: 1, xs: 4}}}>
            Created by 
            <a href="https://www.krishnaupadhyay.vercel.app" style={{textDecoration:'none', color: 'white'}} target="_blank">
                &nbsp;
                <span style={{borderBottom: '1px solid white'}}>Krishna Upadhyay</span>
            </a>. Inspired by 
            <a href="https://www.youtube.com/@javascriptmastery" style={{textDecoration:'none', color: 'white'}} target="_blank">
                &nbsp; 
                <span style={{borderBottom: '1px solid white'}}>Javascript Mastery</span>
            </a>.
        </Typography>
    </Box>
  )
}
