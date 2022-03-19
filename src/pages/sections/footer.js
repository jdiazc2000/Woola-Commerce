import "../../styles/styles-footer.scss"
import ubication from "../imgs/Ubication.svg"
import message from "../imgs/Message.svg"

const Footer = () => {

    return (
<footer>
    <div className="ubication">
        <img src={ubication} alt="ubication"/>
        <div className="info">
        <b>
            <p>CEL: (51) 997621217</p>
            <p>DIR: Av. la Marina 2000</p>
        </b>
         </div>
    </div>

    <div className="contact">
        <img src={message} alt="ubication"/>
        <div className="info">
            <b>
            <p>(IG) : WOOLACOMMERCE_PE</p>
            <p>(FB) : WOOLACOMMERCE_PE</p>
            </b>
         </div>
    </div>

    <div className="copy">
        <h2>WOOLA COMMERCE © TODOS LOS DERECHOS RESERVADOS</h2>
    </div>
</footer>
)

}

export default Footer