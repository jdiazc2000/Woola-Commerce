import Aos from "aos"
import "aos/dist/aos.css"
import { motion } from "framer-motion"
import { useEffect } from "react"

const AboutSquares = () => {

    useEffect(()=>{
        Aos.init({});
    },[]);


    return (
    <>  
    <div id="About-Us">
        <div className="title">
        <motion.div initial={{x:-40}} animate={{ x: 0 }} transition={{ type: "spring", stiffness: 100}}>
            <h2>Sobre nosotros</h2>
        </motion.div>
        </div>

        <div className="squares-section">    
        <div className="squares"  data-aos="zoom-in" data-aos-duration="1000">
            <img src="https://i.imgur.com/gn6guaA.png" alt="good-things"/>
            <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum id, eius quibusdam voluptatum</h2>
        </div>

        <div className="squares"  data-aos="zoom-in" data-aos-duration="1000">
            <img src="https://i.imgur.com/gn6guaA.png" alt="good-things"/>
            <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum id, eius quibusdam voluptatum</h2>
        </div>

        <div className="squares"  data-aos="zoom-in" data-aos-duration="1000">
            <img src="https://i.imgur.com/gn6guaA.png" alt="good-things"/>
            <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum id, eius quibusdam voluptatum</h2>
        </div>

        <div className="squares"  data-aos="zoom-in" data-aos-duration="1000">
            <img src="https://i.imgur.com/gn6guaA.png" alt="good-things"/>
            <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum id, eius quibusdam voluptatum</h2>
        </div>

        <div className="squares"  data-aos="zoom-in" data-aos-duration="1000">
            <img src="https://i.imgur.com/gn6guaA.png" alt="good-things"/>
            <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum id, eius quibusdam voluptatum</h2>
        </div>

        <div className="squares"  data-aos="zoom-in" data-aos-duration="1000">
            <img src="https://i.imgur.com/gn6guaA.png" alt="good-things"/>
            <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum id, eius quibusdam voluptatum</h2>
        </div>
        </div>
    </div>         
    </>
    )
}

export default AboutSquares