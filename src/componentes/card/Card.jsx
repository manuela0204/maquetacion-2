import { Link } from "react-router-dom";
import "./card.css";

export default function Card({
  nombre,
  img,
  redireccion,
}) {
  return (
    <div className="producto">
      {console.log(img)}
      <h3>{nombre}</h3>
      <img src={img} alt="" />
      <Link to={redireccion}>
        <button>Ver</button>
      </Link>
    </div>
  );
}
