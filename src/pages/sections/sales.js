import Aos from "aos"
import "aos/dist/aos.css"
import {get} from "axios"
import { useEffect,useState } from "react"
import Product from "../components/ProductCard/ProductCard"

const Sales = () => {

    const [products,setProducts] = useState()

    useEffect(() =>{
         get("http://localhost:3010/catalogo?Oferta_like=")
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
                    products.map(({id,tipo,marca,imagen,precio,stock,preciooferta}) => (
                        <Product
                            key = {id}
                            id={id}
                            tipo={tipo}
                            marca={marca}
                            imagen={imagen}
                            precio={precio}
                            preciooferta={preciooferta}
                            stock={stock}
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