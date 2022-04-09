import "../../styles/styles-home.scss"
import { motion } from "framer-motion"


const Carousel = () => {

  return (
    <div id="Carousel">

      <motion.div initial={{ x: -10 }} animate={{ x: 0 }} transition={{ type: "spring", stiffness: 100 }}>
        <div className="Text">

          <h2>Haz tus compras online en Woola Commerce y
            encuentra las mejores ofertas en moda.
            <span><p>Aprovecha nuestro catálogo de invierno</p></span>
            <button> Ir al catálogo</button>
          </h2>
        </div>
      </motion.div>
    </div>
  );
};

export default Carousel;
