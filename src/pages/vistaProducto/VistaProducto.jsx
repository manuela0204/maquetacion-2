import { Link } from "react-router-dom";
import "./vistaProducto.css";

export default function VistaProducto() {
  return (
    <main className="producto-main">
      <section className="productos-img">
        <div>
          <img
            src="/img/kitty2.jpg"
            alt="Producto 1 - Vista frontal"
          />
        </div>
        <div>
          <img
            src="public/img/kitty3.jpg"
            alt="Producto 1 - Vista lateral"
          />
        </div>
      </section>
      <section className="regresar-a-lista">
        <Link to="/productos">Listado Productos</Link>
      </section>
    </main>
  );
}
