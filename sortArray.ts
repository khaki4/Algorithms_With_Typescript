// Sorting an array of strings
const arr: ReadonlyArray<string> = ['foo', 'bar'];
const copy = arr.slice().sort();

// Sort in ascending order
const movies = [
  {
    name: "The Shawshank Redemtion",
    year: 1994
  },
  {
    name: "The Godfather",
    year: 1972
  },
  {
    name: "The Godfather: Part II",
    year: 1974
  },
  {
    name: "The Dark Knight",
    year: 2008
  }
];

movies.sort((b, a) => b.year - a.year);
for(let movie of movies) {
  console.log(movie.name);
}