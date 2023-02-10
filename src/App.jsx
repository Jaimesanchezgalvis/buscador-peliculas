import { RenderMovies } from "./components/RenderMovies";
import { useMovies } from "./hooks/useMovies";
import { useSearch } from "./hooks/useSearch";

import "./App.css";

function App() {
  const { movies } = useMovies();
  const { search, setQuery, error } = useSearch();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const hadleChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
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
            onChange={hadleChange}
            autoComplete="off"
            style={error ? { border: "1px solid red" } : null}
          />
          <button type="submint" disabled={error ? true : false}>
            Buscar
          </button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </header>
      <main>
        <RenderMovies movies={movies} />
      </main>
    </div>
  );
}

export default App;
