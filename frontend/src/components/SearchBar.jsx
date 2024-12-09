import React, { useContext, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const SearchBar = () => {
  const { search, setSearch, showSearch, setshowSearch } =
    useContext(ShopContext);

  const [visisble, setVisisble] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("collection")) {
      setVisisble(true);
    } else {
      setVisisble(false);
    }
  }, [location]);

  return showSearch && visisble ? (
    <div className="border-t border-b bg-gray-50 text-center">
      <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
        <input
          type="text"
          placeholder="Search"
          className="flex-1 outline-none bg-inherit text-sm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <img src={assets.search_icon} alt="search" className="w-4" />
      </div>
      <img
        src={assets.cross_icon}
        alt="cross"
        className="inline-flex w-3 cursor-pointer"
        onClick={() => setshowSearch(false)}
      />
    </div>
  ) : null;
};

export default SearchBar;
