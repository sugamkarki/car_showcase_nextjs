"use client";
import { FC, Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import Image from "next/image";
import { manufacturers } from "@/constants";
interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}

const SearchManufacturer: FC<SearchManufacturerProps> = ({
  manufacturer,
  setManufacturer,
}) => {
  const [query, setQuery] = useState<string>("");
  const filteredManufacturers =
    query === ""
      ? manufacturers
      : manufacturers.filter((m) => {
          return m
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""));
        });
  return (
    <div className="search-manufacturer">
      <Combobox value={manufacturer} onChange={setManufacturer}>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px]">
            <Image
              src={"/car-logo.svg"}
              width={20}
              height={20}
              className="ml-4"
              alt="car logo"
            />
          </Combobox.Button>
          <Combobox.Input
            className={"search-manufacturer__input"}
            placeholder="volkswagen-das auto"
            displayValue={(manufacturer: string) => manufacturer}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options>
              {filteredManufacturers.length === 0 && query !== "" ? (
                <Combobox.Option
                  value={query}
                  className="search-manufacturer__option"
                >
                  Create `&quot;`{query}`&quot;`
                </Combobox.Option>
              ) : (
                filteredManufacturers.map((m, i) => (
                  <Combobox.Option
                    key={i}
                    value={m}
                    className={({ active }) => `
                  
                  ${active ? "bg-primary-blue text-white" : "text-gray-900"}
                  `}
                  >
                    {({ active, selected }) => (
                      <li
                        className={`${
                          active
                            ? "bg-blue-500 text-white"
                            : "bg-white text-black"
                        }`}
                      >
                        {m}
                      </li>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;
