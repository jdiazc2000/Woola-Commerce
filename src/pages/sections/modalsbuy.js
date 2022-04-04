import { useEffect,useState} from "react"
import ModalsBuy from "../components/ProductBuy/ProductBuy";


const BuyModals = () => {
   
    const [modalsbuy,setModalsBuy] = useState([])

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
    
           fetch("https://my-json-server.typicode.com/jdiazc2000/WOOLA-COMMERCE-API/catalogo", { signal: signal })
          .then((data) => data.json())
          .then((data) => setModalsBuy(data))
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
             modalsbuy.map(({id,tipo,marca,imagen,colores,stock,talla}) => (
                <ModalsBuy
                       key = {id}
                       id={id}
                       tipo={tipo}
                       marca={marca}
                       imagen={imagen}
                       colores={colores}
                       stock={stock}
                       talla={talla}
                   />
               ))
             }
        </div>

    </>
);
}


export default BuyModals