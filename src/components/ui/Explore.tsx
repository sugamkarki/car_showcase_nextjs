import { FC } from "react";
import CustomFilter from "./CustomFilter";
import SearchBar from "./SearchBar";
import { fetchCars } from "@/utils";

interface ExploreProps {}

const Explore: FC<ExploreProps> = async ({}) => {
  const allCars = await fetchCars();
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
          {!isDataEmpty ? (
            <section>Yeah we have cars</section>
          ) : (
            <div className="home__error-container">
              <h2 className="text-black text-xl font-bold">Oops no cars man</h2>
              <p>{allCars?.message}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Explore;
