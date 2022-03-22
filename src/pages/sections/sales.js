import Aos from "aos"
import "aos/dist/aos.css"
import {get} from "axios"
import { useEffect,useState } from "react"
import Product from "../components/ProductCard/ProductCard"

const Sales = () => {

    const [products,setProducts] = useState()

    useEffect(() =>{
         get("https://my-json-server.typicode.com/jdiazc2000/WOOLA-COMMERCE-API/catalogo")
        .then(({ data }) => setProducts(data))
        .catch(e => console.log(e))
    },[])
    

    useEffect(()=>{
        Aos.init({});
    },[]);

    return (
    <>
     <div id="Ofertas">
        <div className="title">
            <h2>Ofertas</h2>
        </div>

        <div className="Ofertas-section" >
            {
                products ? 
                (
                    products.map(({id,tipo,marca,imagen,stock,precio,preciooferta}) => (
                        <Product
                            key = {id}
                            id={id}
                            tipo={tipo}
                            marca={marca}
                            imagen={imagen}
                            precio={precio}
                            stock={stock}
                            preciooferta={preciooferta}
                        />    
                    ))  
                ) 
                
                : (<span>Cargando ofertas...</span>)
            }    

        </div>

        

    </div>

         
    </>
    )
}


export default Sales