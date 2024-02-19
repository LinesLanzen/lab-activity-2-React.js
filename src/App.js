import React from 'react';
import './App.css';
import Header from './components/Header';
import VideoDisplay from './components/VideoDisplay'; // Adjust the import path as necessary
import GameDisplay from './components/GameDisplay'; // Adjust the import path as necessary
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <VideoDisplay /> 
      <GameDisplay /> 
      <Footer />
    </div>
  );
}

export default App;
