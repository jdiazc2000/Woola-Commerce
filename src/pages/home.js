import "../styles/styles-home.scss"
import "../styles/styles-nosotros.scss"
import "../styles/styles-catalogo.scss"
import Sales from "./sections/sales"
import Footer from "./sections/footer"
import Modals from "./sections/modals"
import BuyModals from "./sections/modalsbuy"
import Carousel from "./sections/carousel"
import { motion } from "framer-motion"

const Home = () => {
    return (
    <>
    <div id="Carousel">
        <Carousel/>
    </div>  
     
    <div id="Ofertas">
        <div className="title">
           <motion.div initial={{x:-40}} animate={{ x: 0 }} transition={{ type: "spring", stiffness: 100}}>
                <h2>Ofertas</h2>
            </motion.div>
        </div>

        <div className="Ofertas-section" >
            <Sales uripath={"catalogo?Oferta_like=SI"}/>
        </div>  
    
        <Modals/>
        <BuyModals/>   
    </div>

    <Footer/>
    </>
    )
}
export default Home;