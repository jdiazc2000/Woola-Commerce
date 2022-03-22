import Portada1 from "../imgs/Carousel-imgs/Portada1.jpg";
import Portada2 from "../imgs/Carousel-imgs/Portada2.jpg";
import Portada3 from "../imgs/Carousel-imgs/Portada3.jpg";


const Carousel = () => {
  return (
    <div id="carouselExampleControls" className="carousel slide carousel-fade" data-interval="true " data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active" data-bs-interval="2500">
        <img src={Portada1} className="d-block w-100" alt="..." />
      </div>
      <div className="carousel-item" data-bs-interval="2500">
        <img src={Portada2} className="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item" data-bs-interval="2500">
        <img src={Portada3} className="d-block w-100" alt="..."/>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  );
};

export default Carousel;
