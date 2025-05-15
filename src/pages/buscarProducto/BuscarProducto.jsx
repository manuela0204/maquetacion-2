import "./buscarProducto.css";
import { Link } from "react-router-dom";

export default function BuscarProducto() {
  return (
    <main className="contenedor">
      <section className="form-container">
        <div className="logo-container">Buscar Producto</div>
        <form className="form">
          <div className="form-group">
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              name="nombre"
              placeholder="Escribe el nombre"
              required
            />
          </div>
          <Link to="/productos">
          <button
            className="form-submit-btn"
            type="button"
          >
            Buscar
          </button>
          </Link>
        </form>
        <p className="signup-link">
          <Link to="/" className="signup-link link">
            {" "}
            Buscar Cliente
          </Link>
        </p>
      </section>
    </main>
  );
}
