import { motion } from "framer-motion"


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
    <motion.div  initial={{scale:0.8}} animate={{ scale: 1}} transition={{ type: "spring", stiffness: 100 }}>
            <div className="squares" >
                <img src="https://i.imgur.com/gn6guaA.png" alt="good-things"/>
                <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum id, eius quibusdam voluptatum</h2>
            </div>
    </motion.div>
       
    <motion.div  initial={{scale:0.8}} animate={{ scale: 1}} transition={{ type: "spring", stiffness: 100 }}>
            <div className="squares" >
                <img src="https://i.imgur.com/gn6guaA.png" alt="good-things"/>
                <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum id, eius quibusdam voluptatum</h2>
            </div>
    </motion.div>

    <motion.div  initial={{scale:0.8}} animate={{ scale: 1}} transition={{ type: "spring", stiffness: 100 }}>
            <div className="squares" >
                <img src="https://i.imgur.com/gn6guaA.png" alt="good-things"/>
                <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum id, eius quibusdam voluptatum</h2>
            </div>
    </motion.div>

    <motion.div  initial={{scale:0.8}} animate={{ scale: 1}} transition={{ type: "spring", stiffness: 100 }}>
            <div className="squares" >
                <img src="https://i.imgur.com/gn6guaA.png" alt="good-things"/>
                <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum id, eius quibusdam voluptatum</h2>
            </div>
    </motion.div>

    <motion.div  initial={{scale:0.8}} animate={{ scale: 1}} transition={{ type: "spring", stiffness: 100 }}>
            <div className="squares" >
                <img src="https://i.imgur.com/gn6guaA.png" alt="good-things"/>
                <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum id, eius quibusdam voluptatum</h2>
            </div>
    </motion.div>

    <motion.div  initial={{scale:0.8}} animate={{ scale: 1}} transition={{ type: "spring", stiffness: 100 }}>
            <div className="squares" >
                <img src="https://i.imgur.com/gn6guaA.png" alt="good-things"/>
                <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum id, eius quibusdam voluptatum</h2>
            </div>
    </motion.div> 
       


       
    </div>
    </div>         
    </>
    )
}

export default AboutSquares