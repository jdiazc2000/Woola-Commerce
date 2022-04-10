import AboutUsSquares from "../components/Squares/AboutSquares"
import Bolsa from "../imgs/bolsa.png"

const AboutSquares = () => {

    return (
    <>  

    <div className="squares-section">    

    <AboutUsSquares img={Bolsa} descrip="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum id, eius quibusdam voluptatum"/>
    <AboutUsSquares img={Bolsa}  descrip="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum id, eius quibusdam voluptatum"/>

    <AboutUsSquares img={Bolsa}  descrip="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum id, eius quibusdam voluptatum"/>
    <AboutUsSquares img={Bolsa}  descrip="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum id, eius quibusdam voluptatum"/>
    <AboutUsSquares img={Bolsa}  descrip="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum id, eius quibusdam voluptatum"/>
    <AboutUsSquares img={Bolsa}  descrip="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum id, eius quibusdam voluptatum"/>
             
    </div>        
    </>
    )
}

export default AboutSquares