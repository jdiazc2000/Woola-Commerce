const ProductModals= ({id,tipo,marca,imagen,preciooferta,color1,color2,color3,genero,descripción,precio,stock}) => {

    return(
        <>
  <div className="modal fade hide" id={`exampleModa${id}`} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title" id="exampleModalLabel">{tipo} {marca}</h1>
        <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
          <img src={imagen} alt="product-img"/>
          <h2>Género: <span><b>{genero}</b></span></h2>
          <p>Colores: {color1} {color2} {color3}</p>
          <p><span><b>{descripción}</b></span></p>
          <p>Precio: <span><b>{preciooferta ?  `$${preciooferta}` : `$${precio}`}</b></span></p>
          <p>Stock: <span><b>{stock}</b></span></p>
      </div>
      <div className="modal-footer">
      <button type="button" className="btn btn-secondary mr-auto" data-bs-toggle="modal" data-bs-target={`#exampleModalBuy${id}`}>Comprar</button>
      </div>
    </div>
  </div>
</div>
        </>
    )
}

export default ProductModals

