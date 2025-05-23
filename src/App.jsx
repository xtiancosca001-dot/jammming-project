import { useState } from 'react';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import ResultsContainer from './components/ResultsContainer/ResultsContainer';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <SearchBar />
      <ResultsContainer />
    </>
  )
}

export default App;
