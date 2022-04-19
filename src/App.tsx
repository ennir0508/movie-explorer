import React from "react";

import "./App.scss";
import { Banner } from "./components/Nav/Banner";
import { Nav } from "./components/Nav/Nav";
import { Row } from "./components/Row/Row";
import { requests } from "./helpers/request";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.feachNetflixOriginals}
        isLarge
      />
      {/* <Row title="Top Rated" fetchUrl={requests.feactTopRated} /> */}
      <Row title="Action Movies" fetchUrl={requests.feactActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.feactComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.feactHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.feactRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.feactDocumentMovies} />
    </div>
  );
}

export default App;
