import { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import ResultsContainer from './components/ResultsContainer/ResultsContainer';
import Footer from './components/Footer/Footer';
import tracks from './utils/tracks';
import SpotifyAPI from './utils/spotify_api';
import './App.css';

function App() {
  // apiToken Handler
  const [token, setToken] = useState(null);
  const [isAuthorizing, setIsAuthorizing] = useState(false);
  useEffect(()=> {
    const getToken = async () => {
      if(isAuthorizing||token) return;
      try { 
        setIsAuthorizing(true);
        const accessToken = await SpotifyAPI.getAccessToken();
        setToken(accessToken);
      } catch(error) {
        console.error(`Failed to get token: ${error}`);
      } finally {
        setIsAuthorizing(false);
      }
    };

    if(!token && !isAuthorizing) getToken();
  }, [isAuthorizing]);

  // onChange for searchbar
  const [searchText, setSearchText] = useState("");
  const handleSearchTextChange = (e) => {
    setSearchText(e.target.value);
  }

  // handle onSubmit for search results
  const [searchResults, setSearchResults] = useState([]);
  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    if(!searchText) {
      setSearchResults([]);
      return;
    }
    const apiResults = await SpotifyAPI.searchTrack(searchText); 
    const results = apiResults.tracks.items.filter(track => track.name.toLowerCase().includes(searchText.toLowerCase())); 
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
      const playlistTrack = searchResults.find(track=>track.id===e.target.id);
      //console.log(searchResults)
      //console.log(playlistTrack);
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
    setPlaylistTracks(prev=>prev.filter(t=>t.id !== (e.target.id)));
  }

  const handlePlaylistOnSubmit = async (e) => {
    e.preventDefault();
    let addPlaylistAndTracks;
    // Save selected tracks as array of URIS ==> Format: [] -> spotify:track:<trackId>
    const uris = playlistTracks.map(track=>`spotify:track:${track.id}`);
    // Handle Errors (edge cases for blank playlist and tracklist)
    if(!playlistName && uris.length <= 0) {
      alert("ERROR: No parameters entered for tracklist and playlist name.");
      throw new Error("ERROR: No parameters entered for tracklist and playlist name.")
    } else if(!playlistName) {
      alert('ERROR: Playlist name is blank.');
      throw new Error('ERROR: Playlist name is blank.');
    } if(uris.length <= 0) {
      alert('ERROR: Playlist Submission received blank track list.');
      throw new Error('ERROR: Playlist Submission received blank track list.');
    }
    addPlaylistAndTracks = await SpotifyAPI.addToPlaylist(playlistName, uris);    
    console.log('Saving playlist '+ playlistName);
    setTimeout(() => {
      alert("Your playlist has been saved to Spotify");
      setPlaylistTracks([]);
    },1000);
  }
  return (
    <>
      <Header />
      <SearchBar searchOnChange={handleSearchTextChange} searchHandler={handleSearchSubmit} />
      <ResultsContainer results={searchResults} resultsOnClick={handleAddTrackToPlaylist} playlistTracks={playlistTracks} playlistOnChange={handlePlaylistNameOnChange} playlistOnSubmit={handlePlaylistOnSubmit} playlistTrackOnRemove={handleRemoveTrackFromPlaylist} />
      <div>
        {!token ? (
          <button onClick={() => SpotifyAPI.authorize()}>
            Connect to Spotify
          </button>
        ) : (
          <p>Connected to Spotify!</p>
        )}
      </div>
      <Footer />
    </>
  )
}

export default App;
