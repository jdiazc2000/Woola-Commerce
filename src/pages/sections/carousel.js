import "../../styles/styles-home.scss"
import { motion } from "framer-motion"


const Carousel = () => {

  return (
    <div id="Carousel">
 
      <div className="Text">
            <motion.div initial={{x:-50}} animate={{ x: 0 }} transition={{ type: "spring", stiffness: 100}}>
                <h2>Haz tus compras online en Woola Commerce y 
                encuentra las mejores ofertas en tecnología, muebles, moda, electrohogar, telefonía y deportes.</h2>
            </motion.div>
      </div>

    </div>
  );
};

export default Carousel;
