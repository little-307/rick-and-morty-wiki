import React, { useState, useEffect } from 'react'
import Cards from '../components/cards/Cards';
import InputGroup from '../components/filters/category/InputGroup';

const Episodes = () => {
  const [id, setID] = useState(1);
  const [info, setInfo] = useState([]);
  const [results, setResults] = useState([]);
  // Destructure info.
  let { air_date, name, episode } = info;

  const api = `https://rickandmortyapi.com/api/episode/${id}`

  useEffect(() => {

    (async function() {
      const data = await fetch(api).then(res => res.json());
      setInfo(data);

      const a = await Promise.all(
        data.characters.map((x) => {
          return fetch(x).then(res => res.json());
        })
      );
      setResults(a);
    })()
  },[api])

  return (
    <div className="container">
      <div className="row mb-4">
        <h1 className="text-center mb-3">
          Episode : {" "}
          <span className="text-primary">
            {name === "" ? "Unknown" : name}
          </span>
        </h1>
        <h4 className="text-center">{episode}</h4>
        <h5 className="text-center">
          Air Date {air_date === "" ? "Unknown" : air_date}
        </h5>
      </div>
      <div className="row">
        <div className="col-lg-3 col-12">
          <h4 className="text-center mb-3">
            Pick Episode
          </h4>
          <InputGroup 
            total = {51}
            name = "Episode"
            setID = {setID}
          />
        </div>
        <div className="col-lg-8 col-12">
          <div className="row">
            <Cards 
              page="/episodes/"
              results = {results}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Episodes