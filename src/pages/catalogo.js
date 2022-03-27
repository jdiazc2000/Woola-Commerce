
import Sales from "./sections/sales"
import Modals from "./sections/modals"
import BuyModals from "./sections/modalsbuy"
import Footer from "./sections/footer"
import "../styles/styles-catalogo.scss"
import { motion } from "framer-motion"
import "../styles/styles-nosotros.scss"

const Catalogo = () => {

    document.addEventListener("keyup", saleitem => {
        if(saleitem.target.matches('#buscador')){
    
            if(saleitem.key === "Escape")saleitem.target.value = "";
       
            document.querySelectorAll('.articulo').forEach(prenda =>{
    
                prenda.textContent.toLowerCase().includes(saleitem.target.value.toLowerCase())
                ?prenda.classList.remove('filtro')
                :prenda.classList.add('filtro')
            })
        }
    })
 
    
    
return (
    <>
<div id="Catalogo">
        <div className="title">
        <motion.div initial={{x:-40}} animate={{ x: 0 }} transition={{ type: "spring", stiffness: 100}}>
            <h2>Cátalogo</h2>
        </motion.div>
        </div>

        <div className="input">
            <input type="text" name="buscador" id="buscador" placeholder="Búsqueda.."/>
        </div>


        <div className="Catalogo-section listaArticulos">

                     <Sales uripath={"catalogo"}/>
                    <Modals/>
                     <BuyModals/>

         </div>
    </div>


    <Footer/>
    
    </>
    )
}
export default Catalogo;