import { motion } from "framer-motion"
import AboutSquares from "./sections/about_squares"
import Footer from "./sections/footer"
import Map from "./sections/map"

const AboutUs = () => {

    return(
    <>

    <div id="About-Us">
        <div className="title">
        <motion.div initial={{x:-40}} animate={{ x: 0 }} transition={{ type: "spring", stiffness: 100}}>
            <h2>Sobre nosotros</h2>
        </motion.div>
    </div>
        <AboutSquares/>
    </div>
    
    <Map/>    
    <Footer/>
    </>
    )

}

export default AboutUs