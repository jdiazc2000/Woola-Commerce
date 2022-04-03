
import { motion } from "framer-motion"

import { defineLordIconElement } from "lord-icon-element";
import lottie from "lottie-web";


const AboutSquares  = ({img,descrip}) => {

    defineLordIconElement(lottie.loadAnimation);

    return(
        <>

    <motion.div  initial={{scale:0.8}} animate={{ scale: 1}} transition={{ type: "spring", stiffness: 100 }}>
        <div className="squares" >
            <img src={img} alt="good-things"/>
            <h2>{descrip}</h2>
        </div>
    </motion.div>

     <lord-icon trigger="hover" src="/my-icon.json"></lord-icon>

     </>
    )
} 

export default AboutSquares