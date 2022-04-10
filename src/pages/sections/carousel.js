import "../../styles/styles-home.scss"
import { motion } from "framer-motion"
import Img1 from "../imgs/shop-button.png"


const Carousel = () => {

  const Images = [
    { id: 1, image: require("../imgs/shop-button.png") }
    /*
    { id:2, image: require("../imgs/debit-card.png")},
    { id:3, image: require("../imgs/discount-tag.png")},
    { id:4, image: require("../imgs/online-shopping-store.png")},
    { id:5, image: require("../imgs/mega-sale-announcement.png")}
    */
  ]

  return (
    <div id="Carousel">

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ type: "fade", stiffness: 100 }}>
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

        <motion.div initial={{ y: 100 }} animate={{ y: 0 }} transition={{ type: "spring", duration: 1.5 }}>
          <img src="{Img1}" alt="IMG_IMG"></img>
        </motion.div>
      </div>
    </div>
  );
};

export default Carousel;
