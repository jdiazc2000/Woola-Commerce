import "../styles/styles-page404.scss"
import Ovni from "../pages/imgs/page-lost.png"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const Page404 = () => {
    return (
        <div id="Error404_Div">
            <motion.div initial={{ y: -100 }} animate={{ y: 0 }} transition={{ type: "spring", duration: 1 }}>
                <img src={Ovni} alt="Ovni"></img>
            </motion.div>
            <h1> WOW ¿Cómo llegaste hasta allí?</h1>
            <span>¡Se redireccionado a la página principal con este bóton!</span>
            <Link to="/"><button id="Catalogo_Label" title="Catalogo_Button"><p>Ayúdame a volver</p></button></Link>
        </div>

    )
}

export default Page404;