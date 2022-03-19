import "../styles/styles-home.scss"
import Sales from "./sections/sales"
import portada from "./imgs/Online report_Monochromatic.svg"
import Footer from "./sections/footer"
import Modals from "./sections/modals"
const Home = () => {

    return (
    <>

    <div id="Portada"> 
        <div className="port-info">
            <img src={portada} alt="svg-portada"/>
        </div>
    </div>
     
    <Sales/>
    <Modals />
    <Footer/>
    </>
    )
}
export default Home;