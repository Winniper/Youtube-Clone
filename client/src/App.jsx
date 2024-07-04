import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Feed from './components/Feed'
import { useState } from 'react'
import VideoDetail from './components/VideoDetail'
import SearchFeed from './components/SearchFeed'

function App() {
  const [view , setView] = useState(true)

  return (
    <BrowserRouter>
    <Navbar setView={setView}/>
      <Routes>
        <Route path='/' element={<Feed view={view} />}/>
        <Route path='/video/:id' element={<VideoDetail />}/>
        <Route path='/search/:searchTerm' element={<SearchFeed/>} />
      </Routes>
    </BrowserRouter>

  )
}

export default App 
