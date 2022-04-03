import "../styles/styles-home.scss"
import Sales from "./sections/sales"
import Footer from "./sections/footer"
import Modals from "./sections/modals"
import BuyModals from "./sections/modalsbuy"
import Carousel from "./sections/carousel"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

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


            <Carousel/>
     
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
                <Link to="/catalogo"><button id="Catalogo_Label" onClick={scrollToTop}><p>Catálogo</p></button></Link>
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