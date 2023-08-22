import "./navbar.styles.css";

function Navbar() {
  return (
    <div>
      <form className="search-box">
        <input placeholder="Busqueda"/>
        <button>Buscar</button>
      </form>
    </div>
  );
}

export default Navbar;
