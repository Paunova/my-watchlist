import React from 'react';

import './App.css';

import {tvShowsWatched, tvShowsWatching} from './mocks';

import Header from './Header';
import TVShowsBox from './TVShowsBox';

function App() {
  return (
    <div>
      <Header />
      <TVShowsBox title='Currently Watching' tvShows={tvShowsWatching} />
      <TVShowsBox title='Watched' tvShows={tvShowsWatched} />
    </div>
  );
}

export default App;
