"use client";
import { FC, useState } from "react";
import SearchManufacturer from "./SearchManufacturer";

interface SearchBarProps {}
type Inputs = {};
const SearchBar: FC<SearchBarProps> = ({}) => {
  const [manufacturer, setManufacturer] = useState<string>("");

  const handleSearch = () => {};
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
      </div>
    </form>
  );
};

export default SearchBar;
