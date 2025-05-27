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
  
  return (
    <>
      <Header />
      <SearchBar searchOnChange={handleSearchTextChange} searchHandler={handleSearchSubmit} />
      <ResultsContainer results={searchResults} />
      <Footer />
    </>
  )
}

export default App;
