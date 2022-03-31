import "../styles/styles-home.scss"
import Sales from "./sections/sales"
import Footer from "./sections/footer"
import Modals from "./sections/modals"
import BuyModals from "./sections/modalsbuy"
import Carousel from "./sections/carousel"
import { motion } from "framer-motion"

const Home = () => {

    const scrollToTop = () =>{
        window.scrollTo({
          top: 0, 
          behavior: 'smooth'
        });
      };
    
    return (
    <>
<div>          
    <div id="Carousel">
        <Carousel/>
    </div>  
     
    <div id="Ofertas">

            <div className="title">
                <motion.div initial={{x:-40}} animate={{ x: 0 }} transition={{ type: "spring", stiffness: 100}}>
                    <h2>Ofertas</h2>
                </motion.div>
            </div>

            <div className="Ofertas-section">
                <Sales uripath={"catalogo?Oferta_like=SI"}/>
            </div>  

            <div className="Catalogo-button">
                    <button id="Catalogo_Label"><a href="/#/catalogo" onClick={scrollToTop}>Catálogo</a></button>
            </div>

            <Modals/>
            <BuyModals/>   

    </div>
    
            <Footer/>
</div>
    </>
    )
}
export default Home;