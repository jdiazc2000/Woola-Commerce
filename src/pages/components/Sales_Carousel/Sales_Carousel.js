
import SqueletonsProducts from "../ProductCard-Squeleton/CardSqueleton"
import CarouselSales from 'react-elastic-carousel'
import { useEffect,useState } from "react"

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
            <div className="sale" key={id}>
                <img src={imagen.img1} alt="prenda"/>
                <div className="info">
                    <h2>{tipo} {marca}</h2>
                    <h4>{preciooferta ?  `$${preciooferta}` : ''}  <span className="oferta"> {preciooferta ?  `$${precio}` : <p className="PrecioNormal">${precio}</p>}</span></h4>
                </div>
        {stock === 0 ? <h3 style={{paddingTop: "10px"}}>Sin stock</h3>  : <label htmlFor="btn-modal" data-bs-toggle="modal" data-bs-target={`#exampleModa${id}`}>Comprar</label> }
            </div>

          ))  
        ) 
        :    (  
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