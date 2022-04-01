import "../../styles/styles-footer.scss"

const Footer = () => {

    return (
<footer className="footer-distributed">

<div className="footer-right">

    <a href="#/"><i className="fa fa-facebook" title="facebook-link"></i></a>
    <a href="#/"><i className="fa fa-twitter" title="twitter-link"></i></a>
    <a href="#/"><i className="fa fa-instagram" title="instagram-link"></i></a>
    <a href="#/"><i className="fa fa-map" title="map-link"></i></a>

</div>

<div className="footer-left">

    <p className="footer-links">
        <a className="link-1" href="#/">Inicio</a> -

        <a href="#/">Sobre nosotros</a> -

        <a href="#/">Catálogo</a>

    </p>

    <p> WOOLA COMMERCE &copy; TODOS LOS DERECHOS RESERVADOS</p>
</div>

</footer>
)

}

export default Footer