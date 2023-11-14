import React from 'react'
import styles from "./Search.module.scss"

const Search = ({ setSearch, setPageNumber }) => {
  return (
    <form className="d-flex flex-sm-row flex-column align-items-center justify-content-center gap-3 mb-3">
      <input 
        onChange = { (e) => {
          setPageNumber(1);
          setSearch(e.target.value);
        }}
        placeholder="Search for Characters" 
        type="text" 
        className={styles.input} />
      <button onClick={ e => {e.preventDefault()}} className={`${styles.btn} bg-primary fs-5 text-warning`}>Search</button>
    </form>
  )
}

export default Search