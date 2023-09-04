import "./searchBar.styles.css";

/* Este componente retorna el "buscador", o barra de busqueda, que toma un input alfabetico y devuelve al/los usuario/s 
que coinciden con el mismo parcial o completamente, empleando a los handle que le son pasados por parametro desde la navbar */
function searchBar({ handleSubmit, handleChange }) {
  return (
    <div className="searchBar-div-style">
      <input
        placeholder="Type here"
        className={"search-input"}
        onChange={handleChange}
      />
      <button className={"search-button"} onClick={handleSubmit}>
        Search
      </button>
    </div>
  );
}

export default searchBar;
