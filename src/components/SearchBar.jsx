import React from 'react'

export default function SearchBar(props) {
  
  const clickSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div>
      <form action="" onSubmit={clickSubmit}>
        <input type="text" value={props.searchInput} onChange={props.handleChange}/>
        <button>Search</button>
      </form>
    </div>
  )
}
