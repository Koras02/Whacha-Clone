import React, { useEffect, useState } from "react";
import "./App.css";
import Banner from "./components/Banner";

import Header from "./components/Header";
import Loading from "./components/Loading/Loading";

import Row from "./components/Row";
import Row1 from "./components/Row1";
import requests from "./data/Requests";

function App() {
  const [loading, setLoading] = useState([]);
  useEffect(() => {
    setTimeout(() => setLoading(true), 1000);
  }, []);

  return (
    <>
      <div className="App">
        <Header />
        <Banner />
        <Row
          title="왓챠 최고 인기작"
          fetchUrl={requests.fetchTrending}
          isLargeRow={true}
        />
        <Row1
          title="최고 인기 시리즈"
          title3="쇼생크 탈출"
          fetchUrl={requests.fetchTopRated}
        />
        <Row1 title="로맨스 시리즈" fetchUrl={requests.fetchRomanceMovies} />
        <Row1 title="애니 메이션" fetchUrl={requests.fetchAnimeSeries} />
        {loading === true ? (
          <>
            <Row1 title="호러영화" fetchUrl={requests.fetchHorrorMovies} />
          </>
        ) : (
          <>
            <Loading />
            {/* <Row1 title="호러영화" fetchUrl={requests.fetchHorrorMovies} /> */}
          </>
        )}
        <Row1 title="미스터리 무비" fetchUrl={requests.fecthMistaryMovies} />
      </div>
    </>
  );
}

export default App;
