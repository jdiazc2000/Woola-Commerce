import { useEffect,useState} from "react"
import ProductModals from "../components/ProductModals/ProductModals";


const Modals = () => {
   
    const [modals,setModals] = useState([])

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
    
           fetch("https://my-json-server.typicode.com/jdiazc2000/WOOLA-COMMERCE-API/catalogo", { signal: signal })
          .then((data) => data.json())
          .then((data) => setModals(data))
          .catch((err) => {
            if (err.name === "AbortError") {
            } else {
              console.log('Error al fetch')
            }
          });
        return () => controller.abort();
      }, []);
    

    return (
    <>
        <div>
        {
             modals.map(({id,tipo,marca,preciooferta,imagen,colores,genero,talla,descripción,precio,stock}) => (
                <ProductModals
                       key = {id}
                       id={id}
                       tipo={tipo}
                       marca={marca}
                       imagen={imagen}
                       precio={precio}
                       preciooferta={preciooferta}
                       colores={colores}
                       genero={genero}
                       talla={talla}
                       descripción={descripción}
                       stock={stock}
                   />
               ))
             }
        </div>

    </>
);
}

export default Modals