import "../styles/styles-home.scss"
import "../styles/styles-nosotros.scss"
import "../styles/styles-catalogo.scss"
import Sales from "./sections/sales"
import Footer from "./sections/footer"
import Modals from "./sections/modals"
import BuyModals from "./sections/modalsbuy"
import Carousel from "./sections/carousel"
import { useEffect } from "react"
import Aos from "aos"

const Home = () => {

    useEffect(() =>{
        Aos.init();
    })

    return (
    <>
    <div id="Carousel">
        <Carousel/>
    </div>  
     
    <div id="Ofertas">
        <div className="title">
            <h2>Ofertas</h2>
        </div>


    <div id="Ofertas">
        <div className="Ofertas-section" >
            <Sales uripath={"catalogo?Oferta_like=SI"}/>
        </div>  
    </div>
    
    <Modals/>
    <BuyModals/>   
    </div>
    <Footer/>
    
    </>
    )
}
export default Home;