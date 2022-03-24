
import Sales from "./sections/sales"
import Modals from "./sections/modals"
import BuyModals from "./sections/modalsbuy"
import Footer from "./sections/footer"

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
            <h2>Cátalogo</h2>
        </div>
        <div className="input">
            <input type="text" name="buscador" id="buscador" placeholder="Busqueda"/>
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