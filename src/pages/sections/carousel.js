import "../../styles/styles-home.scss"
import { motion } from "framer-motion"

const Carousel = () => {

  return (
    <div id="Carousel">

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ type: "fade",  duration: 1.5}}>
        <div className="Text_div">
          <div className="Text">
            <h2>Haz tus compras online en Woola Commerce y
              encuentra las mejores ofertas en moda.
              <span><p>Aprovecha nuestro catálogo de invierno!</p></span>

              <button> Ir al catálogo</button>
            </h2>
          </div>
        </div>
      </motion.div>

      <div className="Carousel_IMG">

                  
        <h1>Images</h1>
        { /*    <motion.div initial={{ y: 100 }} animate={{ y: 0 }} transition={{ type: "spring", duration: 1.5 }}>
        </motion.div> */ }
     
      </div>
    </div>
  );
};

export default Carousel;
