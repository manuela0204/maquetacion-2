import Card from "../../componentes/card/Card";
import { Link } from "react-router-dom";
import "./clientesProductos.css"

export default function ClientesProductos({nombre, redireccion, imagen}) {
  return (
    <>
      <section className="contenedor-cards">
        <Card
          nombre={nombre}
          img={imagen}
          redireccion={redireccion}
        />
        <Card
          nombre={nombre}
          img={imagen}
          redireccion={redireccion}
        />
        <Card
          nombre={nombre}
          img={imagen}
          redireccion={redireccion}
        />
        <Card
          nombre={nombre}
          img={imagen}
          redireccion={redireccion}
        />
        <Card
          nombre={nombre}
          img={imagen}
          redireccion={redireccion}
        />
        <Card
          nombre={nombre}
          img={imagen}
          redireccion={redireccion}
        />
        <Card
          nombre={nombre}
          img={imagen}
          redireccion={redireccion}
        />
        <Card
          nombre={nombre}
          img={imagen}
          redireccion={redireccion}
        />
        <Card
          nombre={nombre}
          img={imagen}
          redireccion={redireccion}
        />
        <Card
          nombre={nombre}
          img={imagen}
          redireccion={redireccion}
        />
      </section>
      <div className="regresar-home">
        <Link to={redireccion == "/perfil" ? "/": "/buscar-producto"}>Home</Link>
      </div>
    </>
  );
}
