import "../../styles/styles-footer.scss"


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
        <a href="/" onClick={scrollToTop}>Inicio</a> -

        <a href="/aboutus" onClick={scrollToTop} >Sobre nosotros</a> -

        <a href="/catalogo" onClick={scrollToTop}>Catálogo</a>

    </p>

    <p> WOOLA COMMERCE &copy; TODOS LOS DERECHOS RESERVADOS</p>
</div>

</footer>
</>
)

}

export default Footer