import "./searchBar.styles.css";

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
