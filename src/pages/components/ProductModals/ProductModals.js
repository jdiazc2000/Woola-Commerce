

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const ProductModals= ({id,tipo,marca,imagen,preciooferta,genero,colores,descripción,precio,stock}) => {

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
          
      <Carousel showStatus={false} showArrows={false} showIndicators={false} >
                <div>
                    <img src={imagen.img1} loading="lazy" alt={`ProductImg1_${id}`} />
                </div>
                <div>
                    <img src={imagen.img2} loading="lazy" alt={`ProductImg2_${id}`} />
                </div>
                <div>
                    <img src={imagen.img3} loading="lazy" alt={`ProductImg3_${id}`} />
                </div>
      </Carousel>

      <div className="Attributes">
          <p>Colores: <b>{colores.color1}, {colores.color2}, {colores.color3}</b></p> 
          <p>Género: {genero}</p>
          <p>Tipo: {descripción}</p>
          <p>Precio: {preciooferta ?  `$${preciooferta}` : `$${precio}`}</p>
          <p>Stock disponible: {stock}</p>
      </div>
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

