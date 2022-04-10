
import { motion } from "framer-motion"

const AboutSquares  = ({img,descrip}) => {

    return(
        <>
            <motion.div  initial={{opacity: 0}} animate={{ opacity: 1}} transition={{ type: 'fade', duration: 1 }}>
                <div className="squares" >
                    <img src={img} alt="good-things"/>
                    <h2>{descrip}</h2>
                </div>
            </motion.div>
        </>
    )
} 

export default AboutSquares