import { Box, CardContent, CardMedia, Typography } from "@mui/material"
import { CheckCircle } from "@mui/icons-material"
import { demoProfilePicture } from "../utils/Constants"
import { Link } from "react-router-dom"

export default function ChannelCard({channelDetail, marginTop}) {
  return (
    <Box sx={{boxShadow: 'none', borderRadius: '20px', minWidth: {md: '321px'}, maxWidth: {md: '321px', xs: '100%'}, margin: '0 auto', marginTop: marginTop}}>
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: '#fff', alignItems:'center'}}>
          <CardMedia image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture} 
          alt={channelDetail?.snippet?.title}
          sx={{borderRadius:'50%', height: '180px', width: '180px', mb: 2, border: '1px solid #e3e3e3'}} />
          <Typography variant="h6">
            {channelDetail?.snippet?.title.slice(0, 59)}
            <CheckCircle sx={{fontSize: 14, color: 'gray', marginLeft: '5px'}} />
          </Typography>
          {channelDetail?.statistics?.subscriberCount && 
            <Typography>
              {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
            </Typography>}
        </CardContent>
      </Link>
    </Box>
  )
}
