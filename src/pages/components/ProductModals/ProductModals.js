

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const ProductModals = ({ id, tipo, marca, imagen, preciooferta, genero, colores, descripción, precio, stock }) => {

  return (
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
                  <img src={imagen.img1} alt={`ProductImg1_${id}`} />
                </div>
                <div>
                  <img src={imagen.img2} alt={`ProductImg2_${id}`} />
                </div>
                <div>
                  <img src={imagen.img3} alt={`ProductImg3_${id}`} />
                </div>
              </Carousel>

              <div className="Attributes">

                <details>
                  <summary>
                    <span className="summary-title">Colores</span>
                    <div className="summary-chevron-up">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </div>
                  </summary>

                  <div className="summary-content"> <b>{colores.color1}, {colores.color2}, {colores.color3}</b></div>
                  <div className="summary-chevron-down">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-up"><polyline points="18 15 12 9 6 15"></polyline></svg>
                  </div>
                </details>


                <details>
                  <summary>
                    <span className="summary-title">Género</span>
                    <div className="summary-chevron-up">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </div>
                  </summary>

                  <div className="summary-content"><b>{genero}</b></div>
                  <div className="summary-chevron-down">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-up"><polyline points="18 15 12 9 6 15"></polyline></svg>
                  </div>
                </details>

                
                <details>
                  <summary>
                    <span className="summary-title">Descripción</span>
                    <div className="summary-chevron-up">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </div>
                  </summary>

                  <div className="summary-content"><b>{descripción}</b></div>
                  <div className="summary-chevron-down">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-up"><polyline points="18 15 12 9 6 15"></polyline></svg>
                  </div>
                </details>

                <details>
                  <summary>
                    <span className="summary-title">Stock disponible</span>
                    <div className="summary-chevron-up">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </div>
                  </summary>

                  <div className="summary-content"><b>{stock}</b></div>
                  <div className="summary-chevron-down">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-up"><polyline points="18 15 12 9 6 15"></polyline></svg>
                  </div>
                </details>   

                <p>{preciooferta ? `Precio en Oferta: $${preciooferta}` : `Precio: $${precio}`}</p>
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

