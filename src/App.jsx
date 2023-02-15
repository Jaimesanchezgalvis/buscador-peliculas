import { useCallback, useState } from "react";
import debounce from "just-debounce-it";
import { RenderMovies } from "./components/RenderMovies";
import { useMovies } from "./hooks/useMovies";
import { useSearch } from "./hooks/useSearch";

import "./App.css";

function App() {
  const [sort, setSort] = useState(false);
  const { search, setQuery, error } = useSearch();
  const { movies, getMovies, loading } = useMovies({ search, sort });

  const debonceGetMovies = useCallback(
    debounce((search) => {
      console.log("search", search);
      getMovies( {search} );
    }, 300),
    [getMovies]
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    getMovies({ search });
  };

  const handleSort = () => {
    setSort(!sort);
  };

  const handleChange = (e) => {
    const newSearch = e.target.value;
    setQuery(newSearch);
    debonceGetMovies( newSearch );
  };

  return (
    <div className="page">
      <header>
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Avenger, Start Wars, etc..."
            name="query"
            value={search}
            onChange={handleChange}
            autoComplete="off"
            style={error ? { border: "1px solid red" } : null}
          />
          <input type="checkbox" name="sort" onChange={handleSort} />
          <button type="submit" disabled={error ? true : false}>
            Buscar
          </button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </header>
      <main>
        {loading ? <p>Cargando...</p> : <RenderMovies movies={movies} />}
      </main>
    </div>
  );
}

export default App;
