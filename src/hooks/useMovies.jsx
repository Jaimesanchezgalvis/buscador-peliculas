import mockResponseMovies from "../api/mockResponseMovies";

export const useMovies = () => {
  const movies = mockResponseMovies.Search;

  const mappedMovies = movies.map((movie) => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster,
  }));

  return { movies: mappedMovies };
};
