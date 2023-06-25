"use client";
import { FC, useState } from "react";
import SearchManufacturer from "./SearchManufacturer";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface SearchBarProps {}
const SearchButton = ({ otherClasses = "" }) => {
  return (
    <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
      <Image
        src="/magnifying-glass.svg"
        alt="magn"
        width={40}
        height={40}
        className="object-contain"
      />
    </button>
  );
};
type Inputs = {};
const SearchBar: FC<SearchBarProps> = ({}) => {
  const [manufacturer, setManufacturer] = useState<string>("");
  const [model, setModel] = useState("");
  const router = useRouter();
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (manufacturer=== "" && model === "") {
      return alert("please fill in the search bar");
    }
    updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase());
  };
  const updateSearchParams = (model: string, manufacturer: string) => {
    const searchParams = new URLSearchParams(window.location.search);
    if (model) {
      searchParams.set("model", model);
    } else {
      searchParams.delete("model");
    }
    if (manufacturer) {
      searchParams.set("manufacturer", manufacturer);
    } else {
      searchParams.delete("manufacturer");
    }
    const newPathName = `${
      window.location.pathname
    }?${searchParams.toString()}`;
    router.push(newPathName);
  };
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          alt="magn"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
        />
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Porche 1313"
          className="searchbar__input"
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
