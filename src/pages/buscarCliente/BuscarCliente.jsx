import "./buscarCliente.css";
import { Link } from "react-router-dom"
let apiClientes = "http://localhost:3001/clientes";

export default function BuscarCliente() {
  return (
    <main className="contenedor">
      <section className="form-container">
        <div className="logo-container">Buscar cliente</div>
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
          <Link to="clientes">
          <button
            className="form-submit-btn"
            type="button"
          >
            Buscar
          </button>
          </Link>
        </form>
        <p className="signup-link">
          <Link to="/buscar-producto" className="signup-link link">
            {" "}
            Buscar Producto
          </Link>
        </p>
      </section>
    </main>
  );
}
