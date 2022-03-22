import { useEffect,useState} from "react"
import ProductModals from "../components/ProductModals/ProductModals";


const Modals = () => {
   
    const [modals,setModals] = useState([])

    useEffect(() =>{
        fetch("https://my-json-server.typicode.com/jdiazc2000/WOOLA-COMMERCE-API/catalogo")
        .then(response => response.json())
        .then(data => setModals(data))
        .catch(e => console.log(e))
    },[])


    return (
    <>
        <div>
        {
             modals.map(({id,tipo,marca,preciooferta,imagen,color1,color2,color3,genero,descripción,precio,stock}) => (
                <ProductModals
                       key = {id}
                       id={id}
                       tipo={tipo}
                       marca={marca}
                       imagen={imagen}
                       precio={precio}
                       preciooferta={preciooferta}
                       color1={color1}
                       color2={color2}
                       color3={color3}
                       genero={genero}
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