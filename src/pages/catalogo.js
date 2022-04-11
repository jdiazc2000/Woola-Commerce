
import "../styles/styles-catalogo.scss"
import "../styles/styles-nosotros.scss"

import Modals from "./sections/modals"
import BuyModals from "./sections/modalsbuy"
import CatalogoProducts from "./sections/CatalogoProducts"
import Footer from "./sections/footer"
import { motion } from "framer-motion"


const Catalogo = () => {

    document.addEventListener("keyup", saleitem => {
        if (saleitem.target.matches('#buscador')) {

            if (saleitem.key === "Escape") saleitem.target.value = "";

            document.querySelectorAll('.articulo').forEach(prenda => {

                prenda.textContent.toLowerCase().includes(saleitem.target.value.toLowerCase())
                    ? prenda.classList.remove('filtro')
                    : prenda.classList.add('filtro')
            })
        }
    })


    return (
        <>
            <div id="Catalogo">

                {/*Catalogo-title */}
                <div className="title">
                    <motion.div initial={{ x: -40 }} animate={{ x: 0 }} transition={{ type: "spring", stiffness: 100 }}>
                        <h2>Cátalogo</h2>
                    </motion.div>
                </div>


                {/*Buscador */}
                <div className="input">
                    <input type="text" name="buscador" id="buscador" placeholder="Búsqueda.." />
                </div>


                {/*Productos */}


                {/*Product card */}
                <CatalogoProducts/>

                {/*Products  modals - modal-buy*/}
                <Modals />
                <BuyModals />

            </div>

            {/*Footer */}
            <Footer />

        </>
    )
}
export default Catalogo;