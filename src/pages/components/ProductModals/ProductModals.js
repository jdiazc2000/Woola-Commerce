

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const ProductModals= ({id,tipo,marca,imagen,preciooferta,genero,colores,descripción,precio,stock,talla}) => {

    return(
        <>
  <div className="modal fade hide" id={`exampleModa${id}`} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title" id={`exampleModalLabel${id}`}>{tipo} {marca}</h1>
        <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
          
      <Carousel showStatus={false} showArrows={false} showIndicators={false}>
                <div>
                    <img src={imagen.img1} alt={`ProductImg1_${id}`} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={imagen.img2}  alt={`ProductImg2_${id}`} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={imagen.img3} alt={`ProductImg3_${id}`} />
                </div>
      </Carousel>

          <p>Colores: <b>{colores.color1},{colores.color2},{colores.color3}</b></p> 
          <p>Género: <span><b>{genero}</b></span></p>
          <p>Talla: <b>{talla}</b></p>
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

