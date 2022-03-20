import { useEffect,useState} from "react"
import ModalsBuy from "../components/ProductBuy/ProductBuy";


const BuyModals = () => {
   
    const [modalsbuy,setModalsBuy] = useState([])

    useEffect(() =>{
        fetch("http://localhost:3010/catalogo")
        .then(response => response.json())
        .then(data => setModalsBuy(data))
        .catch(e => console.log(e))
    },[])

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