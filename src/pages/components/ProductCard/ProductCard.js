const Product= ({id,tipo,marca,imagen,precio}) => {

    return(
    <>
    <div className="sale-item">
            <div className="sale" data-aos="zoom-in" data-aos-duration="1000">
                <img src={imagen} alt="prenda"/>
                <div className="info">
                    <h2>{tipo} {marca}</h2>
                    <p>${precio}</p>
                </div>
            <label htmlFor="btn-modal" data-bs-toggle="modal" data-bs-target={`#exampleModa${id}`}>Comprar</label>               
            </div>
    </div>
    </>
)
}

export default Product