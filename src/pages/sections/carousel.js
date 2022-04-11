import "../../styles/styles-home.scss"
import { Link } from "react-router-dom"


const Carousel = () => {

  return (
    <div id="Carousel">

        <div className="Text_div">
          <div className="Text">
            <h2>Haz tus compras online en Woola Commerce y
              encuentra las mejores ofertas en moda.
              <span><p>Aprovecha nuestro catálogo de invierno!</p></span>

              <Link to="/catalogo"><button title="button_catalogo">Ir al catálogo</button></Link>
            </h2>
          </div>
        </div>
   

        { /*    <motion.div initial={{ y: 100 }} animate={{ y: 0 }} transition={{ type: "spring", duration: 1.5 }}>
        </motion.div> 
        
           <div className="Carousel_IMG">
        
        <img src="{Imagen1}" alt="png"></img>
        
        */ 
        
        }

     
      </div>

  );
};

export default Carousel;
