import { useState, useEffect } from 'react'
import './App.css'
import SearchBar from './components/SearchBar'
import SearchResults from './components/SearchResults'
import Playlist from './components/Playlist'


const CLIENT_ID  = '1dc4f5571243493cabf87ccfbf0bfef2';
const CLIENT_SECRET = 'e68927b5567c41d68f02f3d5ab306ad5';

function App() {
  const [searchInput, setSearchInput] = useState('')

  const handleChange = (e) => {
    setText(e.target.value)
  }
  
  useEffect(() => {
    var authParameters = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
    }

    fetch('https://accounts.spotify.com/api/token', authParameters)
    .then(result => result.json())
    .then(data => console.log(data))
  }, [])

  return (
    <div className="body">
      <div className="header">
        <h1>Jammming</h1>
      </div>
      <div className="searchbar">
        <SearchBar searchInput={searchInput} handleChange={handleChange}/>
        <SearchResults />
        <Playlist />
      </div>
    </div>
  )
}

export default App
