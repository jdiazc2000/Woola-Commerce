
import { useEffect,useState } from "react"
import ProductCard from "../components/ProductCard/ProductCard"
import { motion } from "framer-motion"
import Skeleton from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css'

const Sales = ({uripath}) => {
  const [products,setProducts] = useState()
  const [loading, setLoading] = useState(true);

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


useEffect(() =>{
    setLoading(true);
    const TimeOnScreen = setTimeout(() =>{
        setLoading(false)
    },1000)
    return () => clearTimeout(TimeOnScreen)
},[])



const loader = () => {
  return(
    <>
  <div className="sale-item articulo">
    <div className="sale" >
        <Skeleton  width={200} height={200}/>
        <div className="info">   
            <h2 style={{paddingTop:"25px"}}><Skeleton width={200}/></h2>
            <h4><Skeleton width={200}/></h4>
        </div>
        <Skeleton width={150} height={40} borderRadius={10}/>
    </div>
  </div>

  <div className="sale-item articulo">
    <div className="sale" >
        <Skeleton  width={200} height={200}/>
        <div className="info">   
            <h2 style={{paddingTop:"25px"}}><Skeleton width={200}/></h2>
            <h4><Skeleton width={200}/></h4>
        </div>
        <Skeleton width={150} height={40} borderRadius={10}/>
    </div>
  </div>

  <div className="sale-item articulo">
    <div className="sale" >
        <Skeleton  width={200} height={200}/>
        <div className="info">   
            <h2 style={{paddingTop:"25px"}}><Skeleton width={200}/></h2>
            <h4><Skeleton width={200}/></h4>
        </div>
        <Skeleton width={150} height={40} borderRadius={10}/>
    </div>
  </div>

  <div className="sale-item articulo" >
    <div className="sale" >
        <Skeleton  width={200} height={200}/>
        <div className="info">   
            <h2 style={{paddingTop:"25px"}}><Skeleton width={200}/></h2>
            <h4><Skeleton width={200}/></h4>
        </div>
        <Skeleton width={150} height={40} borderRadius={10}/>
    </div>
  </div>

    </>
  )
}

if(loading){
  return(
    loader()
  )
}else{
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

             
              :    (<h1>Cargando...</h1>)
          }    

       
  </>
  )
}
}

export default Sales