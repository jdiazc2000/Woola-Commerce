
import SqueletonsProducts from "../components/ProductCard-Squeleton/CardSqueleton"
import CarouselSales from 'react-elastic-carousel'
import { useEffect,useState } from "react"
import { motion } from "framer-motion"
import ProductCard from "../components/ProductCard/ProductCard"

const Sales_Carousel = ({uripath}) => {
    const [products,setProducts] = useState()

    const BreakPoints= [
      {width: 1, itemsToShow: 1},
      {width: 550, itemsToShow: 2},
      {width: 768, itemsToShow: 3},
      {width: 1200, itemsToShow: 4},
    ];

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

    return(

    <CarouselSales breakPoints={BreakPoints}>
        {
        products ? 
  
        (
          products.map(({id,tipo,marca,imagen,stock,precio,preciooferta}) => (
            <motion.div  key = {id} initial={{scale:0.8}} animate={{ scale: 1}} transition={{ type: "spring", stiffness: 100 }} >
            <ProductCard key={id}
            id={id}
            tipo={tipo}
            marca={marca}
            imagen={imagen.img1}
            precio={precio}
            stock={stock}
            preciooferta={preciooferta}
          />
          </motion.div>
          ))  
        ) 
        
        :(  
          <>
          <CarouselSales breakPoints={BreakPoints}>
          <SqueletonsProducts/>
          <SqueletonsProducts/>
          <SqueletonsProducts/>
          <SqueletonsProducts/>
          </CarouselSales>
          </>
         )
    }   
    </CarouselSales>

    )
} 

export default Sales_Carousel