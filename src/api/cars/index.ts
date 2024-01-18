type Car = {
  id: string;
  url: string;
  alt_description: string;
  // TODO add other properties
};

export const getCarsByTag = async (tag: string) => {
  const res = await fetch(`http://localhost:8000/api/cars?tag=${tag}`);
  const cars = (await res.json()) as Car[];
  return cars;
};
