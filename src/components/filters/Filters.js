import React from 'react'

import Gender from './category/Gender';
import Species from './category/Species';
import Status from './category/Status';

const Filters = ({ setStatus, setGender, setSpecies, setPageNumber }) => {
  const clear = () => {
    setStatus("");
    setGender("");
    setSpecies("");
    setPageNumber("");
    window.location.reload(false);
  }

  return (
    <div className="left col-lg-3 col-12 mb-5">
      <div className="text-center fw-bold fs-4 mb-2">Filter</div>
      <div 
        onClick = {clear}
        style={{ cursor: "pointer" }} 
        className="text-center text-primary text-decoration-underline mb-4"
      >
        Clear Filters
      </div>
      <div className="accordion" id="accordionExample">
        <Status setPageNumber={setPageNumber} setStatus={setStatus}/>
        <Species setPageNumber={setPageNumber} setSpecies={setSpecies}/>
        <Gender setPageNumber={setPageNumber} setGender={setGender}/>
      </div>
    </div>
  )
}

export default Filters