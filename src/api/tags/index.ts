type Tag = string;

export const getTagsBySearchTerm = async (searchTerm: string) => {
  const res = await fetch(`http://localhost:8000/api/tags?tag=${searchTerm}`);
  const tags = (await res.json()) as Tag[];
  return tags;
};
