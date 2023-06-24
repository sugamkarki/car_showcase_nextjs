export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "f7417a1b73msheb6fca689e6a29bp173679jsn907b639f793d",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const url = "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corollassss";
  const response = await fetch(url, {
    headers,
  });
  const result = await response.json();
  return result;
}
