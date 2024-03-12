import { Link } from "react-router-dom"
import { Typography, Card, CardContent, CardMedia } from "@mui/material"
import { CheckCircle } from "@mui/icons-material"
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/Constants"

export default function VideoCard({ video: {id: {videoId}, snippet} }) {
  return (
    <Card sx={{minWidth: {xs: '350px', md: '321px'}, maxWidth: {md: '321px', xs: '350px'}, borderRadius: '12px', boxShadow:'none', border:'none', ml: {xs: '16px', sm:'0'}}}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia image={snippet?.thumbnails?.high?.url} alt={snippet?.title} sx={{maxWidth: {md: 358, xs: '100%'}, height: 180}} />
        <CardContent sx={{backgroundColor: '#1e1e1e', height: '118px'}}>
          <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <Typography variant="subtitle1" fontWeight="bold" color="#fff">
              {snippet?.title.length <= 60 ? snippet?.title.slice(0,59) : `${snippet?.title.slice(0,59)}...` || demoVideoTitle.slice(0,60)}
            </Typography>
          </Link>
          <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
            <Typography variant="subtitle2" fontWeight="bold" color="gray" display="flex" alignItems="center">
              {snippet?.channelTitle || demoChannelTitle}
              <CheckCircle sx={{fontSize: 12, color: 'gray', marginLeft: '5px'}} />
            </Typography>
          </Link>
        </CardContent>
      </Link>
    </Card>
  )
}
