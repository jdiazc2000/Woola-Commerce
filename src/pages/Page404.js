import "../styles/styles-page404.scss"
import Ovni from "../pages/imgs/page-lost.webp"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"


const Page404 = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };


    return (
        <div id="Error404_Div">

            <div className="Error404_Text">
                <motion.div initial={{ y: -100 }} animate={{ y: 0 }} transition={{ type: "spring", duration: 1 }}>
                    <img src={Ovni} alt="Ovni"></img>
                </motion.div>
                <h1> WOW ¿Cómo llegaste hasta allí?</h1>
                <span>¡Se redireccionado a la página principal con este botón!</span>
                <br/>
                <Link to="/"><button id="Catalogo_Label" title="Catalogo_Button" onClick={scrollToTop} ><p>Ayúdame a volver</p></button></Link>
            </div>
        </div>



    )
}

export default Page404;