import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect,useState } from "react"
import Product from "../components/ProductCard/ProductCard"



const Sales = () => {

    const [products,setProducts] = useState()

    useEffect(() =>{
        fetch("http://localhost:3010/catalogo")
        .then(response => response.json())
        .then(data => setProducts(data))
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
                    products.map(({id,tipo,marca,imagen,precio}) => (
                        <Product
                            key = {id}
                            id={id}
                            tipo={tipo}
                            marca={marca}
                            imagen={imagen}
                            precio={precio}
                            
                        />
                        
                    ))
                    
                ) 
                
                : (<span>Cargando Productos...</span>)
            }    

        </div>

        

    </div>

         
    </>
    )
}


export default Sales