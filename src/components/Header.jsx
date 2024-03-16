import React from "react";
import MenuItem from "./MenuItem";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Link from "next/link";
import DarkModeSwitch from "./DarkModeSwitch";

// API_Key = 981512264034990ace65fe84a822b7c5
// ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ODE1MTIyNjQwMzQ5OTBhY2U2NWZlODRhODIyY
// jdjNSIsInN1YiI6IjY1ZjJlNGRhMmZkZWM2MDE1NzI
// wZGQ3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJza
// W9uIjoxfQ.UhjrPTukwHqK9wB
// -i30VZcUPtcqzvfN5nmVdd_ynQfY";

function Header() {
  return (
    <div className="flex justify-between items-center p-3 max-w-6xl mx-auto">
      <div className="flex gap-4">
        <MenuItem title="home" address="/" Icon={AiFillHome} />
        <MenuItem title="about" address="/about" Icon={BsFillInfoCircleFill} />
      </div>
      <div className="flex items-center gap-4">
        <DarkModeSwitch />
        <Link href={"/"} className="flex gap-1 items-center">
          <span className="text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg">
            IMDB
          </span>
          <span className="text-xl hidden sm:inline">Clone</span>
        </Link>
      </div>
    </div>
  );
}

export default Header;
