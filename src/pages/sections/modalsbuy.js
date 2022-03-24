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
             modalsbuy.map(({id,tipo,marca,imagen,color1,color2,color3,stock}) => (
                <ModalsBuy
                       key = {id}
                       id={id}
                       tipo={tipo}
                       marca={marca}
                       imagen={imagen}
                       color1={color1}
                       color2={color2}
                       color3={color3}
                       stock={stock}
                   />
               ))
             }
        </div>

    </>
);
}


export default BuyModals