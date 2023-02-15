export const RenderMovies = ({ movies }) => {
  const hasMovies = movies?.length > 0;

  return (
    <>
      {hasMovies ? (
        <ul className="movies">
          {movies?.map((movie) => (
            <li className="movie" key={movie.id}>
              <h3>{movie.title}</h3>
              <p>{movie.year}</p>
              <img src={movie.poster} alt={movie.Title} />
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-movies">No hay películas</p>
      )}
    </>
  );
};
