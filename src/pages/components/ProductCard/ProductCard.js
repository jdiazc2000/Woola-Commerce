
import { motion } from "framer-motion"

const Product = ({ id, tipo, marca, imagen, stock, precio, preciooferta }) => {

    return (
        <>
            <motion.div className="Motion_div" initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 100, duration: 5 }} >
                <div className="Catalogo-section listaArticulos">
                    <div className="sale-item articulo" >
                        <div className="sale">
                            <img src={imagen} alt="prenda" />
                            <div className="info">
                                <h2>{tipo} {marca}</h2>
                                <h4>{preciooferta ? `$${preciooferta}` : ''}  <span className="oferta"> {preciooferta ? `$${precio}` : <p className="PrecioNormal">${precio}</p>}</span></h4>
                            </div>
                            {stock === 0 ? <h3 style={{ paddingTop: "10px" }}>Sin stock</h3> : <label htmlFor="btn-modal" data-bs-toggle="modal" data-bs-target={`#exampleModa${id}`}>Comprar</label>}
                        </div>
                    </div>
                </div>
            </motion.div>

        </>
    )
}

export default Product