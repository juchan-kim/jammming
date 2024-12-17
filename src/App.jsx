import { useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar'
import SearchResults from './components/SearchResults'
import Playlist from './components/Playlist'

function App() {
  const [count, setCount] = useState(0)

  return (
    <body>
      <div className="header">
        <h1>Jammming</h1>
      </div>
      <div className="searchbar">
        <SearchBar />
        <SearchResults />
        <Playlist />
      </div>
    </body>
  )
}

export default App
