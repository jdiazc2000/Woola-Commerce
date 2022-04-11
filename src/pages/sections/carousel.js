import "../../styles/styles-home.scss"
//import Imagen1 from "../imgs/shop-button.png"
import { motion } from "framer-motion"

const Carousel = () => {

  return (
    <div id="Carousel">

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ type: "fade",  duration: 1}}>
        <div className="Text_div">
          <div className="Text">
            <h2>Haz tus compras online en Woola Commerce y
              encuentra las mejores ofertas en moda.
              <span><p>Aprovecha nuestro catálogo de invierno!</p></span>

              <button><a href="#/catalogo">Ir al catálogo</a></button>
            </h2>
          </div>
        </div>
      </motion.div>

   

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
