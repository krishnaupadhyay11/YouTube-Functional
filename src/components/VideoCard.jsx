import { Link } from "react-router-dom"
import { Typography, Card, CardContent, CardMedia } from "@mui/material"
import { CheckCircle } from "@mui/icons-material"
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/Constants"

export default function VideoCard({ video: {id: {videoId}, snippet} }) {
  return (
    <Card sx={{maxWidth: {md: '321px', xs: '100%'}, borderRadius: '12px', boxShadow:'none', border:'none'}}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia image={snippet?.thumbnails?.high?.url} alt={snippet?.title} sx={{width: 358, height: 180}} />
        <CardContent sx={{backgroundColor: '#1e1e1e', height: '106px'}}>
          <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <Typography variant="subtitle1" fontWeight="bold" color="#fff">
              {snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}
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
