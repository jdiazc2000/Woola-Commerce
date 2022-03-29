import "../../styles/styles-footer.scss"

const Footer = () => {

    return (
<footer className="footer-distributed">

<div className="footer-right">

    <a href="#/"><i className="fa fa-facebook"></i></a>
    <a href="#/"><i className="fa fa-twitter"></i></a>
    <a href="#/"><i className="fa fa-instagram"></i></a>
    <a href="#/"><i className="fa fa-map"></i></a>

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