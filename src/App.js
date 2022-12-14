import './App.css';
import React,{useEffect} from 'react';
import Row from './Row';
import requests from './request';
function App() {
  return (
    // API KEY 183157a8e28feb79a6830e0414f844f6
    // LINK https://api.themoviedb.org/3/movie/550?api_key=183157a8e28feb79a6830e0414f844f6
    <div className="App">
      <h1></h1>
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
    </div>
  );
}

export default App;
