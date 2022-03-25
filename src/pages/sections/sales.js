import "aos/dist/aos.css"
import { useEffect,useState } from "react"
import ProductCard from "../components/ProductCard/ProductCard"


const Sales = ({uripath}) => {
  const [products,setProducts] = useState()

useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

       fetch(`https://my-json-server.typicode.com/jdiazc2000/WOOLA-COMMERCE-API/${uripath}`, { signal: signal })
      .then((data) => data.json())
      .then((data) => setProducts(data))
      .catch((err) => {
        if (err.name === "AbortError") {
        } else {
          console.log('Error al fetch')
        }
      });
    return () => controller.abort();
  }, [uripath]);

  

  return (
  <>

          {
              products ? 
        
              (
                products.map(({id,tipo,marca,imagen,stock,precio,preciooferta}) => (
                    <ProductCard
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

             
              :    (<div className="loader"></div>)
          }    

       
  </>
  )
}


export default Sales