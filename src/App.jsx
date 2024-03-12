import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {Box} from '@mui/material'
import './App.css'
import { Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed, Footer } from './components'

const App = () => (
  <Router>
    <Box sx={{backgroundColor: '#000', height: '100%'}}>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Feed />} />
        <Route path='/video/:id' element={<VideoDetail />} />
        <Route path='/channel/:id' element={<ChannelDetail />} />
        <Route path='/search/:searchTerm' element={<SearchFeed />} />
      </Routes>
      <Footer />
    </Box>
  </Router>
)
export default App
