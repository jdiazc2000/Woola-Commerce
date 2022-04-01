import "../../../styles/styles-catalogo.scss"


const ProductBuy = ({ id, tipo, marca, imagen, color1, color2, color3, stock,talla }) => {

  return (
    <>
      <div className="modal fade hide" id={`exampleModalBuy${id}`} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">

            <h1 className="modal-title" id={`exampleModalLabel-buy${id}`}>
              <div className="buy-title-form">
                    <p><b>Formulario de compra</b></p>
                <div>
                    <span><img src="https://img.icons8.com/color/36/000000/visa.png" alt="visa-png"/></span> 
                    <span><img src="https://img.icons8.com/color/36/000000/mastercard.png" alt="mastercard-png"/></span>
                </div>
              </div>
            </h1>

            </div>
            <div className="modal-body">

            <div className="buy-title">
                  <h4>{tipo} {marca}</h4>
            </div>

              <div className="modal-img">
                <img src={imagen} alt="product-img" />
              </div>


              <form>
                <div className="Comboboxes">

                <label htmlFor="colors">Color:</label>
                  <select name="colors" id={`colors-buy-form${id}`} title="color-form">
                    <option>{color1}</option>
                    <option>{color2}</option>
                    <option>{color3}</option>
                  </select>

                <label htmlFor="tallas">Talla:</label>
                  <select name="tallas" id={`tallas-buy-form${id}`} title="talla-form">
                    <option>{talla}</option>
                  </select>

                <label htmlFor="amount">Cantidad:</label>
                  <input type="number" defaultValue="1" min="1" max={stock} title="stock-buy" />
                </div>

                <div className="name-last">
                  <p>Datos del titular:</p>
                  <input type="text" name="nomb-apell" id={`name-lastname-form-buy${id}`} placeholder="Nombre y apellido" />
                </div>

                <div className="creditcard-info">

                  <p>Datos de tarjeta:</p>
                  <input type="text" name="creditcard-number" id={`creditcard-number-form-buy${id}`} placeholder="0000 0000 0000 0000" />

                  <div className="expi-ccv">
                    <input type="text" name="creditcard-expdate" id={`creditcard-expdate-form-buy${id}`} placeholder="Exp: 00/00" />
                    <input type="text" name="creditcard-ccv" id={`creditcard-ccv-form-buy${id}`} placeholder="CCV" />
                  </div>

                  <div className="email">
                    <p>Correo electrónico</p>
                    <input type="text" name="email" id={`email-form-buy${id}`} placeholder="Correo" />
                  </div>

                  <div className="direction">
                    <p>Dirección</p>
                    <input type="text" name="direction" id={`direction-form-buy${id}`} placeholder="Dirección" />
                  </div>
                </div>
              </form>


            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary mr-auto">Procesar Compra</button>
              <button type="button" className="btn btn-secondary mr-auto"  data-bs-dismiss="modal" >Volver</button>
            </div> 
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductBuy