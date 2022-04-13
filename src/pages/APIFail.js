import Brain from "../pages/imgs/Brain.png"
import "../styles/styles-apifail.scss"

const ApiFail = () => {
    return (
        <>
            <div id="APIFAIL_DIV">
                <h1>API NO DISPONIBLE :(</h1>
                <p>El servicio de API al ser gratuito no se encuentra disponible en estos momentos.</p>
                <p>Por favor inténtelo de nuevo más tarde.</p>
                <img src={Brain} alt="Brain_Ilustratión" />
            </div>
        </>
    )
}

export default ApiFail
