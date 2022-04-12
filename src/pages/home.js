import "../styles/styles-home.scss"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

import Footer from "./sections/footer"
import Modals from "./sections/modals"
import Salescarousel from "../pages/sections/Sales_Carousel"
import BuyModals from "./sections/modalsbuy"
import Carousel from "./sections/carousel"
import NavBarStructura from "../pages/components/NavBarStructure/NavBarStructure"



const Home = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };


    return (
        <>
            <NavBarStructura />

            <div>

                {/*Banner*/}
                <Carousel />

                {/*Sales_Title*/}
                <div id="Ofertas">
                    <div className="title">
                        <motion.div initial={{ x: -40 }} animate={{ x: 0 }} transition={{ type: "spring", stiffness: 100 }}>
                            <h2>Ofertas</h2>
                        </motion.div>
                    </div>

                    {/*Carousel_Products */}
                    <Salescarousel uripath={"catalogo?Oferta_like=SI"} />
                    <Modals />
                    <BuyModals />

                    {/*Catalog_Button*/}
                    <div className="Catalogo-button">
                        <Link to="/catalogo"><button id="Catalogo_Label" title="Catalogo_Button" onClick={scrollToTop}><p>Catálogo</p></button></Link>
                    </div>
                </div>

                {/*Footer*/}
                <Footer />
            </div>
        </>
    )
}
export default Home;