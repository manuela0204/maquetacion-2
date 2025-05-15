import ClientesProductos from "../../componentes/clientesProductos/ClientesProductos";
import "./clientes.css";

export default function Clientes() {
  return (
    <main className="contenedor-clientes">
      <ClientesProductos nombre="cliente" redireccion="/perfil" imagen={"public/img/kitty.jpg"}/>
    </main>
  );
}
