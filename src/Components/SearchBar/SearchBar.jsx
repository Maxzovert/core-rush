import React from "react";
import "../SearchBar/style.css";
import Button from "@mui/material/Button";
import { IoSearch } from "react-icons/io5";

const SearchBar = () => {
  return (
    <div className="searchBar w-[100%] h-[50px] bg-[#e5e5e5] rounded-sm relative p-2">
      <input
        type="text"
        placeholder="Search for products...."
        className="w-full h-[35px] focus:outline-none  bg-inherit p-2 "
      />
      <Button className="!absolute top-[5px] right-2 z-50 !w-[35px] min-w-[35px] h-9 !rounded-full">
        <IoSearch className="text-black text-xl" />
      </Button>
    </div>
  );
};

export default SearchBar;
