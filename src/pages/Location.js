import React, { useState, useEffect } from 'react'
import Cards from '../components/cards/Cards';
import InputGroup from '../components/filters/category/InputGroup';

const Location = () => {
  const [id, setID] = useState(1);
  const [info, setInfo] = useState([]);
  const [results, setResults] = useState([]);
  // Destructure info.
  let { name, type, dimension } = info;

  const api = `https://rickandmortyapi.com/api/location/${id}`

  useEffect(() => {

    (async function() {
      const data = await fetch(api).then(res => res.json());
      setInfo(data);

      const a = await Promise.all(
        data.residents.map((x) => {
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
          Location : {" "}
          <span className="text-primary">
            {name === "" ? "Unknown" : name}
          </span>
        </h1>
        {/* <h4 className="text-center">{episode}</h4> */}
        <h5 className="text-center">
          Dimension {dimension === "" ? "Unknown" : dimension}
        </h5>
        <h6 className="text-center">
          Type {type === "" ? "Unknown" : type}
        </h6>
      </div>
      <div className="row">
        <div className="col-lg-3 col-12">
          <h4 className="text-center mb-3">
            Pick Location
          </h4>
          <InputGroup 
            total = {126}
            name = {"Location"}
            setID = {setID}
          />
        </div>
        <div className="col-lg-8 col-12">
          <div className="row">
            <Cards 
              page="/location/"
              results = {results}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Location;
