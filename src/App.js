import React, { useState, useEffect } from 'react';

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";

import Filters from "./components/filters/Filters";
import Cards from "./components/cards/Cards";
import Pagination from './components/pagination/Pagination';
import Search from './components/search/Search';
import NavBar from './components/navBar/NavBar';
import Episodes from './pages/Episodes';
import Location from './pages/Location';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CardDetails from './components/cards/CardDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<CardDetails />} />

        <Route path="/episodes" element={<Episodes />} />
        <Route path="/episodes/:id" element={<CardDetails />} />

        <Route path="/location" element={<Location />} />
        <Route path="/location/:id" element={<CardDetails />} />
      </Routes>
    </Router>
  )
}

const Home = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("");
  const [sepcies, setSpecies] = useState("");
  
  const [fetchedData, updateFetchedData] = useState([]);
  let { info, results } = fetchedData;

  console.log(results);
  // console.log(pageNumber);

  const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${sepcies}`;

  useEffect(() => {
    // create asynchronous function to fetch api data.
    (async function(){
      const data = await fetch(api).then(res => res.json());
      updateFetchedData(data)
    })();

  },[api]);

  return (
    <div className="App">
      
      <div className="search">
        <h1 className="text-center mb-4">Characters</h1>
        <Search setPageNumber={setPageNumber} setSearch={setSearch}/>
        <Pagination 
        info={info} 
        pageNumber={pageNumber} 
        setPageNumber={setPageNumber} 
      />
      </div>
      <div className="container fluid justify-content-spaceAround">
        <div className="row">
          
            <Filters 
              setStatus = {setStatus}
              setGender = {setGender}
              setSpecies = {setSpecies}
              setPageNumber = {setPageNumber}
            />
         
          <div className="right col-lg-8 col-12">
            <div className="row">
              <Cards 
                page="/"
                results={results} 
              />
            </div>
          </div>
        </div>
      </div>
      <Pagination 
        info={info} 
        pageNumber={pageNumber} 
        setPageNumber={setPageNumber} 
      />
    </div>
  );
}

export default App;
