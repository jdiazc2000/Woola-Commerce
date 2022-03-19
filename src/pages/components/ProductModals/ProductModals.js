const ProductModals= ({id,tipo,marca,imagen,color1,color2,color3,genero,descripción,precio,stock}) => {

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
          <h2>Genero: <b>{genero}</b></h2>
          <p>Colores: {color1} {color2} {color3}</p>
          <p><b>{descripción}</b></p>
          <p>Precio: $<b>{precio}</b></p>
      </div>
      <div className="modal-footer">
      <button type="button" className="btn btn-secondary mr-auto">Comprar</button>
      </div>
    </div>
  </div>
</div>
        </>
    )
}

export default ProductModals

