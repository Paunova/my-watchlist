import React from 'react';

import './App.css';

import tvShows from './mocks/tv-shows';

import Header from './Header';
import TVShowsBox from './TVShowsBox';

function App() {
  return (
    <div>
      <Header />
      <TVShowsBox tvShows={tvShows} />
    </div>
  );
}

export default App;
