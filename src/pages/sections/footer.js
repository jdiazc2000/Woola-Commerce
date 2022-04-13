import "../../styles/styles-footer.scss"
import { NavLink} from "react-router-dom";


const Footer = () => {

    const scrollToTop = () =>{
        window.scrollTo({
          top: 0, 
          behavior: 'smooth'
        });
      };

    return (
<>

<footer className="footer-distributed">

<div className="footer-right">

    <a href="#/"><i className="fa fa-facebook" title="facebook-link"></i></a>
    <a href="#/"><i className="fa fa-twitter" title="twitter-link"></i></a>
    <a href="#/"><i className="fa fa-instagram" title="instagram-link"></i></a>
    <a href="#/"><i className="fa fa-whatsapp" title="whatsapp-link"></i></a>

</div>

<div className="footer-left">

    <p className="footer-links">

        <NavLink to="/" path="true" onClick={scrollToTop}>Inicio</NavLink> -

        <NavLink to="/aboutus" path="true" onClick={scrollToTop} >Sobre nosotros</NavLink> -
        
        <NavLink to="/catalogo" path="true" onClick={scrollToTop}>Catálogo</NavLink>

    </p>

    <p> WOOLA COMMERCE &copy; TODOS LOS DERECHOS RESERVADOS</p>
</div>

</footer>
</>
)

}

export default Footer