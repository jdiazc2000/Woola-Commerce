
import { useEffect,useState } from "react"
import ProductCard from "../components/ProductCard/ProductCard"
import { motion } from "framer-motion"

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
                    <motion.div  key = {id} initial={{scale:0.8}} animate={{ scale: 1}} transition={{ type: "spring", stiffness: 100 }} >
                      <ProductCard
                        id={id}
                        tipo={tipo}
                        marca={marca}
                        imagen={imagen}
                        precio={precio}
                        stock={stock}
                        preciooferta={preciooferta}
                      />
                    </motion.div>    
                ))  
            ) 

             
              :    (<div className="loader"></div>)
          }    

       
  </>
  )
}


export default Sales