export const genres = [
  { _id: "5b21ca3eeb7f6fbccd471818", name: "public" },
  { _id: "5b21ca3eeb7f6fbccd471814", name: "private" },
  { _id: "5b21ca3eeb7f6fbccd471820", name: "sources" },
  { _id: "5b21ca3eeb7f6fbccd471821", name: "forks" }
];

export function getGenres() {
  return genres.filter(g => g);
}
