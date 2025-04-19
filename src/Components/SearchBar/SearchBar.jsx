import React from 'react'
import "../SearchBar/style.css"

const SearchBar = () => {
  return (
    <div className="searchBar w-[100%] h-[50px] bg-[#e5e5e5] rounded-sm relative p-2">
      <input type="text"  placeholder="Search for products...." className="w-full h-[35px] focus:outline-none  bg-inherit p-2 "/>
    </div>
  )
}

export default SearchBar
