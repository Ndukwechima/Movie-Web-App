import NavbarItem from "./NavbarItem";

function Navbar() {
  return (
    <div className="flex dark:bg-gray-600 bg-amber-100 p-4 lg:text-lg justify-center gap-8">
      <NavbarItem title="Trending" param="fetTrending" />
      <NavbarItem title="Top Rated" param="fetTopRated" />
    </div>
  );
}

export default Navbar;
