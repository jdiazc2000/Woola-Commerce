import { useState } from "react";

const Product= ({id,tipo,marca,imagen,stock,precio,preciooferta}) => {

    return(
    <>
    <div className="sale-item">
            <div className="sale" data-aos="zoom-in" data-aos-duration="1000">
                <img src={imagen} alt="prenda"/>
                <div className="info">
                    <h2>{tipo} {marca}</h2>
                    <p>{preciooferta ?  `$${preciooferta}` : ''}  <span className="oferta"> {preciooferta ?  `$${precio}` : <p className="PrecioNormal">${precio}</p>}</span></p>
                </div>
        {stock === 0 ? <h3 style={{paddingTop: "10px"}}>Sin stock</h3>  : <label htmlFor="btn-modal" data-bs-toggle="modal" data-bs-target={`#exampleModa${id}`}>Comprar</label> }
            </div>
    </div>


    </>
)
}

export default Product