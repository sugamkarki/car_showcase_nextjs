"use client";
import { FC } from "react";

import { useSearchParams } from "next/navigation";
import CustomFilter from "./CustomFilter";
import SearchBar from "./SearchBar";
import { fetchCars } from "@/utils";
import CarCard from "./CarCard";

interface ExploreProps {}

export const dynamic = "force-dynamic";
const Explore: FC<ExploreProps> = async () => {
  const searchParams = useSearchParams();
  const allCars = await fetchCars({
    manufacturer: searchParams.get("manufacturer") || "",
    model: searchParams.get("model") || "",
    year: +(searchParams.get("year") || 2022),
    limit: +(searchParams.get("limit") || 10),
    fuel: searchParams.get("fuel") || "",
  });
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <div className="mt-12 padding-x padding-y max-width" id="discover">
      <div className="home__text-container">
        <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
        <p>Explore the cars you might like</p>
      </div>
      <div className="home__filters">
        <SearchBar />
        <div className="home__filter-container">
          <CustomFilter title="fuel" />
          <CustomFilter title="year" />
        </div>
      </div>
      {!isDataEmpty ? (
        <section>
          <div className="home__cars-wrapper">
            {allCars?.map((car, i) => (
              <CarCard car={car} key={i} />
            ))}
          </div>
        </section>
      ) : (
        <div className="home__error-container">
          <h2 className="text-black text-xl font-bold">Oops no cars man</h2>
          <p>{allCars?.message}</p>
        </div>
      )}
    </div>
  );
};

export default Explore;
