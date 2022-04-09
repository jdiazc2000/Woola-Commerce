import { motion } from "framer-motion"
import ReviewCards from "./components/ReviewsCards/ReviewCards"
import AboutSquares from "./sections/about_squares"
import Footer from "./sections/footer"
import Map from "./sections/map"

const AboutUs = () => {

    return(
    <>

    <div id="About-Us">

        {/*AboutUs-Title */}
        <div className="title">
        <motion.div initial={{x:-40}} animate={{ x: 0 }} transition={{ type: "spring", stiffness: 100}}>
            <h2>Sobre nosotros</h2>
        </motion.div>
        </div>


        {/*AboutUs-Squares */}
        <AboutSquares/>


        {/*Reviews-TItle */}
        <div className="title">

        <motion.div initial={{x:-40}} animate={{ x: 0 }} transition={{ type: "spring", stiffness: 100}}>
            <h2>Opiniones</h2>
        </motion.div>


        {/*Reviews-Cards */}
        <ReviewCards/>

        </div>
    </div>
       
        {/*Map*/}
        <Map/>   

        {/*Footer */}
        <Footer/>
    </>
    )

}

export default AboutUs