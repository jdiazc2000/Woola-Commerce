import Ilustration from "../imgs/E-commerce.svg"
import { motion } from "framer-motion"

const AboutUs_TextBox = () => {

    return (
        <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            <div className="About_Us_Review">

                    <div className="img_Box">
                        <img src={Ilustration} alt="Ilustration.svg"></img>
                    </div>

                    <div className="text_Box">
                        <p>Somos la primera empresa en el Perú especializada en venta de productos de moda, 
                            con principal enfoque en brindarle la mejor calidad de servicio a todos nuestros clientes en todo el país.</p>
                    </div>
            </div>
            </motion.div>
        </>
    )
}

export default AboutUs_TextBox