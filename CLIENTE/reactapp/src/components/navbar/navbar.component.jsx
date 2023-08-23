import "./navbar.styles.css";

function Navbar() {
  return (
    <div>
      <input placeholder="Type here" className={"search-input"} />
      <button className={"search-button"}>Search</button>
    </div>
  );
}

export default Navbar;
