import { motion } from "framer-motion"
import AboutUsSquares from "../components/Squares/AboutSquares"

const AboutSquares = () => {

    return (
    <>  
    <div id="About-Us">
        <div className="title">
        <motion.div initial={{x:-40}} animate={{ x: 0 }} transition={{ type: "spring", stiffness: 100}}>
            <h2>Sobre nosotros</h2>
        </motion.div>
        </div>

    <div className="squares-section">    

    <AboutUsSquares img="https://i.imgur.com/gn6guaA.png" descrip="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum id, eius quibusdam voluptatum"/>
    <AboutUsSquares img="https://i.imgur.com/gn6guaA.png" descrip="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum id, eius quibusdam voluptatum"/>
    <AboutUsSquares img="https://i.imgur.com/gn6guaA.png" descrip="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum id, eius quibusdam voluptatum"/>

    <AboutUsSquares img="https://i.imgur.com/gn6guaA.png" descrip="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum id, eius quibusdam voluptatum"/>
    <AboutUsSquares img="https://i.imgur.com/gn6guaA.png" descrip="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum id, eius quibusdam voluptatum"/>
    <AboutUsSquares img="https://i.imgur.com/gn6guaA.png" descrip="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum id, eius quibusdam voluptatum"/>
             
    </div>
    </div>         
    </>
    )
}

export default AboutSquares