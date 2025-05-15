import ClientesProductos from "../../componentes/clientesProductos/ClientesProductos";
import "./productos.css";

export default function Productos() {
  return (
    <main className='contenedro-productos'>
          <ClientesProductos nombre="producto" imagen="/img/kitty2.jpg" redireccion="/vista-producto"/>
    </main>
  )
}
