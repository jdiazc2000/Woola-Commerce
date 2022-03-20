const ProductBuy= ({id,tipo,marca,imagen,color1,color2,color3,stock}) => {

    return(
        <>
  <div className="modal fade hide" id={`exampleModalBuy${id}`} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
          <p>Colores: {color1} {color2} {color3}</p>
          <p>Stock: <span><b>{stock}</b></span></p>
      </div>
      <div className="modal-footer">
      <button type="button" className="btn btn-secondary mr-auto">Procesar Compra</button>
      </div>
    </div>
  </div>
</div>
        </>
    )
}

export default ProductBuy