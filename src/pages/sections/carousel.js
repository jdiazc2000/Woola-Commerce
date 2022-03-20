import portada from "../imgs/Online report_Monochromatic.svg";

const Carousel = () => {
  return (
    <div id="carouselExampleControls" className="carousel slide carousel-fade" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={portada} className="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src="https://static.mercadonegro.pe/wp-content/uploads/2021/08/26202648/ptv-app-1660x940-1.jpg" className="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src="https://sm.ign.com/t/ign_latam/news/p/pokemon-th/pokemon-the-movie-secrets-of-the-jungle-coming-to-netflix-ne_c3kp.h960.jpg" className="d-block w-100" alt="..."/>
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
