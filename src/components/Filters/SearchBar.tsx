import { IoIosSearch } from "react-icons/io";

const SearchBar = () => {
  return (
    <div className="searchBar">
      <div className="icon">
        <IoIosSearch />
      </div>
      <input type="text" placeholder="Search" />
    </div>
  );
};

export default SearchBar;
