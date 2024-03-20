import dynamic from "next/dynamic";
import React from "react";

const DynamicNavbarItem = dynamic(() => import("./NavbarItem"), {
  ssr: false,
});

function Navbar() {
  return (
    <div className="flex dark:bg-gray-600 bg-amber-100 p-4 lg:text-lg justify-center gap-8">
      <DynamicNavbarItem title="Trending" param="fetTrending" />
      <DynamicNavbarItem title="Top Rated" param="fetTopRated" />
    </div>
  );
}

export default Navbar;
