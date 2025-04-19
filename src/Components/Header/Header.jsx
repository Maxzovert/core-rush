import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

const Header = () => {
  return (
    <header>
        {/* Top stipe */}
      <div className="top-stripe py-2 border-t-[1px] border-b-[1px] border-gray-300">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="col1 w-[50%]">
              <p className="text-[12px] font-[500]">
                Get up to 50% off new season style, limetes time only
              </p>
            </div>

            <div className="col2 flex items-center justify-end">
              <ul className="flex items-center gap-3">
                <li className="list-none ">
                  <Link
                    to="/help-center"
                    className="text-[12px] link font-[500] transition"
                  >
                    Help Center
                  </Link>
                </li>

                <li className="list-none ">
                  <Link
                    to="/order-tracking"
                    className="text-[12px] link font-[500] transition"
                  >
                    Order Tracking
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar */}

      <div className="header">
        <div className="container flex items-center justify-between">
            <div className="col1 w-[25%]">
                <Link to={"/"}><img src="/logo.png" className="w-2xs h-32 "/></Link>
            </div>
            <div className="col2 w-[45%]">
              <SearchBar/>
            </div>
            <div className="col3 w-[30%]"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
