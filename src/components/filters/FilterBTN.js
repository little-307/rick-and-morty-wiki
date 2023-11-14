import React from 'react'

const FilterBTN = ({ name, setPageNumber, index, items, task }) => {
  return (
    <div>
      <style jsx>
        {`
        .x:checked + label {
          background-color: #0b5ed7;
          color: white;
        }

        input[type="radio"]{
          display: none;
        }
        `}
      </style>
      <div className="form-check">
        <input 
          className ="form-check-input x" 
          type ="radio" 
          name = {name} 
          id = {`${name}-${index}`}
          />
        <label 
          onClick = {() => {
            task(items);
            setPageNumber = {setPageNumber};
          }}
          className = "btn btn-outline-primary" 
          for = {`${name}-${index}`}
          
        >
          {items}
        </label>
      </div>
    </div>
  )
}

export default FilterBTN