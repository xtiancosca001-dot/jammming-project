import { useState } from 'react';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import ResultsContainer from './components/ResultsContainer/ResultsContainer';
import Footer from './components/Footer/footer';
import tracks from './utils/tracks';
import './App.css';

function App() {
  // onChange for searchbar
  const [searchText, setSearchText] = useState("");
  const handleSearchTextChange = (e) => {
    setSearchText(e.target.value);
  }

  // handle onSubmit for search results
  const [searchResults, setSearchResults] = useState([]);
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if(!searchText) {
      setSearchResults([]);
      return;
    }
    const results = tracks.filter(track => track.name.toLowerCase().includes(searchText.toLowerCase())); 
    setSearchResults(results);
  }

  // onChange for playlist name
  const [playlistName, setPlaylistName] = useState("");
  const handlePlaylistNameOnChange = (e) => {
    setPlaylistName(e.target.value);
  }

  // playlistTrackList
  const [playlistTracks, setPlaylistTracks] = useState([]);

  // handle onClick for add button
  const handleAddTrackToPlaylist = (e) => {
    if(searchResults) {
      const playlistTrack = searchResults.find(track=>track.id===parseInt(e.target.id));
      const isDuplicate = playlistTracks.some(track => track.id === playlistTrack?.id);
      if(playlistTrack && !isDuplicate){
        setPlaylistTracks(prev => [...prev, playlistTrack]);
      } else if(isDuplicate) {
        alert(`The track "${playlistTrack.name}" is already in your playlist!`);
      }
    }
  }
  // handle onClick for remove track from Playlist
  const handleRemoveTrackFromPlaylist = (e) => {
    setPlaylistTracks(prev=>prev.filter(t=>t.id !== parseInt(e.target.id)));
  }
  const handlePlaylistOnSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <>
      <Header />
      <SearchBar searchOnChange={handleSearchTextChange} searchHandler={handleSearchSubmit} />
      <ResultsContainer results={searchResults} resultsOnClick={handleAddTrackToPlaylist} playlistTracks={playlistTracks} playlistOnChange={handlePlaylistNameOnChange} playlistOnSubmit={handlePlaylistOnSubmit} playlistTrackOnRemove={handleRemoveTrackFromPlaylist} />
      <Footer />
    </>
  )
}

export default App;
