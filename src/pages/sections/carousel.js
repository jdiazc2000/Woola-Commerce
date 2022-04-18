import "../../styles/styles-home.scss"
import { Link } from "react-router-dom"
import bgImage from "../videos/backgroundVideo.mp4"

const Carousel = () => {

  return (
    <div id="Carousel">

      <video autoPlay loop muted>
          <source src={bgImage} type="video/mp4"></source>
      </video>

        <div className="Text_div">
          <div className="Text">
            <h2>Realiza tus compras online en Woola Commerce y
              encuentra las mejores ofertas en moda.
              <span><p>¡Aprovecha nuestro catálogo de invierno!</p></span>

              <Link to="/catalogo"><button title="button_catalogo">Ir al catálogo</button></Link>
            </h2>
          </div>
        </div>
     
      </div>

  );
};

export default Carousel;
